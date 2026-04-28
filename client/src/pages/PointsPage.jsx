import { useEffect, useState } from "react";
import { apiRequest } from "../api/client";

function PointsPage() {
  const [summary, setSummary] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    apiRequest("/loyalty")
      .then(setSummary)
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <p className="message error">{error}</p>;
  }

  if (!summary) {
    return <p>Chargement des donnees de fidelite...</p>;
  }

  return (
    <div className="stack">
      <section className="points-banner points-banner--mockup">
        <div className="points-banner__top">
          <span>Points</span>
          <strong>{summary.points}</strong>
        </div>
        <p>Gagnez des points a chaque commande</p>
      </section>

      <section className="reward-grid reward-grid--stacked">
        {summary.tiers.map((tier) => (
          <article key={tier.points} className="reward-row">
            <div className="reward-row__icon">{tier.points}</div>
            <div>
              <strong>Collectez {tier.points} points</strong>
              <p>{tier.reward}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="pro-card">
        <span>MENU PRO</span>
        <p>Profitez d'avantages exclusifs et d'offres speciales.</p>
        <button type="button" className="button-primary button-primary--gold">
          Abonnez-vous maintenant
        </button>
      </section>
    </div>
  );
}

export default PointsPage;
