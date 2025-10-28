import { useState } from "react";
import "./common.styles.css";
import { Link } from "react-router-dom";
import { useLanguage } from "../../providers/languageProvider";
import { IconMenu2 } from "@tabler/icons-react";

const Navbar = () => {
  const { language } = useLanguage();
  //   const [activelang,setActiveLang] = useState("en");
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);

  const { setSelectedLang, selectedLang } = useLanguage();

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
    <nav className="navbar">
      <div className="logo-cont">
        <Link to="/">
          <img
            src="https://storage.123fakturera.se/public/icons/diamond.png"
            className="logo-img"
          />
        </Link>
      </div>
      {/* menu icon */}

      <div className="menu-cont">
        <div className="menu-icon" onClick={() => setMenuOpened(!menuOpened)}>
          <IconMenu2 size={35} style={{ color: "#ffffff" }} />
        </div>

        {/* small screen menu */}
        <div className={`drop-menu  ${menuOpened ? "show" : ""}`}>
          <div className="nav-drop-link-cont">
            <Link className="nav-drop-link" to="/">
              {language?.navbar?.home}
            </Link>
          </div>

          <div className="nav-drop-link-cont">
            <Link className="nav-drop-link" to="/">
              {language?.navbar?.order}
            </Link>
          </div>

          <div className="nav-drop-link-cont">
            <Link className="nav-drop-link" to="/">
              {language?.navbar?.customer}
            </Link>
          </div>

          <div className="nav-drop-link-cont">
            <Link className="nav-drop-link" to="/">
              {language?.navbar?.about}
            </Link>
          </div>

          <div className="nav-drop-link-cont">
            <Link className="nav-drop-link" to="/">
              {language?.navbar?.contact}
            </Link>
          </div>
        </div>
      </div>

      {/* menu bar */}
      <div className="menu-bar">
        {/* large screen menu */}
        <div className="lg-menu">
          <Link className="nav-link" to="/">
            {language?.navbar?.home}
          </Link>

          <Link className="nav-link" to="/">
            {language?.navbar?.order}
          </Link>

          <Link className="nav-link" to="/">
            {language?.navbar?.customer}
          </Link>

          <Link className="nav-link" to="/">
            {language?.navbar?.about}
          </Link>

          <Link className="nav-link" to="/">
            {language?.navbar?.contact}
          </Link>
        </div>
        {/* select language */}
        <div className="lang-wrap">
          <div
            className="lang-select "
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {selectedLang === "en" ? (
              <div className="lang-cont">
                English
                <img
                  src="https://storage.123fakturere.no/public/flags/GB.png"
                  className="lang-flag"
                />
              </div>
            ) : (
              <div className="lang-cont">
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
      </div>
    </nav>
  );
};

export default Navbar;
