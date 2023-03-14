import { Button, Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { IAnimalSmall } from "../models/IAnimalSmall"

interface IAnimalProps {
    animal: IAnimalSmall;
}

export const Animal = (props: IAnimalProps) => {
    const navigate = useNavigate();

    const showMoreInfo = () => {
        navigate(`/animal/${props.animal.id}`);
    };
 

    return (
        <>
            <Card className="h-100" style={{ width: "300px" }}>
                <Card.Img 
                variant="top"
                src={props.animal.imageUrl} height="200px" 
                style={{ objectFit: "cover" }} />
                <Card.Body>
                    <Card.Title>
                        <span>{props.animal.name}</span>
                    </Card.Title>
                        <div className="mt-auto">
                            <p>{props.animal.shortDescription}</p>
                        </div>
                    <Button variant="outline-info" onClick={showMoreInfo} className="w-30">
                        Läs mer
                    </Button>
                </Card.Body>
            </Card>
        </>
    )
}
