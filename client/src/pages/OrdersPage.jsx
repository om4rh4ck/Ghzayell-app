import { useEffect, useState } from "react";
import { apiRequest } from "../api/client";
import StatusNotice from "../components/StatusNotice.jsx";

const statusLabels = {
  pending: "En attente",
  confirmed: "Confirmee",
  preparing: "En preparation",
  delivered: "Livree",
  cancelled: "Annulee"
};

const statusClasses = {
  pending: "status-pill status-pill--pending",
  confirmed: "status-pill status-pill--confirmed",
  preparing: "status-pill status-pill--preparing",
  delivered: "status-pill status-pill--delivered",
  cancelled: "status-pill status-pill--cancelled"
};

const fulfillmentLabels = {
  delivery: "Livraison",
  pickup: "Retrait sur place"
};

function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");
  const [dismissedNotices, setDismissedNotices] = useState({});

  useEffect(() => {
    apiRequest("/orders/mine")
      .then(setOrders)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="stack">
      <section className="section-heading">
        <div>
          <span className="eyebrow">Commandes</span>
          <h1>Suivez chaque commande et vos recompenses.</h1>
        </div>
      </section>
      {error ? <StatusNotice variant="error" title="Echec de chargement" message={error} /> : null}
      {!error && orders.length > 0 ? (
        <StatusNotice
          variant="info"
          title="Suivi client en temps reel"
          message="Consultez vos statuts de commande, livraisons et points gagnes dans une vue unique."
        />
      ) : null}
      {!error
        ? orders
            .slice(0, 3)
            .map((order) => {
              const noticeKey = `${order._id}-${order.status}`;
              if (dismissedNotices[noticeKey]) return null;

              if (order.status === "confirmed" || order.status === "preparing") {
                return (
                  <StatusNotice
                    key={noticeKey}
                    variant="info"
                    title={`Commande #${order._id.slice(-6)} confirmee`}
                    message="Commande confirmee: vous avez gagne 15 points."
                    onClose={() => setDismissedNotices((current) => ({ ...current, [noticeKey]: true }))}
                  />
                );
              }

              if (order.status === "delivered" && Number(order.pointsEarned || 0) >= 15) {
                return (
                  <StatusNotice
                    key={noticeKey}
                    variant="reward"
                    title={`Commande #${order._id.slice(-6)} approuvee`}
                    message="Bravo, vous avez gagne 15 points sur cette commande."
                    onClose={() => setDismissedNotices((current) => ({ ...current, [noticeKey]: true }))}
                  />
                );
              }

              return null;
            })
        : null}
      {!error && orders.length === 0 ? (
        <section className="card orders-empty-card">
          <h3>Aucune commande pour le moment</h3>
          <p>Vos prochaines commandes confirmees apparaitront ici avec leur statut et vos points.</p>
        </section>
      ) : (
        <div className="orders-list">
        {orders.map((order) => (
          <article key={order._id} className="card order-card">
            <div className="order-card__header">
              <div className="order-card__heading">
                <span className="eyebrow">Commande</span>
                <h3>#{order._id.slice(-6)}</h3>
              </div>
              <strong className="order-card__total">{order.total.toFixed(2)} DT</strong>
            </div>

            <div className="order-card__status-row">
              <span className={statusClasses[order.status] || "status-pill"}>
                {statusLabels[order.status] || order.status}
              </span>
              <span className="order-card__date">{new Date(order.createdAt).toLocaleString()}</span>
            </div>

            <div className="order-card__grid">
              <div className="order-info-box">
                <span>Client</span>
                <strong>{`${order.firstName || ""} ${order.lastName || ""}`.trim() || "Non renseigne"}</strong>
              </div>
              <div className="order-info-box">
                <span>Telephone</span>
                <strong>{order.phone || "Non renseigne"}</strong>
              </div>
              <div className="order-info-box">
                <span>Reception</span>
                <strong>{fulfillmentLabels[order.fulfillmentType] || "Livraison"}</strong>
              </div>
              <div className="order-info-box">
                <span>Points gagnes</span>
                <strong>{order.pointsEarned}</strong>
              </div>
              <div className="order-info-box">
                <span>Points utilises</span>
                <strong>{order.pointsRedeemed}</strong>
              </div>
              {order.fulfillmentType === "delivery" ? (
                <div className="order-info-box order-info-box--wide">
                  <span>Adresse</span>
                  <strong>{order.deliveryAddress || "Non renseignee"}</strong>
                </div>
              ) : (
                <div className="order-info-box order-info-box--wide">
                  <span>Retrait</span>
                  <strong>Disponible sur place environ 15 minutes apres validation.</strong>
                </div>
              )}
            </div>
          </article>
        ))}
        </div>
      )}
    </div>
  );
}

export default OrdersPage;
