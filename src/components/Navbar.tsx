import { Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
    <NavbarBs sticky='top' className='bg-white shadow-sm mb-3'>
        <Container>
            <Nav>
             <Nav.Link to='/animals' as={NavLink}>
                Hälsa på våra djur
             </Nav.Link>
            </Nav>
        </Container>
    </NavbarBs>
    )
}