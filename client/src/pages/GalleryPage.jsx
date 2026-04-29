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
          <img src="/assets/evetorchi.png" alt="Torchi Awards - meilleure brik a Djerba" />
        </div>
        <div className="event-highlight__content">
          <h2>Torchi Awards - Meilleure Brik a Djerba</h2>
          <p>
            Ghzaielle celebre une grande reussite: distinction recue lors de l'evenement Torchi Awards pour la
            meilleure brik a Djerba.
          </p>
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
