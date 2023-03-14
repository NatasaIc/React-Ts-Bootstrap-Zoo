import { Card } from "react-bootstrap"
import logo from '../assets/images/pngegg (2).png';

export const Home = () => {
    return (
        <>
            <Card style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: 'none', marginTop: '100px', padding: '100px' }}>
                <Card.Img variant="top" src={logo} alt="dog in a tub" />
                <Card.Body>
                    <Card.Title>
                        Mata mig!
                    </Card.Title>
                    <Card.Text>
                    Det är viktigt att du som kund känner dig trygg när du handlar hos oss. 
                    Genom rätt kunskap och bra service kan du lita på att du får det du förväntar dig av oss. 
                    Du är alltid varmt välkommen att kontakta vår 
                    kunniga kundservice om du har frågor eller behöver rådgivning
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}