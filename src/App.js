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

// Pages
import Home from "./pages/home-page";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;