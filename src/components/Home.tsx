import { Card } from "react-bootstrap"
import logo from '../assets/images/pngegg (2).png';
import React, { useState, useEffect } from 'react';
import axios from "axios";

interface Animal {
    id: number;
    name: string;
    description: string;
    lastFedTime: string;
}

export const Home = () => {
    const [animals, setAnimals] = useState<Animal[]>([]);

    useEffect(() => {
        const fetchAnimals = async () => {
            const response = await axios.get('https://animals.azurewebsites.net/api/animals');
            setAnimals(response.data);
        };

        fetchAnimals();
    }, []);

    return (
        <div>
            <h1>Animals</h1>
            {animals.map((animal) => (
                <div key={animal.id}>
                    <h2>{animal.name}</h2>
                    <p>{animal.description}</p>
                    <a href={`/animal/${animal.id}`}>Läs mer</a>
                </div>
            ))}
        </div>
    )
}