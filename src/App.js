import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

// Styling
import './App.css';

// Components
import Navigation from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

// Pages
import Home from "./pages/home-page";
import About from "./pages/about-page";
import Media from "./pages/media-page";
import Retreat from "./pages/retreat-page";
import Blog from "./pages/blog-page";
import Contact from "./pages/contact-page";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/media' element={<Media />} />
                    <Route path='/retreat' element={<Retreat />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App;