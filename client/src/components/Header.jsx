import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useI18n } from "../hooks/useI18n.js";

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4.9 11.2 12 5.6l7.1 5.6" />
    <path d="M7.1 10.9v7.3h9.8v-7.3" />
    <path d="M10.6 18.2v-4h2.8v4" />
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="10.5" cy="10.5" r="4.8" />
    <path d="M14.1 14.1 18.3 18.3" />
  </svg>
);

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

const AboutIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="7.5" r="2.2" />
    <path d="M12 11.8v5.7" />
    <path d="M8.2 18.2h7.6" />
    <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
  </svg>
);

const CartIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6 7h13l-1.3 6.2a1.5 1.5 0 0 1-1.5 1.2H9a1.5 1.5 0 0 1-1.5-1.2L6 5.5H3.5" />
    <path d="M9 19a1.1 1.1 0 1 0 0 2.2A1.1 1.1 0 0 0 9 19Zm7 0a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2Z" />
  </svg>
);

const AuthIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M10.2 5.2H7.4a1.9 1.9 0 0 0-1.9 1.9v9.8a1.9 1.9 0 0 0 1.9 1.9h2.8" />
    <path d="m13 8.6 4.2 3.4-4.2 3.4" />
    <path d="M10.4 12h6.8" />
  </svg>
);

function Header() {
  const { user } = useAuth();
  const { t } = useI18n();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const profilePath = user ? (user.role === "admin" ? "/admin" : "/dashboard") : "/auth";
  const appLinks = [
    { to: "/about", label: t("common.about"), icon: AboutIcon },
    { to: "/gallery", label: t("common.events"), icon: GalleryIcon },
    { to: "/orders", label: t("common.orders"), icon: OrdersIcon },
    { to: "/menu", label: t("common.menu"), icon: MenuCardIcon },
    { to: profilePath, label: t("common.profile"), icon: ProfileIcon },
    { to: "/points", label: t("common.points"), icon: PointsIcon }
  ];

  const pageMeta = {
    "/": { title: t("common.home"), subtitle: t("header.homeSubtitle"), icon: HomeIcon },
    "/search": { title: t("common.search"), subtitle: t("header.searchSubtitle"), icon: SearchIcon },
    "/menu": { title: t("common.menu"), subtitle: t("header.menuSubtitle"), icon: MenuCardIcon },
    "/about": { title: t("common.about"), subtitle: t("header.aboutSubtitle"), icon: AboutIcon },
    "/gallery": { title: t("common.events"), subtitle: t("header.eventsSubtitle"), icon: GalleryIcon },
    "/points": { title: t("common.points"), subtitle: t("header.pointsSubtitle"), icon: PointsIcon },
    "/orders": { title: t("common.orders"), subtitle: t("header.ordersSubtitle"), icon: OrdersIcon },
    "/cart": { title: t("common.cart"), subtitle: t("header.cartSubtitle"), icon: CartIcon },
    "/auth": { title: t("header.authTitle"), subtitle: t("header.authSubtitle"), icon: AuthIcon },
    "/dashboard": { title: t("header.dashboardTitle"), subtitle: t("header.dashboardSubtitle"), icon: ProfileIcon }
  };

  const current = pageMeta[location.pathname] || {
    title: t("header.fallbackTitle"),
    subtitle: t("header.fallbackSubtitle"),
    icon: HomeIcon
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
            <div className="brand__title-row">
              <span className="brand__page-icon" aria-hidden="true">
                <current.icon />
              </span>
              <strong>{current.title}</strong>
            </div>
            <small>{current.subtitle}</small>
          </div>
        </Link>

        <div className="header-actions">
          <button
            type="button"
            className="header-icon-button"
            aria-label={t("header.appMenuLabel")}
            onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
          >
            <MenuIcon />
          </button>
          <NavLink to={profilePath} className="header-icon-button" aria-label={t("header.openProfile")}>
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
