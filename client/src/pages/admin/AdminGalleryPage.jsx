import { useEffect, useState } from "react";
import { apiFormRequest, apiRequest, getMediaUrl } from "../../api/client";

function AdminGalleryPage() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("image");
  const [url, setUrl] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const loadGallery = async () => {
    const data = await apiRequest("/gallery");
    setItems(data);
  };

  useEffect(() => {
    loadGallery().catch((err) => setError(err.message));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    try {
      if (file) {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("type", type);
        formData.append("media", file);
        await apiFormRequest("/gallery", formData);
      } else {
        await apiRequest("/gallery", {
          method: "POST",
          body: JSON.stringify({ title, type, url })
        });
      }

      setTitle("");
      setType("image");
      setUrl("");
      setFile(null);
      await loadGallery();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    await apiRequest(`/gallery/${id}`, { method: "DELETE" });
    await loadGallery();
  };

  return (
    <div className="stack">
      <section className="section-heading">
        <div>
          <span className="eyebrow">Galerie</span>
          <h1>Gestion de la galerie</h1>
          <p>Ajoutez des images et des videos pour mettre vos produits en valeur.</p>
        </div>
      </section>

      <section className="card admin-form-card">
        <div className="admin-card-header">
          <h2>Ajouter un media</h2>
          <span>Image ou video</span>
        </div>
        <form className="admin-form" onSubmit={handleSubmit}>
          <input placeholder="Titre" value={title} onChange={(event) => setTitle(event.target.value)} required />
          <select value={type} onChange={(event) => setType(event.target.value)}>
            <option value="image">Image</option>
            <option value="video">Video</option>
          </select>
          <input placeholder="URL du media" value={url} onChange={(event) => setUrl(event.target.value)} />
          <input
            type="file"
            accept={type === "image" ? "image/*" : "video/*"}
            onChange={(event) => setFile(event.target.files?.[0] || null)}
          />
          <button type="submit" className="button-primary">Ajouter a la galerie</button>
          {error && <p className="message error">{error}</p>}
        </form>
      </section>

      <section className="gallery-grid admin-gallery-grid">
        {items.map((item) => (
          <article key={item._id} className="card gallery-card admin-gallery-card">
            {item.type === "image" ? (
              <img src={getMediaUrl(item.url)} alt={item.title} />
            ) : (
              <video src={getMediaUrl(item.url)} controls />
            )}
            <div className="split">
              <h3>{item.title}</h3>
              <button type="button" className="button-secondary" onClick={() => handleDelete(item._id)}>
                Supprimer
              </button>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

export default AdminGalleryPage;
