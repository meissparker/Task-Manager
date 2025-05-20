import { Col, Container } from "react-bootstrap";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import NavBar from "./NavBar";

const HomePage: React.FC = () => {
    return (
        <Container>
            <Col>
            <NavBar/>
            <h1>Welcome to the Task Management App!</h1>
            <LoginButton/>
            </Col>
        </Container>
    );
};

export default HomePage;