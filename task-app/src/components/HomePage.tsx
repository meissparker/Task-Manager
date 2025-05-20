import { Col, Container } from "react-bootstrap";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import NavBar from "./NavBar";
import PageLayout from "./PageLayout";

const HomePage: React.FC = () => {
    return (
        <PageLayout>
            <Col>
            <NavBar/>
            <h1>Welcome to the Task Management App!</h1>
            <LoginButton/>
            </Col>
        </PageLayout>
    );
};

export default HomePage;