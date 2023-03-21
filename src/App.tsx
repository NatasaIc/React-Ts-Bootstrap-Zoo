import { Outlet} from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';


function App() {
  return (
    <>
        <Container className='mb-4' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <main>
            <Outlet></Outlet>
          </main>
        </Container>
    </>
  );
}

export default App;