import { Card, Button } from 'react-bootstrap';
import { useNavigate } from  'react-router-dom';
import { IAnimal } from '../models/IAnimal';


export interface AnimalListProps extends IAnimal {
   animal: IAnimal;
}

export function AnimalList(props: AnimalListProps){
    const navigate = useNavigate();

    const showMoreInfo = () => {
        navigate(`/animalDetails${props.animal.id}`) 
    }

    const feedMe = () => {

    }

    

return (
    <Card className='h-100'>
        <Card.Img 
        variant='top' 
        src={props.animal.imageUrl} height='200px'  
        style={{ objectFit: 'cover'}}
        />
        <Card.Body className='d-flex flex-column'>

            <Card.Title className='d-flex 
            justify-content-between align-items-baseline
            mb-4'>
                <span>{props.animal.name}</span>
                <Button variant='outline-info'
                onClick={showMoreInfo} 
                className='w-30'>
                Läs mer
                </Button>
            </Card.Title>
            <div className='mt-auto'>
                <span>{props.animal.shortDescription}</span>
            </div>
                <Button 
                variant='outline-info'
                onClick={feedMe} 
                className='w-30'>
                {props.animal.lastFed}
                Mata mig
                </Button>
        </Card.Body>
    </Card>
)
}