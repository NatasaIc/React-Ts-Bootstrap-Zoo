import React, { useState, useEffect } from 'react';
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
        <div>
            {animals.map(animal => (
                <div key={animal.id}>
                    <img src={animal.imageUrl} alt={animal.name}/>
                    <h2>{animal.name}</h2>
                    <p>{animal.shortDescription}</p>
                    <Link to={`/animalDetails/${animal.id}`}>Läss mer</Link>
                </div>
            ))}
        </div>
    );
};