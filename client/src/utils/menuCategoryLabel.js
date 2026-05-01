const CATEGORY_LABELS = {
  "sandwich baguettes": { fr: "Sandwich baguettes", en: "Baguette sandwiches", ar: "ساندويتش الباغيت" },
  "sandwich kaskrout": { fr: "Sandwich kaskrout", en: "Kaskrout sandwiches", ar: "ساندويتش كاسكروت" },
  huitieme: { fr: "Huitieme", en: "Quarter baguette", ar: "ربع باغيت" },
  "les plats": { fr: "Les plats", en: "Main plates", ar: "الأطباق الرئيسية" },
  "les ojja": { fr: "Les ojja", en: "Ojja dishes", ar: "أطباق الأجة" },
  "les brik": { fr: "Les brik", en: "Brik specialties", ar: "تخصصات البريك" },
  "les supplements": { fr: "Les supplements", en: "Extras", ar: "الإضافات" },
  "les boissons": { fr: "Les boissons", en: "Drinks", ar: "المشروبات" },
  boissons: { fr: "Boissons", en: "Drinks", ar: "المشروبات" },
  brik: { fr: "Brik", en: "Brik", ar: "البريك" },
  plats: { fr: "Plats", en: "Plates", ar: "الأطباق" },
  ojja: { fr: "Ojja", en: "Ojja", ar: "الأجة" },
  supplement: { fr: "Supplement", en: "Extra", ar: "إضافة" },
  sandwich: { fr: "Sandwich", en: "Sandwich", ar: "ساندويتش" }
};

const SUBTITLE_LABELS = {
  "demi baguette": { fr: "Demi baguette", en: "Half baguette", ar: "نصف باغيت" },
  "1/4 de baguette": { fr: "1/4 de baguette", en: "Quarter baguette", ar: "ربع باغيت" },
  "notre specialite": { fr: "Notre specialite", en: "Our specialty", ar: "تخصصنا" }
};

export function translateMenuCategory(language, value) {
  const normalized = String(value || "").trim().toLowerCase();
  const labels = CATEGORY_LABELS[normalized];

  if (!labels) {
    return value;
  }

  return labels[language] || labels.fr;
}

export function translateMenuSubtitle(language, value) {
  const normalized = String(value || "").trim().toLowerCase();
  const labels = SUBTITLE_LABELS[normalized];

  if (!labels) {
    return value;
  }

  return labels[language] || labels.fr;
}

export function translateMenuItem(language, itemName, defaultValue) {
  const normalized = String(itemName || "").trim().toLowerCase();
  const translations = ITEM_TRANSLATIONS[normalized];

  if (!translations) {
    return itemName;
  }

  return translations[language] || translations.fr;
}

export function translateMenuItemDescription(language, itemName, defaultValue) {
  const normalized = String(itemName || "").trim().toLowerCase();
  const translations = ITEM_DESCRIPTIONS[normalized];

  if (!translations) {
    return defaultValue;
  }

  return translations[language] || translations.fr;
}

