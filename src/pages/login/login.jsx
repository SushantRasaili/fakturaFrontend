import { useState } from "react";
import "./login.styles.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/authProvider";
import { useLanguage } from "../../providers/languageProvider";
import Navbar from "../../components/common/navbar";
import { Footer } from "../../components/common/footer";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const { language } = useLanguage();

  // Validation functions
  const validateEmail = (email) => {
    if (!email) {
      return language?.login?.emptyEmail;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return language?.login?.validEmail;
    }
    return "";
  };

  const validatePassword = (password) => {
    if (!password) {
      return language?.login?.emptyPassword;
    }
    return "";
  };

  const handleEmailBlur = () => {
    const error = validateEmail(formData.email);
    setErrors((prev) => ({ ...prev, email: error }));
  };

  const handlePasswordBlur = () => {
    const error = validatePassword(formData.password);
    setErrors((prev) => ({ ...prev, password: error }));
  };

  const handleEmailChange = (e) => {
    setFormData((prev) => ({ ...prev, email: e.target.value }));
  };

  const handlePasswordChange = (e) => {
    setFormData((prev) => ({ ...prev, password: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);

    setErrors({
      email: emailError,
      password: passwordError,
    });

    if (emailError || passwordError) return;

    try {
      const res = await fetch(`${baseUrl}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        login(data?.data?.user, data?.data?.accessToken);
        navigate("/products");
      } else {
        if (data?.messages[0]?.includes("User not found")) {
          setErrors((prev) => ({
            ...prev,
            email: language?.login?.userNotExist,
          }));
        } else alert(data?.messages[0] || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <>
      <Navbar />

      <section className="login-cont">
        <div className="bg-cont">
          <img
            src="	https://storage.123fakturera.se/public/wallpapers/sverige43.jpg"
            className="bg-img"
          />
        </div>

        <form className="login-card">
          <h1 className="login-title">{language?.login?.login}</h1>

          {/* Email Field */}
          <div className="login-field">
            <label className="label">{language?.login?.emailLabel}</label>

            <input
              type="email"
              placeholder={language?.login?.emailPlaceholder}
              className="input"
              value={formData.email}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          {/* Password Field */}
          <div className="login-field">
            <label className="label">{language?.login?.passwordLabel}</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder={language?.login?.passwordPlaceholder}
                className="input"
                value={formData.password}
                onChange={handlePasswordChange}
                onBlur={handlePasswordBlur}
              />
              <button
                type="button"
                className="eye-btn"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {showPassword ? <IconEye /> : <IconEyeOff />}
                </svg>
              </button>
            </div>
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          {/* Submit Button */}
          <div className="submit-cont">
            <button type="submit" className="submit-btn" onClick={handleSubmit}>
              {language?.login?.login}
            </button>
          </div>

          <div className="login-foot">
            <a href="#" className="log-foot-link">
              {language?.login?.register}
            </a>
            <a href="#" className="log-foot-link">
              {language?.login?.forgetPassword}
            </a>
          </div>
        </form>
      </section>

      <Footer />
    </>
  );
};
