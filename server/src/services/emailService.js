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

const readEnv = (key, fallback = "") => {
  const raw = String(process.env[key] ?? fallback).trim();
  return raw.replace(/^['"]|['"]$/g, "").trim();
};

const readBooleanEnv = (key, fallback = false) => {
  const value = readEnv(key, String(fallback));
  return value.toLowerCase() === "true";
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

const getMissingEmailEnv = () => EMAIL_REQUIRED_ENV.filter((key) => !readEnv(key));

export const isOrderEmailEnabled = () => getMissingEmailEnv().length === 0;

const getTransporter = () => {
  if (transporter) {
    return transporter;
  }

  transporter = nodemailer.createTransport({
    host: readEnv("SMTP_HOST"),
    port: Number(readEnv("SMTP_PORT", "587")),
    secure: readBooleanEnv("SMTP_SECURE") || Number(readEnv("SMTP_PORT", "587")) === 465,
    auth: {
      user: readEnv("SMTP_USER"),
      pass: readEnv("SMTP_PASS")
    },
    connectionTimeout: 15000,
    greetingTimeout: 15000,
    socketTimeout: 20000,
    tls: {
      servername: readEnv("SMTP_HOST")
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

const buildSection = (title, lines = []) => [title, "-".repeat(title.length), ...lines.filter(Boolean), ""].join("\n");

const buildBusinessOrderSubject = (order) => `Commande ${order.id} - ${BRAND.name}`;
const buildCustomerOrderSubject = (order) => `Commande ${order.id} recue - ${BRAND.name}`;
const buildSharedOrderSubject = (order) => `Commande ${order.id} - ${BRAND.name}`;

const buildBusinessOrderText = (order) => {
  const customerName = getCustomerName(order);
  const meta = getOrderMeta(order);

  return [
    `Nouvelle commande recue par ${BRAND.name}`,
    `Reference: #${order.id}`,
    "",
    buildSection("Client", [
      `Nom: ${customerName}`,
      `Email: ${order.user?.email || "Non renseigne"}`,
      `Telephone: ${order.phone || "Non renseigne"}`,
      `Compte: ${order.user?.name || "Non renseigne"}`,
      `ID client: ${order.user?.id || order.user?._id || "Non renseigne"}`
    ]),
    buildSection("Commande", [
      `Date: ${formatDateTime(order.createdAt)}`,
      `Statut: ${order.status || "pending"}`,
      `Mode: ${getFulfillmentLabel(order)}`,
      `Livraison / retrait: ${getDeliveryLabel(order)}`,
      `Notes: ${order.notes || "Aucune"}`
    ]),
    buildSection("Produits", [buildItemsText(order.items)]),
    buildSection("Resume", [
      `Articles: ${meta.itemsCount}`,
      `Sous-total: ${formatMoney(meta.subtotal)}`,
      `Reduction: ${formatMoney(meta.discount)}`,
      `Points utilises: ${meta.pointsRedeemed}`,
      `Points gagnes: ${meta.pointsEarned}`,
      `Total final: ${formatMoney(meta.total)}`
    ]),
    `Action conseillee: ouvrez le tableau de bord ou contactez le client si necessaire.`
  ].join("\n");
};

const buildCustomerOrderText = (order) => {
  const customerName = getCustomerName(order);
  const meta = getOrderMeta(order);

  return [
    `Bonjour ${customerName},`,
    "",
    `Votre commande #${order.id} a bien ete recue par ${BRAND.name}.`,
    "",
    buildSection("Recapitulatif", [
      `Date: ${formatDateTime(order.createdAt)}`,
      `Mode: ${getFulfillmentLabel(order)}`,
      `Livraison / retrait: ${getDeliveryLabel(order)}`,
      `Telephone: ${order.phone || "Non renseigne"}`,
      `Notes: ${order.notes || "Aucune"}`
    ]),
    buildSection("Vos produits", [buildItemsText(order.items)]),
    buildSection("Montants", [
      `Articles: ${meta.itemsCount}`,
      `Sous-total: ${formatMoney(meta.subtotal)}`,
      `Reduction: ${formatMoney(meta.discount)}`,
      `Points utilises: ${meta.pointsRedeemed}`,
      `Points gagnes: ${meta.pointsEarned}`,
      `Total final: ${formatMoney(meta.total)}`
    ]),
    `Merci pour votre confiance et a bientot chez ${BRAND.name}.`
  ].join("\n");
};

const buildSharedOrderText = (order) => {
  return [
    `Commande #${order.id} - ${BRAND.name}`,
    "",
    buildCustomerOrderText(order),
    "",
    buildSection("Copie interne", [
      `Cette adresse a recu une seule copie pour eviter les doublons lorsque le client et la boite pro sont identiques.`
    ])
  ].join("\n");
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

      return `
        <tr>
          <td style="padding:16px;border-bottom:1px solid ${BRAND.line};vertical-align:top;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              <tr>
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
            <div style="font-size:14px;letter-spacing:0.16em;text-transform:uppercase;opacity:0.9;margin-bottom:12px;">${escapeHtml(
              BRAND.name
            )}</div>
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

const buildCustomerIntroHtml = (order) => `
  <div style="margin:0;padding:24px 0;background:${BRAND.canvas};font-family:Arial,sans-serif;color:${BRAND.ink};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:760px;margin:0 auto;background:#ffffff;border-radius:28px;overflow:hidden;border:1px solid ${BRAND.line};">
      <tr>
        <td style="padding:28px 32px;background:linear-gradient(135deg, ${BRAND.accentDark}, ${BRAND.accent});color:#ffffff;">
          <div style="font-size:14px;letter-spacing:0.16em;text-transform:uppercase;opacity:0.9;margin-bottom:12px;">${escapeHtml(
            BRAND.name
          )}</div>
          <div style="font-size:12px;letter-spacing:0.12em;text-transform:uppercase;opacity:0.9;margin-bottom:8px;">Commande recue</div>
          <h1 style="margin:0 0 10px;font-size:32px;line-height:1.15;">Merci ${escapeHtml(getCustomerName(order))}</h1>
          <p style="margin:0;font-size:15px;line-height:1.6;max-width:520px;">
            Votre commande #${escapeHtml(order.id)} a bien ete enregistree chez ${escapeHtml(
              BRAND.name
            )}. Voici votre recapitulatif.
          </p>
        </td>
      </tr>
      <tr>
        <td style="padding:24px 26px 6px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            <tr>
              ${buildMetricCard("Commande", `#${order.id}`)}
              ${buildMetricCard("Mode", getFulfillmentLabel(order))}
              ${buildMetricCard("Total", formatMoney(getOrderMeta(order).total))}
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:10px 32px 0;">
          <h2 style="margin:0 0 14px;font-size:20px;color:${BRAND.ink};">Informations de votre commande</h2>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${buildInfoTableRows(order)}
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:26px 32px 0;">
          <h2 style="margin:0 0 14px;font-size:20px;color:${BRAND.ink};">Vos produits</h2>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid ${BRAND.line};border-radius:20px;overflow:hidden;background:${BRAND.panel};">
            ${buildItemsHtml(order.items)}
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:26px 32px 32px;">
          <h2 style="margin:0 0 14px;font-size:20px;color:${BRAND.ink};">Resume</h2>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.panel};border:1px solid ${BRAND.line};border-radius:20px;padding:20px;">
            ${buildSummaryRows(order)}
          </table>
        </td>
      </tr>
    </table>
  </div>
`;

const sendMail = async ({ to, subject, text, html, replyTo }) => {
  if (!to) {
    return null;
  }

  const useHtmlEmail = readBooleanEnv("ENABLE_HTML_ORDER_EMAIL", false);

  const info = await getTransporter().sendMail({
    from: readEnv("MAIL_FROM"),
    to,
    replyTo,
    subject,
    text,
    ...(useHtmlEmail && html ? { html } : {})
  });

  console.log(`Order email sent to ${to}`, {
    accepted: info.accepted,
    rejected: info.rejected,
    messageId: info.messageId,
    response: info.response
  });

  return info;
};

export const sendOrderCreatedEmails = async (order) => {
  const customerEmail = String(order?.user?.email || "").trim().toLowerCase();
  const businessEmail = readEnv("ORDER_NOTIFICATION_EMAIL").toLowerCase();
  const hasSharedRecipient = customerEmail && businessEmail && customerEmail === businessEmail;

  if (!isOrderEmailEnabled()) {
    if (!didWarnAboutEmailConfig) {
      didWarnAboutEmailConfig = true;
      console.warn(
        `Order email skipped. Missing email env vars: ${getMissingEmailEnv().join(", ") || "ORDER_NOTIFICATION_EMAIL"}`
      );
    }
    return;
  }

  const tasks = [];

  if (hasSharedRecipient) {
    tasks.push(
      sendMail({
        to: businessEmail,
        replyTo: businessEmail || undefined,
        subject: buildSharedOrderSubject(order),
        text: buildSharedOrderText(order)
      })
    );
  } else {
    if (businessEmail) {
      tasks.push(
        sendMail({
          to: businessEmail,
          replyTo: customerEmail || undefined,
          subject: buildBusinessOrderSubject(order),
          text: buildBusinessOrderText(order),
          html: buildOrderHtml(order)
        })
      );
    }

    if (customerEmail) {
      tasks.push(
        sendMail({
          to: customerEmail,
          replyTo: businessEmail || undefined,
          subject: buildCustomerOrderSubject(order),
          text: buildCustomerOrderText(order),
          html: buildCustomerIntroHtml(order)
        })
      );
    }
  }

  if (!tasks.length) {
    console.warn(`Order email skipped for order #${order.id}: no recipients available.`);
    return;
  }

  const results = await Promise.allSettled(tasks);
  const failures = results.filter((result) => result.status === "rejected");

  if (failures.length) {
    throw failures[0].reason;
  }
};
