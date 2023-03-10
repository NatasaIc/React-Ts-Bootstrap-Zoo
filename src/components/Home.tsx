import { Card } from "react-bootstrap"

export const Home = () => {
    return (
        <>
            <Card style={{  }}>
                <Card.Img variant="top" src="../images/E1D_2438-1200x801.jpg" />
                <Card.Body>
                    <Card.Title>
                        Feed Me!
                    </Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Tenetur, magni minima nobis 
                        quae laudantium consectetur eius aspernatur nihil,
                        obcaecati iusto perspiciatis repudiandae 
                        provident eveniet totam. 
                        Quaerat iusto ducimus eaque ratione.
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}