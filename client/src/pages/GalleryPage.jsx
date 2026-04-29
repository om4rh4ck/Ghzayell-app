import { useEffect, useState } from "react";
import { apiRequest, getMediaUrl } from "../api/client";

function GalleryPage() {
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
          <span className="eyebrow">Evenements</span>
          <h1>Reussites Ghzaielle et moments forts.</h1>
        </div>
      </section>
      <section className="card event-highlight">
        <div className="event-highlight__media">
          <img src="/assets/evetorchi.png" alt="Torchi Food Awards - meilleure brik a Tunis" />
        </div>
        <div className="event-highlight__content">
          <h2>Torchi Food Awards - Meilleure Brik a Tunis</h2>
          <p>
            Ghzaielle celebre une grande reussite: distinction recue lors de l'evenement Torchi Awards pour la
            meilleure brik a Tunis.
          </p>
          <p>Date: 2025.</p>
        </div>
      </section>
      <section className="card event-highlight">
        <div className="event-highlight__media">
          <img src="/assets/torchi2024.png" alt="Evenement Torchi Awards 2024" />
        </div>
        <div className="event-highlight__content">
          <h2>Torchi Food Awards 2024</h2>
          <p>
            Ghzaielle gagne la meilleure brik a Tunis lors de l'evenement Torchi Awards 2024, une distinction qui
            confirme notre savoir-faire artisanal.
          </p>
          <p>Premiere participation officielle aux evenements: 2025.</p>
        </div>
      </section>
      <section className="card event-highlight">
        <div className="event-highlight__media">
          <img src="/assets/torchi2021.png" alt="Evenement Torchi 2021 - meilleur plat tunisien a Tunis" />
        </div>
        <div className="event-highlight__content">
          <h2>Torchi Food Awards 2021 - Meilleur plat tunisien a Tunis</h2>
          <p>
            Ghzaielle remporte une distinction importante a Tunis en 2021 lors de l'evenement Torchi, avec le prix du
            meilleur plat tunisien.
          </p>
          <p>Date: 2021.</p>
        </div>
      </section>
      <section className="card event-highlight">
        <div className="event-highlight__media">
          <img src="/assets/brik2021.png" alt="Torchi Food Awards 2021 - meilleure brik en Tunisie" />
        </div>
        <div className="event-highlight__content">
          <h2>Torchi Food Awards 2021 - Meilleure Brik en Tunisie</h2>
          <p>
            Ghzaielle gagne la meilleure brik en Tunisie lors de l'evenement Torchi Food Awards 2021, confirmant
            l'excellence et l'authenticite de son savoir-faire.
          </p>
          <p>Date: 2021.</p>
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
