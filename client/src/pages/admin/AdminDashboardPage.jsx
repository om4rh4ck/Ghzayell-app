import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiRequest } from "../../api/client";
import StatCard from "../../components/StatCard.jsx";

function AdminDashboardPage() {
  const [stats, setStats] = useState(null);
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    Promise.all([apiRequest("/admin/stats"), apiRequest("/admin/contacts")])
      .then(([statsData, contactsData]) => {
        setStats(statsData);
        setContacts(contactsData);
      })
      .catch((err) => {
        if (!err?.silentRedirect) {
          setError(err.message);
        }
      });
  }, []);

  if (error) {
    return <p className="message error">{error}</p>;
  }

  if (!stats) {
    return <p>Chargement du tableau de bord...</p>;
  }

  return (
    <div className="stack">
      <div className="section-heading admin-hero">
        <div>
          <span className="eyebrow">Vue d'ensemble admin</span>
          <h1>Tableau de bord pro du restaurant.</h1>
          <p>Suivez vos performances et accedez rapidement aux actions importantes.</p>
        </div>
        <div className="admin-hero__actions">
          <Link to="/admin/menu" className="button-primary">
            Gerer les produits
          </Link>
          <Link to="/admin/orders" className="button-secondary">
            Voir les commandes
          </Link>
        </div>
      </div>
      <div className="stats-grid">
        <StatCard label="Clients" value={stats.users} accent="accent-cream" />
        <StatCard label="Commandes" value={stats.orders} accent="accent-brown" />
        <StatCard label="Revenu" value={`${stats.revenue.toFixed(2)} DT`} accent="accent-orange" />
        <StatCard label="Points" value={stats.totalPoints} accent="accent-gold" />
        <StatCard label="Contacts" value={stats.contacts} accent="accent-cream" />
      </div>
      <section className="admin-quick-grid">
        <Link to="/admin/menu" className="admin-quick-card">
          <strong>Produits</strong>
          <span>Ajouter, modifier et lancer des promos.</span>
        </Link>
        <Link to="/admin/users" className="admin-quick-card">
          <strong>Clients</strong>
          <span>Consulter les comptes et offrir des points cadeaux.</span>
        </Link>
        <Link to="/admin/gallery" className="admin-quick-card">
          <strong>Galerie</strong>
          <span>Ajouter photos et videos de vos produits.</span>
        </Link>
      </section>
      <section className="card admin-contact-card">
        <div className="admin-card-header">
          <div>
            <h2>Messages de contact</h2>
            <span>Demandes envoyees depuis la page d'accueil</span>
          </div>
        </div>
        {contacts.length === 0 ? (
          <p>Aucun message de contact pour le moment.</p>
        ) : (
          <div className="admin-contact-list">
            {contacts.map((contact) => (
              <article key={contact.id} className="admin-contact-item">
                <div className="admin-contact-item__head">
                  <div>
                    <strong>{contact.full_name}</strong>
                    <p>{contact.email}</p>
                  </div>
                  <span>{new Date(contact.created_at).toLocaleString()}</span>
                </div>
                <div className="admin-contact-item__meta">
                  <span>{contact.phone}</span>
                </div>
                <p>{contact.message}</p>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default AdminDashboardPage;
