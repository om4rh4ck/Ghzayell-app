import { NavLink, Outlet, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const DashboardIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5.5 6.5h5.2v4.8H5.5Zm7.8 0h5.2V9h-5.2Zm0 5.8h5.2v5.2h-5.2Zm-7.8.8h5.2v4.4H5.5Z" />
  </svg>
);

const ProductIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 4.8h10A1.8 1.8 0 0 1 18.8 6.6v10.8A1.8 1.8 0 0 1 17 19.2H7a1.8 1.8 0 0 1-1.8-1.8V6.6A1.8 1.8 0 0 1 7 4.8Z" />
    <path d="M8.6 8.7h6.8M8.6 12h6.8M8.6 15.3h4.6" />
  </svg>
);

const OrdersIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7.2 8.3h9.6l.8 9.4H6.4Z" />
    <path d="M9.2 8.3c0-1.8.9-3 2.8-3s2.8 1.2 2.8 3" />
    <path d="M9.9 11.1h4.2" />
  </svg>
);

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M9.4 11.5a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Zm6 1.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z" />
    <path d="M4.9 18.6c1.2-2.2 2.8-3.3 4.8-3.3s3.6 1.1 4.8 3.3" />
    <path d="M13.6 18.4c.8-1.5 1.9-2.2 3.3-2.2 1.1 0 2.1.5 3 1.6" />
  </svg>
);

const GalleryIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5.5 6.4A1.9 1.9 0 0 1 7.4 4.5h9.2a1.9 1.9 0 0 1 1.9 1.9v11.2a1.9 1.9 0 0 1-1.9 1.9H7.4a1.9 1.9 0 0 1-1.9-1.9V6.4Z" />
    <path d="m8.1 15.4 2.3-2.4 2 1.9 3-3.2 1.5 2.6" />
    <path d="M9 9.1a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Z" />
  </svg>
);

const SiteIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 4.5c4.4 0 8 3.4 8 7.5s-3.6 7.5-8 7.5-8-3.4-8-7.5 3.6-7.5 8-7.5Z" />
    <path d="M4.8 12h14.4M12 4.7c1.7 1.8 2.7 4.4 2.7 7.3s-1 5.5-2.7 7.3m0-14.6C10.3 6.5 9.3 9.1 9.3 12s1 5.5 2.7 7.3" />
  </svg>
);

const LogoutIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M10.2 5.2H7.4a1.9 1.9 0 0 0-1.9 1.9v9.8a1.9 1.9 0 0 0 1.9 1.9h2.8" />
    <path d="m13 8.6 4.2 3.4-4.2 3.4" />
    <path d="M10.4 12h6.8" />
  </svg>
);

const AdminUserIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
    <path d="M5.5 19.5c1.7-2.7 4-4 6.5-4s4.8 1.3 6.5 4" />
  </svg>
);

function AdminLayout() {
  const { user, logout } = useAuth();

  return (
    <div className="admin-shell">
      <section className="admin-page-header">
        <div className="brand brand--mobile">
          <div className="brand__seal">
            <img src="/assets/ghzaiel-logo-clean.png" alt="Ghzaiel Food" className="brand__logo" />
          </div>
          <div>
            <strong>Admin Ghzaiel</strong>
            <small>Gestion premium du restaurant</small>
          </div>
        </div>
      </section>

      <div className="admin-layout">
        <aside className="admin-sidebar">
          <div className="admin-sidebar__brand">
            <span className="eyebrow">Ghzaiel Food</span>
            <h2>Tableau de bord admin</h2>
            <p>Gestion complete du restaurant, des commandes et des clients.</p>
          </div>

          <nav className="admin-nav">
            <NavLink end to="/admin" className="admin-nav__link">
              <span className="admin-nav__icon">
                <DashboardIcon />
              </span>
              <span>Tableau de bord</span>
            </NavLink>
            <NavLink to="/admin/menu" className="admin-nav__link">
              <span className="admin-nav__icon">
                <ProductIcon />
              </span>
              <span>Produits</span>
            </NavLink>
            <NavLink to="/admin/orders" className="admin-nav__link">
              <span className="admin-nav__icon">
                <OrdersIcon />
              </span>
              <span>Commandes</span>
            </NavLink>
            <NavLink to="/admin/users" className="admin-nav__link">
              <span className="admin-nav__icon">
                <UsersIcon />
              </span>
              <span>Clients</span>
            </NavLink>
            <NavLink to="/admin/gallery" className="admin-nav__link">
              <span className="admin-nav__icon">
                <GalleryIcon />
              </span>
              <span>Evenements</span>
            </NavLink>
          </nav>

          <div className="admin-sidebar__footer">
            <div className="admin-user-chip">
              <span className="admin-user-chip__icon">
                <AdminUserIcon />
              </span>
              <strong>{user?.name || "Admin"}</strong>
              <small>{user?.email || "admin@ghzaielfood.com"}</small>
            </div>
            <div className="admin-sidebar__actions">
              <Link to="/" className="button-secondary admin-sidebar__button">
                <SiteIcon />
                <span>Voir le site</span>
              </Link>
              <button type="button" className="button-primary admin-sidebar__button" onClick={logout}>
                <LogoutIcon />
                <span>Deconnexion</span>
              </button>
            </div>
          </div>
        </aside>
        <section className="admin-content">
          <Outlet />
        </section>
      </div>
    </div>
  );
}

export default AdminLayout;
