import { Navbar, Container, Nav } from 'react-bootstrap'
import './navBar.css'

function NavBar() {
    return (
        <div className=''>
            <div className="navbar">
                <Navbar bg="dark" variant="dark">
                    <Container className="container-nav">
                        <Nav className="me-auto">
                            <div className='home-btn'>
                                <Nav.Link href="/">Home</Nav.Link>
                            </div>
                            <div className='home-btn'>
                                <Nav.Link href="/cars">Search Car</Nav.Link>
                            </div>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
}

export default NavBar;