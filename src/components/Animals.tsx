import { Card, Button } from 'react-bootstrap';
import { useState, useEffect } from  'react';
import { IAnimalSmall } from '../models/IAnimalSmall';
import { getAnimals } from "../services/animalServices";

export function Animals(){
    const [animals, setAnimals] = useState<IAnimalSmall[]>([]);

    useEffect(() => {
        const getData = async () => {
            let animals = await getAnimals();

            setAnimals(animals);
        };
        if(animals.length > 0) return;

        getData();
    });
    
let animalHtml = animals.map((animal) => {
    return (
        <Animal
        
        >
        </Animal>
    )
})
}
