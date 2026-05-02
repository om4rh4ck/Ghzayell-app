const CATEGORY_LABELS = {
  "sandwich baguettes": { 
    fr: "Sandwich baguettes", 
    en: "Baguette sandwiches", 
    ar: "ساندويتش الباغيت",
    "de-CH": "Baguette-Sandwiches",
    "pt-BR": "Sanduíches de baguete",
    cs: "Sendviče s bagety",
    "fr-BE": "Sandwich baguettes",
    de: "Baguette-Sandwiches",
    "zh-CN": "法棍三明治"
  },
  "sandwich kaskrout": { 
    fr: "Sandwich kaskrout", 
    en: "Kaskrout sandwiches", 
    ar: "ساندويتش كاسكروت",
    "de-CH": "Kaskrout-Sandwiches",
    "pt-BR": "Sanduíches Kaskrout",
    cs: "Sendviče Kaskrout",
    "fr-BE": "Sandwich kaskrout",
    de: "Kaskrout-Sandwiches",
    "zh-CN": "卡斯克鲁特三明治"
  },
  huitieme: { 
    fr: "Huitieme", 
    en: "Quarter baguette", 
    ar: "ربع باغيت",
    "de-CH": "Viertel Baguette",
    "pt-BR": "Um quarto de baguete",
    cs: "Čtvrt baguety",
    "fr-BE": "Huitième",
    de: "Viertel Baguette",
    "zh-CN": "四分之一法棍"
  },
  "les plats": { 
    fr: "Les plats", 
    en: "Main plates", 
    ar: "الأطباق الرئيسية",
    "de-CH": "Hauptgerichte",
    "pt-BR": "Pratos principais",
    cs: "Hlavní jídla",
    "fr-BE": "Les plats",
    de: "Hauptgerichte",
    "zh-CN": "主菜"
  },
  "les ojja": { 
    fr: "Les ojja", 
    en: "Ojja dishes", 
    ar: "أطباق الأجة",
    "de-CH": "Ojja-Gerichte",
    "pt-BR": "Pratos Ojja",
    cs: "Pokrmy Ojja",
    "fr-BE": "Les ojja",
    de: "Ojja-Gerichte",
    "zh-CN": "奥吉亚菜"
  },
  "les brik": { 
    fr: "Les brik", 
    en: "Brik specialties", 
    ar: "تخصصات البريك",
    "de-CH": "Brik-Spezialitäten",
    "pt-BR": "Especialidades Brik",
    cs: "Speciality Brik",
    "fr-BE": "Les brik",
    de: "Brik-Spezialitäten",
    "zh-CN": "布里克特色"
  },
  "les supplements": { 
    fr: "Les supplements", 
    en: "Extras", 
    ar: "الإضافات",
    "de-CH": "Extras",
    "pt-BR": "Complementos",
    cs: "Příplaty",
    "fr-BE": "Les suppléments",
    de: "Extras",
    "zh-CN": "附加选项"
  },
  "les boissons": { 
    fr: "Les boissons", 
    en: "Drinks", 
    ar: "المشروبات",
    "de-CH": "Getränke",
    "pt-BR": "Bebidas",
    cs: "Nápoje",
    "fr-BE": "Les boissons",
    de: "Getränke",
    "zh-CN": "饮品"
  },
  boissons: { 
    fr: "Boissons", 
    en: "Drinks", 
    ar: "المشروبات",
    "de-CH": "Getränke",
    "pt-BR": "Bebidas",
    cs: "Nápoje",
    "fr-BE": "Boissons",
    de: "Getränke",
    "zh-CN": "饮品"
  },
  brik: { 
    fr: "Brik", 
    en: "Brik", 
    ar: "البريك",
    "de-CH": "Brik",
    "pt-BR": "Brik",
    cs: "Brik",
    "fr-BE": "Brik",
    de: "Brik",
    "zh-CN": "布里克"
  },
  plats: { 
    fr: "Plats", 
    en: "Plates", 
    ar: "الأطباق",
    "de-CH": "Gerichte",
    "pt-BR": "Pratos",
    cs: "Jídla",
    "fr-BE": "Plats",
    de: "Gerichte",
    "zh-CN": "菜肴"
  },
  ojja: { 
    fr: "Ojja", 
    en: "Ojja", 
    ar: "الأجة",
    "de-CH": "Ojja",
    "pt-BR": "Ojja",
    cs: "Ojja",
    "fr-BE": "Ojja",
    de: "Ojja",
    "zh-CN": "奥吉亚"
  },
  supplement: { 
    fr: "Supplement", 
    en: "Extra", 
    ar: "إضافة",
    "de-CH": "Extra",
    "pt-BR": "Complemento",
    cs: "Příplatek",
    "fr-BE": "Supplément",
    de: "Extra",
    "zh-CN": "额外"
  },
  sandwich: { 
    fr: "Sandwich", 
    en: "Sandwich", 
    ar: "ساندويتش",
    "de-CH": "Sandwich",
    "pt-BR": "Sanduíche",
    cs: "Sendvič",
    "fr-BE": "Sandwich",
    de: "Sandwich",
    "zh-CN": "三明治"
  }
};

