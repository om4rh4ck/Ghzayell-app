import { useState } from "react";
import { apiRequest, getMediaUrl } from "../api/client";
import { useCart } from "../hooks/useCart";
import { useAuth } from "../hooks/useAuth";

function DeliveryIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M3 7.5A2.5 2.5 0 0 1 5.5 5h8A2.5 2.5 0 0 1 16 7.5V14h1.2c.5 0 .98.2 1.33.55l1.92 1.92c.35.35.55.83.55 1.33V19h-1.2a2.8 2.8 0 0 1-5.6 0H9.8a2.8 2.8 0 0 1-5.6 0H3V7.5Zm13 2v4.5h3.05l-1.7-1.7a.62.62 0 0 0-.44-.18H16V9.5ZM7 18.1a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8Zm10 0a1.4 1.4 0 1 0 .001 2.801A1.4 1.4 0 0 0 17 18.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PickupIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6 5.5A2.5 2.5 0 0 1 8.5 3h7A2.5 2.5 0 0 1 18 5.5V7h.5A2.5 2.5 0 0 1 21 9.5v5a2.5 2.5 0 0 1-2.5 2.5H18v1a3 3 0 0 1-6 0v-1h-1v1a3 3 0 0 1-6 0v-1h-.5A2.5 2.5 0 0 1 2 14.5v-5A2.5 2.5 0 0 1 4.5 7H5V5.5ZM8 7h8V5.5a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V7Zm-2.5 10v1a1 1 0 0 0 2 0v-1h-2Zm7 0v1a1 1 0 0 0 2 0v-1h-2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" fill="currentColor" />
      <path d="M5.5 19.5c1.7-2.7 4-4 6.5-4s4.8 1.3 6.5 4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8.3 4.8c.4-.4 1-.5 1.4-.2l2.2 1.6c.5.3.6 1 .3 1.5l-1 1.7a1 1 0 0 0 .1 1.1 14 14 0 0 0 3.4 3.4 1 1 0 0 0 1.1.1l1.7-1c.5-.3 1.2-.2 1.5.3l1.6 2.2c.3.4.2 1-.2 1.4l-1.2 1.2c-.8.8-1.9 1.2-3 1-2.9-.5-5.7-2.1-8.1-4.5s-4-5.2-4.5-8.1c-.2-1.1.2-2.2 1-3l1.2-1.2Z" fill="currentColor" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s6-5.5 6-11a6 6 0 1 0-12 0c0 5.5 6 11 6 11Z" fill="currentColor" />
      <path d="M12 12.5A2.5 2.5 0 1 0 12 7.5a2.5 2.5 0 0 0 0 5Z" fill="#fff7ec" />
    </svg>
  );
}

function PointsIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3.5 14.7 9l6 .9-4.3 4.2 1 6-5.4-2.9-5.4 2.9 1-6-4.3-4.2 6-.9L12 3.5Z" fill="currentColor" />
    </svg>
  );
}

function NotesIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 4.5h10A1.5 1.5 0 0 1 18.5 6v12A1.5 1.5 0 0 1 17 19.5H7A1.5 1.5 0 0 1 5.5 18V6A1.5 1.5 0 0 1 7 4.5Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8.5 9h7M8.5 12.5h7M8.5 16h4.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function QuantityIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 6.5h10A1.5 1.5 0 0 1 18.5 8v8A1.5 1.5 0 0 1 17 17.5H7A1.5 1.5 0 0 1 5.5 16V8A1.5 1.5 0 0 1 7 6.5Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 9v6M9 12h6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function RemoveIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 8.5h10l-.8 9A1.5 1.5 0 0 1 14.7 19h-5.4a1.5 1.5 0 0 1-1.5-1.5l-.8-9Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M9.5 8.5V6.8A1.3 1.3 0 0 1 10.8 5.5h2.4a1.3 1.3 0 0 1 1.3 1.3v1.7M6.5 8.5h11" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function ConfirmIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m7.5 12.5 2.8 2.8 6.2-6.3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function CartPage() {
  const { items, total, updateQuantity, removeFromCart, clearCart, itemCount } = useCart();
  const { user, refreshProfile } = useAuth();
  const [firstName, setFirstName] = useState(user?.name?.split(" ")[0] || "");
  const [lastName, setLastName] = useState(user?.name?.split(" ").slice(1).join(" ") || "");
  const [phone, setPhone] = useState("");
  const [fulfillmentType, setFulfillmentType] = useState("delivery");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [redeemPoints, setRedeemPoints] = useState(0);
  const [notes, setNotes] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleCheckout = async (event) => {
    event.preventDefault();
    setError("");
    setMessage("");

    try {
      await apiRequest("/orders", {
        method: "POST",
        body: JSON.stringify({
          items: items.map((item) => ({ product: item.product, quantity: item.quantity })),
          firstName,
          lastName,
          phone,
          fulfillmentType,
          deliveryAddress: fulfillmentType === "delivery" ? deliveryAddress : "",
          notes,
          redeemPoints: Number(redeemPoints)
        })
      });

      clearCart();
      setFirstName(user?.name?.split(" ")[0] || "");
      setLastName(user?.name?.split(" ").slice(1).join(" ") || "");
      setPhone("");
      setDeliveryAddress("");
      setNotes("");
      setRedeemPoints(0);
      setMessage("Votre commande a ete confirmee avec succes.");
      await refreshProfile();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="checkout-layout">
      <section className="card checkout-cart-card">
        <div className="checkout-section-header">
          <div>
            <span className="eyebrow">Panier</span>
            <h1>Votre panier</h1>
          </div>
          <strong className="checkout-count-badge">{itemCount} article{itemCount > 1 ? "s" : ""}</strong>
        </div>
        {items.length === 0 ? (
          <p>Votre panier est vide. Ajoutez quelque chose de delicieux depuis le menu.</p>
        ) : (
          <div className="stack">
            {items.map((item) => (
              <div key={item.product} className="cart-item cart-item--ecommerce">
                <img src={getMediaUrl(item.image)} alt={item.name} />
                <div className="cart-item__details">
                  <h3>{item.name}</h3>
                  <p>{item.price.toFixed(2)} DT</p>
                  <small>Total : {(item.price * item.quantity).toFixed(2)} DT</small>
                </div>
                <div className="cart-item__actions">
                  <label className="checkout-field checkout-field--compact">
                    <span>
                      <QuantityIcon />
                      <em>Quantite</em>
                    </span>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(event) => updateQuantity(item.product, Number(event.target.value))}
                    />
                  </label>
                  <button type="button" className="button-secondary button-secondary--danger" onClick={() => removeFromCart(item.product)}>
                    <RemoveIcon />
                    <span>Retirer</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="card checkout-form-card">
        <div className="checkout-section-header">
          <div>
            <span className="eyebrow">Checkout</span>
            <h2>Validation de commande</h2>
          </div>
          <strong className="price-highlight">{total.toFixed(2)} DT</strong>
        </div>

        <form className="checkout-form" onSubmit={handleCheckout}>
          <div className="checkout-mode-selector">
            <button
              type="button"
              className={`checkout-mode-card ${fulfillmentType === "delivery" ? "is-active" : ""}`}
              onClick={() => setFulfillmentType("delivery")}
            >
              <span className="checkout-mode-card__icon">
                <DeliveryIcon />
              </span>
              <span className="checkout-mode-card__content">
                <strong>Livraison</strong>
                <small>Recevez votre commande a l'adresse indiquee.</small>
              </span>
            </button>

            <button
              type="button"
              className={`checkout-mode-card ${fulfillmentType === "pickup" ? "is-active" : ""}`}
              onClick={() => setFulfillmentType("pickup")}
            >
              <span className="checkout-mode-card__icon">
                <PickupIcon />
              </span>
              <span className="checkout-mode-card__content">
                <strong>Retrait en local</strong>
                <small>Votre commande sera prete apres 15 minutes.</small>
              </span>
            </button>
          </div>

          <div className="checkout-grid">
            <label className="checkout-field">
              <span>
                <UserIcon />
                <em>Prenom</em>
              </span>
              <input
                type="text"
                placeholder="Votre prenom"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                required
              />
            </label>

            <label className="checkout-field">
              <span>
                <UserIcon />
                <em>Nom</em>
              </span>
              <input
                type="text"
                placeholder="Votre nom"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                required
              />
            </label>
          </div>

          <label className="checkout-field">
            <span>
              <PhoneIcon />
              <em>Numero de telephone</em>
            </span>
            <input
              type="tel"
              placeholder="+216 XX XXX XXX"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              required
            />
          </label>

          {fulfillmentType === "delivery" ? (
            <label className="checkout-field">
              <span>
                <LocationIcon />
                <em>Adresse de livraison</em>
              </span>
              <textarea
                placeholder="Saisissez votre adresse complete"
                value={deliveryAddress}
                onChange={(event) => setDeliveryAddress(event.target.value)}
                required
              />
            </label>
          ) : (
            <div className="checkout-info-banner">
              <span className="checkout-info-banner__icon">
                <PickupIcon />
              </span>
              <div>
                <strong>Retrait sur place confirme</strong>
                <p>Recuperez votre commande en local environ 15 minutes apres validation.</p>
              </div>
            </div>
          )}

          <label className="checkout-field">
            <span>
              <PointsIcon />
              <em>Utiliser mes points</em>
            </span>
            <input
              type="number"
              min="0"
              step="100"
              placeholder="Par tranche de 100 points"
              value={redeemPoints}
              onChange={(event) => setRedeemPoints(event.target.value)}
            />
          </label>

          <label className="checkout-field">
            <span>
              <NotesIcon />
              <em>Notes supplementaires</em>
            </span>
            <textarea
              placeholder="Instructions pour la cuisine ou la livraison"
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
            />
          </label>

          <div className="checkout-actions">
            <button type="submit" className="button-primary checkout-submit" disabled={!items.length}>
              <ConfirmIcon />
              <span>Confirmer la commande</span>
            </button>
          </div>
          {message && <p className="message success">{message}</p>}
          {error && <p className="message error">{error}</p>}
        </form>
      </section>
    </div>
  );
}

export default CartPage;
