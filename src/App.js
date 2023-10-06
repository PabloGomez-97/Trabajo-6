import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Calculo from "./pages/Calculo";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/calculo" element={<Calculo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
