import { Link } from "react-router-dom";
import { useLanguage } from "../../providers/languageProvider";

export const Footer = () => {
  const { language } = useLanguage();

  return (
    <section className="footer-cont">
      <div className="footer-nav">
        <div className="footer-title">123 Fakturera</div>

        <div className="footer-links">
          <Link to="/" className="footer-link">
            {language?.footer?.home}
          </Link>
          <Link to="/" className="footer-link">
            {language?.footer?.order}
          </Link>
          <Link to="/" className="footer-link">
            {language?.footer?.contact}
          </Link>
        </div>
      </div>

      <div className="footer-hr">
        <hr />
      </div>

      <div className="footer-copyright">
        <p>© Lättfaktura, CRO no. 638537, 2025. All rights reserved.</p>
      </div>
    </section>
  );
};