const SUBTITLE_LABELS = {
  "demi baguette": { 
    fr: "Demi baguette", 
    en: "Half baguette", 
    ar: "نصف باغيت",
    "de-CH": "Halbe Baguette",
    "pt-BR": "Meia baguete",
    cs: "Půl baguety",
    "fr-BE": "Demi baguette",
    de: "Halbe Baguette",
    "zh-CN": "半条法棍"
  },
  "1/4 de baguette": { 
    fr: "1/4 de baguette", 
    en: "Quarter baguette", 
    ar: "ربع باغيت",
    "de-CH": "1/4 Baguette",
    "pt-BR": "1/4 de baguete",
    cs: "1/4 baguety",
    "fr-BE": "1/4 de baguette",
    de: "1/4 Baguette",
    "zh-CN": "1/4法棍"
  },
  "notre specialite": { 
    fr: "Notre specialite", 
    en: "Our specialty", 
    ar: "تخصصنا",
    "de-CH": "Unsere Spezialität",
    "pt-BR": "Nossa especialidade",
    cs: "Naše specialita",
    "fr-BE": "Notre spécialité",
    de: "Unsere Spezialität",
    "zh-CN": "我们的特色"
  }
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
  "baguette thon": { fr: "Baguette thon", en: "Tuna baguette", ar: "باغيت التونة", "de-CH": "Thunfisch-Baguette", "pt-BR": "Baguete de atum", cs: "Bagueta s tuňákem", "fr-BE": "Baguette thon", de: "Thunfisch-Baguette", "zh-CN": "金枪鱼法棍" },
  "baguette thon + oeuf": { fr: "Baguette thon + oeuf", en: "Tuna + egg baguette", ar: "باغيت التونة + البيض", "de-CH": "Thunfisch + Ei Baguette", "pt-BR": "Baguete de atum + ovo", cs: "Bagueta s tuňákem + vejce", "fr-BE": "Baguette thon + oeuf", de: "Thunfisch + Ei Baguette", "zh-CN": "金枪鱼+鸡蛋法棍" },
  "baguette serdine": { fr: "Baguette serdine", en: "Sardine baguette", ar: "باغيت السردين", "de-CH": "Sardinen-Baguette", "pt-BR": "Baguete de sardinha", cs: "Bagueta se sardinkami", "fr-BE": "Baguette sardine", de: "Sardinen-Baguette", "zh-CN": "沙丁鱼法棍" },
  "baguette serdine + oeuf": { fr: "Baguette serdine + oeuf", en: "Sardine + egg baguette", ar: "باغيت السردين + البيض", "de-CH": "Sardinen + Ei Baguette", "pt-BR": "Baguete de sardinha + ovo", cs: "Bagueta se sardinkami + vejce", "fr-BE": "Baguette sardine + oeuf", de: "Sardinen + Ei Baguette", "zh-CN": "沙丁鱼+鸡蛋法棍" },
  "baguette oeuf": { fr: "Baguette oeuf", en: "Egg baguette", ar: "باغيت البيض", "de-CH": "Ei-Baguette", "pt-BR": "Baguete de ovo", cs: "Bagueta s vejcem", "fr-BE": "Baguette oeuf", de: "Ei-Baguette", "zh-CN": "鸡蛋法棍" },
  "kaskrout thon": { fr: "Kaskrout thon", en: "Tuna kaskrout", ar: "كاسكروت التونة", "de-CH": "Thunfisch Kaskrout", "pt-BR": "Kaskrout de atum", cs: "Kaskrout s tuňákem", "fr-BE": "Kaskrout thon", de: "Thunfisch Kaskrout", "zh-CN": "金枪鱼卡斯克鲁特" },
  "kaskrout thon + oeuf": { fr: "Kaskrout thon + oeuf", en: "Tuna + egg kaskrout", ar: "كاسكروت التونة + البيض", "de-CH": "Thunfisch + Ei Kaskrout", "pt-BR": "Kaskrout de atum + ovo", cs: "Kaskrout s tuňákem + vejce", "fr-BE": "Kaskrout thon + oeuf", de: "Thunfisch + Ei Kaskrout", "zh-CN": "金枪鱼+鸡蛋卡斯克鲁特" },
  "kaskrout serdine": { fr: "Kaskrout serdine", en: "Sardine kaskrout", ar: "كاسكروت السردين", "de-CH": "Sardinen Kaskrout", "pt-BR": "Kaskrout de sardinha", cs: "Kaskrout se sardinkami", "fr-BE": "Kaskrout sardine", de: "Sardinen Kaskrout", "zh-CN": "沙丁鱼卡斯克鲁特" },
  "kaskrout serdine + oeuf": { fr: "Kaskrout serdine + oeuf", en: "Sardine + egg kaskrout", ar: "كاسكروت السردين + البيض", "de-CH": "Sardinen + Ei Kaskrout", "pt-BR": "Kaskrout de sardinha + ovo", cs: "Kaskrout se sardinkami + vejce", "fr-BE": "Kaskrout sardine + oeuf", de: "Sardinen + Ei Kaskrout", "zh-CN": "沙丁鱼+鸡蛋卡斯克鲁特" },
  "kaskrout oeuf": { fr: "Kaskrout oeuf", en: "Egg kaskrout", ar: "كاسكروت البيض", "de-CH": "Ei Kaskrout", "pt-BR": "Kaskrout de ovo", cs: "Kaskrout s vejcem", "fr-BE": "Kaskrout oeuf", de: "Ei Kaskrout", "zh-CN": "鸡蛋卡斯克鲁特" },
  "huitieme thon": { fr: "Huitieme thon", en: "Tuna quarter", ar: "ربع التونة", "de-CH": "Thunfisch Viertel", "pt-BR": "Um quarto de atum", cs: "Čtvrt s tuňákem", "fr-BE": "Huitième thon", de: "Thunfisch Viertel", "zh-CN": "金枪鱼四分之一" },
  "huitieme thon + oeuf": { fr: "Huitieme thon + oeuf", en: "Tuna + egg quarter", ar: "ربع التونة + البيض", "de-CH": "Thunfisch + Ei Viertel", "pt-BR": "Um quarto de atum + ovo", cs: "Čtvrt s tuňákem + vejce", "fr-BE": "Huitième thon + oeuf", de: "Thunfisch + Ei Viertel", "zh-CN": "金枪鱼+鸡蛋四分之一" },
  "huitieme serdine": { fr: "Huitieme serdine", en: "Sardine quarter", ar: "ربع السردين", "de-CH": "Sardinen Viertel", "pt-BR": "Um quarto de sardinha", cs: "Čtvrt se sardinkami", "fr-BE": "Huitième sardine", de: "Sardinen Viertel", "zh-CN": "沙丁鱼四分之一" },
  "huitieme serdine + oeuf": { fr: "Huitieme serdine + oeuf", en: "Sardine + egg quarter", ar: "ربع السردين + البيض", "de-CH": "Sardinen + Ei Viertel", "pt-BR": "Um quarto de sardinha + ovo", cs: "Čtvrt se sardinkami + vejce", "fr-BE": "Huitième sardine + oeuf", de: "Sardinen + Ei Viertel", "zh-CN": "沙丁鱼+鸡蛋四分之一" },
  "huitieme oeuf": { fr: "Huitieme oeuf", en: "Egg quarter", ar: "ربع البيض", "de-CH": "Ei Viertel", "pt-BR": "Um quarto de ovo", cs: "Čtvrt s vejcem", "fr-BE": "Huitième oeuf", de: "Ei Viertel", "zh-CN": "鸡蛋四分之一" },
  "plat tunisien": { fr: "Plat tunisien", en: "Tunisian plate", ar: "طبق تونسي", "de-CH": "Tunesischer Teller", "pt-BR": "Prato tunisiano", cs: "Tuniský talíř", "fr-BE": "Plat tunisien", de: "Tunesischer Teller", "zh-CN": "突尼斯盘" },
  "plat serdine": { fr: "Plat serdine", en: "Sardine plate", ar: "طبق السردين", "de-CH": "Sardinen Teller", "pt-BR": "Prato de sardinha", cs: "Talíř se sardinkami", "fr-BE": "Plat sardine", de: "Sardinen Teller", "zh-CN": "沙丁鱼盘" },
  "plat oeuf": { fr: "Plat oeuf", en: "Egg plate", ar: "طبق البيض", "de-CH": "Ei Teller", "pt-BR": "Prato de ovo", cs: "Talíř s vejcem", "fr-BE": "Plat oeuf", de: "Ei Teller", "zh-CN": "鸡蛋盘" },
  "plat salade tunisienne": { fr: "Plat salade tunisienne", en: "Tunisian salad plate", ar: "طبق السلطة التونسية", "de-CH": "Tunesischer Salatteller", "pt-BR": "Prato de salada tunisiana", cs: "Talíř tuniské saláty", "fr-BE": "Plat salade tunisienne", de: "Tunesischer Salatteller", "zh-CN": "突尼斯沙拉盘" },
  "plat salade mechouia": { fr: "Plat salade mechouia", en: "Mechouia salad plate", ar: "طبق سلطة المشوية", "de-CH": "Mechouia Salatteller", "pt-BR": "Prato de salada Mechouia", cs: "Talíř saláty Mechouia", "fr-BE": "Plat salade mechouia", de: "Mechouia Salatteller", "zh-CN": "美肖亚沙拉盘" },
  "ojja nature": { fr: "Ojja nature", en: "Natural ojja", ar: "أجة عادية", "de-CH": "Ojja natur", "pt-BR": "Ojja natural", cs: "Ojja přírodní", "fr-BE": "Ojja nature", de: "Ojja natur", "zh-CN": "天然奥吉亚" },
  "ojja merguez": { fr: "Ojja merguez", en: "Merguez ojja", ar: "أجة مرقاز", "de-CH": "Ojja Merguez", "pt-BR": "Ojja Merguez", cs: "Ojja Merguez", "fr-BE": "Ojja merguez", de: "Ojja Merguez", "zh-CN": "美格兹奥吉亚" },
  "ojja thon": { fr: "Ojja thon", en: "Tuna ojja", ar: "أجة التونة", "de-CH": "Ojja Thunfisch", "pt-BR": "Ojja de atum", cs: "Ojja s tuňákem", "fr-BE": "Ojja thon", de: "Ojja Thunfisch", "zh-CN": "金枪鱼奥吉亚" },
  "omelette accompagnee de salade": { fr: "Omelette accompagnee de salade", en: "Omelette with salad", ar: "عجة مع سلطة", "de-CH": "Omelett mit Salat", "pt-BR": "Omelete com salada", cs: "Omelet se salátem", "fr-BE": "Omelette accompagnée de salade", de: "Omelett mit Salat", "zh-CN": "配沙拉的煎蛋卷" },
  "brik normale": { fr: "Brik normale", en: "Regular brik", ar: "بريك عادي", "de-CH": "Normales Brik", "pt-BR": "Brik comum", cs: "Normální Brik", "fr-BE": "Brik normale", de: "Normales Brik", "zh-CN": "普通布里克" },
  "brik au thon": { fr: "Brik au thon", en: "Tuna brik", ar: "بريك التونة", "de-CH": "Thunfisch Brik", "pt-BR": "Brik de atum", cs: "Brik s tuňákem", "fr-BE": "Brik au thon", de: "Thunfisch Brik", "zh-CN": "金枪鱼布里克" },
  "brik en sauce": { fr: "Brik en sauce", en: "Brik in sauce", ar: "بريك بالصلصة", "de-CH": "Brik in Sauce", "pt-BR": "Brik em molho", cs: "Brik v omáčce", "fr-BE": "Brik en sauce", de: "Brik in Sauce", "zh-CN": "酱料中的布里克" },
  thon: { fr: "Thon", en: "Tuna", ar: "التونة", "de-CH": "Thunfisch", "pt-BR": "Atum", cs: "Tuňák", "fr-BE": "Thon", de: "Thunfisch", "zh-CN": "金枪鱼" },
  serdine: { fr: "Serdine", en: "Sardine", ar: "السردين", "de-CH": "Sardine", "pt-BR": "Sardinha", cs: "Sardinka", "fr-BE": "Sardine", de: "Sardine", "zh-CN": "沙丁鱼" },
  oeufs: { fr: "Oeufs", en: "Eggs", ar: "البيض", "de-CH": "Eier", "pt-BR": "Ovos", cs: "Vejce", "fr-BE": "Oeufs", de: "Eier", "zh-CN": "鸡蛋" },
  "portion gruyere (50g)": { fr: "Portion gruyere (50g)", en: "Gruyere portion (50g)", ar: "جزء جرويير (50 جم)", "de-CH": "Greyerzer Portion (50g)", "pt-BR": "Porção de Gruyère (50g)", cs: "Porce Gruyère (50g)", "fr-BE": "Portion gruyère (50g)", de: "Greyerzer Portion (50g)", "zh-CN": "格鲁耶尔芝士部分 (50克)" },
  "emballage emporte": { fr: "Emballage emporte", en: "Takeaway packing", ar: "تغليف للنقل", "de-CH": "Mitnehmverpackung", "pt-BR": "Embalagem para levar", cs: "Balení na cestu", "fr-BE": "Emballage emporté", de: "Mitnehmverpackung", "zh-CN": "外卖包装" },
  "eau minerale 1l": { fr: "Eau minerale 1L", en: "Mineral water 1L", ar: "ماء معدني 1 لتر", "de-CH": "Mineralwasser 1L", "pt-BR": "Água mineral 1L", cs: "Minerální voda 1L", "fr-BE": "Eau minérale 1L", de: "Mineralwasser 1L", "zh-CN": "矿泉水 1升" },
  "eau minerale 0,5l": { fr: "Eau minerale 0,5L", en: "Mineral water 0.5L", ar: "ماء معدني 0.5 لتر", "de-CH": "Mineralwasser 0,5L", "pt-BR": "Água mineral 0,5L", cs: "Minerální voda 0,5L", "fr-BE": "Eau minérale 0,5L", de: "Mineralwasser 0,5L", "zh-CN": "矿泉水 0.5升" },
  "boisson en verre": { fr: "Boisson en verre", en: "Drink in glass", ar: "مشروب بالزجاج", "de-CH": "Getränk im Glas", "pt-BR": "Bebida em copo", cs: "Nápoj ve sklenici", "fr-BE": "Boisson en verre", de: "Getränk im Glas", "zh-CN": "玻璃杯饮料" },
  "boisson canette": { fr: "Boisson canette", en: "Canned drink", ar: "مشروب في علبة", "de-CH": "Getränk in Dose", "pt-BR": "Bebida em lata", cs: "Nápoj v plechovce", "fr-BE": "Boisson en canette", de: "Getränk in Dose", "zh-CN": "罐装饮料" }
};

