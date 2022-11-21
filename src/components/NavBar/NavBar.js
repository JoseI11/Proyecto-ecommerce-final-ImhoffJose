import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cardwidget from '../CartWidget/CardWidget';
const navigationBar = () => {
    return (
        <Navbar expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Computer supplies & solutions</Navbar.Brand>
                <img src={'./images/iconoLogo.png'} alt="Logo" />
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Accesorios</Nav.Link>
                        <Nav.Link href="#action2">Gabinetes</Nav.Link>
                        <NavDropdown title="Componentes" id="navbarScrollingDropdown">

                            <NavDropdown.Item href="#action4">
                                SSD's
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Memorias
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action6">
                                Discos rigidos
                            </NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                    <Cardwidget />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default navigationBar