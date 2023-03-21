import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";

export interface Animal {
    id: number;
    name: string;
    shortDescription: string;
    imageUrl: string;
}

export const Home: React.FC = () => {
    const [animals, setAnimals] = useState<Animal[]>([]);

    useEffect(() => {
        const fetchAnimals = async () => {
            const response = await fetch('https://animals.azurewebsites.net/api/animals');
            const data = await response.json();

            localStorage.setItem("animals", JSON.stringify(data));
            setAnimals(data);
        };
        const animalsFromLocalStorage = localStorage.getItem("animals");
        if(animalsFromLocalStorage){
            setAnimals(JSON.parse(animalsFromLocalStorage));
        } else {
            fetchAnimals();
        }
    }, []);

    return (
      <>
      <h1>Våra djur</h1>
        <Row md={2} xs={1} lg={3} className='d-flex justify-content-center g-3'>
            {animals.map(animal => (
                <Card key={animal.id} className="h-200" style={{ padding: '0', gap: '.5rem' }}>
                    <Card.Img variant='top' height='200px' style={{ objectFit: 'cover' }} 
                    src={animal.imageUrl} alt={animal.name}/>
                    <Card.Body className='d-flex flex-column justify-content-center'>
                    <Card.Title className="d-flex align-items-baseline mb-4">
                    {animal.name}</Card.Title>
                    <Card.Text>{animal.shortDescription}</Card.Text>
                    <Link to={`/animalDetails/${animal.id}`}>Läs mer</Link>
                    </Card.Body>
                </Card>
            ))}
        </Row>
     </>
    );
};