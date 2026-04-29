import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h16" />
  </svg>
);

const ProfileIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
    <path d="M5.5 19.5c1.7-2.7 4-4 6.5-4s4.8 1.3 6.5 4" />
  </svg>
);

const GalleryIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="4.8" y="5.2" width="14.4" height="13.6" rx="2.2" />
    <path d="m7.8 15.4 2.9-3 2.3 2.2 2.9-3.2 1.3 2.2" />
    <circle cx="9.2" cy="9.3" r="1.25" />
  </svg>
);

const OrdersIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7.2 7.4h9.6l.8 10H6.4Z" />
    <path d="M9.4 7.4V6.8A2.6 2.6 0 0 1 12 4.2a2.6 2.6 0 0 1 2.6 2.6v.6" />
    <path d="M9.4 11.2h5.2" />
  </svg>
);

const MenuCardIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="5.3" y="4.8" width="13.4" height="14.4" rx="2.2" />
    <path d="M8.3 8.7h7.4M8.3 12h7.4M8.3 15.3h5" />
    <path d="M8.4 4.2v2.2M15.6 4.2v2.2" />
  </svg>
);

const PointsIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 4.6 14.1 8.9l4.8.7-3.5 3.4.8 4.8-4.2-2.2-4.2 2.2.8-4.8-3.5-3.4 4.8-.7L12 4.6Z" />
  </svg>
);

function Header() {
  const { user } = useAuth();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const profilePath = user ? (user.role === "admin" ? "/admin" : "/dashboard") : "/auth";
  const appLinks = [
    { to: "/gallery", label: "Galerie", icon: GalleryIcon },
    { to: "/orders", label: "Commandes", icon: OrdersIcon },
    { to: "/menu", label: "Menu", icon: MenuCardIcon },
    { to: profilePath, label: "Profile", icon: ProfileIcon },
    { to: "/points", label: "Points", icon: PointsIcon }
  ];

  const pageMeta = {
    "/": { title: "Accueil", subtitle: "Le meilleur Brik de Tunisie" },
    "/menu": { title: "Menu", subtitle: "Savourez le numero un de Tunisie" },
    "/gallery": { title: "Galerie", subtitle: "Images et videos delicieuses" },
    "/points": { title: "Points", subtitle: "Gagnez des points a chaque commande" },
    "/orders": { title: "Commandes", subtitle: "Suivez vos commandes en direct" },
    "/cart": { title: "Panier", subtitle: "Finalisez votre commande" },
    "/auth": { title: "Connexion", subtitle: "Entrez dans l'univers Ghzaiel" },
    "/dashboard": { title: "Mon espace", subtitle: "Retrouvez vos commandes et vos avantages" }
  };

  const current = pageMeta[location.pathname] || {
    title: "Ghzaiel Food",
    subtitle: "Cuisine tunisienne moderne"
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="mobile-topbar">
      <div className="site-header">
        <Link to="/" className="brand brand--mobile">
          <div className="brand__seal">
            <img src="/assets/ghzaiel-logo-clean.png" alt="Ghzaiel Food logo" className="brand__logo" />
          </div>
          <div>
            <strong>{current.title}</strong>
            <small>{current.subtitle}</small>
          </div>
        </Link>

        <div className="header-actions">
          <button
            type="button"
            className="header-icon-button"
            aria-label="Ouvrir le menu de l'application"
            onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
          >
            <MenuIcon />
          </button>
          <NavLink to={profilePath} className="header-icon-button" aria-label="Ouvrir mon espace">
            <ProfileIcon />
          </NavLink>
        </div>
        <nav className="desktop-header-nav" aria-label="Navigation principale">
          {appLinks.map((link) => (
            <NavLink key={`desktop-${link.to}-${link.label}`} to={link.to} className="desktop-header-nav__item">
              <span className="desktop-header-nav__icon" aria-hidden="true">
                <link.icon />
              </span>
              <span>{link.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {isMenuOpen && (
        <div className="header-menu">
          {appLinks.map((link) => (
            <NavLink key={`${link.to}-${link.label}`} to={link.to} className="header-menu__item">
              <span className="header-menu__icon" aria-hidden="true">
                <link.icon />
              </span>
              <span>{link.label}</span>
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
