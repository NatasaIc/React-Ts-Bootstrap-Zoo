import { Card, Button } from 'react-bootstrap';
import { useNavigate } from  'react-router-dom';

interface AnimalListProps {
    id: number,
    name: string,
    imageUrl: string,
    shortDescription: string,
}

export function AnimalList({ id, name, imageUrl, shortDescription }: AnimalListProps) {
    const navigate = useNavigate();

    const showMoreInfo = () => {
        navigate(`/animalDetails${id}`)
    }
return (
    <Card className='h-100'>
        <Card.Img 
        variant='top' 
        src={imageUrl} height='200px'  
        style={{ objectFit: 'cover'}}
        />
        <Card.Body className='d-flex flex-column'>

            <Card.Title className='d-flex 
            justify-content-between align-items-baseline
            mb-4'>
                <span>{name}</span>
                <Button variant='outline-info'
                onClick={showMoreInfo} 
                className='w-30'>
                Läs mer</Button>
            </Card.Title>
            <div className='mt-auto'>
                <span>{shortDescription}</span>
            </div>
        </Card.Body>
    </Card>
)
}