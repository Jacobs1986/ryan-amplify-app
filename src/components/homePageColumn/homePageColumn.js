import React from "react";

//Styling
import "./homePageColumn.css";

// Bootstrap
import { Col, Container, Image, Row } from "react-bootstrap";

export default function HomePageColumn() {
    return (
        <div className='homeColumn'>
            <Container fluid>
                <Row>
                    <Col xs={12} md={6} id="homeColumnText">
                        <h2 className='homeColumnTitle'>
                            Yoga Retreats: Colorado, Dubai, Portugal
                        </h2>
                        <p id="homeColumnPara">
                            Taking time off of our busy lives to discover new places close to nature practicing yoga & mindfulness, connecting to our true selves…looking for that break or vacation to reset or transition into something new.
                        </p>
                    </Col>
                    <Col xs={12} md={6} id="columnImage">
                        <Image 
                            fluid
                            src={require('./retreat-duo.jpg')}
                            alt='Column images'
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};