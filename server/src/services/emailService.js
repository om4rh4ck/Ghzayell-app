import nodemailer from "nodemailer";

let transporter;
let didWarnAboutEmailConfig = false;

const EMAIL_REQUIRED_ENV = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "MAIL_FROM"];

const BRAND = {
  name: "Ghzaiel Food",
  accent: "#bc3f1f",
  accentDark: "#8d2c14",
  ink: "#24160f",
  softInk: "#6f5a50",
  line: "#ead8cf",
  panel: "#fffaf6",
  canvas: "#f7efe8",
  success: "#255b36"
};

const formatMoney = (value) => `${Number(value || 0).toFixed(2)} DT`;

const formatDateTime = (value) => {
  const date = value ? new Date(value) : new Date();
  if (Number.isNaN(date.getTime())) {
    return "Non disponible";
  }

  return new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "full",
    timeStyle: "short"
  }).format(date);
};

const escapeHtml = (value) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const getMissingEmailEnv = () => EMAIL_REQUIRED_ENV.filter((key) => !String(process.env[key] || "").trim());

export const isOrderEmailEnabled = () => getMissingEmailEnv().length === 0;

const getTransporter = () => {
  if (transporter) {
    return transporter;
  }

  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure:
      String(process.env.SMTP_SECURE || "").trim().toLowerCase() === "true" || Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  return transporter;
};

const getCustomerName = (order) => `${order.firstName || ""} ${order.lastName || ""}`.trim() || order.user?.name || "Client";

const getFulfillmentLabel = (order) => (order.fulfillmentType === "pickup" ? "Retrait sur place" : "Livraison");

const getDeliveryLabel = (order) =>
  order.fulfillmentType === "delivery" ? order.deliveryAddress || "Non renseignee" : "Retrait sur place";

const getOrderMeta = (order) => {
  const subtotal = (order.items || []).reduce(
    (sum, item) => sum + Number(item.price || 0) * Math.max(Number(item.quantity || 0), 1),
    0
  );
  const total = Number(order.total || 0);
  const discount = Math.max(subtotal - total, 0);
  const itemsCount = (order.items || []).reduce((sum, item) => sum + Math.max(Number(item.quantity || 0), 1), 0);

  return {
    subtotal,
    total,
    discount,
    itemsCount,
    pointsRedeemed: Number(order.pointsRedeemed || 0),
    pointsEarned: Number(order.pointsEarned || 0)
  };
};

const getInfoRows = (order) => [
  ["Commande", `#${order.id}`],
  ["Date", formatDateTime(order.createdAt)],
  ["Statut", order.status || "pending"],
  ["Mode", getFulfillmentLabel(order)],
  ["Adresse / retrait", getDeliveryLabel(order)],
  ["Notes", order.notes || "Aucune"],
  ["Compte client", order.user?.name || "Non renseigne"],
  ["Email client", order.user?.email || "Non renseigne"],
  ["Nom complet", getCustomerName(order)],
  ["Telephone", order.phone || "Non renseigne"],
  ["ID client", order.user?.id || order.user?._id || "Non renseigne"]
];

const buildItemsText = (items = []) =>
  items
    .map((item, index) => {
      const quantity = Math.max(Number(item.quantity || 0), 1);
      const unitPrice = Number(item.price || 0);
      const lineTotal = unitPrice * quantity;
      return [
        `${index + 1}. ${item.name}`,
        `   - Produit ID: ${item.product || item.productId || "Non renseigne"}`,
        `   - Quantite: ${quantity}`,
        `   - Prix unitaire: ${formatMoney(unitPrice)}`,
        `   - Sous-total ligne: ${formatMoney(lineTotal)}`
      ].join("\n");
    })
    .join("\n");

const buildSummaryText = (order) => {
  const meta = getOrderMeta(order);

  return [
    `Articles: ${meta.itemsCount}`,
    `Sous-total: ${formatMoney(meta.subtotal)}`,
    `Reduction: ${formatMoney(meta.discount)}`,
    `Points utilises: ${meta.pointsRedeemed}`,
    `Points gagnes: ${meta.pointsEarned}`,
    `Total final: ${formatMoney(meta.total)}`
  ].join("\n");
};

