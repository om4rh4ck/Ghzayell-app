import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { apiRequest } from "../api/client";
import ProductCard from "../components/ProductCard.jsx";
import { localMenuCategories } from "../data/localMenu.js";
import { useCart } from "../hooks/useCart";
import { useAuth } from "../hooks/useAuth";
import { useI18n } from "../hooks/useI18n.js";
import { translateMenuCategory, translateMenuSubtitle, translateMenuItem, translateMenuItemDescription } from "../utils/menuCategoryLabel.js";

function CategoryIcon({ category }) {
  const normalized = String(category || "").toLowerCase();
  let icon = "MN";

  if (normalized.includes("boisson")) {
    icon = "BO";
  } else if (normalized.includes("brik")) {
    icon = "BR";
  } else if (normalized.includes("plat")) {
    icon = "PL";
  } else if (normalized.includes("ojja")) {
    icon = "OJ";
  } else if (normalized.includes("supplement")) {
    icon = "+";
  } else if (normalized.includes("sandwich")) {
    icon = "SW";
  } else if (normalized.includes("huitieme")) {
    icon = "1/4";
  }

  return (
    <span className="menu-category-filter__icon" aria-hidden="true">
      {icon}
    </span>
  );
}

const ALL_CATEGORY = "__all__";

function MenuPage() {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const { language, t } = useI18n();
  const navigate = useNavigate();
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(ALL_CATEGORY);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const productsData = await apiRequest("/products");
        setProducts(productsData);
        setError("");
      } catch (err) {
        setError(err.message);
        setProducts([]);
      }
    };

    loadData();
  }, []);

  const handleAddToCart = (product) => {
    if (!user) {
      navigate("/auth", { state: { from: location } });
      return;
    }

    addToCart(product);
    setMessage(t("menu.addedToCart", { name: product.name }));
    navigate("/cart");
  };

  const normalizedOnlineProducts = products;
  const onlineCategories = [
    ALL_CATEGORY,
    ...Array.from(new Set(products.map((product) => String(product.category || "").trim()).filter(Boolean)))
  ];
  const filteredOnlineProducts =
    selectedCategory === ALL_CATEGORY
      ? normalizedOnlineProducts
      : normalizedOnlineProducts.filter((product) => product.category === selectedCategory);

  return (
    <div className="stack">
      <section className="menu-section">
        <div className="menu-section__intro">
          <h2>{t("menu.onlineTitle")}</h2>
          <p>{t("menu.onlineDesc")}</p>
        </div>
        <div className="menu-category-filter" role="tablist" aria-label={t("menu.onlineTitle")}>
          {onlineCategories.map((category) => (
            <button
              key={category}
              type="button"
              className={selectedCategory === category ? "is-active" : ""}
              onClick={() => setSelectedCategory(category)}
            >
              <CategoryIcon category={category} />
              <span>{category === ALL_CATEGORY ? t("menu.all") : translateMenuCategory(language, category)}</span>
            </button>
          ))}
        </div>
        {error ? <p className="message error">{error}</p> : null}
        {message ? <p className="message success">{message}</p> : null}
        <section className="product-grid product-grid--mobile">
          {filteredOnlineProducts.map((product) => (
            <ProductCard key={product._id} product={product} onAddToCart={handleAddToCart} />
          ))}
        </section>
      </section>

      <section className="menu-section">
        <div className="menu-section__intro">
          <h2>{t("menu.localTitle")}</h2>
          <p>{t("menu.localDesc")}</p>
        </div>
        <div className="local-menu-category-grid">
          {localMenuCategories.map((category) => (
            <section key={category.title} className="menu-local-board menu-local-board--detailed">
              <div className="menu-local-board__heading">
                <h3>{translateMenuCategory(language, category.title)}</h3>
                {category.subtitle ? <p>{translateMenuSubtitle(language, category.subtitle)}</p> : null}
              </div>
              <div className="menu-local-list">
                {category.items.map((item) => (
                  <article key={`${category.title}-${item.name}`} className="menu-local-item">
                    <div className="menu-local-item__head">
                      <strong>{translateMenuItem(language, item.name, item.name)}</strong>
                      <span>{item.price}</span>
                    </div>
                    <p>{translateMenuItemDescription(language, item.name, item.description)}</p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}

export default MenuPage;
