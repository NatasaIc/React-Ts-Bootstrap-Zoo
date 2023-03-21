import { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

interface Animal {
  id: number;
  name: string;
  latinName: string;
  longDescription: string;
  imageUrl: string;
  lastFed: string;
  isFed: boolean;
}

interface Params {
  id: string;
}

export const AnimalDetails = () => {
    const [animal, setAnimal] = useState<Animal>();
    const { id } = useParams();

    const feedAnimal = () => {
      const updateAnimal = {
        ...animal!,
        isFed: true,
        lastFed: new Date().toISOString(),
      };
      setAnimal(updateAnimal);
      localStorage.setItem(`animalDetails-${id}`, JSON.stringify(updateAnimal));
    }

    useEffect(() => {
        const animalsFromLocalStorage = localStorage.getItem(`animalDetails-${id}`);
        if(animalsFromLocalStorage) {
          setAnimal(JSON.parse(animalsFromLocalStorage));
        } else {
          const fetchAnimal = async () => {
            const response = await fetch(`https://animals.azurewebsites.net/api/animals/${id}`);
            const data = await response.json();
            const initialAnimal: Animal = {...data, isFed: false};
            localStorage.setItem(`animalDetails-${id}`, JSON.stringify(initialAnimal));
            setAnimal(initialAnimal);
          };
          fetchAnimal();
        }
    }, [id]);

    if(!animal) {
      return <div>Laddar...</div>
    }
    

    return (
      <div style={{ marginTop: '100px' }}>
      <Card>
      <Card.Body className="d-flex flex-column justify-content-center">
      <Card.Img src={animal.imageUrl} alt={animal.name}/>
      <Card.Title className="d-flex align-items-center mb-4" style={{ marginTop: '10px' }}>
      {animal.latinName}</Card.Title>
      <Card.Text>{animal.longDescription}</Card.Text>
      {animal.isFed ? (
        <>
        <p>Senast matad: {animal.lastFed}</p>
        {new Date(animal.lastFed).getTime() + 3 * 60 * 60 * 1000 < Date.now() ? (
          <p>Mata djuret!</p>
        ) : (
          <button disabled>Redan matad</button>
        )}
         <p>Laddar...</p>
        </>
      ) : (
        <Button onClick={feedAnimal} variant='success' className="w-100">
        Mata {animal.name}!</Button>
      )}
      </Card.Body>
    </Card>
    </div>
  );
};
