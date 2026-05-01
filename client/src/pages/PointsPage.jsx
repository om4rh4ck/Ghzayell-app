import { useEffect, useState } from "react";
import { apiRequest } from "../api/client";
import StatusNotice from "../components/StatusNotice.jsx";
import { useI18n } from "../hooks/useI18n.js";

function PointsPage() {
  const { t } = useI18n();
  const [summary, setSummary] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    apiRequest("/loyalty")
      .then(setSummary)
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <StatusNotice variant="error" title={t("pointsPage.errorTitle")} message={error} />;
  }

  if (!summary) {
    return <p>{t("pointsPage.load")}</p>;
  }

  return (
    <div className="stack">
      <section className="points-banner points-banner--mockup">
        <div className="points-banner__top">
          <span>{t("pointsPage.title")}</span>
          <strong>{summary.points}</strong>
        </div>
        <p>{t("pointsPage.desc")}</p>
      </section>
      <StatusNotice
        variant="reward"
        title={t("pointsPage.rewardTitle")}
        message={t("pointsPage.rewardDesc")}
      />

      <section className="reward-grid reward-grid--stacked">
        {summary.tiers.map((tier) => (
          <article key={tier.points} className="reward-row">
            <div className="reward-row__icon">{tier.points}</div>
            <div>
              <strong>{t("pointsPage.collect", { points: tier.points })}</strong>
              <p>{tier.reward}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="pro-card">
        <span>{t("home.menuProTitle")}</span>
        <p>{t("pointsPage.menuProDesc")}</p>
        <button type="button" className="button-primary button-primary--gold">
          {t("pointsPage.subscribe")}
        </button>
      </section>
    </div>
  );
}

export default PointsPage;
