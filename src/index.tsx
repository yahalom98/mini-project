import React from "react";
import ReactDOM from "react-dom";
import "reset-css";
import "./styles/styles.css";

import App from "./App";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
