import React from "react";
import { useParams } from "react-router-dom";
import { SurveyWidget } from "survey-container";

function SurveyUi() {
  const { surveyId } = useParams();


  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Contestar Encuesta</h1>
      <SurveyWidget
        surveyId={surveyId}


      />
    </div>
  );
}

export default SurveyUi;
