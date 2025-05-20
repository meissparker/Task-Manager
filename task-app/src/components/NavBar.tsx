import { Nav, Navbar, Container } from 'react-bootstrap';
import {useAuth0} from "@auth0/auth0-react";
import { NavLink } from 'react-router-dom'
import NavBarButtons from './NavBarButtons'


const NavBar: React.FC = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <Navbar bg="light" expand="lg" variant="light" className="shadow-sm mb-3">
            <Container>
                <Navbar.Brand as={NavLink} to="/" className="fw-bold">Task Manager</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">

                    <Nav className="me-auto">
                    {isAuthenticated && (
                    <>
                        <Nav.Link as={NavLink} to="/tasks">View Tasks</Nav.Link>
                        <Nav.Link as={NavLink} to="/addtasks">Add a Task</Nav.Link>
                        
                    </>
                    )}

                    </Nav>
                        
                    <Nav className="ms-auto">
                        <NavBarButtons/>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
};

export default NavBar;