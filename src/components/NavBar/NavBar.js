
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cartwidget from '../CartWidget/CartWidget';
import ContadorIncremento from '../ItemCount/ItemCount';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';
const navigationBar = () => {
    
 
    return (
        <Navbar expand="lg">
            <Container fluid>
                <Navbar.Brand >Computer supplies & solutions</Navbar.Brand>
                <img src={'../images/iconoLogo.png'} alt="Logo" />
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        {/* <NavLink  as={NavLink } to='/category'  className={({isActive})=>isActive ? 'itemActivo':'itemnoActivo'}>Accesorios</NavLink>
                        <Nav.Link  as={NavLink } to='/category'>Gabinetes</Nav.Link> */}
                        <Nav.Link as={Link} to='/category/SSD'>SSD</Nav.Link>
                        <Nav.Link as={Link} to='/category/MemRam'>Memorias</Nav.Link>
                    

                    </Nav>
                    <Cartwidget valor={5}/>
             
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default navigationBar