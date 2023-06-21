import React from "react";

// Bootstrap
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

// Components
// import ContactContent from "../components/contactContent/contactContent";

export default function Contact() {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} lg={6}>
                        {/* <ContactContent /> */}
                    </Col>
                    <Col xs={12} lg={6}>
                        The calendar of events will go here.
                    </Col>
                </Row>
            </Container>
        </div>
    );
};