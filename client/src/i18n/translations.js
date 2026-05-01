export const languageOptions = [
  { code: "fr", label: "Français", flag: "🇫🇷", dir: "ltr" },
  { code: "en", label: "English", flag: "🇬🇧", dir: "ltr" },
  { code: "ar", label: "العربية", flag: "🇸🇦", dir: "rtl" },
  { code: "de-CH", label: "Suisse", flag: "🇨🇭", dir: "ltr" },
  { code: "pt-BR", label: "Brasil", flag: "🇧🇷", dir: "ltr" },
  { code: "cs", label: "Čeština", flag: "🇨🇿", dir: "ltr" },
  { code: "fr-BE", label: "Belgique", flag: "🇧🇪", dir: "ltr" },
  { code: "de", label: "Deutsch", flag: "🇩🇪", dir: "ltr" },
  { code: "zh-CN", label: "中文", flag: "🇨🇳", dir: "ltr" }
];

const fr = {
  common: {
    home: "Accueil",
    search: "Recherche",
    menu: "Menu",
    points: "Points",
    cart: "Panier",
    orders: "Commandes",
    profile: "Profil",
    about: "A propos",
    events: "Evenements",
    order: "Commander",
    seeAll: "Voir tous",
    logout: "Deconnexion",
    loading: "Chargement...",
    address: "Adresse",
    phone: "Numero",
    email: "Email",
    message: "Message",
    language: "Langue"
  },
  header: {
    homeSubtitle: "Le meilleur Brik de Tunisie",
    searchSubtitle: "Trouvez rapidement vos produits",
    menuSubtitle: "Savourez le numero un de Tunisie",
    aboutSubtitle: "Decouvrez l'histoire de Ghzaiel Food",
    eventsSubtitle: "Reussites et moments forts de Ghzaiel",
    pointsSubtitle: "Gagnez des points a chaque commande",
    ordersSubtitle: "Suivez vos commandes en direct",
    cartSubtitle: "Finalisez votre commande",
    authTitle: "Connexion",
    authSubtitle: "Entrez dans l'univers Ghzaiel",
    dashboardTitle: "Mon espace",
    dashboardSubtitle: "Retrouvez vos commandes et vos avantages",
    fallbackTitle: "Ghzaiel Food",
    fallbackSubtitle: "Cuisine tunisienne moderne",
    appMenuLabel: "Ouvrir le menu de l'application",
    openProfile: "Ouvrir mon espace"
  },
  footer: {
    home: "Accueil",
    search: "Recherche",
    menu: "Menu",
    points: "Points",
    cart: "Panier"
  },
  auth: {
    registerEyebrow: "Creer un compte",
    welcomeEyebrow: "Bienvenue",
    registerTitle: "Rejoignez Ghzaiel Food",
    loginTitle: "Connexion a votre compte",
    registerDesc: "Inscrivez-vous pour commander, gagner des points et suivre vos avantages.",
    loginDesc: "Connectez-vous pour commander rapidement et consulter vos points fidelite.",
    fullName: "Nom complet",
    fullNamePlaceholder: "Votre nom complet",
    email: "Email",
    emailPlaceholder: "votre@email.com",
    password: "Mot de passe",
    passwordPlaceholder: "Votre mot de passe",
    pleaseWait: "Veuillez patienter...",
    createAccount: "Creer mon compte",
    login: "Se connecter",
    switchToLogin: "Vous avez deja un compte ? Se connecter",
    switchToRegister: "Vous n'avez pas de compte ? S'inscrire"
  },
  home: {
    localMenusTitle: "Nos menus en local",
    localMenusDesc: "Decouvrez nos categories sur place, avec les prix Ghzaiel clairement presentes.",
    onlineTitle: "Nos produit a commander en ligne",
    featuredClassic: "Brik Classique",
    featuredClassicDesc: "Le croustillant iconique de Ghzaiel",
    featuredGourmand: "Brik Gourmand",
    featuredGourmandDesc: "Plus genereux, plus fondant",
    menuProTitle: "MENU PRO",
    menuProDesc: "Profitez d'avantages exclusifs et de reductions.",
    scanMenu: "Scannez pour ouvrir le menu Ghzaiel",
    contactAdminTitle: "Contact administrateur",
    contactAdminDesc: "Laissez vos coordonnees et votre message. L'administration Ghzaiel vous repondra rapidement.",
    fullName: "Nom et prenom",
    fullNamePlaceholder: "Nom et prenom",
    emailPlaceholder: "Votre email",
    phoneLabel: "Numero",
    phonePlaceholder: "Votre numero",
    messageLabel: "Message",
    messagePlaceholder: "Votre message",
    sendAdmin: "Envoyer au contact admin",
    messageSent: "Votre message a ete envoye a l'administration Ghzaiel avec succes.",
    contactDetailsTitle: "Coordonnees Ghzaiel",
    contactDetailsDesc: "Retrouvez notre adresse, notre contact direct et l'acces rapide a la localisation.",
    addressValue: "Rue Med Ferjeni, Houmt Souk 4180",
    phoneValue: "25 644 212",
    emailValue: "contact@ghzaielfood.com"
  },
  search: {
    eyebrow: "Recherche",
    title: "Rechercher dans l'application",
    label: "Recherche par mot",
    placeholder: "Brik, boisson, gourmand...",
    noResultsTitle: "Aucun resultat",
    noResultsDesc: "Essayez un autre mot-cle comme brik, thon, gourmand ou boisson.",
    addedToCart: "{name} a ete ajoute au panier."
  },
  menu: {
    onlineTitle: "Menu en ligne",
    onlineDesc: "Commandez vos favoris en ligne et ajoutez-les a votre panier.",
    localTitle: "Nos menus en local",
    localDesc: "Decouvrez nos categories sur place, avec les prix Ghzaiel clairement presentes.",
    all: "TOUS",
    addedToCart: "{name} a ete ajoute au panier."
  },
  dashboard: {
    eyebrow: "Mon espace client",
    welcome: "Bienvenue {name}.",
    welcomeFallback: "Bienvenue chez Ghzaiel.",
    desc: "Retrouvez vos commandes, vos points fidelite et vos raccourcis utiles.",
    giftPoints: "Points cadeaux",
    account: "Compte",
    accountClient: "Client",
    accountAdmin: "Ghzaiel",
    premiumTitle: "Experience client premium",
    premiumDesc: "Chaque commande confirmee vous rapporte des points. Suivez vos statuts et avantages en direct.",
    orderOnline: "Commander en ligne",
    orderOnlineDesc: "Decouvrez le menu et ajoutez vos favoris au panier.",
    myCart: "Mon panier",
    myCartDesc: "Finalisez votre commande et choisissez votre livraison.",
    myOrders: "Mes commandes",
    myOrdersDesc: "Suivez vos commandes confirmees et leur statut.",
    myPoints: "Mes points",
    myPointsDesc: "Consultez vos points cadeaux et vos avantages fidelite."
  },
  orders: {
    eyebrow: "Commandes",
    title: "Suivez chaque commande et vos recompenses.",
    loadError: "Echec de chargement",
    realtimeTitle: "Suivi client en temps reel",
    realtimeDesc: "Consultez vos statuts de commande, livraisons et points gagnes dans une vue unique.",
    emptyTitle: "Aucune commande pour le moment",
    emptyDesc: "Vos prochaines commandes confirmees apparaitront ici avec leur statut et vos points.",
    orderLabel: "Commande",
    customer: "Client",
    phone: "Telephone",
    fulfillment: "Reception",
    pointsEarned: "Points gagnes",
    pointsRedeemed: "Points utilises",
    delivery: "Livraison",
    pickup: "Retrait sur place",
    pickupReady: "Disponible sur place environ 15 minutes apres validation.",
    notProvided: "Non renseigne",
    notProvidedF: "Non renseignee",
    status: {
      pending: "En attente",
      confirmed: "Confirmee",
      preparing: "En preparation",
      delivered: "Livree",
      cancelled: "Annulee"
    }
  },
  pointsPage: {
    load: "Chargement des donnees de fidelite...",
    errorTitle: "Erreur fidelite",
    title: "Points",
    desc: "Gagnez des points a chaque commande",
    rewardTitle: "Recompenses actives",
    rewardDesc: "Apres chaque commande validee, vos nouveaux points sont credites automatiquement sur votre compte.",
    collect: "Collectez {points} points",
    menuProDesc: "Profitez d'avantages exclusifs et d'offres speciales.",
    subscribe: "Abonnez-vous maintenant"
  },
  languageFab: {
    label: "Langue",
    title: "Choisir la langue"
  },
  admin: {
    title: "Admin Ghzaiel",
    subtitle: "Gestion premium du restaurant",
    dashboard: "Tableau de bord",
    products: "Produits",
    customers: "Clients",
    gallery: "Galerie",
    orders: "Commandes",
    viewSite: "Voir le site",
    adminPanelTitle: "Tableau de bord admin",
    adminPanelDesc: "Gestion complete du restaurant, des commandes et des clients.",
    dashboardEyebrow: "Vue d'ensemble admin",
    dashboardTitle: "Tableau de bord pro du restaurant.",
    dashboardDesc: "Suivez vos performances et accedez rapidement aux actions importantes.",
    manageProducts: "Gerer les produits",
    viewOrders: "Voir les commandes",
    contactMessages: "Messages de contact",
    contactDesc: "Demandes envoyees depuis la page d'accueil",
    ordersEyebrow: "Commandes",
    ordersTitle: "Gestion des commandes",
    ordersDesc: "Suivez les commandes en temps reel et mettez a jour chaque statut."
  }
};

