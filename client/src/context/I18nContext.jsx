import { createContext, useEffect, useMemo, useState } from "react";
import { languageOptions, translations } from "../i18n/translations.js";

export const I18nContext = createContext(null);

const defaultLanguage = "fr";

const getNestedValue = (object, path) =>
  path.split(".").reduce((current, key) => (current && current[key] != null ? current[key] : undefined), object);

const interpolate = (value, params = {}) =>
  String(value).replace(/\{(\w+)\}/g, (_, key) => (params[key] != null ? params[key] : `{${key}}`));

export function I18nProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem("ghzaiel-language") || defaultLanguage);

  useEffect(() => {
    localStorage.setItem("ghzaiel-language", language);
    const selected = languageOptions.find((entry) => entry.code === language) || languageOptions[0];
    document.documentElement.lang = language;
    document.documentElement.dir = selected.dir || "ltr";
  }, [language]);

  const value = useMemo(() => {
    const currentTranslations = translations[language] || translations[defaultLanguage];
    const fallbackTranslations = translations[defaultLanguage];
    const currentLanguage = languageOptions.find((entry) => entry.code === language) || languageOptions[0];

    return {
      language,
      languages: languageOptions,
      currentLanguage,
      setLanguage,
      t: (key, params = {}) => {
        const translatedValue = getNestedValue(currentTranslations, key);
        const fallbackValue = getNestedValue(fallbackTranslations, key);
        return interpolate(translatedValue ?? fallbackValue ?? key, params);
      }
    };
  }, [language]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