const buildOrderSubject = (order) => `Nouvelle commande #${order.id} - ${BRAND.name}`;

const buildOrderText = (order) => {
  const header = [`Nouvelle commande ${BRAND.name}`, `Commande #${order.id}`, ""];
  const infoRows = getInfoRows(order).map(([label, value]) => `${label}: ${value}`);

  return [...header, ...infoRows, "", "Produits:", buildItemsText(order.items), "", "Resume:", buildSummaryText(order)].join(
    "\n"
  );
};

const buildMetricCard = (label, value) => `
  <td style="padding:0 6px 12px 6px;vertical-align:top;">
    <div style="background:${BRAND.panel};border:1px solid ${BRAND.line};border-radius:18px;padding:16px 14px;">
      <div style="font-size:12px;letter-spacing:0.06em;text-transform:uppercase;color:${BRAND.softInk};margin-bottom:6px;">${escapeHtml(
        label
      )}</div>
      <div style="font-size:20px;font-weight:700;color:${BRAND.ink};">${escapeHtml(value)}</div>
    </div>
  </td>
`;

const buildInfoTableRows = (order) =>
  getInfoRows(order)
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 0;color:${BRAND.softInk};font-size:14px;vertical-align:top;width:180px;">${escapeHtml(label)}</td>
          <td style="padding:10px 0;color:${BRAND.ink};font-size:14px;font-weight:600;">${escapeHtml(value)}</td>
        </tr>
      `
    )
    .join("");

const buildItemsHtml = (items = []) =>
  items
    .map((item, index) => {
      const quantity = Math.max(Number(item.quantity || 0), 1);
      const unitPrice = Number(item.price || 0);
      const lineTotal = unitPrice * quantity;
      const image = String(item.image || "").trim();
      const hasImage = /^https?:\/\//i.test(image) || image.startsWith("/");

      return `
        <tr>
          <td style="padding:16px;border-bottom:1px solid ${BRAND.line};vertical-align:top;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="width:74px;vertical-align:top;padding-right:14px;">
                  ${
                    hasImage
                      ? `<img src="${escapeHtml(image)}" alt="${escapeHtml(item.name)}" width="60" height="60" style="display:block;border-radius:14px;object-fit:cover;background:#f0e7e0;" />`
                      : `<div style="width:60px;height:60px;border-radius:14px;background:${BRAND.canvas};border:1px solid ${BRAND.line};text-align:center;line-height:60px;color:${BRAND.softInk};font-size:12px;">Produit</div>`
                  }
                </td>
                <td style="vertical-align:top;">
                  <div style="font-size:16px;font-weight:700;color:${BRAND.ink};margin-bottom:4px;">${index + 1}. ${escapeHtml(
                    item.name
                  )}</div>
                  <div style="font-size:13px;color:${BRAND.softInk};margin-bottom:8px;">ID produit: ${escapeHtml(
                    item.product || item.productId || "Non renseigne"
                  )}</div>
                  <div style="font-size:14px;color:${BRAND.ink};">Quantite: <strong>${quantity}</strong></div>
                  <div style="font-size:14px;color:${BRAND.ink};">Prix unitaire: <strong>${escapeHtml(
                    formatMoney(unitPrice)
                  )}</strong></div>
                  <div style="font-size:14px;color:${BRAND.ink};">Sous-total ligne: <strong>${escapeHtml(
                    formatMoney(lineTotal)
                  )}</strong></div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      `;
    })
    .join("");

const buildSummaryRows = (order) => {
  const meta = getOrderMeta(order);
  const rows = [
    ["Articles", String(meta.itemsCount)],
    ["Sous-total", formatMoney(meta.subtotal)],
    ["Reduction", formatMoney(meta.discount)],
    ["Points utilises", String(meta.pointsRedeemed)],
    ["Points gagnes", String(meta.pointsEarned)],
    ["Total final", formatMoney(meta.total)]
  ];

  return rows
    .map(
      ([label, value], index) => `
        <tr>
          <td style="padding:${index === rows.length - 1 ? "16px 0 0" : "0 0 12px"};color:${BRAND.softInk};font-size:14px;">${escapeHtml(
            label
          )}</td>
          <td style="padding:${index === rows.length - 1 ? "16px 0 0" : "0 0 12px"};color:${BRAND.ink};font-size:${
            index === rows.length - 1 ? "20px" : "15px"
          };font-weight:700;text-align:right;">${escapeHtml(value)}</td>
        </tr>
      `
    )
    .join("");
};

const buildOrderHtml = (order) => {
  const meta = getOrderMeta(order);

  return `
    <div style="margin:0;padding:24px 0;background:${BRAND.canvas};font-family:Arial,sans-serif;color:${BRAND.ink};">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:760px;margin:0 auto;background:#ffffff;border-radius:28px;overflow:hidden;border:1px solid ${BRAND.line};">
        <tr>
          <td style="padding:28px 32px;background:linear-gradient(135deg, ${BRAND.accentDark}, ${BRAND.accent});color:#ffffff;">
            <div style="font-size:12px;letter-spacing:0.12em;text-transform:uppercase;opacity:0.9;margin-bottom:8px;">Nouvelle commande</div>
            <h1 style="margin:0 0 10px;font-size:32px;line-height:1.15;">Commande #${escapeHtml(order.id)}</h1>
            <p style="margin:0;font-size:15px;line-height:1.6;max-width:520px;">
              Une nouvelle commande a ete enregistree sur ${escapeHtml(BRAND.name)}. Vous trouverez ci-dessous toutes les informations client, produit et paiement.
            </p>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 26px 6px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              <tr>
                ${buildMetricCard("Client", getCustomerName(order))}
                ${buildMetricCard("Mode", getFulfillmentLabel(order))}
                ${buildMetricCard("Total", formatMoney(meta.total))}
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:10px 32px 0;">
            <h2 style="margin:0 0 14px;font-size:20px;color:${BRAND.ink};">Informations commande et client</h2>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              ${buildInfoTableRows(order)}
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:26px 32px 0;">
            <h2 style="margin:0 0 14px;font-size:20px;color:${BRAND.ink};">Produits commandes</h2>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid ${BRAND.line};border-radius:20px;overflow:hidden;background:${BRAND.panel};">
              ${buildItemsHtml(order.items)}
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:26px 32px 32px;">
            <h2 style="margin:0 0 14px;font-size:20px;color:${BRAND.ink};">Resume financier</h2>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.panel};border:1px solid ${BRAND.line};border-radius:20px;padding:20px;">
              ${buildSummaryRows(order)}
            </table>
            <div style="margin-top:18px;padding:16px 18px;background:#f5fbf7;border:1px solid #cde7d5;border-radius:16px;color:${BRAND.success};font-size:14px;line-height:1.6;">
              Cet email est envoye automatiquement apres validation de la creation de commande sur le site. Repondez directement a ce message pour contacter rapidement le client.
            </div>
          </td>
        </tr>
      </table>
    </div>
  `;
};

export const sendOrderCreatedEmails = async (order) => {
  const customerEmail = String(order?.user?.email || "").trim().toLowerCase();
  const businessEmail = String(process.env.ORDER_NOTIFICATION_EMAIL || "").trim().toLowerCase();
  const recipients = [...new Set([customerEmail, businessEmail].filter(Boolean))];

  if (!recipients.length) {
    return;
  }

  if (!isOrderEmailEnabled()) {
    if (!didWarnAboutEmailConfig) {
      didWarnAboutEmailConfig = true;
      console.warn(
        `Order email skipped. Missing email env vars: ${getMissingEmailEnv().join(", ") || "ORDER_NOTIFICATION_EMAIL"}`
      );
    }
    return;
  }

  const replyTo = customerEmail || undefined;
  const mailOptions = {
    from: process.env.MAIL_FROM,
    to: recipients.join(", "),
    replyTo,
    subject: buildOrderSubject(order),
    text: buildOrderText(order),
    html: buildOrderHtml(order)
  };

  await getTransporter().sendMail(mailOptions);
};
