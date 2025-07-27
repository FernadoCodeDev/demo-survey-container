import React from "react";
import Header from "../components/layout/Header";
import MetricsContent from "../components/layout/MetricsContent";
import Footer from "../components/layout/Footer";

const Metrics = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <MetricsContent />
      <Footer />
    </div>
  );
};

export default Metrics;
