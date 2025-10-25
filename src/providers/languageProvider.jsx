import { createContext, useState, useEffect, useContext } from "react";
const baseUrl = import.meta.env.VITE_API_BASE_URL;

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState({});
  const [selectedLang, setSelectedLang] = useState("en");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLanguages = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${baseUrl}/languages/${selectedLang}`);
        const data = await res.json();
        setLanguage(data?.data[0]);
      } catch (err) {
        console.error("Failed to fetch languages", err);
      } finally {
        setLoading(false);
      }
    };
    fetchLanguages();
  }, [selectedLang]);

  return (
    <LanguageContext.Provider
      value={{ language, selectedLang, setSelectedLang, loading }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
