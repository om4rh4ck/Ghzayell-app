import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const GiftIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 10h14v9a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19v-9Z" />
    <path d="M4 7.5A1.5 1.5 0 0 1 5.5 6h13A1.5 1.5 0 0 1 20 7.5V10H4V7.5Z" />
    <path d="M12 6v14" />
    <path d="M10.2 6C8.4 6 7 5.1 7 3.8 7 3 7.7 2.5 8.6 2.5c1.4 0 2.6 1.4 3.4 3.5H10.2Zm3.6 0c1.8 0 3.2-.9 3.2-2.2 0-.8-.7-1.3-1.6-1.3-1.4 0-2.6 1.4-3.4 3.5h1.8Z" />
  </svg>
);

const UserBadgeIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
    <path d="M5.5 19.5c1.7-2.7 4-4 6.5-4s4.8 1.3 6.5 4" />
  </svg>
);

const CartIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6 7h13l-1.3 6.2a1.5 1.5 0 0 1-1.5 1.2H9a1.5 1.5 0 0 1-1.5-1.2L6 5.5H3.5" />
    <path d="M9 19a1.1 1.1 0 1 0 0 2.2A1.1 1.1 0 0 0 9 19Zm7 0a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2Z" />
  </svg>
);

const OrdersIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 4.5h10A1.5 1.5 0 0 1 18.5 6v12A1.5 1.5 0 0 1 17 19.5H7A1.5 1.5 0 0 1 5.5 18V6A1.5 1.5 0 0 1 7 4.5Z" />
    <path d="M8.5 9h7" />
    <path d="M8.5 12.5h7" />
    <path d="M8.5 16h4.5" />
  </svg>
);

const SparkIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3.5 14.7 9l6 .9-4.3 4.2 1 6-5.4-2.9-5.4 2.9 1-6-4.3-4.2 6-.9L12 3.5Z" />
  </svg>
);

const LogoutIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M10 4.5H7A1.5 1.5 0 0 0 5.5 6v12A1.5 1.5 0 0 0 7 19.5h3" />
    <path d="M13 8.5 17.5 12 13 15.5" />
    <path d="M10 12h7.5" />
  </svg>
);

function CustomerDashboardPage() {
  const { user, logout } = useAuth();

  return (
    <div className="stack">
      <section className="customer-dashboard-hero">
        <div className="customer-dashboard-hero__top">
          <div className="customer-dashboard-hero__seal">
            <img src="/assets/ghzaiel-logo-clean.png" alt="Ghzaiel Food" className="customer-dashboard-hero__logo" />
          </div>
          <div>
            <span className="eyebrow">Mon espace client</span>
            <h1>Bienvenue {user?.name || "chez Ghzaiel"}.</h1>
            <p>Retrouvez vos commandes, vos points fidelite et vos raccourcis utiles.</p>
          </div>
        </div>
        <div className="customer-dashboard-hero__actions">
          <button type="button" className="customer-dashboard-logout" onClick={logout}>
            <LogoutIcon />
            <span>Deconnecter</span>
          </button>
        </div>
      </section>

      <section className="stats-grid customer-stats-grid">
        <article className="stat-card accent-gold">
          <span className="dashboard-card-icon" aria-hidden="true">
            <GiftIcon />
          </span>
          <span className="stat-card__label">Points cadeaux</span>
          <strong className="stat-card__value">{user?.points || 0}</strong>
        </article>
        <article className="stat-card accent-cream">
          <span className="dashboard-card-icon" aria-hidden="true">
            <UserBadgeIcon />
          </span>
          <span className="stat-card__label">Compte</span>
          <strong className="stat-card__value">{user?.role === "admin" ? "Admin" : "Client"}</strong>
        </article>
      </section>

      <section className="customer-dashboard-grid">
        <Link to="/menu" className="admin-quick-card">
          <span className="admin-quick-card__icon" aria-hidden="true">
            <CartIcon />
          </span>
          <strong>Commander en ligne</strong>
          <span>Decouvrez le menu et ajoutez vos favoris au panier.</span>
        </Link>
        <Link to="/cart" className="admin-quick-card">
          <span className="admin-quick-card__icon" aria-hidden="true">
            <CartIcon />
          </span>
          <strong>Mon panier</strong>
          <span>Finalisez votre commande et choisissez votre livraison.</span>
        </Link>
        <Link to="/orders" className="admin-quick-card">
          <span className="admin-quick-card__icon" aria-hidden="true">
            <OrdersIcon />
          </span>
          <strong>Mes commandes</strong>
          <span>Suivez vos commandes confirmees et leur statut.</span>
        </Link>
        <Link to="/points" className="admin-quick-card">
          <span className="admin-quick-card__icon" aria-hidden="true">
            <SparkIcon />
          </span>
          <strong>Mes points</strong>
          <span>Consultez vos points cadeaux et vos avantages fidelite.</span>
        </Link>
      </section>
    </div>
  );
}

export default CustomerDashboardPage;
