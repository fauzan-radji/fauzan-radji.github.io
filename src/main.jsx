import "./index.css";

import { GlobalsProvider, LightboxProvider, ToastProvider } from "./providers";

import App from "./App.jsx";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalsProvider>
      <LightboxProvider>
        <ToastProvider>
          <App />
        </ToastProvider>
      </LightboxProvider>
    </GlobalsProvider>
  </React.StrictMode>
);
