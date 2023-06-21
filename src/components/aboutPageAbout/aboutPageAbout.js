import React from "react";

//Styling
import "./aboutPageAbout.css";

// Bootstrap
import { Col, Container, Image, Row } from "react-bootstrap";

// Components
import Biography from "./biography";
import Mindfulness from "./mindfulness";
import Certifications from "./certifications";

export default function AboutMe() {
    return (
        <div>
            <h1 id="myStoryHeader" className="centerText">
                My Story
            </h1>
            <Container fluid>
                <Row>
                    <Col xs={12} md={12} lg={6} className="colNoPadding">
                        <Image 
                            fluid
                            src={require('./my-story.JPG')}
                            alt='Picture of Ryan'
                        />
                    </Col>
                    <Col xs={12} md={12} lg={6}>
                        <Biography />
                        <Mindfulness />
                        <Certifications />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};