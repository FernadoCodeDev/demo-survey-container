import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Surveycontainer from "survey-container";

function MetricsUi() {
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/metrics/metrics.php")
      .then((res) => res.json())
      .then((data) => setSurveys(data))
      .catch((err) => console.error("Error cargando encuestas:", err));
  }, []);

  return (
    <div className="p-4 mx-auto ">
      <h1 className="mb-4 text-2xl font-bold">Encuestas Disponibles</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 m-auto gap-4 max-w-[80rem] h-auto">

        {surveys.map((survey) => (
          <div
            key={survey.id}
            className="p-4 mb-4 bg-white border rounded-md shadow-md "
          >
            <h2 className="text-lg font-semibold">{survey.qualification}</h2>

            <ul className="my-2 list-disc list-inside">
              {survey.questions.map((q) => (
                <li key={q.id}>{q.text}</li>
              ))}
            </ul>

            <Link
              to={`/surveys/${survey.id}`}
              className="inline-block p-2 mt-2 font-bold text-white bg-blue-600 hover:underline"
            >
              Contestar encuesta
            </Link>
          </div>
        ))}

      </div>

    </div>
  );
}

export default MetricsUi;
