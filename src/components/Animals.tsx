import { useEffect, useState } from  'react';
import { IAnimalSmall } from "../models/IAnimalSmall";
import { getAnimals } from "../services/animalServices";
import { Animal } from "./Animal";


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
        <Animal 
            animal={animal} 
            key={animal.id}
        ></Animal>
        
    );
});

return <>{animalsHtml}</>
};