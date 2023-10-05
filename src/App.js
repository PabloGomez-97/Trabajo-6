import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import IndexPage from "./pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<IndexPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
