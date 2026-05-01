import { useEffect, useState } from "react";
import { apiRequest } from "../api/client";
import StatusNotice from "../components/StatusNotice.jsx";
import { useI18n } from "../hooks/useI18n.js";

const statusClasses = {
  pending: "status-pill status-pill--pending",
  confirmed: "status-pill status-pill--confirmed",
  preparing: "status-pill status-pill--preparing",
  delivered: "status-pill status-pill--delivered",
  cancelled: "status-pill status-pill--cancelled"
};

function OrdersPage() {
  const { t } = useI18n();
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");
  const [dismissedNotices, setDismissedNotices] = useState({});

  const statusLabels = {
    pending: t("orders.status.pending"),
    confirmed: t("orders.status.confirmed"),
    preparing: t("orders.status.preparing"),
    delivered: t("orders.status.delivered"),
    cancelled: t("orders.status.cancelled")
  };

  const fulfillmentLabels = {
    delivery: t("orders.delivery"),
    pickup: t("orders.pickup")
  };

  useEffect(() => {
    apiRequest("/orders/mine")
      .then(setOrders)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="stack">
      <section className="section-heading">
        <div>
          <span className="eyebrow">{t("orders.eyebrow")}</span>
          <h1>{t("orders.title")}</h1>
        </div>
      </section>
      {error ? <StatusNotice variant="error" title={t("orders.loadError")} message={error} /> : null}
      {!error && orders.length > 0 ? (
        <StatusNotice
          variant="info"
          title={t("orders.realtimeTitle")}
          message={t("orders.realtimeDesc")}
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
                    title={`${t("orders.orderLabel")} #${order._id.slice(-6)} ${t("orders.status.confirmed").toLowerCase()}`}
                    message={`${t("orders.orderLabel")} ${t("orders.status.confirmed").toLowerCase()} : ${t("orders.pointsEarned")} 15.`}
                    onClose={() => setDismissedNotices((current) => ({ ...current, [noticeKey]: true }))}
                  />
                );
              }

              if (order.status === "delivered" && Number(order.pointsEarned || 0) >= 15) {
                return (
                  <StatusNotice
                    key={noticeKey}
                    variant="reward"
                    title={`${t("orders.orderLabel")} #${order._id.slice(-6)} ${t("orders.status.delivered").toLowerCase()}`}
                    message={`${t("orders.pointsEarned")} : 15.`}
                    onClose={() => setDismissedNotices((current) => ({ ...current, [noticeKey]: true }))}
                  />
                );
              }

              return null;
            })
        : null}
      {!error && orders.length === 0 ? (
        <section className="card orders-empty-card">
          <h3>{t("orders.emptyTitle")}</h3>
          <p>{t("orders.emptyDesc")}</p>
        </section>
      ) : (
        <div className="orders-list">
        {orders.map((order) => (
          <article key={order._id} className="card order-card">
            <div className="order-card__header">
              <div className="order-card__heading">
                <span className="eyebrow">{t("orders.orderLabel")}</span>
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
                <span>{t("orders.customer")}</span>
                <strong>{`${order.firstName || ""} ${order.lastName || ""}`.trim() || t("orders.notProvided")}</strong>
              </div>
              <div className="order-info-box">
                <span>{t("orders.phone")}</span>
                <strong>{order.phone || t("orders.notProvided")}</strong>
              </div>
              <div className="order-info-box">
                <span>{t("orders.fulfillment")}</span>
                <strong>{fulfillmentLabels[order.fulfillmentType] || t("orders.delivery")}</strong>
              </div>
              <div className="order-info-box">
                <span>{t("orders.pointsEarned")}</span>
                <strong>{order.pointsEarned}</strong>
              </div>
              <div className="order-info-box">
                <span>{t("orders.pointsRedeemed")}</span>
                <strong>{order.pointsRedeemed}</strong>
              </div>
              {order.fulfillmentType === "delivery" ? (
                <div className="order-info-box order-info-box--wide">
                  <span>{t("common.address")}</span>
                  <strong>{order.deliveryAddress || t("orders.notProvidedF")}</strong>
                </div>
              ) : (
                <div className="order-info-box order-info-box--wide">
                  <span>{t("orders.pickup")}</span>
                  <strong>{t("orders.pickupReady")}</strong>
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
