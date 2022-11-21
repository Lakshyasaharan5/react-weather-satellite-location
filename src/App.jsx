import React from "react";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Satellite from "./pages/Satellite";
import Weather from "./pages/Weather.js"
import Navigation from "./Navigation";


function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/satellite" element={<Satellite />} />
                <Route path="/weather" element={<Weather />} />
            </Routes>
        </>
    )
}


export default App;
