import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useI18n } from "../hooks/useI18n.js";

function AuthPage() {
  const { login, register, loading, user, isReady } = useAuth();
  const { t } = useI18n();
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isReady || !user) {
      return;
    }

    navigate(user.role === "admin" ? "/admin" : "/dashboard", { replace: true });
  }, [isReady, navigate, user]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    try {
      let authData;

      if (isRegister) {
        authData = await register(form);
      } else {
        authData = await login({ email: form.email, password: form.password });
      }

      if (authData?.user?.role === "admin") {
        navigate("/admin", { replace: true });
        return;
      }

      const fallbackPath = "/dashboard";
      navigate(location.state?.from?.pathname || fallbackPath, { replace: true });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-shell">
      <section className="auth-card">
        <div className="auth-logo-wrap">
          <img src="/assets/ghzaiel-logo-clean.png" alt="Ghzaiel Food" className="auth-logo" />
        </div>

        <div className="auth-card__intro">
          <span className="eyebrow auth-eyebrow">{isRegister ? t("auth.registerEyebrow") : t("auth.welcomeEyebrow")}</span>
          <h1>{isRegister ? t("auth.registerTitle") : t("auth.loginTitle")}</h1>
          <p>{isRegister ? t("auth.registerDesc") : t("auth.loginDesc")}</p>
        </div>

        <form className="stack auth-form" onSubmit={handleSubmit}>
          {isRegister && (
            <label className="auth-field">
              <span>{t("auth.fullName")}</span>
              <input
                type="text"
                placeholder={t("auth.fullNamePlaceholder")}
                value={form.name}
                onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                required
              />
            </label>
          )}
          <label className="auth-field">
            <span>{t("auth.email")}</span>
            <input
              type="email"
              placeholder={t("auth.emailPlaceholder")}
              value={form.email}
              onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
              required
            />
          </label>
          <label className="auth-field">
            <span>{t("auth.password")}</span>
            <input
              type="password"
              placeholder={t("auth.passwordPlaceholder")}
              value={form.password}
              onChange={(event) => setForm((current) => ({ ...current, password: event.target.value }))}
              required
            />
          </label>
          <button type="submit" className="button-primary auth-submit" disabled={loading}>
            {loading ? t("auth.pleaseWait") : isRegister ? t("auth.createAccount") : t("auth.login")}
          </button>
          {error && <p className="message error">{error}</p>}
        </form>

        <button type="button" className="auth-switch" onClick={() => setIsRegister((current) => !current)}>
          {isRegister ? t("auth.switchToLogin") : t("auth.switchToRegister")}
        </button>
      </section>
    </div>
  );
}

export default AuthPage;
