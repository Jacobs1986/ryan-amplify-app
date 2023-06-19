import React from "react";

//Styling
import "./homePageCards.css";

// Bootstrap
import { Card, Col, Container, Row } from "react-bootstrap";

// Cards
import cards from './cardInfo.json'

export default function HomePageCards() {
    return (
        <div>
            <Container>
                <Row>
                    {cards.map((info, i) => {
                        return (
                            <Col xs={12} md={4} key={i}>
                                <Card.Img 
                                    variant="top"
                                    src={info.cardImg}
                                    className="cardImage"
                                />
                                <Card.Body>
                                    <Card.Title
                                        className="center homeCardTitle"
                                    >
                                        {info.cardTitle}
                                    </Card.Title>
                                    <Card.Text
                                        className="center homeCardText"
                                    >
                                        {info.cardText}
                                    </Card.Text>
                                    <Card.Footer
                                        className="center homeCardFooter"
                                    >
                                        <a
                                            href={info.link}
                                            className="btn btnCardStyle"
                                            id={info.btnId}
                                        >
                                            {info.btnText}
                                        </a>
                                    </Card.Footer>
                                </Card.Body>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    );
};