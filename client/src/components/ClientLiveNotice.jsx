import { useEffect, useMemo, useState } from "react";
import { apiRequest } from "../api/client";
import { useAuth } from "../hooks/useAuth";
import StatusNotice from "./StatusNotice.jsx";

function ClientLiveNotice() {
  const { user, refreshProfile } = useAuth();
  const [orders, setOrders] = useState([]);
  const [dismissed, setDismissed] = useState({});

  useEffect(() => {
    if (!user || user.role === "admin") return undefined;

    let isActive = true;
    const loadLiveState = async () => {
      try {
        const [ordersData] = await Promise.all([apiRequest("/orders/mine"), refreshProfile()]);
        if (isActive) {
          setOrders(ordersData.slice(0, 4));
        }
      } catch {
        // Silent: avoid disrupting the page.
      }
    };

    loadLiveState();
    const intervalId = setInterval(loadLiveState, 10000);
    return () => {
      isActive = false;
      clearInterval(intervalId);
    };
  }, [user, refreshProfile]);

  const notices = useMemo(
    () =>
      orders
        .map((order) => {
          const key = `${order._id}-${order.status}`;
          if (dismissed[key]) return null;

          if (order.status === "confirmed") {
            return {
              key,
              variant: "reward",
              title: `Commande #${order._id.slice(-6)} confirmee`,
              message: "Bravo, tu as gagne 15 points."
            };
          }

          if (order.status === "delivered" || order.status === "preparing") {
            return {
              key,
              variant: "info",
              title: `Commande #${order._id.slice(-6)} en cours`,
              message: "Suivi auto actif. Votre espace se met a jour automatiquement."
            };
          }

          return null;
        })
        .filter(Boolean),
    [orders, dismissed]
  );

  if (!notices.length) return null;

  return (
    <section className="live-notice-stack">
      {notices.map((notice) => (
        <StatusNotice
          key={notice.key}
          variant={notice.variant}
          title={notice.title}
          message={notice.message}
          onClose={() => setDismissed((current) => ({ ...current, [notice.key]: true }))}
        />
      ))}
    </section>
  );
}

export default ClientLiveNotice;
