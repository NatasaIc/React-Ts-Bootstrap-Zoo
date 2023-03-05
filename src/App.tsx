import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Animals from './pages/Animals';
import { Navbar } from './components/Navbar';
import AnimalDetails from './pages/AnimalDetails';




function App() {
  return (
    <>
      <Navbar />
        <Container className='mb-4'>
          <Routes>
            <Route path='/' element={<Animals />}/>
            <Route path='/AnimalDetails/:id' element={<AnimalDetails />}/>
          </Routes>
        </Container>
    </>
  );
}

export default App;
