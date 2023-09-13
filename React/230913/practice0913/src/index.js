import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App";
import ListRendering from "./Components/ListRendering";
import Fragment from "./Components/Fragment";

const container = document.getElementById("root");
const root = createRoot(container);
// root.render(<App />);
root.render(<Fragment />);
