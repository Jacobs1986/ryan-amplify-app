import React from "react";

// CSS File
import "./retreat.css";

// Bootstrap
import { Container, Col, Image, Ratio, Row } from "react-bootstrap";

export default function RetreatColumn() {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} md={5} lg={3} id="retreatCol-picture">
                        <Image
                            src={require('./retreat-banner.jpg')}
                            alt='Retreat banner'
                            fluid
                        />
                    </Col>
                    <Col xs={12} md={7} lg={9}>
                        <p id="retreatCol-p">
                            Going out in nature can be one of the most healing things we can do for our body, mind & emotions right now. I’m hosting several partial day nature retreats in September and October. Guiding us into nature to feel the colder water, ground into the earth, and be with the plants, air and sky. The retreats are composed of prep, meeting at location, breathing exercises, cold water dip, yoga based movements, and discussion.
                        </p>
                        <h5>Details:</h5>
                        <ul>
                            <li>The cost is $40 per person and you can sign up in advance. </li>
                            <li>Small groups of 2-4 people max.</li>
                            <li>Duration: 2 hours.</li>
                            <li>Meeting time is at 1:30 pm.</li>
                        </ul>
                        <h4>Retreat Dates: </h4>
                        <ul>
                            <li>Check back in Spring 2022 for new dates!</li>
                        </ul>
                        <br></br>
                        <br></br>
                        <h6>Please contact me with any questions you may have. Please make sure to include your email so that I have a way to get in contact with you. I will also email out my prep outline of what cold therapy is, answer any questions you may have, what to bring. Thank you!</h6>
                        <Ratio aspectRatio={50}>
                            <iframe
                                src="https://www.youtube.com/embed/BwNyYsM4wzw"
                                title="YouTube Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            >
                            </iframe>
                        </Ratio>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};