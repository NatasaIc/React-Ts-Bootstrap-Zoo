import { Outlet} from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Navbar } from './components/Navbar';


function App() {
  return (
    <>
      <Navbar />
        <Container className='mb-4' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <main>
            <Outlet></Outlet>
          </main>
        </Container>
    </>
  );
}

export default App;