const ITEM_DESCRIPTIONS = {
  "baguette thon": {
    fr: "Harissa au choix, salade mechouia, pomme de terre cuite a l'eau, salade tunisienne fraiche, thon, olives vertes, variante et poivron marine.",
    en: "Harissa of choice, mechouia salad, boiled potatoes, fresh Tunisian salad, tuna, green olives, pickled pepper.",
    ar: "هريسة بحسب الاختيار، سلطة مشوية، بطاطا مسلوقة، سلطة تونسية طازجة، تونة، زيتون أخضر، فلفل مخلل.",
    "de-CH": "Harissa nach Wahl, Mechouia-Salat, gekochte Kartoffeln, frischer tunesischer Salat, Thunfisch, grüne Oliven, eingelegter Pfeffer.",
    "pt-BR": "Harissa a gosto, salada mechouia, batatas cozidas, salada tunisiana fresca, atum, azeitonas verdes, pimenta em conserva.",
    cs: "Harissa dle výběru, salát mechouia, vařené brambory, čerstvý tuniský salát, tuňák, zelené olivy, nakládaný pepř.",
    "fr-BE": "Harissa au choix, salade mechouia, pomme de terre cuite à l'eau, salade tunisienne fraîche, thon, olives vertes, variante et poivron mariné.",
    de: "Harissa nach Wahl, Mechouia-Salat, gekochte Kartoffeln, frischer tunesischer Salat, Thunfisch, grüne Oliven, eingelegter Pfeffer.",
    "zh-CN": "可选择的哈里萨，美肖亚沙拉，煮土豆，新鲜突尼斯沙拉，金枪鱼，青橄榄，腌制辣椒。"
  },
  "baguette thon + oeuf": {
    fr: "Harissa au choix, salade mechouia, pomme de terre cuite a l'eau, salade tunisienne fraiche, thon, oeuf dur, olives vertes, variante et poivron marine.",
    en: "Harissa of choice, mechouia salad, boiled potatoes, fresh Tunisian salad, tuna, hard-boiled egg, green olives, pickled pepper.",
    ar: "هريسة بحسب الاختيار، سلطة مشوية، بطاطا مسلوقة، سلطة تونسية طازجة، تونة، بيضة مسلوقة، زيتون أخضر، فلفل مخلل.",
    "de-CH": "Harissa nach Wahl, Mechouia-Salat, gekochte Kartoffeln, frischer tunesischer Salat, Thunfisch, gekochtes Ei, grüne Oliven, eingelegter Pfeffer.",
    "pt-BR": "Harissa a gosto, salada mechouia, batatas cozidas, salada tunisiana fresca, atum, ovo cozido, azeitonas verdes, pimenta em conserva.",
    cs: "Harissa dle výběru, salát mechouia, vařené brambory, čerstvý tuniský salát, tuňák, tuhé vejce, zelené olivy, nakládaný pepř.",
    "fr-BE": "Harissa au choix, salade mechouia, pomme de terre cuite à l'eau, salade tunisienne fraîche, thon, œuf dur, olives vertes, variante et poivron mariné.",
    de: "Harissa nach Wahl, Mechouia-Salat, gekochte Kartoffeln, frischer tunesischer Salat, Thunfisch, gekochtes Ei, grüne Oliven, eingelegter Pfeffer.",
    "zh-CN": "可选择的哈里萨，美肖亚沙拉，煮土豆，新鲜突尼斯沙拉，金枪鱼，煮鸡蛋，青橄榄，腌制辣椒。"
  },
  "baguette serdine": {
    fr: "Harissa au choix, salade mechouia, pomme de terre cuite a l'eau, salade tunisienne fraiche, serdine en conserve, olives vertes, variante et poivron marine.",
    en: "Harissa of choice, mechouia salad, boiled potatoes, fresh Tunisian salad, canned sardine, green olives, pickled pepper.",
    ar: "هريسة بحسب الاختيار، سلطة مشوية، بطاطا مسلوقة، سلطة تونسية طازجة، سردين معلب، زيتون أخضر، فلفل مخلل.",
    "de-CH": "Harissa nach Wahl, Mechouia-Salat, gekochte Kartoffeln, frischer tunesischer Salat, Sardine in Dosen, grüne Oliven, eingelegter Pfeffer.",
    "pt-BR": "Harissa a gosto, salada mechouia, batatas cozidas, salada tunisiana fresca, sardinha enlatada, azeitonas verdes, pimenta em conserva.",
    cs: "Harissa dle výběru, salát mechouia, vařené brambory, čerstvý tuniský salát, sardinka v konzervě, zelené olivy, nakládaný pepř.",
    "fr-BE": "Harissa au choix, salade mechouia, pomme de terre cuite à l'eau, salade tunisienne fraîche, sardine en conserve, olives vertes, variante et poivron mariné.",
    de: "Harissa nach Wahl, Mechouia-Salat, gekochte Kartoffeln, frischer tunesischer Salat, Sardine in Dosen, grüne Oliven, eingelegter Pfeffer.",
    "zh-CN": "可选择的哈里萨，美肖亚沙拉，煮土豆，新鲜突尼斯沙拉，罐头沙丁鱼，青橄榄，腌制辣椒。"
  },
  "baguette serdine + oeuf": {
    fr: "Harissa au choix, salade mechouia, pomme de terre cuite a l'eau, salade tunisienne fraiche, serdine en conserve, oeuf dur, olives vertes, variante et poivron marine.",
    en: "Harissa of choice, mechouia salad, boiled potatoes, fresh Tunisian salad, canned sardine, hard-boiled egg, green olives, pickled pepper.",
    ar: "هريسة بحسب الاختيار، سلطة مشوية، بطاطا مسلوقة، سلطة تونسية طازجة، سردين معلب، بيضة مسلوقة، زيتون أخضر، فلفل مخلل.",
    "de-CH": "Harissa nach Wahl, Mechouia-Salat, gekochte Kartoffeln, frischer tunesischer Salat, Sardine in Dosen, gekochtes Ei, grüne Oliven, eingelegter Pfeffer.",
    "pt-BR": "Harissa a gosto, salada mechouia, batatas cozidas, salada tunisiana fresca, sardinha enlatada, ovo cozido, azeitonas verdes, pimenta em conserva.",
    cs: "Harissa dle výběru, salát mechouia, vařené brambory, čerstvý tuniský salát, sardinka v konzervě, tuhé vejce, zelené olivy, nakládaný pepř.",
    "fr-BE": "Harissa au choix, salade mechouia, pomme de terre cuite à l'eau, salade tunisienne fraîche, sardine en conserve, œuf dur, olives vertes, variante et poivron mariné.",
    de: "Harissa nach Wahl, Mechouia-Salat, gekochte Kartoffeln, frischer tunesischer Salat, Sardine in Dosen, gekochtes Ei, grüne Oliven, eingelegter Pfeffer.",
    "zh-CN": "可选择的哈里萨，美肖亚沙拉，煮土豆，新鲜突尼斯沙拉，罐头沙丁鱼，煮鸡蛋，青橄榄，腌制辣椒。"
  },
  "baguette oeuf": {
    fr: "Harissa au choix, salade mechouia, pomme de terre cuite a l'eau, salade tunisienne fraiche, oeufs durs, olives vertes, variante et poivron marine.",
    en: "Harissa of choice, mechouia salad, boiled potatoes, fresh Tunisian salad, hard-boiled eggs, green olives, pickled pepper.",
    ar: "هريسة بحسب الاختيار، سلطة مشوية، بطاطا مسلوقة، سلطة تونسية طازجة، بيض مسلوق، زيتون أخضر، فلفل مخلل.",
    "de-CH": "Harissa nach Wahl, Mechouia-Salat, gekochte Kartoffeln, frischer tunesischer Salat, gekochte Eier, grüne Oliven, eingelegter Pfeffer.",
    "pt-BR": "Harissa a gosto, salada mechouia, batatas cozidas, salada tunisiana fresca, ovos cozidos, azeitonas verdes, pimenta em conserva.",
    cs: "Harissa dle výběru, salát mechouia, vařené brambory, čerstvý tuniský salát, tuhá vejce, zelené olivy, nakládaný pepř.",
    "fr-BE": "Harissa au choix, salade mechouia, pomme de terre cuite à l'eau, salade tunisienne fraîche, œufs durs, olives vertes, variante et poivron mariné.",
    de: "Harissa nach Wahl, Mechouia-Salat, gekochte Kartoffeln, frischer tunesischer Salat, gekochte Eier, grüne Oliven, eingelegter Pfeffer.",
    "zh-CN": "可选择的哈里萨，美肖亚沙拉，煮土豆，新鲜突尼斯沙拉，煮鸡蛋，青橄榄，腌制辣椒。"
  },
  "kaskrout thon": {
    fr: "Harissa au choix, salade mechouia, pomme de terre cuite a l'eau, salade tunisienne fraiche, thon, olives vertes, variante et poivron marine.",
    en: "Harissa of choice, mechouia salad, boiled potatoes, fresh Tunisian salad, tuna, green olives, pickled pepper.",
    ar: "هريسة بحسب الاختيار، سلطة مشوية، بطاطا مسلوقة، سلطة تونسية طازجة، تونة، زيتون أخضر، فلفل مخلل.",
    "de-CH": "Harissa nach Wahl, Mechouia-Salat, gekochte Kartoffeln, frischer tunesischer Salat, Thunfisch, grüne Oliven, eingelegter Pfeffer.",
    "pt-BR": "Harissa a gosto, salada mechouia, batatas cozidas, salada tunisiana fresca, atum, azeitonas verdes, pimenta em conserva.",
    cs: "Harissa dle výběru, salát mechouia, vařené brambory, čerstvý tuniský salát, tuňák, zelené olivy, nakládaný pepř.",
    "fr-BE": "Harissa au choix, salade mechouia, pomme de terre cuite à l'eau, salade tunisienne fraîche, thon, olives vertes, variante et poivron mariné.",
    de: "Harissa nach Wahl, Mechouia-Salat, gekochte Kartoffeln, frischer tunesischer Salat, Thunfisch, grüne Oliven, eingelegter Pfeffer.",
    "zh-CN": "可选择的哈里萨，美肖亚沙拉，煮土豆，新鲜突尼斯沙拉，金枪鱼，青橄榄，腌制辣椒。"
  },
  "kaskrout thon + oeuf": {
    fr: "Harissa au choix, salade mechouia, pomme de terre cuite a l'eau, salade tunisienne fraiche, thon, oeuf dur, olives vertes, variante et poivron marine.",
    en: "Harissa of choice, mechouia salad, boiled potatoes, fresh Tunisian salad, tuna, hard-boiled egg, green olives, pickled pepper.",
    ar: "هريسة بحسب الاختيار، سلطة مشوية، بطاطا مسلوقة، سلطة تونسية طازجة، تونة، بيضة مسلوقة، زيتون أخضر، فلفل مخلل.",
    "de-CH": "Harissa nach Wahl, Mechouia-Salat, gekochte Kartoffeln, frischer tunesischer Salat, Thunfisch, gekochtes Ei, grüne Oliven, eingelegter Pfeffer.",
    "pt-BR": "Harissa a gosto, salada mechouia, batatas cozidas, salada tunisiana fresca, atum, ovo cozido, azeitonas verdes, pimenta em conserva.",
    cs: "Harissa dle výběru, salát mechouia, vařené brambory, čerstvý tuniský salát, tuňák, tuhé vejce, zelené olivy, nakládaný pepř.",
    "fr-BE": "Harissa au choix, salade mechouia, pomme de terre cuite à l'eau, salade tunisienne fraîche, thon, œuf dur, olives vertes, variante et poivron mariné.",
    de: "Harissa nach Wahl, Mechouia-Salat, gekochte Kartoffeln, frischer tunesischer Salat, Thunfisch, gekochtes Ei, grüne Oliven, eingelegter Pfeffer.",
    "zh-CN": "可选择的哈里萨，美肖亚沙拉，煮土豆，新鲜突尼斯沙拉，金枪鱼，煮鸡蛋，青橄榄，腌制辣椒。"
  },
  "kaskrout serdine": {
    fr: "Harissa au choix, salade mechouia, pomme de terre cuite a l'eau, salade tunisienne fraiche, serdine en conserve, olives vertes, variante et poivron marine.",
    en: "Harissa of choice, mechouia salad, boiled potatoes, fresh Tunisian salad, canned sardine, green olives, pickled pepper.",
    ar: "هريسة بحسب الاختيار، سلطة مشوية، بطاطا مسلوقة، سلطة تونسية طازجة، سردين معلب، زيتون أخضر، فلفل مخلل.",
    "de-CH": "Harissa nach Wahl, Mechouia-Salat, gekochte Kartoffeln, frischer tunesischer Salat, Sardine in Dosen, grüne Oliven, eingelegter Pfeffer.",
    "pt-BR": "Harissa a gosto, salada mechouia, batatas cozidas, salada tunisiana fresca, sardinha enlatada, azeitonas verdes, pimenta em conserva.",
    cs: "Harissa dle výběru, salát mechouia, vařené brambory, čerstvý tuniský salát, sardinka v konzervě, zelené olivy, nakládaný pepř.",
    "fr-BE": "Harissa au choix, salade mechouia, pomme de terre cuite à l'eau, salade tunisienne fraîche, sardine en conserve, olives vertes, variante et poivron mariné.",
    de: "Harissa nach Wahl, Mechouia-Salat, gekochte Kartoffeln, frischer tunesischer Salat, Sardine in Dosen, grüne Oliven, eingelegter Pfeffer.",
    "zh-CN": "可选择的哈里萨，美肖亚沙拉，煮土豆，新鲜突尼斯沙拉，罐头沙丁鱼，青橄榄，腌制辣椒。"
  },
  "kaskrout serdine + oeuf": {
    fr: "Harissa au choix, salade mechouia, pomme de terre cuite a l'eau, salade tunisienne fraiche, serdine en conserve, oeuf dur, olives vertes, variante et poivron marine.",
    en: "Harissa of choice, mechouia salad, boiled potatoes, fresh Tunisian salad, canned sardine, hard-boiled egg, green olives, pickled pepper.",
    ar: "هريسة بحسب الاختيار، سلطة مشوية، بطاطا مسلوقة، سلطة تونسية طازجة، سردين معلب، بيضة مسلوقة، زيتون أخضر، فلفل مخلل.",
    "de-CH": "Harissa nach Wahl, Mechouia-Salat, gekochte Kartoffeln, frischer tunesischer Salat, Sardine in Dosen, gekochtes Ei, grüne Oliven, eingelegter Pfeffer.",
    "pt-BR": "Harissa a gosto, salada mechouia, batatas cozidas, salada tunisiana fresca, sardinha enlatada, ovo cozido, azeitonas verdes, pimenta em conserva.",
    cs: "Harissa dle výběru, salát mechouia, vařené brambory, čerstvý tuniský salát, sardinka v konzervě, tuhé vejce, zelené olivy, nakládaný pepř.",
    "fr-BE": "Harissa au choix, salade mechouia, pomme de terre cuite à l'eau, salade tunisienne fraîche, sardine en conserve, œuf dur, olives vertes, variante et poivron mariné.",
    de: "Harissa nach Wahl, Mechouia-Salat, gekochte Kartoffeln, frischer tunesischer Salat, Sardine in Dosen, gekochtes Ei, grüne Oliven, eingelegter Pfeffer.",
    "zh-CN": "可选择的哈里萨，美肖亚沙拉，煮土豆，新鲜突尼斯沙拉，罐头沙丁鱼，煮鸡蛋，青橄榄，腌制辣椒。"
  },
  "kaskrout oeuf": {
    fr: "Harissa au choix, salade mechouia, pomme de terre cuite a l'eau, salade tunisienne fraiche, oeuf dur, olives vertes, variante et poivron marine.",
    en: "Harissa of choice, mechouia salad, boiled potatoes, fresh Tunisian salad, hard-boiled egg, green olives, pickled pepper.",
    ar: "هريسة بحسب الاختيار، سلطة مشوية، بطاطا مسلوقة، سلطة تونسية طازجة، بيضة مسلوقة، زيتون أخضر، فلفل مخلل.",
    "de-CH": "Harissa nach Wahl, Mechouia-Salat, gekochte Kartoffeln, frischer tunesischer Salat, gekochtes Ei, grüne Oliven, eingelegter Pfeffer.",
    "pt-BR": "Harissa a gosto, salada mechouia, batatas cozidas, salada tunisiana fresca, ovo cozido, azeitonas verdes, pimenta em conserva.",
    cs: "Harissa dle výběru, salát mechouia, vařené brambory, čerstvý tuniský salát, tuhé vejce, zelené olivy, nakládaný pepř.",
    "fr-BE": "Harissa au choix, salade mechouia, pomme de terre cuite à l'eau, salade tunisienne fraîche, œuf dur, olives vertes, variante et poivron mariné.",
    de: "Harissa nach Wahl, Mechouia-Salat, gekochte Kartoffeln, frischer tunesischer Salat, gekochtes Ei, grüne Oliven, eingelegter Pfeffer.",
    "zh-CN": "可选择的哈里萨，美肖亚沙拉，煮土豆，新鲜突尼斯沙拉，煮鸡蛋，青橄榄，腌制辣椒。"
  },
  "huitieme thon": {
    fr: "Harissa au choix, salade mechouia, pomme de terre cuite a l'eau, salade tunisienne fraiche, thon, olives vertes, variante et poivron marine.",
    en: "Harissa of choice, mechouia salad, boiled potatoes, fresh Tunisian salad, tuna, green olives, pickled pepper.",
    ar: "هريسة بحسب الاختيار، سلطة مشوية، بطاطا مسلوقة، سلطة تونسية طازجة، تونة، زيتون أخضر، فلفل مخلل.",
    "de-CH": "Harissa nach Wahl, Mechouia-Salat, gekochte Kartoffeln, frischer tunesischer Salat, Thunfisch, grüne Oliven, eingelegter Pfeffer.",
    "pt-BR": "Harissa a gosto, salada mechouia, batatas cozidas, salada tunisiana fresca, atum, azeitonas verdes, pimenta em conserva.",
    cs: "Harissa dle výběru, salát mechouia, vařené brambory, čerstvý tuniský salát, tuňák, zelené olivy, nakládaný pepř.",
    "fr-BE": "Harissa au choix, salade mechouia, pomme de terre cuite à l'eau, salade tunisienne fraîche, thon, olives vertes, variante et poivron mariné.",
    de: "Harissa nach Wahl, Mechouia-Salat, gekochte Kartoffeln, frischer tunesischer Salat, Thunfisch, grüne Oliven, eingelegter Pfeffer.",
    "zh-CN": "可选择的哈里萨，美肖亚沙拉，煮土豆，新鲜突尼斯沙拉，金枪鱼，青橄榄，腌制辣椒。"
  },
  "huitieme thon + oeuf": {
    fr: "Harissa au choix, salade mechouia, pomme de terre cuite a l'eau, salade tunisienne fraiche, thon, oeuf dur, olives vertes, variante et poivron marine.",
    en: "Harissa of choice, mechouia salad, boiled potatoes, fresh Tunisian salad, tuna, hard-boiled egg, green olives, pickled pepper.",
    ar: "هريسة بحسب الاختيار، سلطة مشوية، بطاطا مسلوقة، سلطة تونسية طازجة، تونة، بيضة مسلوقة، زيتون أخضر، فلفل مخلل.",
    "de-CH": "Harissa nach Wahl, Mechouia-Salat, gekochte Kartoffeln, frischer tunesischer Salat, Thunfisch, gekochtes Ei, grüne Oliven, eingelegter Pfeffer.",
    "pt-BR": "Harissa a gosto, salada mechouia, batatas cozidas, salada tunisiana fresca, atum, ovo cozido, azeitonas verdes, pimenta em conserva.",
    cs: "Harissa dle výběru, salát mechouia, vařené brambory, čerstvý tuniský salát, tuňák, tuhé vejce, zelené olivy, nakládaný pepř.",
    "fr-BE": "Harissa au choix, salade mechouia, pomme de terre cuite à l'eau, salade tunisienne fraîche, thon, œuf dur, olives vertes, variante et poivron mariné.",
    de: "Harissa nach Wahl, Mechouia-Salat, gekochte Kartoffeln, frischer tunesischer Salat, Thunfisch, gekochtes Ei, grüne Oliven, eingelegter Pfeffer.",
    "zh-CN": "可选择的哈里萨，美肖亚沙拉，煮土豆，新鲜突尼斯沙拉，金枪鱼，煮鸡蛋，青橄榄，腌制辣椒。"
  },
  "huitieme serdine": {
    fr: "Harissa au choix, salade mechouia, pomme de terre cuite a l'eau, salade tunisienne fraiche, serdine en conserve, olives vertes, variante et poivron marine.",
    en: "Harissa of choice, mechouia salad, boiled potatoes, fresh Tunisian salad, canned sardine, green olives, pickled pepper.",
    ar: "هريسة بحسب الاختيار، سلطة مشوية، بطاطا مسلوقة، سلطة تونسية طازجة، سردين معلب، زيتون أخضر، فلفل مخلل.",
    "de-CH": "Harissa nach Wahl, Mechouia-Salat, gekochte Kartoffeln, frischer tunesischer Salat, Sardine in Dosen, grüne Oliven, eingelegter Pfeffer.",
    "pt-BR": "Harissa a gosto, salada mechouia, batatas cozidas, salada tunisiana fresca, sardinha enlatada, azeitonas verdes, pimenta em conserva.",
    cs: "Harissa dle výběru, salát mechouia, vařené brambory, čerstvý tuniský salát, sardinka v konzervě, zelené olivy, nakládaný pepř.",
    "fr-BE": "Harissa au choix, salade mechouia, pomme de terre cuite à l'eau, salade tunisienne fraîche, sardine en conserve, olives vertes, variante et poivron mariné.",
    de: "Harissa nach Wahl, Mechouia-Salat, gekochte Kartoffeln, frischer tunesischer Salat, Sardine in Dosen, grüne Oliven, eingelegter Pfeffer.",
    "zh-CN": "可选择的哈里萨，美肖亚沙拉，煮土豆，新鲜突尼斯沙拉，罐头沙丁鱼，青橄榄，腌制辣椒。"
  },
  "huitieme serdine + oeuf": {
    fr: "Huitieme serdine + oeuf: Harissa au choix, salade mechouia, pomme de terre cuite a l'eau, salade tunisienne fraiche, serdine en conserve, oeuf dur, olives vertes, variante et poivron marine.",
    en: "Sardine + egg quarter: Harissa of choice, mechouia salad, boiled potatoes, fresh Tunisian salad, canned sardine, hard-boiled egg, green olives, pickled pepper.",
    ar: "ربع السردين + البيض: هريسة بحسب الاختيار، سلطة مشوية، بطاطا مسلوقة، سلطة تونسية طازجة، سردين معلب، بيضة مسلوقة، زيتون أخضر، فلفل مخلل.",
    "de-CH": "Sardinen + Ei Viertel: Harissa nach Wahl, Mechouia-Salat, gekochte Kartoffeln, frischer tunesischer Salat, Sardine in Dosen, gekochtes Ei, grüne Oliven, eingelegter Pfeffer.",
    "pt-BR": "Um quarto de sardinha + ovo: Harissa a gosto, salada mechouia, batatas cozidas, salada tunisiana fresca, sardinha enlatada, ovo cozido, azeitonas verdes, pimenta em conserva.",
    cs: "Čtvrt se sardinkami + vejce: Harissa dle výběru, salát mechouia, vařené brambory, čerstvý tuniský salát, sardinka v konzervě, tuhé vejce, zelené olivy, nakládaný pepř.",
    "fr-BE": "Huitième sardine + œuf : Harissa au choix, salade mechouia, pomme de terre cuite à l'eau, salade tunisienne fraîche, sardine en conserve, œuf dur, olives vertes, variante et poivron mariné.",
    de: "Sardinen + Ei Viertel: Harissa nach Wahl, Mechouia-Salat, gekochte Kartoffeln, frischer tunesischer Salat, Sardine in Dosen, gekochtes Ei, grüne Oliven, eingelegter Pfeffer.",
    "zh-CN": "沙丁鱼+鸡蛋四分之一：可选择的哈里萨，美肖亚沙拉，煮土豆，新鲜突尼斯沙拉，罐头沙丁鱼，煮鸡蛋，青橄榄，腌制辣椒。"
  },
  "huitieme oeuf": {
    fr: "Harissa au choix, salade mechouia, pomme de terre cuite a l'eau, salade tunisienne fraiche, oeufs durs, olives vertes, variante et poivron marine.",
    en: "Harissa of choice, mechouia salad, boiled potatoes, fresh Tunisian salad, hard-boiled eggs, green olives, pickled pepper.",
    ar: "هريسة بحسب الاختيار، سلطة مشوية، بطاطا مسلوقة، سلطة تونسية طازجة، بيض مسلوق، زيتون أخضر، فلفل مخلل.",
    "de-CH": "Harissa nach Wahl, Mechouia-Salat, gekochte Kartoffeln, frischer tunesischer Salat, gekochte Eier, grüne Oliven, eingelegter Pfeffer.",
    "pt-BR": "Harissa a gosto, salada mechouia, batatas cozidas, salada tunisiana fresca, ovos cozidos, azeitonas verdes, pimenta em conserva.",
    cs: "Harissa dle výběru, salát mechouia, vařené brambory, čerstvý tuniský salát, tuhá vejce, zelené olivy, nakládaný pepř.",
    "fr-BE": "Harissa au choix, salade mechouia, pomme de terre cuite à l'eau, salade tunisienne fraîche, œufs durs, olives vertes, variante et poivron mariné.",
    de: "Harissa nach Wahl, Mechouia-Salat, gekochte Kartoffeln, frischer tunesischer Salat, gekochte Eier, grüne Oliven, eingelegter Pfeffer.",
    "zh-CN": "可选择的哈里萨，美肖亚沙拉，煮土豆，新鲜突尼斯沙拉，煮鸡蛋，青橄榄，腌制辣椒。"
  },
  "plat tunisien": {
    fr: "Harissa au choix, salade mechouia, pomme de terre cuite a l'eau, salade tunisienne fraiche, thon, oeuf dur ou oeuf coulant, olives vertes, variante et poivron marine.",
    en: "Harissa of choice, mechouia salad, boiled potatoes, fresh Tunisian salad, tuna, hard-boiled or soft-boiled egg, green olives, pickled pepper.",
    ar: "هريسة بحسب الاختيار، سلطة مشوية، بطاطا مسلوقة، سلطة تونسية طازجة، تونة، بيضة مسلوقة أو بيضة طرية، زيتون أخضر، فلفل مخلل.",
    "de-CH": "Harissa nach Wahl, Mechouia-Salat, gekochte Kartoffeln, frischer tunesischer Salat, Thunfisch, hartgekochtes oder weiches Ei, grüne Oliven, eingelegter Pfeffer.",
    "pt-BR": "Harissa a gosto, salada mechouia, batatas cozidas, salada tunisiana fresca, atum, ovo cozido ou mole, azeitonas verdes, pimenta em conserva.",
    cs: "Harissa dle výběru, salát mechouia, vařené brambory, čerstvý tuniský salát, tuňák, vařené nebo měkké vejce, zelené olivy, nakládaný pepř.",
    "fr-BE": "Harissa au choix, salade mechouia, pomme de terre cuite à l'eau, salade tunisienne fraîche, thon, œuf dur ou œuf coulant, olives vertes, variante et poivron mariné.",
    de: "Harissa nach Wahl, Mechouia-Salat, gekochte Kartoffeln, frischer tunesischer Salat, Thunfisch, hartgekochtes oder weiches Ei, grüne Oliven, eingelegter Pfeffer.",
    "zh-CN": "可选择的哈里萨，美肖亚沙拉，煮土豆，新鲜突尼斯沙拉，金枪鱼，煮鸡蛋或软鸡蛋，青橄榄，腌制辣椒。"
  },
  "plat serdine": {
    fr: "Harissa au choix, salade mechouia, pomme de terre cuite a l'eau, salade tunisienne fraiche, serdine en conserve, oeuf dur ou coulant, olives vertes, variante et poivron marine.",
    en: "Harissa of choice, mechouia salad, boiled potatoes, fresh Tunisian salad, canned sardine, hard-boiled or soft-boiled egg, green olives, pickled pepper.",
    ar: "هريسة بحسب الاختيار، سلطة مشوية، بطاطا مسلوقة، سلطة تونسية طازجة، سردين معلب، بيضة مسلوقة أو بيضة طرية، زيتون أخضر، فلفل مخلل.",
    "de-CH": "Harissa nach Wahl, Mechouia-Salat, gekochte Kartoffeln, frischer tunesischer Salat, Sardine in Dosen, hartgekochtes oder weiches Ei, grüne Oliven, eingelegter Pfeffer.",
    "pt-BR": "Harissa a gosto, salada mechouia, batatas cozidas, salada tunisiana fresca, sardinha enlatada, ovo cozido ou mole, azeitonas verdes, pimenta em conserva.",
    cs: "Harissa dle výběru, salát mechouia, vařené brambory, čerstvý tuniský salát, sardinka v konzervě, vařené nebo měkké vejce, zelené olivy, nakládaný pepř.",
    "fr-BE": "Harissa au choix, salade mechouia, pomme de terre cuite à l'eau, salade tunisienne fraîche, sardine en conserve, œuf dur ou œuf coulant, olives vertes, variante et poivron mariné.",
    de: "Harissa nach Wahl, Mechouia-Salat, gekochte Kartoffeln, frischer tunesischer Salat, Sardine in Dosen, hartgekochtes oder weiches Ei, grüne Oliven, eingelegter Pfeffer.",
    "zh-CN": "可选择的哈里萨，美肖亚沙拉，煮土豆，新鲜突尼斯沙拉，罐头沙丁鱼，煮鸡蛋或软鸡蛋，青橄榄，腌制辣椒。"
  },
  "plat oeuf": {
    fr: "Harissa au choix, salade mechouia, pomme de terre cuite a l'eau, salade tunisienne fraiche, oeuf dur ou coulant, olives vertes, variante et poivron marine.",
    en: "Harissa of choice, mechouia salad, boiled potatoes, fresh Tunisian salad, hard-boiled or soft-boiled egg, green olives, pickled pepper.",
    ar: "هريسة بحسب الاختيار، سلطة مشوية، بطاطا مسلوقة، سلطة تونسية طازجة، بيضة مسلوقة أو بيضة طرية، زيتون أخضر، فلفل مخلل.",
    "de-CH": "Harissa nach Wahl, Mechouia-Salat, gekochte Kartoffeln, frischer tunesischer Salat, hartgekochtes oder weiches Ei, grüne Oliven, eingelegter Pfeffer.",
    "pt-BR": "Harissa a gosto, salada mechouia, batatas cozidas, salada tunisiana fresca, ovo cozido ou mole, azeitonas verdes, pimenta em conserva.",
    cs: "Harissa dle výběru, salát mechouia, vařené brambory, čerstvý tuniský salát, vařené nebo měkké vejce, zelené olivy, nakládaný pepř.",
    "fr-BE": "Harissa au choix, salade mechouia, pomme de terre cuite à l'eau, salade tunisienne fraîche, œuf dur ou œuf coulant, olives vertes, variante et poivron mariné.",
    de: "Harissa nach Wahl, Mechouia-Salat, gekochte Kartoffeln, frischer tunesischer Salat, hartgekochtes oder weiches Ei, grüne Oliven, eingelegter Pfeffer.",
    "zh-CN": "可选择的哈里萨，美肖亚沙拉，煮土豆，新鲜突尼斯沙拉，煮鸡蛋或软鸡蛋，青橄榄，腌制辣椒。"
  },
  "plat salade tunisienne": {
    fr: "Combinaison de concombres, tomates et oignons, avec olives vertes et huile d'olive.",
    en: "Combination of cucumbers, tomatoes and onions, with green olives and olive oil.",
    ar: "مزيج من الخيار والطماطم والبصل، مع الزيتون الأخضر وزيت الزيتون.",
    "de-CH": "Kombination aus Gurken, Tomaten und Zwiebeln mit grünen Oliven und Olivenöl.",
    "pt-BR": "Combinação de pepinos, tomates e cebolas, com azeitonas verdes e azeite.",
    cs: "Kombinace okurek, rajčat a cibule se zelenými olivami a olivovým olejem.",
    "fr-BE": "Combinaison de concombres, tomates et oignons, avec olives vertes et huile d'olive.",
    de: "Kombination aus Gurken, Tomaten und Zwiebeln mit grünen Oliven und Olivenöl.",
    "zh-CN": "黄瓜、番茄和洋葱的组合，配绿橄榄和橄榄油。"
  },
  "plat salade mechouia": {
    fr: "Melange de tomates, poivrons, piments, oignons et ail grilles, avec olives vertes et huile d'olive.",
    en: "Mix of grilled tomatoes, peppers, chili peppers, onions and garlic, with green olives and olive oil.",
    ar: "مزيج من الطماطم والفلفل والشطة والبصل والثوم المشويين، مع الزيتون الأخضر وزيت الزيتون.",
    "de-CH": "Mischung aus gegrillten Tomaten, Paprika, Chili, Zwiebeln und Knoblauch mit grünen Oliven und Olivenöl.",
    "pt-BR": "Mistura de tomates, pimentão, pimenta, cebola e alho grelhados, com azeitonas verdes e azeite.",
    cs: "Směs grilovaných rajčat, paprik, chilli, cibule a česneku se zelenými olivami a olivovým olejem.",
    "fr-BE": "Mélange de tomates, poivrons, piments, oignons et ail grillés, avec olives vertes et huile d'olive.",
    de: "Mischung aus gegrillten Tomaten, Paprika, Chili, Zwiebeln und Knoblauch mit grünen Oliven und Olivenöl.",
    "zh-CN": "烤番茄、甜椒、辣椒、洋葱和大蒜的混合，配绿橄榄和橄榄油。"
  },
  "ojja nature": {
    fr: "Plat mijote a base de concentre de tomate, oignon, tomates fraiches, ail et oeufs brouilles.",
    en: "Stewed dish based on tomato concentrate, onion, fresh tomatoes, garlic and scrambled eggs.",
    ar: "طبق مطهو على أساس مركز الطماطم والبصل والطماطم الطازجة والثوم والبيض المخفوق.",
    "de-CH": "Schmortopf auf Basis von Tomatenmark, Zwiebel, frischen Tomaten, Knoblauch und Rühreiern.",
    "pt-BR": "Prato refogado à base de concentrado de tomate, cebola, tomates frescos, alho e ovos mexidos.",
    cs: "Dušené jídlo na bázi tomatového koncentrátu, cibule, čerstvých rajčat, česneku a míchaných vajec.",
    "fr-BE": "Plat mijoté à base de concentré de tomate, oignon, tomates fraîches, ail et œufs brouillés.",
    de: "Schmortopf auf Basis von Tomatenmark, Zwiebel, frischen Tomaten, Knoblauch und Rühreiern.",
    "zh-CN": "用番茄酱、洋葱、新鲜番茄、大蒜和炒鸡蛋炖的菜。"
  },
  "ojja merguez": {
    fr: "Ojja nature enrichie de merguez de boeuf, epicee avec piment, cumin, coriandre et ail.",
    en: "Natural ojja enriched with beef merguez, spiced with chili pepper, cumin, coriander and garlic.",
    ar: "أجة عادية مخصبة بمرقاز لحم بقري، مضروبة مع الفلفل والكمون والكزبرة والثوم.",
    "de-CH": "Naturale Ojja angereichert mit Rinder-Merguez, gewürzt mit Chili, Kreuzkümmel, Koriander und Knoblauch.",
    "pt-BR": "Ojja natural enriquecida com merguez de carne, temperada com pimenta, cominho, coentro e alho.",
    cs: "Přirozený ojja obohacený hovězím merguezem, koření chilli, kmínem, koriandrem a česnekem.",
    "fr-BE": "Ojja nature enrichie de merguez de bœuf, épicée avec piment, cumin, coriandre et ail.",
    de: "Naturale Ojja angereichert mit Rinder-Merguez, gewürzt mit Chili, Kreuzkümmel, Koriander und Knoblauch.",
    "zh-CN": "用牛肉美格兹、辣椒、孜然、香菜和大蒜调味的天然奥吉亚。"
  },
  "ojja thon": {
    fr: "Ojja nature relevee avec l'ajout de thon.",
    en: "Natural ojja enhanced with the addition of tuna.",
    ar: "أجة عادية معززة بإضافة التونة.",
    "de-CH": "Natürliche Ojja mit Thunfisch angereichert.",
    "pt-BR": "Ojja natural aprimorada com a adição de atum.",
    cs: "Přirozený ojja vylepšený přidáním tuňáka.",
    "fr-BE": "Ojja nature relevée avec l'ajout de thon.",
    de: "Natürliche Ojja mit Thunfisch angereichert.",
    "zh-CN": "用金枪鱼增强的天然奥吉亚。"
  },
  "omelette accompagnee de salade": {
    fr: "Omelette servie avec une salade fraiche.",
    en: "Omelette served with fresh salad.",
    ar: "عجة تقدم مع سلطة طازجة.",
    "de-CH": "Omelett serviert mit frischem Salat.",
    "pt-BR": "Omelete servida com salada fresca.",
    cs: "Omelet podávaný s čerstvým salátem.",
    "fr-BE": "Omelette servie avec une salade fraîche.",
    de: "Omelett serviert mit frischem Salat.",
    "zh-CN": "配新鲜沙拉的煎蛋卷。"
  },
  "brik normale": {
    fr: "Feuille de brick garnie de puree de pomme de terre, harissa, persil frais, capres et oeuf dur ou coulant.",
    en: "Crispy pastry filled with potato puree, harissa, fresh parsley, capers and hard-boiled or soft-boiled egg.",
    ar: "ورقة بريك محشوة بهريس البطاطا والهريسة والبقدونس الطازج والكبر والبيضة المسلوقة أو الطرية.",
    "de-CH": "Knuspriges Blätterteig gefüllt mit Kartoffelpüree, Harissa, frischer Petersilie, Kapern und hartgekochtem oder weichem Ei.",
    "pt-BR": "Pastel crocante recheado com purê de batata, harissa, salsa fresca, alcaparras e ovo cozido ou mole.",
    cs: "Křupavé těsto naplněné bramborovým pyré, harissou, čerstvou petrželem, kapucínkami a vařeným nebo měkkým vejcem.",
    "fr-BE": "Feuille de brick garnie de purée de pomme de terre, harissa, persil frais, câpres et œuf dur ou coulant.",
    de: "Knuspriges Blätterteig gefüllt mit Kartoffelpüree, Harissa, frischer Petersilie, Kapern und hartgekochtem oder weichem Ei.",
    "zh-CN": "用土豆泥、哈里萨、新鲜欧芹、酸豆和煮鸡蛋或软鸡蛋填充的脆皮面包。"
  },
  "brik au thon": {
    fr: "Feuille de brick garnie de puree de pomme de terre, harissa, persil frais, capres, thon et oeuf dur ou coulant.",
    en: "Crispy pastry filled with potato puree, harissa, fresh parsley, capers, tuna and hard-boiled or soft-boiled egg.",
    ar: "ورقة بريك محشوة بهريس البطاطا والهريسة والبقدونس الطازج والكبر والتونة والبيضة المسلوقة أو الطرية.",
    "de-CH": "Knuspriges Blätterteig gefüllt mit Kartoffelpüree, Harissa, frischer Petersilie, Kapern, Thunfisch und hartgekochtem oder weichem Ei.",
    "pt-BR": "Pastel crocante recheado com purê de batata, harissa, salsa fresca, alcaparras, atum e ovo cozido ou mole.",
    cs: "Křupavé těsto naplněné bramborovým pyré, harissou, čerstvou petrželem, kapucínkami, tuňákem a vařeným nebo měkkým vejcem.",
    "fr-BE": "Feuille de brick garnie de purée de pomme de terre, harissa, persil frais, câpres, thon et œuf dur ou coulant.",
    de: "Knuspriges Blätterteig gefüllt mit Kartoffelpüree, Harissa, frischer Petersilie, Kapern, Thunfisch und hartgekochtem oder weichem Ei.",
    "zh-CN": "用土豆泥、哈里萨、新鲜欧芹、酸豆、金枪鱼和煮鸡蛋或软鸡蛋填充的脆皮面包。"
  },
  "brik en sauce": {
    fr: "Brik servie en assiette avec salade mechouia, pomme de terre cuite a l'eau, salade tunisienne, olives vertes, variante et poivron marine.",
    en: "Brik served on a plate with mechouia salad, boiled potatoes, Tunisian salad, green olives, pickled pepper.",
    ar: "بريك تقدم في طبق مع سلطة مشوية وبطاطا مسلوقة وسلطة تونسية وزيتون أخضر وفلفل مخلل.",
    "de-CH": "Brik serviert auf einem Teller mit Mechouia-Salat, gekochten Kartoffeln, tunesischem Salat, grünen Oliven, eingelegtem Pfeffer.",
    "pt-BR": "Brik servido em prato com salada mechouia, batatas cozidas, salada tunisiana, azeitonas verdes, pimenta em conserva.",
    cs: "Brik podávaný na talíři s salátem mechouia, vařenými brambory, tuniským salátem, zeleným olivami, nakládaným pepřem.",
    "fr-BE": "Brik servi en assiette avec salade mechouia, pomme de terre cuite à l'eau, salade tunisienne, olives vertes, variante et poivron mariné.",
    de: "Brik serviert auf einem Teller mit Mechouia-Salat, gekochten Kartoffeln, tunesischem Salat, grünen Oliven, eingelegtem Pfeffer.",
    "zh-CN": "配美肖亚沙拉、煮土豆、突尼斯沙拉、青橄榄、腌制辣椒的布里克。"
  },
  thon: {
    fr: "Portion supplementaire de thon.",
    en: "Additional portion of tuna.",
    ar: "حصة إضافية من التونة.",
    "de-CH": "Zusätzliche Portion Thunfisch.",
    "pt-BR": "Porção adicional de atum.",
    cs: "Dodatečná porce tuňáka.",
    "fr-BE": "Portion supplémentaire de thon.",
    de: "Zusätzliche Portion Thunfisch.",
    "zh-CN": "额外的金枪鱼部分。"
  },
  serdine: {
    fr: "Portion supplementaire de serdine.",
    en: "Additional portion of sardine.",
    ar: "حصة إضافية من السردين.",
    "de-CH": "Zusätzliche Portion Sardine.",
    "pt-BR": "Porção adicional de sardinha.",
    cs: "Dodatečná porce sardinek.",
    "fr-BE": "Portion supplémentaire de sardine.",
    de: "Zusätzliche Portion Sardine.",
    "zh-CN": "额外的沙丁鱼部分。"
  },
  oeufs: {
    fr: "Portion supplementaire d'oeufs.",
    en: "Additional portion of eggs.",
    ar: "حصة إضافية من البيض.",
    "de-CH": "Zusätzliche Portion Eier.",
    "pt-BR": "Porção adicional de ovos.",
    cs: "Dodatečná porce vajec.",
    "fr-BE": "Portion supplémentaire d'œufs.",
    de: "Zusätzliche Portion Eier.",
    "zh-CN": "额外的鸡蛋部分。"
  },
  "portion gruyere (50g)": {
    fr: "Ajout de gruyere.",
    en: "Addition of gruyere.",
    ar: "إضافة جرويير.",
    "de-CH": "Hinzufügen von Greyerzer.",
    "pt-BR": "Adição de Gruyère.",
    cs: "Přidání Gruyère.",
    "fr-BE": "Ajout de gruyère.",
    de: "Hinzufügen von Greyerzer.",
    "zh-CN": "添加格鲁耶尔芝士。"
  },
  "emballage emporte": {
    fr: "Supplement emballage a emporter.",
    en: "Takeaway packing fee.",
    ar: "رسم التغليف للنقل.",
    "de-CH": "Verpackungsgebühr zum Mitnehmen.",
    "pt-BR": "Taxa de embalagem para levar.",
    cs: "Poplatek za balení na cestu.",
    "fr-BE": "Supplément emballage à emporter.",
    de: "Verpackungsgebühr zum Mitnehmen.",
    "zh-CN": "外卖包装费。"
  },
  "eau minerale 1l": {
    fr: "Bouteille d'eau minerale.",
    en: "Mineral water bottle.",
    ar: "زجاجة ماء معدني.",
    "de-CH": "Mineralwasserflasche.",
    "pt-BR": "Garrafa de água mineral.",
    cs: "Láhev minerální vody.",
    "fr-BE": "Bouteille d'eau minérale.",
    de: "Mineralwasserflasche.",
    "zh-CN": "矿泉水瓶。"
  },
  "eau minerale 0,5l": {
    fr: "Petite bouteille d'eau minerale.",
    en: "Small mineral water bottle.",
    ar: "زجاجة ماء معدني صغيرة.",
    "de-CH": "Kleine Mineralwasserflasche.",
    "pt-BR": "Pequena garrafa de água mineral.",
    cs: "Malá láhev minerální vody.",
    "fr-BE": "Petite bouteille d'eau minérale.",
    de: "Kleine Mineralwasserflasche.",
    "zh-CN": "小矿泉水瓶。"
  },
  "boisson en verre": {
    fr: "Disponible uniquement sur place.",
    en: "Available only on-site.",
    ar: "متاح في الموقع فقط.",
    "de-CH": "Nur vor Ort verfügbar.",
    "pt-BR": "Disponível apenas no local.",
    cs: "K dispozici pouze na místě.",
    "fr-BE": "Disponible uniquement sur place.",
    de: "Nur vor Ort verfügbar.",
    "zh-CN": "仅在现场提供。"
  },
  "boisson canette": {
    fr: "Canette fraiche a emporter ou sur place.",
    en: "Fresh can to take away or on-site.",
    ar: "علبة طازجة للنقل أو في الموقع.",
    "de-CH": "Frische Dose zum Mitnehmen oder vor Ort.",
    "pt-BR": "Lata fresca para levar ou no local.",
    cs: "Čerstvá plechovka k odvezení nebo na místě.",
    "fr-BE": "Canette fraîche à emporter ou sur place.",
    de: "Frische Dose zum Mitnehmen oder vor Ort.",
    "zh-CN": "新鲜罐装饮料外卖或现场。"
  }
};