const ITEM_TRANSLATIONS = {
  "baguette thon": { fr: "Baguette thon", en: "Tuna baguette", ar: "باغيت التونة" },
  "baguette thon + oeuf": { fr: "Baguette thon + oeuf", en: "Tuna + egg baguette", ar: "باغيت التونة + البيض" },
  "baguette serdine": { fr: "Baguette serdine", en: "Sardine baguette", ar: "باغيت السردين" },
  "baguette serdine + oeuf": { fr: "Baguette serdine + oeuf", en: "Sardine + egg baguette", ar: "باغيت السردين + البيض" },
  "baguette oeuf": { fr: "Baguette oeuf", en: "Egg baguette", ar: "باغيت البيض" },
  "kaskrout thon": { fr: "Kaskrout thon", en: "Tuna kaskrout", ar: "كاسكروت التونة" },
  "kaskrout thon + oeuf": { fr: "Kaskrout thon + oeuf", en: "Tuna + egg kaskrout", ar: "كاسكروت التونة + البيض" },
  "kaskrout serdine": { fr: "Kaskrout serdine", en: "Sardine kaskrout", ar: "كاسكروت السردين" },
  "kaskrout serdine + oeuf": { fr: "Kaskrout serdine + oeuf", en: "Sardine + egg kaskrout", ar: "كاسكروت السردين + البيض" },
  "kaskrout oeuf": { fr: "Kaskrout oeuf", en: "Egg kaskrout", ar: "كاسكروت البيض" },
  "huitieme thon": { fr: "Huitieme thon", en: "Tuna quarter", ar: "ربع التونة" },
  "huitieme thon + oeuf": { fr: "Huitieme thon + oeuf", en: "Tuna + egg quarter", ar: "ربع التونة + البيض" },
  "huitieme serdine": { fr: "Huitieme serdine", en: "Sardine quarter", ar: "ربع السردين" },
  "huitieme serdine + oeuf": { fr: "Huitieme serdine + oeuf", en: "Sardine + egg quarter", ar: "ربع السردين + البيض" },
  "huitieme oeuf": { fr: "Huitieme oeuf", en: "Egg quarter", ar: "ربع البيض" },
  "plat tunisien": { fr: "Plat tunisien", en: "Tunisian plate", ar: "طبق تونسي" },
  "plat serdine": { fr: "Plat serdine", en: "Sardine plate", ar: "طبق السردين" },
  "plat oeuf": { fr: "Plat oeuf", en: "Egg plate", ar: "طبق البيض" },
  "plat salade tunisienne": { fr: "Plat salade tunisienne", en: "Tunisian salad plate", ar: "طبق السلطة التونسية" },
  "plat salade mechouia": { fr: "Plat salade mechouia", en: "Mechouia salad plate", ar: "طبق سلطة المشوية" },
  "ojja nature": { fr: "Ojja nature", en: "Natural ojja", ar: "أجة عادية" },
  "ojja merguez": { fr: "Ojja merguez", en: "Merguez ojja", ar: "أجة مرقاز" },
  "ojja thon": { fr: "Ojja thon", en: "Tuna ojja", ar: "أجة التونة" },
  "omelette accompagnee de salade": { fr: "Omelette accompagnee de salade", en: "Omelette with salad", ar: "عجة مع سلطة" },
  "brik normale": { fr: "Brik normale", en: "Regular brik", ar: "بريك عادي" },
  "brik au thon": { fr: "Brik au thon", en: "Tuna brik", ar: "بريك التونة" },
  "brik en sauce": { fr: "Brik en sauce", en: "Brik in sauce", ar: "بريك بالصلصة" },
  thon: { fr: "Thon", en: "Tuna", ar: "التونة" },
  serdine: { fr: "Serdine", en: "Sardine", ar: "السردين" },
  oeufs: { fr: "Oeufs", en: "Eggs", ar: "البيض" },
  "portion gruyere (50g)": { fr: "Portion gruyere (50g)", en: "Gruyere portion (50g)", ar: "جزء جرويير (50 جم)" },
  "emballage emporte": { fr: "Emballage emporte", en: "Takeaway packing", ar: "تغليف للنقل" },
  "eau minerale 1l": { fr: "Eau minerale 1L", en: "Mineral water 1L", ar: "ماء معدني 1 لتر" },
  "eau minerale 0,5l": { fr: "Eau minerale 0,5L", en: "Mineral water 0.5L", ar: "ماء معدني 0.5 لتر" },
  "boisson en verre": { fr: "Boisson en verre", en: "Drink in glass", ar: "مشروب بالزجاج" },
  "boisson canette": { fr: "Boisson canette", en: "Canned drink", ar: "مشروب في علبة" }
};

