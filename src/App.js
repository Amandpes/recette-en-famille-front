import React from "react";
import Footer from "./Layout/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homescreen from "./Screens/Homescreen";
import Singinscreen from "./Screens/Singinscreen";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/login" element={<Singinscreen />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
