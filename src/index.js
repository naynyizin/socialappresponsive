import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DarkmodeContextProvider } from "./components/DarkmodeContext/DarkmodeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkmodeContextProvider>
      <App />
    </DarkmodeContextProvider>
  </React.StrictMode>
);
