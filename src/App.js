import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homescreen from "./Screens/Homescreen";
import Singinscreen from "./Screens/Singinscreen";
import AddRecipeScreen from "./Screens/AddRecipeScreen";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import {SigninScreen} from "./Screens/SignupScreen";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/login" element={<Singinscreen />} />
        <Route path="/signup" element={<SigninScreen />} />
        <Route path="/add-recipe" element={<AddRecipeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
