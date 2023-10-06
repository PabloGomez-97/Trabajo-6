import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Calculo from "./pages/Calculo";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/calculo" element={<Calculo />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
