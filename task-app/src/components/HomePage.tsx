import { Col, Container } from "react-bootstrap";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import NavBar from "./NavBar";
import PageLayout from "./PageLayout";

const HomePage: React.FC = () => {
    return (
        <PageLayout>
            <Col>
            <h1>Welcome to the Task Management App!</h1>
            </Col>
        </PageLayout>
    );
};

export default HomePage;