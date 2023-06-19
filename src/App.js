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

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navigation />
            </BrowserRouter>
        </div>
    )
}

export default App;