const en = {
  common: { home: "Home", search: "Search", menu: "Menu", points: "Points", cart: "Cart", orders: "Orders", profile: "Profile", about: "About", events: "Events", order: "Order", seeAll: "See all", logout: "Log out", loading: "Loading...", address: "Address", phone: "Phone", email: "Email", message: "Message", language: "Language" },
  header: { homeSubtitle: "The best brik in Tunisia", searchSubtitle: "Find your products quickly", menuSubtitle: "Enjoy Tunisia's number one", aboutSubtitle: "Discover the Ghzaiel Food story", eventsSubtitle: "Success stories and highlights", pointsSubtitle: "Earn points with every order", ordersSubtitle: "Track your orders live", cartSubtitle: "Complete your order", authTitle: "Sign in", authSubtitle: "Enter the Ghzaiel universe", dashboardTitle: "My space", dashboardSubtitle: "Find your orders and benefits", fallbackTitle: "Ghzaiel Food", fallbackSubtitle: "Modern Tunisian cuisine", appMenuLabel: "Open app menu", openProfile: "Open my area" },
  footer: { home: "Home", search: "Search", menu: "Menu", points: "Points", cart: "Cart" },
  auth: { registerEyebrow: "Create account", welcomeEyebrow: "Welcome", registerTitle: "Join Ghzaiel Food", loginTitle: "Sign in to your account", registerDesc: "Register to order, earn points and track your benefits.", loginDesc: "Sign in to order quickly and view your loyalty points.", fullName: "Full name", fullNamePlaceholder: "Your full name", email: "Email", emailPlaceholder: "your@email.com", password: "Password", passwordPlaceholder: "Your password", pleaseWait: "Please wait...", createAccount: "Create my account", login: "Sign in", switchToLogin: "Already have an account? Sign in", switchToRegister: "Don't have an account? Sign up" },
  home: { localMenusTitle: "Our local menus", localMenusDesc: "Discover our dine-in categories with clearly displayed Ghzaiel prices.", onlineTitle: "Products available to order online", featuredClassic: "Classic Brik", featuredClassicDesc: "Ghzaiel's iconic crispy delight", featuredGourmand: "Gourmet Brik", featuredGourmandDesc: "Richer, softer, more generous", menuProTitle: "MENU PRO", menuProDesc: "Enjoy exclusive benefits and discounts.", scanMenu: "Scan to open the Ghzaiel menu", contactAdminTitle: "Contact the admin", contactAdminDesc: "Leave your details and message. The Ghzaiel team will reply quickly.", fullName: "Full name", fullNamePlaceholder: "Full name", emailPlaceholder: "Your email", phoneLabel: "Phone", phonePlaceholder: "Your phone number", messageLabel: "Message", messagePlaceholder: "Your message", sendAdmin: "Send to admin contact", messageSent: "Your message has been sent to the Ghzaiel team successfully.", contactDetailsTitle: "Ghzaiel contact details", contactDetailsDesc: "Find our address, direct contact and quick access to our location.", addressValue: "Rue Med Ferjeni, Houmt Souk 4180", phoneValue: "25 644 212", emailValue: "contact@ghzaielfood.com" },
  search: { eyebrow: "Search", title: "Search the application", label: "Keyword search", placeholder: "Brik, drink, gourmet...", noResultsTitle: "No results", noResultsDesc: "Try another keyword such as brik, tuna, gourmet or drink.", addedToCart: "{name} has been added to the cart." },
  menu: { onlineTitle: "Online menu", onlineDesc: "Order your favorites online and add them to your cart.", localTitle: "Our local menus", localDesc: "Discover our dine-in categories with clearly displayed Ghzaiel prices.", all: "ALL", addedToCart: "{name} has been added to the cart." },
  dashboard: { eyebrow: "My customer area", welcome: "Welcome {name}.", welcomeFallback: "Welcome to Ghzaiel.", desc: "Find your orders, loyalty points and useful shortcuts.", giftPoints: "Gift points", account: "Account", accountClient: "Customer", accountAdmin: "Ghzaiel", premiumTitle: "Premium customer experience", premiumDesc: "Every confirmed order earns you points. Track your statuses and benefits live.", orderOnline: "Order online", orderOnlineDesc: "Discover the menu and add your favorites to the cart.", myCart: "My cart", myCartDesc: "Complete your order and choose your delivery.", myOrders: "My orders", myOrdersDesc: "Track your confirmed orders and their status.", myPoints: "My points", myPointsDesc: "View your gift points and loyalty benefits." },
  orders: { eyebrow: "Orders", title: "Track every order and your rewards.", loadError: "Loading failed", realtimeTitle: "Real-time customer tracking", realtimeDesc: "View your order statuses, deliveries and earned points in one place.", emptyTitle: "No orders yet", emptyDesc: "Your next confirmed orders will appear here with their status and points.", orderLabel: "Order", customer: "Customer", phone: "Phone", fulfillment: "Fulfillment", pointsEarned: "Points earned", pointsRedeemed: "Points used", delivery: "Delivery", pickup: "Pickup in store", pickupReady: "Available in store about 15 minutes after validation.", notProvided: "Not provided", notProvidedF: "Not provided", status: { pending: "Pending", confirmed: "Confirmed", preparing: "Preparing", delivered: "Delivered", cancelled: "Cancelled" } },
  pointsPage: { load: "Loading loyalty data...", errorTitle: "Loyalty error", title: "Points", desc: "Earn points with every order", rewardTitle: "Active rewards", rewardDesc: "After each validated order, your new points are automatically credited to your account.", collect: "Collect {points} points", menuProDesc: "Enjoy exclusive benefits and special offers.", subscribe: "Subscribe now" },
  languageFab: { label: "Language", title: "Choose language" },
  admin: { title: "Ghzaiel Admin", subtitle: "Premium restaurant management", dashboard: "Dashboard", products: "Products", customers: "Customers", gallery: "Gallery", orders: "Orders", viewSite: "View site", adminPanelTitle: "Admin dashboard", adminPanelDesc: "Complete management of the restaurant, orders and customers.", dashboardEyebrow: "Admin overview", dashboardTitle: "Professional restaurant dashboard.", dashboardDesc: "Track your performance and access key actions quickly.", manageProducts: "Manage products", viewOrders: "View orders", contactMessages: "Contact messages", contactDesc: "Requests sent from the home page", ordersEyebrow: "Orders", ordersTitle: "Order management", ordersDesc: "Track orders in real time and update each status." }
};

