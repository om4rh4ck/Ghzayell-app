import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { apiRequest } from "../api/client";
import ProductCard from "../components/ProductCard.jsx";
import { useCart } from "../hooks/useCart";
import { useAuth } from "../hooks/useAuth";
import { useI18n } from "../hooks/useI18n.js";

function SearchPage() {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const { t } = useI18n();
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    apiRequest("/products")
      .then(setProducts)
      .catch((err) => setError(err.message));
  }, []);

  const filteredProducts = useMemo(() => {
    const term = query.trim().toLowerCase();

    if (!term) {
      return products;
    }

    return products.filter((product) =>
      [product.name, product.description, product.category].some((value) =>
        String(value || "")
          .toLowerCase()
          .includes(term)
      )
    );
  }, [products, query]);

  const handleAddToCart = (product) => {
    if (!user) {
      navigate("/auth", { state: { from: location } });
      return;
    }

    addToCart(product);
    setMessage(t("search.addedToCart", { name: product.name }));
    navigate("/cart");
  };

  return (
    <div className="stack">
      <section className="search-header-card">
        <div className="search-title-row">
          <div>
            <span className="eyebrow auth-eyebrow">{t("search.eyebrow")}</span>
            <h1>{t("search.title")}</h1>
          </div>
        </div>

        <label className="search-field">
          <span>{t("search.label")}</span>
          <input
            type="search"
            placeholder={t("search.placeholder")}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
      </section>

      {error && <p className="message error">{error}</p>}
      {message && <p className="message success">{message}</p>}

      {!error && filteredProducts.length === 0 ? (
        <section className="card">
          <h3>{t("search.noResultsTitle")}</h3>
          <p>{t("search.noResultsDesc")}</p>
        </section>
      ) : (
        <section className="product-grid product-grid--mobile">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} onAddToCart={handleAddToCart} />
          ))}
        </section>
      )}
    </div>
  );
}

export default SearchPage;
