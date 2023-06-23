import React from "react";
import ReactDOM from "react-dom/client";
import "./firebase/config"
import "./index.css";

import App from "./App";
import { AuthenticationContextProvider } from "./components/services/authentication/authentication.context";
import { ThemeContextProvider } from "./components/services/theme/theme.context";
import { APIContextProvider } from "./components/services/api/api.context";
import TranslationContextProvider from "./components/services/translation/translation.context";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthenticationContextProvider>
      <ThemeContextProvider>
        <APIContextProvider>
          <TranslationContextProvider>
            <App />
          </TranslationContextProvider>
        </APIContextProvider>
      </ThemeContextProvider>
    </AuthenticationContextProvider>
  </React.StrictMode>
);
