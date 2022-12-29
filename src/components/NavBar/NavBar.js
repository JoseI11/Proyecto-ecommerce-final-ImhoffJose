
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import CartWidget from '../CartWidget/CartWidget';

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

import './NavBar.css';
const NavigationBar = () => {

    const {getCantidad} = useContext(CartContext);
    const cantidadTotal = getCantidad();
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

                    <Nav.Link  as={Link } to='/category/Procesadores'>Procesadores</Nav.Link> 
                        <Nav.Link as={Link} to='/category/SSD'>SSD</Nav.Link>
                        <Nav.Link as={Link} to='/category/MemRam'>Memorias</Nav.Link>
                        

                    </Nav>
                 
                    <CartWidget valor={cantidadTotal} />


                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar