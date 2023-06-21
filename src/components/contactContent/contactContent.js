import React from "react";

// CSS File
import "./contactContent.css";

// Bootstrap
import {
    Image
} from 'react-bootstrap';

// Components
// import ContactForm from "../contactForm/contactForm";

export default function ContactContent() {
    return (
        <div>
            <div>
                <h3>Contact</h3>
                <p className='contactFormParagraph'>
                    Hello, thanks for looking at my Mindful nature website! Send me a message with any
                    questions you may have and you can find out more about me in my bio and what services I offer.
                </p>
            </div>
            <div>
                {/* <ContactForm /> */}
            </div>
            <div>
                <p className='contactFormParagraph'>
                    Or connect with me through my social media:
                </p>
                <Image
                    src='./icon-instagram.png'
                    alt='Instagram logo'
                    className='linkIcons'
                />
                <Image
                    src='./youtube-logo.png'
                    alt='YouTube logo'
                    className='linkIcons'
                />
            </div>
        </div>
    );
};