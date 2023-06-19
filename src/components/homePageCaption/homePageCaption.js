import React from "react";
import { Container } from "react-bootstrap";

//Styling
import "./homePageCaption.css";

export default function HomePageCaption() {
    return (
        <div>
            <Container className="caption captionText">
                <h4 className="center site-title">
                    What I Offer
                </h4>
                <p className="center">
                    A mindful experience in nature connecting on a deeper level of awareness.
                </p>
                <p className="center">
                    Check out my links below where share new ways to do this and have done in my life for 25 years.
                </p>
            </Container>
        </div>
    );
};