import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Metrics from "./page/Metrics"; 
import Survey from "./page/Survey"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Metrics />} />
      <Route path="/surveys/:surveyId" element={<Survey />} />
    </Routes>
  );
};

export default App;
