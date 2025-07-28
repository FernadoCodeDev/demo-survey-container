import React from "react";
import { useParams } from "react-router-dom";
import { SurveyWidget } from "survey-container";

function SurveyUi() {
  const { surveyId } = useParams();

  const apiUrl = `http://localhost:3000/api/surveys`;

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Contestar Encuesta</h1>
      <SurveyWidget
        surveyId={surveyId}
        fetchUrl="http://localhost:3000/api/surveys/survey.php?id="
      />
    </div>
  );
}

export default SurveyUi;