const de = {
  common: { home: "Start", search: "Suche", menu: "Menü", points: "Punkte", cart: "Warenkorb", orders: "Bestellungen", profile: "Profil", about: "Über uns", events: "Events", order: "Bestellen", seeAll: "Alles ansehen", logout: "Abmelden", loading: "Wird geladen...", address: "Adresse", phone: "Telefon", email: "E-Mail", message: "Nachricht", language: "Sprache" }
};

const ar = {
  common: { home: "الرئيسية", search: "البحث", menu: "القائمة", points: "النقاط", cart: "السلة", orders: "الطلبات", profile: "الملف", about: "حول", events: "الفعاليات", order: "اطلب", seeAll: "عرض الكل", logout: "تسجيل الخروج", loading: "جار التحميل...", address: "العنوان", phone: "الهاتف", email: "البريد الإلكتروني", message: "الرسالة", language: "اللغة" }
};

const ptBR = {
  common: { home: "Início", search: "Pesquisa", menu: "Menu", points: "Pontos", cart: "Carrinho", orders: "Pedidos", profile: "Perfil", about: "Sobre", events: "Eventos", order: "Pedir", seeAll: "Ver tudo", logout: "Sair", loading: "Carregando...", address: "Endereço", phone: "Telefone", email: "E-mail", message: "Mensagem", language: "Idioma" }
};

