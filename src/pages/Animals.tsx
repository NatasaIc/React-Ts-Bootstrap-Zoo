import { Col, Row } from 'react-bootstrap';
import { AnimalList } from '../components/AnimalList';
import animalList from '../data/item.json';

const Animals = () => {
  return (
    <>
    <h1>Djur</h1>
    <Row md={2} xs={1} lg={3} className='g-3'>
        {animalList.map(item => (
            <Col key={item.id}>
                <AnimalList {...item} />
            </Col>
        ))}
    </Row>
    </>
  )
}

export default Animals
