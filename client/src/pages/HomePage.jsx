import { useState } from "react";
import { Link } from "react-router-dom";
import { apiRequest } from "../api/client";
import { localMenuCategories } from "../data/localMenu.js";
import { useAuth } from "../hooks/useAuth";

const ContactUserIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
    <path d="M5.5 19.5c1.7-2.7 4-4 6.5-4s4.8 1.3 6.5 4" />
  </svg>
);

const ContactMailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5.5 7A1.5 1.5 0 0 1 7 5.5h10A1.5 1.5 0 0 1 18.5 7v10A1.5 1.5 0 0 1 17 18.5H7A1.5 1.5 0 0 1 5.5 17V7Z" />
    <path d="m7 8 5 4 5-4" />
  </svg>
);

const ContactPhoneIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8.3 4.8c.4-.4 1-.5 1.4-.2l2.2 1.6c.5.3.6 1 .3 1.5l-1 1.7a1 1 0 0 0 .1 1.1 14 14 0 0 0 3.4 3.4 1 1 0 0 0 1.1.1l1.7-1c.5-.3 1.2-.2 1.5.3l1.6 2.2c.3.4.2 1-.2 1.4l-1.2 1.2c-.8.8-1.9 1.2-3 1-2.9-.5-5.7-2.1-8.1-4.5s-4-5.2-4.5-8.1c-.2-1.1.2-2.2 1-3l1.2-1.2Z" />
  </svg>
);

const ContactLocationIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 20.4s-5.8-5.1-5.8-10.2a5.8 5.8 0 1 1 11.6 0c0 5.1-5.8 10.2-5.8 10.2Z" />
    <path d="M12 12.4a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z" />
  </svg>
);

const ContactMessageIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6.5 6.2h11A1.3 1.3 0 0 1 18.8 7.5v7a1.3 1.3 0 0 1-1.3 1.3h-6.2l-3.6 2.9v-2.9H6.5a1.3 1.3 0 0 1-1.3-1.3v-7a1.3 1.3 0 0 1 1.3-1.3Z" />
    <path d="M8.5 9.5h7M8.5 12.2h5.2" />
  </svg>
);

