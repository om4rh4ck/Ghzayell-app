import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function AuthPage() {
  const { login, register, loading, user, isReady } = useAuth();
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
          <span className="eyebrow auth-eyebrow">{isRegister ? "Creer un compte" : "Bienvenue"}</span>
          <h1>{isRegister ? "Rejoignez Ghzaiel Food" : "Connexion a votre compte"}</h1>
          <p>{isRegister ? "Inscrivez-vous pour commander, gagner des points et suivre vos avantages." : "Connectez-vous pour commander rapidement et consulter vos points fidelite."}</p>
        </div>

        <form className="stack auth-form" onSubmit={handleSubmit}>
          {isRegister && (
            <label className="auth-field">
              <span>Nom complet</span>
              <input
                type="text"
                placeholder="Votre nom complet"
                value={form.name}
                onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                required
              />
            </label>
          )}
          <label className="auth-field">
            <span>Email</span>
            <input
              type="email"
              placeholder="votre@email.com"
              value={form.email}
              onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
              required
            />
          </label>
          <label className="auth-field">
            <span>Mot de passe</span>
            <input
              type="password"
              placeholder="Votre mot de passe"
              value={form.password}
              onChange={(event) => setForm((current) => ({ ...current, password: event.target.value }))}
              required
            />
          </label>
          <button type="submit" className="button-primary auth-submit" disabled={loading}>
            {loading ? "Veuillez patienter..." : isRegister ? "Creer mon compte" : "Se connecter"}
          </button>
          {error && <p className="message error">{error}</p>}
        </form>

        <button type="button" className="auth-switch" onClick={() => setIsRegister((current) => !current)}>
          {isRegister ? "Vous avez deja un compte ? Se connecter" : "Vous n'avez pas de compte ? S'inscrire"}
        </button>
      </section>
    </div>
  );
}

export default AuthPage;
