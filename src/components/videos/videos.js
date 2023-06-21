import React from "react";

//Styling
import "./videos.css";

// Bootstrap
import { Col, Container, Image, Ratio, Row } from "react-bootstrap";

export default function Video() {
    return (
        <div style={{ marginBottom: '5px' }}>
            <Container>
                <h1 className="centerText" id="videoTitle">
                    Videos
                </h1>
                <Row>
                    <Col xs={12} lg={6} style={{ padding: '0px'}}>
                        <Ratio aspectRatio="16x9">
                        <iframe 
                            src="https://www.youtube.com/embed/uEVmdH9zHQ0" 
                            title="YouTube video player" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                        ></iframe>
                        </Ratio>
                    </Col>
                    <Col xs={12} lg={6}>
                        <p id="videoPara">
                            I enjoy making videos to help others find their center and their own sense of peace. Please enjoy the video and click the icon below to visit my YouTube page!
                        </p>
                        <a href="https://www.youtube.com/channel/UCZ54zvvOto4mixp-zUy5x1A" target="_blank" rel="noreferrer">
                            <Image
                                className="linkIcons"
                                alt='YouTube icon'
                                src='./Images/youtube-logo.png'
                            />
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};