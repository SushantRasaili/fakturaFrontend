import { useState } from "react";
import "./dashComponents.styles.css";
import { useLanguage } from "../../../providers/languageProvider";
import { IconMenu2 } from "@tabler/icons-react";
import { useAuth } from "../../../providers/authProvider";

export const DashNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const { setSelectedLang, selectedLang } = useLanguage();
  const { user } = useAuth();

  const handleLanguageChange = (code) => {
    setSelectedLang(code);
    setShowDropdown(!showDropdown);
  };

  const languages = [
    {
      name: "Svenska",
      flag: "https://storage.123fakturere.no/public/flags/SE.png",
      code: "svn",
    },
    {
      name: "English",
      flag: "https://storage.123fakturere.no/public/flags/GB.png",
      code: "en",
    },
  ];

  return (
    <header className="dash-nav">
      <div className="profile-cont">
        <div className="profile-in-cont">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXp3DxP80ArpRzsB0XWBG9Ow5GeuefbLrUHw&s"
            alt="Profile"
            className="profile-img"
          />
          <div className="profile-info">
            <p className="profile-name">{user.name}</p>
            <p className="profile-address">{user.address}</p>
          </div>
        </div>
      </div>

      <div className="dash-menu-icon-div">
        <IconMenu2 className="dash-menu-icon" size={35} />
      </div>

      {/* select language */}
      <div className="lang-wrap">
        <div
          className="lang-select "
          onClick={() => setShowDropdown(!showDropdown)}
        >
          {selectedLang === "en" ? (
            <div className="dash-lang-cont">
              English
              <img
                src="https://storage.123fakturere.no/public/flags/GB.png"
                className="lang-flag"
              />
            </div>
          ) : (
            <div className="dash-lang-cont">
              Svenska
              <img
                src="https://storage.123fakturere.no/public/flags/SE.png"
                className="lang-flag"
              />
            </div>
          )}
        </div>
        {/* language dropdown */}
        <div className={`drop-lang  ${showDropdown ? "show" : ""}`}>
          {languages.map((lang) => (
            <div
              className="drop-lang-cont"
              onClick={() => handleLanguageChange(lang.code)}
            >
              <p>{lang.name}</p>
              <div className="drop-lang-img">
                <img src={lang.flag} className="lang-flag" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};
