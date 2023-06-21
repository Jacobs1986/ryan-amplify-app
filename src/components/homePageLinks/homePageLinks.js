import React from "react";

//Styling
import "./homePageLinks.css";

// Bootstrap
import { Col, Container, Image, Row } from "react-bootstrap";

export default function HomePageLinks() {
    return (
        <div id="linkDiv">
            <Container>
                <Row>
                    <Col xs={12} md={4}></Col>
                    <Col xs={12} md={4} className="centerText">
                        <h5 id="linkTitle">Links</h5>
                        <p id="linkText">Follow me on Instagram and YouTube!</p>
                        <a href="https://www.instagram.com/mindfulnatureryan/" target="_blank" rel="noreferrer">
                            <Image
                                className="linkIcons"
                                alt='Instagram icon'
                                src={require('./icon-instagram.png')}
                            />
                        </a>
                        <a href="https://www.youtube.com/channel/UCZ54zvvOto4mixp-zUy5x1A" target="_blank" rel="noreferrer">
                            <Image
                                className="linkIcons"
                                alt='YouTube icon'
                                src={require('./youtube-logo.png')}
                            />
                        </a>
                    </Col>
                    <Col xs={12} md={4}></Col>
                </Row>
            </Container>
        </div>
    );
};