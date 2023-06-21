import React from "react";

// CSS File
import "./blog.css";

// Bootstrao
import { Image } from "react-bootstrap";

export default function BlogBanner() {
    return (
        <div>
            <Image 
                fluid
                src={require('./blog-banner-side.jpg')}
                alt='Blog banner'
            />
        </div>
    );
};