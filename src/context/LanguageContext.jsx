import { createContext, useContext, useEffect, useState } from "react";

import en from "../locales/en.json";
import fa from "../locales/fa.json";
import tr from "../locales/tr.json";
import de from "../locales/de.json";
import ar from "../locales/ar.json";

const LanguageContext = createContext();

const translations = {
  en,
  fa,
  tr,
  de,
  ar,
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);

    document.documentElement.lang = language;

    document.documentElement.dir =
      language === "fa" || language === "ar" ? "rtl" : "ltr";
  }, [language]);

  const t = (key) => {
    const keys = key.split(".");

    let value = translations[language];

    for (const keyPart of keys) {
      value = value?.[keyPart];
    }

    return value ?? key;
  };

  const toggleLanguage = () => {
    const languages = ["en", "fa", "tr", "de", "ar"];

    setLanguage((currentLanguage) => {
      const currentIndex = languages.indexOf(currentLanguage);

      const nextIndex =
        currentIndex === languages.length - 1
          ? 0
          : currentIndex + 1;

      return languages[nextIndex];
    });
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
};