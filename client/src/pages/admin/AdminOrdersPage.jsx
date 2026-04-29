import { useEffect, useState } from "react";
import { apiRequest, getMediaUrl } from "../../api/client";

const statuses = [
  { value: "pending", label: "En attente" },
  { value: "confirmed", label: "Confirmee" },
  { value: "preparing", label: "En preparation" },
  { value: "delivered", label: "Livree" },
  { value: "cancelled", label: "Annulee" }
];

function AdminOrdersPage() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const loadOrders = async () => {
    const data = await apiRequest("/orders");
    setOrders(data);
  };

  useEffect(() => {
    loadOrders().catch((err) => {
      if (!err?.silentRedirect) {
        setError(err.message);
      }
    });
  }, []);

  const updateStatus = async (id, status) => {
    setError("");
    setMessage("");

    try {
      await apiRequest(`/orders/${id}/status`, {
        method: "PATCH",
        body: JSON.stringify({ status })
      });
      await loadOrders();
      setMessage("Le statut de la commande a ete mis a jour avec succes.");
    } catch (err) {
      if (!err?.silentRedirect) {
        setError(err.message);
      }
    }
  };

  const handleDeleteOrder = async (id) => {
    setError("");
    setMessage("");
    try {
      await apiRequest(`/orders/${id}`, { method: "DELETE" });
      await loadOrders();
      setMessage("Commande supprimee avec succes.");
    } catch (err) {
      if (!err?.silentRedirect) {
        setError(err.message);
      }
    }
  };

  const pendingCount = orders.filter((order) => order.status === "pending").length;
  const activeCount = orders.filter((order) => ["confirmed", "preparing"].includes(order.status)).length;
  const deliveredCount = orders.filter((order) => order.status === "delivered").length;
  const totalRevenue = orders.reduce((sum, order) => sum + Number(order.total || 0), 0);

  return (
    <div className="stack">
      <section className="section-heading">
        <div>
          <span className="eyebrow">Commandes</span>
          <h1>Gestion des commandes</h1>
          <p>Suivez les commandes en temps reel et mettez a jour chaque statut.</p>
        </div>
      </section>
      <section className="admin-orders-kpi-grid">
        <article className="admin-orders-kpi-card">
          <span>En attente</span>
          <strong>{pendingCount}</strong>
        </article>
        <article className="admin-orders-kpi-card">
          <span>En cours</span>
          <strong>{activeCount}</strong>
        </article>
        <article className="admin-orders-kpi-card">
          <span>Livrees</span>
          <strong>{deliveredCount}</strong>
        </article>
        <article className="admin-orders-kpi-card">
          <span>Revenu total</span>
          <strong>{totalRevenue.toFixed(2)} DT</strong>
        </article>
      </section>
      {message && <p className="message success">{message}</p>}
      {error && <p className="message error">{error}</p>}
      {orders.map((order) => (
        <article key={order._id} className="card admin-order-card">
          <div className="admin-order-card__top">
            <div className="admin-order-card__identity">
              <span className="eyebrow">Commande #{order._id.slice(-6)}</span>
              <h3>{order.user?.name || "Client"}</h3>
              <p>{order.user?.email || "Email non renseigne"}</p>
            </div>
            <div className="admin-order-card__summary">
              <strong>{order.total.toFixed(2)} DT</strong>
              <span className={`status-pill ${`status-pill--${order.status}`}`}>
                {statuses.find((status) => status.value === order.status)?.label || order.status}
              </span>
            </div>
          </div>

          <div className="admin-order-card__meta">
            <div className="admin-order-card__meta-box">
              <span>Client checkout</span>
              <strong>{`${order.firstName || ""} ${order.lastName || ""}`.trim() || "Non renseigne"}</strong>
            </div>
            <div className="admin-order-card__meta-box">
              <span>Telephone</span>
              <strong>{order.phone || "Non renseigne"}</strong>
            </div>
            <div className="admin-order-card__meta-box">
              <span>Mode</span>
              <strong>{order.fulfillmentType === "pickup" ? "Retrait sur place" : "Livraison"}</strong>
            </div>
            <div className="admin-order-card__meta-box">
              <span>Articles</span>
              <strong>{order.items?.length || 0}</strong>
            </div>
            <div className="admin-order-card__meta-box">
              <span>Points gagnes</span>
              <strong>{order.pointsEarned}</strong>
            </div>
            <div className="admin-order-card__meta-box">
              <span>Points utilises</span>
              <strong>{order.pointsRedeemed}</strong>
            </div>
          </div>

          <div className="admin-order-card__details">
            <div className="admin-order-card__detail-row">
              <span>Date</span>
              <strong>{new Date(order.createdAt).toLocaleString()}</strong>
            </div>
            <div className="admin-order-card__detail-row">
              <span>{order.fulfillmentType === "pickup" ? "Retrait" : "Adresse"}</span>
              <strong>
                {order.fulfillmentType === "pickup"
                  ? "Disponible environ 15 minutes apres validation."
                  : order.deliveryAddress || "Non renseignee"}
              </strong>
            </div>
            {order.notes ? (
              <div className="admin-order-card__detail-row">
                <span>Notes</span>
                <strong>{order.notes}</strong>
              </div>
            ) : null}
          </div>

          {order.items?.length ? (
            <div className="admin-order-items">
              {order.items.map((item) => (
                <div key={item._id} className="admin-order-item">
                  {getMediaUrl(item.image) ? <img src={getMediaUrl(item.image)} alt={item.name} /> : <div className="admin-order-item__image-placeholder" aria-hidden="true" />}
                  <div>
                    <strong>{item.name}</strong>
                    <p>Quantite : {item.quantity}</p>
                    <p>Prix unitaire : {item.price.toFixed(2)} DT</p>
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          <label className="stack admin-order-card__status">
            <span>Changer le statut</span>
            <select value={order.status} onChange={(event) => updateStatus(order._id, event.target.value)}>
              {statuses.map((status) => (
                <option key={status.value} value={status.value}>
                  {status.label}
                </option>
              ))}
            </select>
          </label>
          <button type="button" className="button-secondary button-secondary--danger" onClick={() => handleDeleteOrder(order._id)}>
            Supprimer la commande
          </button>
        </article>
      ))}
    </div>
  );
}

export default AdminOrdersPage;
