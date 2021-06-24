import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import "./components/index.css";
import { StrictMode } from "react";

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
