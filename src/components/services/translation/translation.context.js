import { createContext, useState } from "react";

export const TranslationContext = createContext();

const tValue = localStorage.getItem("translation");

const TranslationContextProvider = ({ children }) => {
  const [language, setLanguage] = useState(tValue ?? "es");

  const changeLanguage = (newLanguage) => {
    localStorage.setItem("translation", newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <TranslationContext.Provider value={{ language, changeLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export default TranslationContextProvider;
