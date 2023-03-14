import { useEffect, useReducer, useState } from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap";
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
                    <Card className="h-100" 
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: "300px", marginTop: '100px'}}>
                        <Card.Img src={animal?.imageUrl} alt={animal?.name} 
                             height="200px" 
                             style={{ objectFit: "cover" }} />
                        <Card.Body>
                            <Card.Title>
                                 <span>{animal?.name}</span>
                            </Card.Title>
                                <div className="mt-auto">
                                    <p>{animal?.shortDescription}</p>
                                </div>
                                <p>{animal?.isFed}</p>
                                <p>{animal?.lastFed}</p>
                                <Button variant="success">Mata mig</Button>
                                <Button variant="danger">Matad</Button>
                        </Card.Body>
                    </Card>
                </>
            )}
        </>
    )
}