function HomePage() {
  const { user } = useAuth();
  const [proForm, setProForm] = useState({ fullName: "", email: "", phone: "", message: "" });
  const [proMessage, setProMessage] = useState("");
  const [proError, setProError] = useState("");
  const orderEntryPath = user ? "/menu" : "/auth";
  const publicSiteUrl =
    (typeof window !== "undefined" && window.location.origin) ||
    "https://orange-sparrow-230688.hostingersite.com";
  const menuQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(
    `${publicSiteUrl}/menu`
  )}`;
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent("Rue Med Ferjeni, Houmt Souk 4180")}&z=15&output=embed`;
  const mapLinkUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Rue Med Ferjeni, Houmt Souk 4180")}`;

  const handleProSubmit = async (event) => {
    event.preventDefault();
    setProError("");
    setProMessage("");

    try {
      await apiRequest("/contact", {
        method: "POST",
        body: JSON.stringify(proForm)
      });
      setProMessage("Votre message a ete envoye a l'administration Ghzaiel avec succes.");
      setProForm({ fullName: "", email: "", phone: "", message: "" });
    } catch (error) {
      setProError(error.message);
    }
  };

  return (
    <div className="stack home-screen">
      <section className="home-desktop-grid">
        <div className="hero-stack">
          <section className="hero hero--mockup">
            <img src="/assets/image-accueil.png" alt="Affiche d'accueil Ghzaiel Food" className="hero-poster-image" />
          </section>

          <section className="brik-afrik-card">
            <img src="/assets/brik afrik.png" alt="Brik Afrik" className="brik-afrik-image" />
          </section>
        </div>
      </section>

      <section className="menu-section home-local-menu-section">
        <div className="menu-section__intro">
          <h2>Nos menus en local</h2>
          <p>Decouvrez nos categories sur place, avec les prix Ghzaiel clairement presentes.</p>
        </div>
        <div className="local-menu-category-grid">
          {localMenuCategories.map((category) => (
            <section key={category.title} className="menu-local-board menu-local-board--detailed">
              <div className="menu-local-board__heading">
                <h3>{category.title}</h3>
                {category.subtitle ? <p>{category.subtitle}</p> : null}
              </div>
              <div className="menu-local-list">
                {category.items.map((item) => (
                  <article key={`${category.title}-${item.name}`} className="menu-local-item">
                    <div className="menu-local-item__head">
                      <strong>{item.name}</strong>
                      <span>{item.price}</span>
                    </div>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="home-sections-grid">
        <section className="menu-preview-stack">
          <div className="menu-preview-stack__intro">
            <h2>Menu Ghzaielle a commander en ligne</h2>
          </div>

          <article className="featured-dish">
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80"
              alt="Brik"
            />
            <div className="featured-dish__content">
              <div>
                <strong>Brik</strong>
                <small>Notre specialite croustillante de Ghzaielle</small>
              </div>
              <Link to={orderEntryPath} className="featured-dish__cta">
                Commander
              </Link>
            </div>
            <div className="featured-dish__price">
              <span>3.00 DT</span>
            </div>
          </article>
          <article className="featured-dish">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
              alt="S7an"
            />
            <div className="featured-dish__content">
              <div>
                <strong>S7an</strong>
                <small>Assiette tunisienne complete et genereuse</small>
              </div>
              <Link to={orderEntryPath} className="featured-dish__cta">
                Commander
              </Link>
            </div>
            <div className="featured-dish__price">
              <span>6.80 DT</span>
            </div>
          </article>

          <Link to="/menu" className="menu-preview-stack__link menu-preview-stack__link--bottom">
            Voir Tous
          </Link>
        </section>

        <section className="promo-banner">
          <span>MENU PRO</span>
          <p>Profitez d'avantages exclusifs et de reductions.</p>
          <div className="promo-banner__qr-wrap">
            <a href="/menu" className="promo-banner__qr" aria-label="Ouvrir le menu Ghzaiel avec le QR code">
              <img src={menuQrUrl} alt="QR code vers le menu Ghzaiel" className="promo-banner__qr-image" />
              <span className="promo-banner__qr-logo">
                <img src="/assets/ghzaiel-logo-clean.png" alt="Ghzaiel Food" />
              </span>
            </a>
            <small>Scannez pour ouvrir le menu Ghzaiel</small>
          </div>
          <form className="promo-banner__form" onSubmit={handleProSubmit}>
            <div className="promo-banner__form-intro">
              <strong>Contact administrateur</strong>
              <p>Laissez vos coordonnees et votre message. L'administration Ghzaiel vous repondra rapidement.</p>
            </div>
            <label className="promo-banner__field">
              <span>
                <ContactUserIcon />
                <em>Nom et prenom</em>
              </span>
              <input
                type="text"
                placeholder="Nom et prenom"
                value={proForm.fullName}
                onChange={(event) => setProForm((current) => ({ ...current, fullName: event.target.value }))}
                required
              />
            </label>
            <label className="promo-banner__field">
              <span>
                <ContactMailIcon />
                <em>Email</em>
              </span>
              <input
                type="email"
                placeholder="Votre email"
                value={proForm.email}
                onChange={(event) => setProForm((current) => ({ ...current, email: event.target.value }))}
                required
              />
            </label>
            <label className="promo-banner__field">
              <span>
                <ContactPhoneIcon />
                <em>Numero</em>
              </span>
              <input
                type="tel"
                placeholder="Votre numero"
                value={proForm.phone}
                onChange={(event) => setProForm((current) => ({ ...current, phone: event.target.value }))}
                required
              />
            </label>
            <label className="promo-banner__field">
              <span>
                <ContactMessageIcon />
                <em>Message</em>
              </span>
              <textarea
                placeholder="Votre message"
                value={proForm.message}
                onChange={(event) => setProForm((current) => ({ ...current, message: event.target.value }))}
                required
              />
            </label>
            <button type="submit" className="button-primary button-primary--gold promo-banner__submit">
              Envoyer au contact admin
            </button>
            {proError ? <p className="message error">{proError}</p> : null}
            {proMessage ? <p className="promo-banner__success">{proMessage}</p> : null}
          </form>

          <section className="promo-banner__contact-card">
            <div className="promo-banner__contact-intro">
              <strong>Coordonnees Ghzaiel</strong>
              <p>Retrouvez notre adresse, notre contact direct et l'acces rapide a la localisation.</p>
            </div>

            <div className="promo-banner__contact-list">
              <a
                href={mapLinkUrl}
                target="_blank"
                rel="noreferrer"
                className="promo-banner__contact-item"
              >
                <span className="promo-banner__contact-icon">
                  <ContactLocationIcon />
                </span>
                <span>
                  <strong>Adresse</strong>
                  <em>Rue Med Ferjeni, Houmt Souk 4180</em>
                </span>
              </a>

              <a href="tel:+21625644212" className="promo-banner__contact-item">
                <span className="promo-banner__contact-icon">
                  <ContactPhoneIcon />
                </span>
                <span>
                  <strong>Numero</strong>
                  <em>25 644 212</em>
                </span>
              </a>

              <a href="mailto:contact@ghzaielfood.com" className="promo-banner__contact-item">
                <span className="promo-banner__contact-icon">
                  <ContactMailIcon />
                </span>
                <span>
                  <strong>Email</strong>
                  <em>contact@ghzaielfood.com</em>
                </span>
              </a>
            </div>

            <div className="promo-banner__map-wrap">
              <iframe
                title="Carte Ghzaiel Food"
                src={mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>
        </section>
      </section>
    </div>
  );
}

export default HomePage;
