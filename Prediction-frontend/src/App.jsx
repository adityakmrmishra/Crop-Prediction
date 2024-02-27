import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Crop from './crop';
import Fertilizer from './fertilizer.jsx';
import Disease from './disease.jsx';
import Home from './Home';

const App = () => {
    return (
        <Router>
            <Routes >

                <Route path="/" element={<Home />} />
                <Route path="/crop-prediction" element={<Crop />} />
                <Route path="/fertilizer-prediction" element={<Fertilizer />} />
                <Route path="/disease-detection" element={<Disease />} />

            </Routes>

        </Router>
    )
}

export default App