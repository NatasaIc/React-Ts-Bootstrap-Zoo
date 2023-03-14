import { useEffect, useState } from  'react';
import { Col, Row } from 'react-bootstrap';
import { IAnimalSmall } from "../models/IAnimalSmall";
import { getAnimals } from "../services/animalServices";
import { Animal } from "../components/Animal";


export const Animals = () => {
    const [animals, setAnimals] = useState<IAnimalSmall[]>([]);

    useEffect(() => {
        const getData = async () => {
            let animals = await getAnimals();

            setAnimals(animals);
        };

        if(animals.length > 0) return;

        getData();
    });
    
let animalsHtml = animals.map((animal) => {
    return (
        <>
        <Animal animal={animal} key={animal.id}></Animal>
        </>
    );
});

return <>{animalsHtml}</>
};