import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

const restEndpoint = "http://demoapplication-env.eba-5xg7emvq.us-east-1.elasticbeanstalk.com/hello";

const callRestApi = async () => {
    const response = await fetch(restEndpoint);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    return JSON.stringify(jsonResponse);
};

function RenderResult() {
  const [apiResponse, setApiResponse] = useState("Loading MicroService Response...");

  useEffect(() => {
      callRestApi().then(
          result => setApiResponse(result));
  },[]);

  return(
      <div>
          <h1>Welcome to React Application</h1>
          <p>{apiResponse}</p>
      </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RenderResult />
  </React.StrictMode>
);