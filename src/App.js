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

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App;