const cs = {
  common: { home: "Domů", search: "Hledat", menu: "Menu", points: "Body", cart: "Košík", orders: "Objednávky", profile: "Profil", about: "O nás", events: "Události", order: "Objednat", seeAll: "Zobrazit vše", logout: "Odhlásit", loading: "Načítání...", address: "Adresa", phone: "Telefon", email: "E-mail", message: "Zpráva", language: "Jazyk" }
};

const zhCN = {
  common: { home: "首页", search: "搜索", menu: "菜单", points: "积分", cart: "购物车", orders: "订单", profile: "个人中心", about: "关于", events: "活动", order: "下单", seeAll: "查看全部", logout: "退出", loading: "加载中...", address: "地址", phone: "电话", email: "邮箱", message: "留言", language: "语言" }
};

export const translations = {
  fr,
  en,
  ar: { ...fr, ...ar, common: { ...fr.common, ...ar.common } },
  "de-CH": { ...fr, ...de, common: { ...fr.common, ...de.common } },
  "pt-BR": { ...fr, ...ptBR, common: { ...fr.common, ...ptBR.common } },
  cs: { ...fr, ...cs, common: { ...fr.common, ...cs.common } },
  "fr-BE": fr,
  de: { ...fr, ...de, common: { ...fr.common, ...de.common } },
  "zh-CN": { ...fr, ...zhCN, common: { ...fr.common, ...zhCN.common } }
};
