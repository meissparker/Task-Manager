import { Col, Container, Row } from "react-bootstrap";
import NavBar from "./NavBar";


type PageLayoutProps = {
    children?: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({children}) => {
    return (
        <Container>
            <Row>
                <Col>
                    <NavBar/>     
                </Col>
            </Row>

            <Row>
                <Col>
                    {children}
                </Col>
            </Row>
        </Container>
    );
};

export default PageLayout;