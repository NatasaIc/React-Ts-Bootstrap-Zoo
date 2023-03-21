import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface Animal {
  id: number;
  name: string;
  shortDescription: string;
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
      <div>
      <h2>{animal.name}</h2>
      <img src={animal.imageUrl} alt={animal.name}/>
      <p>{animal.shortDescription}</p>
      {animal.isFed ? (
        <p>Senast matad: {animal.lastFed}</p>
      ) : (
        <button onClick={feedAnimal}>Mata djuret!</button>
      )}
    </div>
  );
};
