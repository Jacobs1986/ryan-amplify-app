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
                src='./Images/blog-banner-side.jpg'
                alt='Blog banner'
            />
        </div>
    );
};