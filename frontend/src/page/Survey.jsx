import React from "react";
import Header from "../components/layout/Header";
import SurveyContent from "../components/layout/SurveyContent";
import Footer from "../components/layout/Footer";

const Survey = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <SurveyContent />
      <Footer />
    </div>
  );
};

export default Survey;
