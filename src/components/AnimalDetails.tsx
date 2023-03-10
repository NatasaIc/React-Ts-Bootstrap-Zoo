import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import { getAnimalById } from "../services/animalServices";

export const AnimalDetails = () => {
   const [animal, setAnimal] = useState<IAnimal>();
   const [error, setError] = useState("");

    const { id } = useParams();

   useEffect(() => {
    const getData = async () => {
        if(id) {
            let response = await getAnimalById(+id);

            if(response.animal) {
                setAnimal(response.animal);
            } else {
                setError(response.error);
            }
        }
    };

    if (animal) return;

    getData();
   });

   return (
        <>
            {error !== "" ? (
                <>
                    <h1>{error}</h1>
                </>
            ) : (

                <>
                    <img src={animal?.imageUrl} alt={animal?.name} />
                    <h3>{animal?.name}</h3>
                    <pre>{animal?.shortDescription}</pre>
                    <p>{animal?.isFed}</p>
                    <p>{animal?.lastFed}</p>
                    <button>Mata mig</button>
                </>
            )}
        </>
    )
}