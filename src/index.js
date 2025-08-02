import React from "react";
import ReactDOM from "react-dom";  // React 17 style
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// To log web vitals in console during development, uncomment below:
// reportWebVitals(console.log);

reportWebVitals();
