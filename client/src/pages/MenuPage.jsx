import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { apiRequest } from "../api/client";
import ProductCard from "../components/ProductCard.jsx";
import { localMenuCategories } from "../data/localMenu.js";
import { useCart } from "../hooks/useCart";
import { useAuth } from "../hooks/useAuth";

const onlineCategories = ["TOUS", "BRIKA", "S7AN", "3EJJA", "LABLEBI", "HAJA TETCHRAB"];

function detectOnlineCategory(product) {
  const text = `${product.name ?? ""} ${product.description ?? ""} ${product.category ?? ""}`.toLowerCase();

  if (text.includes("boisson") || text.includes("drink") || text.includes("jus") || text.includes("citron")) {
    return "HAJA TETCHRAB";
  }
  if (text.includes("lablebi")) {
    return "LABLEBI";
  }
  if (text.includes("ojja") || text.includes("3ejja")) {
    return "3EJJA";
  }
  if (text.includes("plat") || text.includes("menu") || text.includes("s7an") || text.includes("pack")) {
    return "S7AN";
  }
  return "BRIKA";
}

function MenuPage() {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("TOUS");
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
    setMessage(`${product.name} a ete ajoute au panier.`);
    navigate("/cart");
  };

  const normalizedOnlineProducts = products.map((product) => ({
    ...product,
    category: detectOnlineCategory(product)
  }));
  const filteredOnlineProducts =
    selectedCategory === "TOUS"
      ? normalizedOnlineProducts
      : normalizedOnlineProducts.filter((product) => product.category === selectedCategory);

  return (
    <div className="stack">
      <section className="menu-section">
        <div className="menu-section__intro">
          <h2>Menu en ligne</h2>
          <p>Commandez vos favoris en ligne et ajoutez-les a votre panier.</p>
        </div>
        <div className="menu-category-filter" role="tablist" aria-label="Categories du menu en ligne">
          {onlineCategories.map((category) => (
            <button
              key={category}
              type="button"
              className={selectedCategory === category ? "is-active" : ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        {message && <p className="message success">{message}</p>}
        <section className="product-grid product-grid--mobile">
          {filteredOnlineProducts.map((product) => (
            <ProductCard key={product._id} product={product} onAddToCart={handleAddToCart} />
          ))}
        </section>
      </section>

      <section className="menu-section">
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
    </div>
  );
}

export default MenuPage;
