import axios from "axios";
import { IAnimal } from "../models/IAnimal";
import { IAnimalSmall } from "../models/IAnimalSmall";

export const getAnimals = async () => {
    let response = await axios.get<IAnimalSmall[]>(
        "https://animals.azurewebsites.net/api/animals"
    );

    return response.data;
    };

    export const getAnimalById = async (id: number) => {
        try{
            let response = await axios.get<IAnimal>(
                 "https://animals.azurewebsites.net/api/animals" + id
            );
            return { animal: response.data, error: "" };
        } catch {
            return { error: "Något har gått fel"};
        }
    };