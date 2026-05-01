import { useEffect, useState } from "react";
import { apiRequest, getMediaUrl } from "../api/client";
import { useI18n } from "../hooks/useI18n.js";

function GalleryPage() {
  const { t } = useI18n();
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiRequest("/gallery")
      .then(setItems)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="stack">
      <section className="section-heading">
        <div>
          <span className="eyebrow">{t("gallery.eyebrow")}</span>
          <h1>{t("gallery.title")}</h1>
        </div>
      </section>
      <section className="card event-highlight">
        <div className="event-highlight__media">
          <img src="/assets/evetorchi.png" alt="Torchi Food Awards - meilleure brik a Tunis" />
        </div>
        <div className="event-highlight__content">
          <h2>{t("gallery.event1Title")}</h2>
          <p>{t("gallery.event1Body")}</p>
          <p>{t("gallery.event1Date")}</p>
        </div>
      </section>
      <section className="card event-highlight">
        <div className="event-highlight__media">
          <img src="/assets/torchi2024.png" alt="Evenement Torchi Awards 2024" />
        </div>
        <div className="event-highlight__content">
          <h2>{t("gallery.event2Title")}</h2>
          <p>{t("gallery.event2Body")}</p>
          <p>{t("gallery.event2Date")}</p>
        </div>
      </section>
      <section className="card event-highlight">
        <div className="event-highlight__media">
          <img src="/assets/torchi2021.png" alt="Evenement Torchi 2021 - meilleur plat tunisien a Tunis" />
        </div>
        <div className="event-highlight__content">
          <h2>{t("gallery.event3Title")}</h2>
          <p>{t("gallery.event3Body")}</p>
          <p>{t("gallery.event3Date")}</p>
        </div>
      </section>
      <section className="card event-highlight">
        <div className="event-highlight__media">
          <img src="/assets/brik2021.png" alt="Torchi Food Awards 2021 - meilleure brik en Tunisie" />
        </div>
        <div className="event-highlight__content">
          <h2>{t("gallery.event4Title")}</h2>
          <p>{t("gallery.event4Body")}</p>
          <p>{t("gallery.event4Date")}</p>
        </div>
      </section>
      {error && <p className="message error">{error}</p>}
      <section className="gallery-grid">
        {items.map((item) => (
          <article key={item._id} className="card gallery-card">
            {item.type === "image" ? (
              <img src={getMediaUrl(item.url)} alt={item.title} />
            ) : (
              <video src={getMediaUrl(item.url)} controls />
            )}
            <h3>{item.title}</h3>
          </article>
        ))}
      </section>
    </div>
  );
}

export default GalleryPage;
