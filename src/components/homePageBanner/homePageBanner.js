import React from "react";

// //Styling
import "./homePageBanner.css";

// Bootstrap
import { Col, Container, Image, Row } from "react-bootstrap";

export default function HomePageBanner() {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col id="bannerCol">
                        <Image 
                            fluid
                            src="./Images/banner.jpg"
                            alt="Home banner"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};