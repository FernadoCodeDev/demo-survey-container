import React from "react";
import { useParams } from "react-router-dom";
import { SurveyWidget } from "survey-container";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SurveyUi() {
  const { surveyId } = useParams();

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold text-center">Contestar Encuesta</h1>
      <SurveyWidget
        surveyId={surveyId}
        fetchUrl="http://localhost:3000/api/surveys/survey.php?id="
        responseUrl="http://localhost:3000/api/response/postResponse.php"
        onAlert={(msg, type = "info") => {
          toast(msg, {
            type,
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }}
      />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
    </div>
  );
}

export default SurveyUi;
