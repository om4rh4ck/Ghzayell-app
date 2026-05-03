import { useI18n } from "../hooks/useI18n.js";

function AboutPage() {
  const { t } = useI18n();

  return (
    <div className="stack about-page">
      <section className="card about-hero">
        <div className="about-hero__media">
          <img src="/assets/mghzayell.png" alt="Equipe Ghzaiel" />
        </div>
        <div className="about-hero__content">
          <span className="eyebrow">{t("about.eyebrow")}</span>
          <h1>{t("about.heroTitle")}</h1>
          <p>{t("about.heroP1")}</p>
          <p>{t("about.heroP2")}</p>
        </div>
      </section>

      <section className="about-grid">
        <article className="card about-card">
          <h2>{t("about.storyTitle")}</h2>
          <p>{t("about.storyBody")}</p>
        </article>
        <article className="card about-card">
          <h2>{t("about.visionTitle")}</h2>
          <p>{t("about.visionBody")}</p>
        </article>
        <article className="card about-card">
          <h2>{t("about.valuesTitle")}</h2>
          <p>{t("about.valuesLead")}</p>
          <p>{`- ${t("about.value1")}`}</p>
          <p>{`- ${t("about.value2")}`}</p>
          <p>{`- ${t("about.value3")}`}</p>
        </article>
      </section>

      <section className="card about-card">
        <h2>{t("about.todayTitle")}</h2>
        <p>{t("about.todayP1")}</p>
        <p>{t("about.todayP2")}</p>
      </section>
    </div>
  );
}

export default AboutPage;