const ITEM_DESCRIPTIONS = {
  "baguette thon": {
    fr: "Harissa au choix, salade mechouia, pomme de terre cuite a l'eau, salade tunisienne fraiche, thon, olives vertes, variante et poivron marine.",
    en: "Harissa of choice, mechouia salad, boiled potatoes, fresh Tunisian salad, tuna, green olives, pickled pepper.",
    ar: "هريسة بحسب الاختيار، سلطة مشوية، بطاطا مسلوقة، سلطة تونسية طازجة، تونة، زيتون أخضر، فلفل مخلل."
  },
  "baguette thon + oeuf": {
    fr: "Harissa au choix, salade mechouia, pomme de terre cuite a l'eau, salade tunisienne fraiche, thon, oeuf dur, olives vertes, variante et poivron marine.",
    en: "Harissa of choice, mechouia salad, boiled potatoes, fresh Tunisian salad, tuna, hard-boiled egg, green olives, pickled pepper.",
    ar: "هريسة بحسب الاختيار، سلطة مشوية، بطاطا مسلوقة، سلطة تونسية طازجة، تونة، بيضة مسلوقة، زيتون أخضر، فلفل مخلل."
  },
  "baguette serdine": {
    fr: "Harissa au choix, salade mechouia, pomme de terre cuite a l'eau, salade tunisienne fraiche, serdine en conserve, olives vertes, variante et poivron marine.",
    en: "Harissa of choice, mechouia salad, boiled potatoes, fresh Tunisian salad, canned sardine, green olives, pickled pepper.",
    ar: "هريسة بحسب الاختيار، سلطة مشوية، بطاطا مسلوقة، سلطة تونسية طازجة، سردين معلب، زيتون أخضر، فلفل مخلل."
  },
  "baguette serdine + oeuf": {
    fr: "Harissa au choix, salade mechouia, pomme de terre cuite a l'eau, salade tunisienne fraiche, serdine en conserve, oeuf dur, olives vertes, variante et poivron marine.",
    en: "Harissa of choice, mechouia salad, boiled potatoes, fresh Tunisian salad, canned sardine, hard-boiled egg, green olives, pickled pepper.",
    ar: "هريسة بحسب الاختيار، سلطة مشوية، بطاطا مسلوقة، سلطة تونسية طازجة، سردين معلب، بيضة مسلوقة، زيتون أخضر، فلفل مخلل."
  },
  "baguette oeuf": {
    fr: "Harissa au choix, salade mechouia, pomme de terre cuite a l'eau, salade tunisienne fraiche, oeufs durs, olives vertes, variante et poivron marine.",
    en: "Harissa of choice, mechouia salad, boiled potatoes, fresh Tunisian salad, hard-boiled eggs, green olives, pickled pepper.",
    ar: "هريسة بحسب الاختيار، سلطة مشوية، بطاطا مسلوقة، سلطة تونسية طازجة، بيض مسلوق، زيتون أخضر، فلفل مخلل."
  },
  "kaskrout thon": {
    fr: "Harissa au choix, salade mechouia, pomme de terre cuite a l'eau, salade tunisienne fraiche, thon, olives vertes, variante et poivron marine.",
    en: "Harissa of choice, mechouia salad, boiled potatoes, fresh Tunisian salad, tuna, green olives, pickled pepper.",
    ar: "هريسة بحسب الاختيار، سلطة مشوية، بطاطا مسلوقة، سلطة تونسية طازجة، تونة، زيتون أخضر، فلفل مخلل."
  },
  "kaskrout thon + oeuf": {
    fr: "Harissa au choix, salade mechouia, pomme de terre cuite a l'eau, salade tunisienne fraiche, thon, oeuf dur, olives vertes, variante et poivron marine.",
    en: "Harissa of choice, mechouia salad, boiled potatoes, fresh Tunisian salad, tuna, hard-boiled egg, green olives, pickled pepper.",
    ar: "هريسة بحسب الاختيار، سلطة مشوية، بطاطا مسلوقة، سلطة تونسية طازجة، تونة، بيضة مسلوقة، زيتون أخضر، فلفل مخلل."
  },
  "kaskrout serdine": {
    fr: "Harissa au choix, salade mechouia, pomme de terre cuite a l'eau, salade tunisienne fraiche, serdine en conserve, olives vertes, variante et poivron marine.",
    en: "Harissa of choice, mechouia salad, boiled potatoes, fresh Tunisian salad, canned sardine, green olives, pickled pepper.",
    ar: "هريسة بحسب الاختيار، سلطة مشوية، بطاطا مسلوقة، سلطة تونسية طازجة، سردين معلب، زيتون أخضر، فلفل مخلل."
  },
  "kaskrout serdine + oeuf": {
    fr: "Harissa au choix, salade mechouia, pomme de terre cuite a l'eau, salade tunisienne fraiche, serdine en conserve, oeuf dur, olives vertes, variante et poivron marine.",
    en: "Harissa of choice, mechouia salad, boiled potatoes, fresh Tunisian salad, canned sardine, hard-boiled egg, green olives, pickled pepper.",
    ar: "هريسة بحسب الاختيار، سلطة مشوية، بطاطا مسلوقة، سلطة تونسية طازجة، سردين معلب، بيضة مسلوقة، زيتون أخضر، فلفل مخلل."
  },
  "kaskrout oeuf": {
    fr: "Harissa au choix, salade mechouia, pomme de terre cuite a l'eau, salade tunisienne fraiche, oeuf dur, olives vertes, variante et poivron marine.",
    en: "Harissa of choice, mechouia salad, boiled potatoes, fresh Tunisian salad, hard-boiled egg, green olives, pickled pepper.",
    ar: "هريسة بحسب الاختيار، سلطة مشوية، بطاطا مسلوقة، سلطة تونسية طازجة، بيضة مسلوقة، زيتون أخضر، فلفل مخلل."
  },
  "huitieme thon": {
    fr: "Harissa au choix, salade mechouia, pomme de terre cuite a l'eau, salade tunisienne fraiche, thon, olives vertes, variante et poivron marine.",
    en: "Harissa of choice, mechouia salad, boiled potatoes, fresh Tunisian salad, tuna, green olives, pickled pepper.",
    ar: "هريسة بحسب الاختيار، سلطة مشوية، بطاطا مسلوقة، سلطة تونسية طازجة، تونة، زيتون أخضر، فلفل مخلل."
  },
  "huitieme thon + oeuf": {
    fr: "Harissa au choix, salade mechouia, pomme de terre cuite a l'eau, salade tunisienne fraiche, thon, oeuf dur, olives vertes, variante et poivron marine.",
    en: "Harissa of choice, mechouia salad, boiled potatoes, fresh Tunisian salad, tuna, hard-boiled egg, green olives, pickled pepper.",
    ar: "هريسة بحسب الاختيار، سلطة مشوية، بطاطا مسلوقة، سلطة تونسية طازجة، تونة، بيضة مسلوقة، زيتون أخضر، فلفل مخلل."
  },
  "huitieme serdine": {
    fr: "Harissa au choix, salade mechouia, pomme de terre cuite a l'eau, salade tunisienne fraiche, serdine en conserve, olives vertes, variante et poivron marine.",
    en: "Harissa of choice, mechouia salad, boiled potatoes, fresh Tunisian salad, canned sardine, green olives, pickled pepper.",
    ar: "هريسة بحسب الاختيار، سلطة مشوية، بطاطا مسلوقة، سلطة تونسية طازجة، سردين معلب، زيتون أخضر، فلفل مخلل."
  },
  "huitieme serdine + oeuf": {
    fr: "Huitieme serdine + oeuf: Harissa au choix, salade mechouia, pomme de terre cuite a l'eau, salade tunisienne fraiche, serdine en conserve, oeuf dur, olives vertes, variante et poivron marine.",
    en: "Sardine + egg quarter: Harissa of choice, mechouia salad, boiled potatoes, fresh Tunisian salad, canned sardine, hard-boiled egg, green olives, pickled pepper.",
    ar: "ربع السردين + البيض: هريسة بحسب الاختيار، سلطة مشوية، بطاطا مسلوقة، سلطة تونسية طازجة، سردين معلب، بيضة مسلوقة، زيتون أخضر، فلفل مخلل."
  },
  "huitieme oeuf": {
    fr: "Harissa au choix, salade mechouia, pomme de terre cuite a l'eau, salade tunisienne fraiche, oeufs durs, olives vertes, variante et poivron marine.",
    en: "Harissa of choice, mechouia salad, boiled potatoes, fresh Tunisian salad, hard-boiled eggs, green olives, pickled pepper.",
    ar: "هريسة بحسب الاختيار، سلطة مشوية، بطاطا مسلوقة، سلطة تونسية طازجة، بيض مسلوق، زيتون أخضر، فلفل مخلل."
  },
  "plat tunisien": {
    fr: "Harissa au choix, salade mechouia, pomme de terre cuite a l'eau, salade tunisienne fraiche, thon, oeuf dur ou oeuf coulant, olives vertes, variante et poivron marine.",
    en: "Harissa of choice, mechouia salad, boiled potatoes, fresh Tunisian salad, tuna, hard-boiled or soft-boiled egg, green olives, pickled pepper.",
    ar: "هريسة بحسب الاختيار، سلطة مشوية، بطاطا مسلوقة، سلطة تونسية طازجة، تونة، بيضة مسلوقة أو بيضة طرية، زيتون أخضر، فلفل مخلل."
  },
  "plat serdine": {
    fr: "Harissa au choix, salade mechouia, pomme de terre cuite a l'eau, salade tunisienne fraiche, serdine en conserve, oeuf dur ou coulant, olives vertes, variante et poivron marine.",
    en: "Harissa of choice, mechouia salad, boiled potatoes, fresh Tunisian salad, canned sardine, hard-boiled or soft-boiled egg, green olives, pickled pepper.",
    ar: "هريسة بحسب الاختيار، سلطة مشوية، بطاطا مسلوقة، سلطة تونسية طازجة، سردين معلب، بيضة مسلوقة أو بيضة طرية، زيتون أخضر، فلفل مخلل."
  },
  "plat oeuf": {
    fr: "Harissa au choix, salade mechouia, pomme de terre cuite a l'eau, salade tunisienne fraiche, oeuf dur ou coulant, olives vertes, variante et poivron marine.",
    en: "Harissa of choice, mechouia salad, boiled potatoes, fresh Tunisian salad, hard-boiled or soft-boiled egg, green olives, pickled pepper.",
    ar: "هريسة بحسب الاختيار، سلطة مشوية، بطاطا مسلوقة، سلطة تونسية طازجة، بيضة مسلوقة أو بيضة طرية، زيتون أخضر، فلفل مخلل."
  },
  "plat salade tunisienne": {
    fr: "Combinaison de concombres, tomates et oignons, avec olives vertes et huile d'olive.",
    en: "Combination of cucumbers, tomatoes and onions, with green olives and olive oil.",
    ar: "مزيج من الخيار والطماطم والبصل، مع الزيتون الأخضر وزيت الزيتون."
  },
  "plat salade mechouia": {
    fr: "Melange de tomates, poivrons, piments, oignons et ail grilles, avec olives vertes et huile d'olive.",
    en: "Mix of grilled tomatoes, peppers, chili peppers, onions and garlic, with green olives and olive oil.",
    ar: "مزيج من الطماطم والفلفل والشطة والبصل والثوم المشويين، مع الزيتون الأخضر وزيت الزيتون."
  },
  "ojja nature": {
    fr: "Plat mijote a base de concentre de tomate, oignon, tomates fraiches, ail et oeufs brouilles.",
    en: "Stewed dish based on tomato concentrate, onion, fresh tomatoes, garlic and scrambled eggs.",
    ar: "طبق مطهو على أساس مركز الطماطم والبصل والطماطم الطازجة والثوم والبيض المخفوق."
  },
  "ojja merguez": {
    fr: "Ojja nature enrichie de merguez de boeuf, epicee avec piment, cumin, coriandre et ail.",
    en: "Natural ojja enriched with beef merguez, spiced with chili pepper, cumin, coriander and garlic.",
    ar: "أجة عادية مخصبة بمرقاز لحم بقري، مضروبة مع الفلفل والكمون والكزبرة والثوم."
  },
  "ojja thon": {
    fr: "Ojja nature relevee avec l'ajout de thon.",
    en: "Natural ojja enhanced with the addition of tuna.",
    ar: "أجة عادية معززة بإضافة التونة."
  },
  "omelette accompagnee de salade": {
    fr: "Omelette servie avec une salade fraiche.",
    en: "Omelette served with fresh salad.",
    ar: "عجة تقدم مع سلطة طازجة."
  },
  "brik normale": {
    fr: "Feuille de brick garnie de puree de pomme de terre, harissa, persil frais, capres et oeuf dur ou coulant.",
    en: "Crispy pastry filled with potato puree, harissa, fresh parsley, capers and hard-boiled or soft-boiled egg.",
    ar: "ورقة بريك محشوة بهريس البطاطا والهريسة والبقدونس الطازج والكبر والبيضة المسلوقة أو الطرية."
  },
  "brik au thon": {
    fr: "Feuille de brick garnie de puree de pomme de terre, harissa, persil frais, capres, thon et oeuf dur ou coulant.",
    en: "Crispy pastry filled with potato puree, harissa, fresh parsley, capers, tuna and hard-boiled or soft-boiled egg.",
    ar: "ورقة بريك محشوة بهريس البطاطا والهريسة والبقدونس الطازج والكبر والتونة والبيضة المسلوقة أو الطرية."
  },
  "brik en sauce": {
    fr: "Brik servie en assiette avec salade mechouia, pomme de terre cuite a l'eau, salade tunisienne, olives vertes, variante et poivron marine.",
    en: "Brik served on a plate with mechouia salad, boiled potatoes, Tunisian salad, green olives, pickled pepper.",
    ar: "بريك تقدم في طبق مع سلطة مشوية وبطاطا مسلوقة وسلطة تونسية وزيتون أخضر وفلفل مخلل."
  },
  thon: {
    fr: "Portion supplementaire de thon.",
    en: "Additional portion of tuna.",
    ar: "حصة إضافية من التونة."
  },
  serdine: {
    fr: "Portion supplementaire de serdine.",
    en: "Additional portion of sardine.",
    ar: "حصة إضافية من السردين."
  },
  oeufs: {
    fr: "Portion supplementaire d'oeufs.",
    en: "Additional portion of eggs.",
    ar: "حصة إضافية من البيض."
  },
  "portion gruyere (50g)": {
    fr: "Ajout de gruyere.",
    en: "Addition of gruyere.",
    ar: "إضافة جرويير."
  },
  "emballage emporte": {
    fr: "Supplement emballage a emporter.",
    en: "Takeaway packing fee.",
    ar: "رسم التغليف للنقل."
  },
  "eau minerale 1l": {
    fr: "Bouteille d'eau minerale.",
    en: "Mineral water bottle.",
    ar: "زجاجة ماء معدني."
  },
  "eau minerale 0,5l": {
    fr: "Petite bouteille d'eau minerale.",
    en: "Small mineral water bottle.",
    ar: "زجاجة ماء معدني صغيرة."
  },
  "boisson en verre": {
    fr: "Disponible uniquement sur place.",
    en: "Available only on-site.",
    ar: "متاح في الموقع فقط."
  },
  "boisson canette": {
    fr: "Canette fraiche a emporter ou sur place.",
    en: "Fresh can to take away or on-site.",
    ar: "علبة طازجة للنقل أو في الموقع."
  }
};
