import { NavLink } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { useI18n } from "../hooks/useI18n.js";

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4.9 11.2 12 5.6l7.1 5.6" />
    <path d="M7.1 10.9v7.3h9.8v-7.3" />
    <path d="M10.6 18.2v-4h2.8v4" />
  </svg>
);

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="5.7" y="4.9" width="12.6" height="14.2" rx="2.2" />
    <path d="M8.4 8.6h7.2M8.4 11.9h7.2M8.4 15.2h5.3" />
    <path d="M8.3 4.2v2.2M15.7 4.2v2.2" />
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="10.5" cy="10.5" r="4.8" />
    <path d="M14.1 14.1 18.3 18.3" />
  </svg>
);

const PointsIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="5.6" y="5.1" width="12.8" height="13.8" rx="2.2" />
    <path d="M8.8 3.8v2.9M15.2 3.8v2.9" />
    <path d="M5.6 8.4h12.8" />
    <path d="M8.6 11.5h2.2v2.1H8.6Zm4.6 0h2.2v2.1h-2.2ZM8.6 15h2.2v2.1H8.6Zm4.6 0h2.2v2.1h-2.2Z" />
  </svg>
);

const OrdersIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7.4 8.2h9.2l.9 10H6.5Z" />
    <path d="M9.4 8.2V7.6A2.6 2.6 0 0 1 12 5a2.6 2.6 0 0 1 2.6 2.6v.6" />
    <path d="M9.8 11.2h4.4" />
  </svg>
);

function Footer() {
  const { itemCount } = useCart();
  const { t } = useI18n();

  return (
    <footer className="mobile-tabbar">
      <NavLink to="/" end className="tab-item">
        <span className="tab-icon">
          <HomeIcon />
        </span>
        <span>{t("footer.home")}</span>
      </NavLink>
      <NavLink to="/search" className="tab-item">
        <span className="tab-icon">
          <SearchIcon />
        </span>
        <span>{t("footer.search")}</span>
      </NavLink>
      <NavLink to="/menu" className="tab-item">
        <span className="tab-icon">
          <MenuIcon />
        </span>
        <span>{t("footer.menu")}</span>
      </NavLink>
      <NavLink to="/points" className="tab-item">
        <span className="tab-icon tab-icon--badge">
          <PointsIcon />
          <span className="tab-badge">5</span>
        </span>
        <span>{t("footer.points")}</span>
      </NavLink>
      <NavLink to="/cart" className="tab-item">
        <span className="tab-icon tab-icon--badge">
          <OrdersIcon />
          {itemCount > 0 ? <span className="tab-badge">{itemCount}</span> : null}
        </span>
        <span>{t("footer.cart")}</span>
      </NavLink>
    </footer>
  );
}

export default Footer;
