import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DemoHome from "./page/Home"; 

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DemoHome />} />
    </Routes>
  );
};

export default App;
