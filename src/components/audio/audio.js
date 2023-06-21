import React from "react";

// CSS File
import "./audio.css";

// Bootstrap
import { Col, Container, Image, Row } from "react-bootstrap";

export default function Audio() {
    return (
        <div style={{ marginBottom: '5px' }}>
            <Container>
                <h1 className="centerText" id="audioTitle">
                    Guided Relaxation and Body Scan
                </h1>
                <Row>
                    <Col xs={12} md={6} style={{ padding: '0px' }}>
                        <Image
                            fluid
                            src={require('./meditation.jpg')}
                            alt='Meditation position'
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <p id="audioPara"> 
                            Just click below on the “play” button to hear my relaxation audio. Connecting our awareness with the body, breath and sensations that may come up. Starting with with toes and moving all the way up to the head. And then silence while we enter a deeper state of relaxation. Enjoy!
                        </p>
                        <audio controls>
                            <source src={require('./ryan-0.5.wav')} type="audio/ogg" />
                        </audio>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};