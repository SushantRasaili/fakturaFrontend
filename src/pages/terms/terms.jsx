import "./terms.styles.css";
import { useLanguage } from "../../providers/languageProvider";
import Navbar from "../../components/common/navbar";
import { useNavigate } from "react-router-dom";

export const Terms = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const handleBackBtnClick = () => {
    navigate("/login");
  };

  return (
    <>
      <Navbar />

      <section className="terms-page">
        <div className="bg-terms-page">
          <img
            src="	https://storage.123fakturera.se/public/wallpapers/sverige43.jpg"
            className="bg-terms-img"
          />
        </div>

        <div className="terms-cont">
          <div className="terms-top-cont">
            <h1 className="terms-title" style={{ marginBottom: "30px" }}>
              {language?.terms?.terms}
            </h1>
            <button onClick={handleBackBtnClick} className="terms-back-btn">
              {language?.terms?.close}
            </button>
          </div>

          <div className="terms-desc-cont">
            <p
              dangerouslySetInnerHTML={{ __html: language?.terms?.termDesc1 }}
            />
            <p>{language?.terms?.termDesc2}</p>

            <p style={{ marginBottom: "1.5rem" }}>
              {language?.terms?.termDesc3}
            </p>

            <p>{language?.terms?.termDesc4}</p>

            <p style={{ marginBottom: "1.5rem" }}>
              {language?.terms?.termDesc5}
            </p>

            <p>{language?.terms?.termDesc6}</p>

            <p>{language?.terms?.termDesc7}</p>

            <p>{language?.terms?.termDesc8}</p>

            <p>{language?.terms?.termDesc9}</p>

            <p>{language?.terms?.termDesc10}</p>

            <p>{language?.terms?.termDesc11}</p>

            <p>{language?.terms?.termDesc12}</p>

            <p>{language?.terms?.termDesc13}</p>

            <p>{language?.terms?.termDesc14}</p>

            <p>{language?.terms?.termDesc15}</p>

            <p>{language?.terms?.termDesc16}</p>

            <p>{language?.terms?.termDesc17}</p>

            <p>{language?.terms?.termDesc18}</p>

            <p>{language?.terms?.termDesc19}</p>

            <p>{language?.terms?.termDesc20}</p>

            <p
              dangerouslySetInnerHTML={{ __html: language?.terms?.termDesc21 }}
            />

            <p>{language?.terms?.termDesc22}</p>

            <p>{language?.terms?.termDesc23}</p>

            <p>{language?.terms?.termDesc24}</p>

            <p>{language?.terms?.termDesc25}</p>
          </div>

          <div className="terms-btm-back-btn">
            <button onClick={handleBackBtnClick} className="terms-back-btn">
              {language?.terms?.close}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
