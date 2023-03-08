import { Card } from "react-bootstrap";
import { IAnimalSmall } from "../models/IAnimalSmall"

interface IAnimalProps {
    animal: IAnimalSmall;
}

export const Animal = (props: IAnimalProps) => {


    return (
        <>
            <Card className="h-100">
                <Card.Img 
                variant="top"
                src={props.animal.imageUrl} height="200px"
                style={{ objectFit: "cover" }} />
                <Card.Body>
                    <Card.Title>
                        <span>{props.animal.name}</span>
                    </Card.Title>
                </Card.Body>
            </Card>
        </>
    )
}