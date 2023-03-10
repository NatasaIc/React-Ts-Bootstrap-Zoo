import { Button, Card } from "react-bootstrap";
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
            <Card className="h-100" style={{ widows: "200px" }}>
                <Card.Img 
                variant="top"
                src={props.animal.imageUrl} height="500px" 
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