import React, { useState, useEffect } from "react";
import SurveyContainer from "survey-container";

const survey = () => {
  fetch("http://localhost:3000/api/responses/post_response.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: "Me gusta mucho el sistema",
      questionId: "q1234",
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));

  return (
    <div className="">
      <SurveyContainer surveyId="" apiUrl="http://localhost:3000/api" />
    </div>
  );
};

export default survey;
