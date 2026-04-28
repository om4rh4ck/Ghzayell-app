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
          <span className="eyebrow">Galerie</span>
          <h1>Moments gourmands et coulisses de la cuisine.</h1>
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
