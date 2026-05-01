const CATEGORY_LABELS = {
  "sandwich baguettes": { fr: "Sandwich baguettes", en: "Baguette sandwiches" },
  "sandwich kaskrout": { fr: "Sandwich kaskrout", en: "Kaskrout sandwiches" },
  huitieme: { fr: "Huitieme", en: "Quarter baguette" },
  "les plats": { fr: "Les plats", en: "Main plates" },
  "les ojja": { fr: "Les ojja", en: "Ojja dishes" },
  "les brik": { fr: "Les brik", en: "Brik specialties" },
  "les supplements": { fr: "Les supplements", en: "Extras" },
  "les boissons": { fr: "Les boissons", en: "Drinks" },
  boissons: { fr: "Boissons", en: "Drinks" },
  brik: { fr: "Brik", en: "Brik" },
  plats: { fr: "Plats", en: "Plates" },
  ojja: { fr: "Ojja", en: "Ojja" },
  supplement: { fr: "Supplement", en: "Extra" },
  sandwich: { fr: "Sandwich", en: "Sandwich" }
};

const SUBTITLE_LABELS = {
  "demi baguette": { fr: "Demi baguette", en: "Half baguette" },
  "1/4 de baguette": { fr: "1/4 de baguette", en: "Quarter baguette" },
  "notre specialite": { fr: "Notre specialite", en: "Our specialty" }
};

export function translateMenuCategory(language, value) {
  const normalized = String(value || "").trim().toLowerCase();
  const labels = CATEGORY_LABELS[normalized];

  if (!labels) {
    return value;
  }

  return language === "fr" ? labels.fr : labels.en;
}

export function translateMenuSubtitle(language, value) {
  const normalized = String(value || "").trim().toLowerCase();
  const labels = SUBTITLE_LABELS[normalized];

  if (!labels) {
    return value;
  }

  return language === "fr" ? labels.fr : labels.en;
}
