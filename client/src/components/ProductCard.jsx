import { getMediaUrl } from "../api/client";

const AddCartIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6 7h13l-1.3 6.2a1.5 1.5 0 0 1-1.5 1.2H9a1.5 1.5 0 0 1-1.5-1.2L6 5.5H3.5" />
    <path d="M9 19a1.1 1.1 0 1 0 0 2.2A1.1 1.1 0 0 0 9 19Zm7 0a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2Z" />
    <path d="M12.5 8.5v3.5" />
    <path d="M10.8 10.2h3.4" />
  </svg>
);

function ProductCard({ product, onAddToCart }) {
  const displayPrice = product.effectivePrice ?? product.promoPrice ?? product.price;
  const mediaUrl = getMediaUrl(product.image);

  return (
    <article className="product-card product-card--mockup">
      <div className="product-card__copy">
        <div className="pill pill--dark">{product.category}</div>
        {product.promoActive && product.promoLabel ? <div className="pill pill--promo">{product.promoLabel}</div> : null}
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-card__footer">
          <div className="price-stack">
            {product.promoActive && product.promoPrice ? (
              <span className="price-old">{Number(product.price).toFixed(2)} DT</span>
            ) : null}
            <strong className="price-pill">{Number(displayPrice).toFixed(2)} DT</strong>
          </div>
          <button
            type="button"
            className="button-small"
            onClick={() => onAddToCart({ ...product, price: displayPrice })}
          >
            <AddCartIcon />
            <span>Ajouter</span>
          </button>
        </div>
      </div>
      {mediaUrl ? <img src={mediaUrl} alt={product.name} className="product-card__image" /> : null}
    </article>
  );
}

export default ProductCard;
