import { Outlet} from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';


function App() {
  return (
    <>
      <Container className='mb-4'>
            <Outlet></Outlet>
      </Container>
    </>
  );
}

export default App;