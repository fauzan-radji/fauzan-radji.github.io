import "./index.css";

import App from "./App.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { ToastProvider } from "./providers";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastProvider>
      <App />
    </ToastProvider>
  </React.StrictMode>
);
