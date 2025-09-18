import { createContext, ReactNode, useContext, useMemo, useState } from "react";

type LanguageCode = "en" | "ne"; // English, Nepali

type Dictionary = Record<string, Record<LanguageCode, string>>;

const DICTIONARY: Dictionary = {
  app_title: { en: "SIKKIM MONASTERIES", ne: "सिक्किम मठ" },
  nav_virtual_tour: { en: "Virtual Tour", ne: "भर्चुअल भ्रमण" },
  nav_ai_planner: { en: "AI Planner", ne: "एआई योजनाकार" },
  nav_archives: { en: "Archives", ne: "अभिलेख" },
  nav_events: { en: "Events", ne: "कार्यक्रम" },
  nav_marketplace: { en: "Marketplace", ne: "बजार" },
  nav_map: { en: "Explore Map", ne: "नक्सा हेर्नुहोस्" },

  weather_title: { en: "Weekly Weather in Sikkim", ne: "सिक्किमको साप्ताहिक मौसम" },
  weather_subtitle: { en: "7‑day forecast for Gangtok region", ne: "गान्तोक क्षेत्रको ७ दिनको पूर्वानुमान" },
  weather_conditions: { en: "Conditions", ne: "मौसम" },
  weather_temp: { en: "Temp", ne: "तापक्रम" },
  weather_precip: { en: "Precip", ne: "वृष्टि" },
  weather_wind: { en: "Wind", ne: "हवा" },
  weather_error: { en: "Failed to load weather", ne: "मौसम लोड हुन सकेन" },
  lang_english: { en: "English", ne: "अंग्रेजी" },
  lang_nepali: { en: "Nepali", ne: "नेपाली" },
};

type I18nContextValue = {
  language: LanguageCode;
  setLanguage: (code: LanguageCode) => void;
  t: (key: keyof typeof DICTIONARY) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<LanguageCode>("en");

  const value = useMemo<I18nContextValue>(() => ({
    language,
    setLanguage,
    t: (key) => DICTIONARY[key]?.[language] ?? String(key),
  }), [language]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}


