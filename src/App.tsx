import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Navbar } from './components/Navbar';


function App() {
  return (
    <>
      <Navbar />
        <Container className='mb-4'>
          <main>
            <Outlet></Outlet>
          </main>
        </Container>
    </>
  );
}

export default App;