// ─── Types ───────────────────────────────────────────────────────────────────

export interface Stat {
  value: number;
  label: string;
  suffix?: string;
}

export interface Stack {
  label: string;
  category: "backend" | "frontend" | "tools" | "db";
}

export interface Job {
  company: string;
  role: string;
  location: string;
  period: string;
  logo: string;
  logoAlt: string;
  url: string;
  stack: string[];
  description: string;
  highlights: string[];
  type: "work" | "education";
}

export interface Project {
  title: string;
  subtitle: string;
  year: string;
  url?: string;
  logo: string;
  logoAlt: string;
  stack: string[];
  description: string;
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const hero = {
  name: "Nihad Zatric",
  title: "Développeur web full stack",
  subtitle:
    "Je conçois des applications web orientées métier, du back-end à l'interface.",
  photo: "/images/DSC01783.png",
  photoAlt: "Nihad Zatric",
  cta: {
    primary: { label: "Voir mes projets", href: "#projects" },
    secondary: { label: "Me contacter", href: "#contact" },
  },
};

// Stats are computed dynamically in Hero.astro

// ─── About ────────────────────────────────────────────────────────────────────

export const about = {
  bio: [
    "Développeur web depuis 2020, j'ai construit l'essentiel de mon expérience autour de l'intégration et de la maintenance d'ERP — des applications qui servent des équipes entières au quotidien. PHP, Laravel, Vue.js : c'est là que je suis le plus à l'aise, même si je suis capable d'intervenir sur des projets plus classiques, sites vitrine ou applications sur mesure.",
    "Ce qui m'attire dans ce métier, c'est la résolution de problèmes concrets. Je travaille bien en autonomie mais j'apprécie les équipes où les décisions techniques se prennent ensemble. Curieux par nature, je cherche toujours à comprendre le pourquoi derrière le quoi.",
  ],
  cv: "/CV_Nihad_Zatric.pdf",
};

export const stack: Stack[] = [
  { label: "PHP", category: "backend" },
  { label: "Laravel", category: "backend" },
  { label: "Symfony", category: "backend" },
  { label: "Vue.js", category: "frontend" },
  { label: "Nuxt 3", category: "frontend" },
  { label: "TypeScript", category: "frontend" },
  { label: "Vuetify", category: "frontend" },
  { label: "Tailwind CSS", category: "frontend" },
  { label: "Astro", category: "frontend" },
  { label: "MySQL", category: "db" },
  { label: "DB2 / SQL", category: "db" },
  { label: "API REST", category: "tools" },
  { label: "OpenAPI", category: "tools" },
  { label: "Git", category: "tools" },
  { label: "Docker", category: "tools" },
];

// ─── Experience ───────────────────────────────────────────────────────────────

export const jobs: Job[] = [
  {
    company: "Edko",
    role: "Développeur front-end (freelance)",
    location: "Paris — remote",
    period: "2025 — présent",
    logo: "/images/edko.webp",
    logoAlt: "Logo Edko",
    url: "https://edko.fr",
    stack: [
      "Nuxt 4",
      "Vue 3",
      "TypeScript",
      "Shadcn",
      "Tailwind CSS",
      "Chart.js",
      "API REST",
      "GitHub",
      "Python - Django",
      "Opencode",
    ],
    type: "work",
    description:
      "Refonte complète de l'interface d'Edko, une plateforme SaaS dédiée à l'automatisation des processus d'évaluation : questionnaires, relances, analyses et génération de rapports.",
    highlights: [
      "Intégration page par page de la nouvelle charte graphique Figma, avec modernisation de l'UI pour améliorer l'intuitivité et l'engagement.",
      "Mise en place de composants factorisés et réutilisables — nettoyage et rationalisation du code existant.",
      "Migration progressive de l'application de Next.js vers Nuxt 4.",
      "Intégration de visualisations avancées via Chart.js pour les indicateurs d'analyse.",
      "Propositions d'améliorations UX et techniques : simplification, cohérence, performance.",
      "Équipe de 3 personnes.",
    ],
  },
  {
    company: "France Solar",
    role: "Développeur full stack",
    location: "Brumath",
    period: "2023 — 2025",
    logo: "/images/france_solar.png",
    logoAlt: "Logo France Solar",
    url: "https://france-solar.fr/",
    stack: [
      "Laravel 10",
      "PHP 8.2",
      "Vue 2 & 3",
      "Nuxt 3",
      "Vuetify",
      "API REST",
    ],
    type: "work",
    description:
      "Participation au développement de l'ERP interne \"Ekoboy\", utilisé quotidiennement par 300 salariés d'un installateur de solutions photovoltaïques.",
    highlights: [
      "Développement de fonctionnalités métier : facturation, planification, gestion des litiges, suivi de chantiers.",
      "Intégration de services terrain : géolocalisation des véhicules via API, suivi en temps réel des interventions.",
      "Développement de deux applications Nuxt 3 indépendantes : gestion des demandes d'achat et pointage horaire sur chantier.",
      "Participation à la conception fonctionnelle, au découpage des tâches et à l'accompagnement d'un alternant.",
      "Équipe de 5 personnes, méthodo agile.",
    ],
  },
  {
    company: "SERMES",
    role: "Développeur web",
    location: "Strasbourg",
    period: "2022 — 2023",
    logo: "/images/sermes.png",
    logoAlt: "Logo SERMES",
    url: "https://www.sermes.fr/",
    stack: ["PHP 8.2", "Symfony 6", "API REST", "DB2 / SQL", "OpenAPI"],
    type: "work",
    description:
      "Conception d'une API REST avec Symfony 6 pour alimenter les nouveaux sites e-commerce de Willy Leissner et Sermes, dans le cadre de la migration vers un nouveau centre logistique à Dachstein.",
    highlights: [
      "Développement et documentation d'APIs métier (produits, stocks, commandes) via OpenAPI / Swagger.",
      "Refonte et migration des webservices AS400 vers Symfony, ou interfaçage avec des services RPG existants.",
      "Création de scripts d'import/export XML et connexion à la base DB2 via PDO ODBC.",
      "Équipe mixte : 6 développeurs AS400, 2 développeurs web.",
    ],
  },
  {
    company: "Cedam",
    role: "Développeur web",
    location: "Obernai",
    period: "2020 — 2022",
    logo: "/images/cedam.png",
    logoAlt: "Logo Cedam",
    url: "https://www.cedam.fr/",
    stack: ["PHP 5.6", "JavaScript", "MySQL", "Wamp"],
    type: "work",
    description:
      "Développement d'applications web sur mesure pour accompagner l'intégration de l'ERP Divalto au sein d'un fabricant de meubles de salle de bain (40 salariés).",
    highlights: [
      "Outils pour les services administratifs et commerciaux : gestion des stocks, SAV, projets et diagramme de Gantt.",
      "Éditeur WYSIWYG pour la création de brochures commerciales.",
      "Applications connectées à la chaîne de production : scan de codes-barres, préparation de commandes, lancement de production.",
      "Travail en autonomie, rattaché à l'ingénieur méthodes.",
    ],
  },
];

export const education: Job[] = [
  {
    company: "CCI Campus Alsace",
    role: "Concepteur développeur d'applications",
    location: "Strasbourg",
    period: "2022 — 2023",
    logo: "/images/cci.png",
    logoAlt: "Logo CCI Campus Alsace",
    url: "https://www.alsace-eurometropole.cci.fr/se-former-avec-cci-campus-alsace",
    stack: [".NET Core", "TypeScript", "React Native", "React"],
    type: "education",
    description: "Titre professionnel de niveau 6 (Bac+3/4).",
    highlights: [
      "Application web de simulation de tirages de loterie avec interface interactive et historique — architecture MVC .NET Core.",
      "Jeu mobile multijoueur développé à trois en environnement agile, avec connexion à une API externe en temps réel.",
    ],
  },
  {
    company: "IRIS Strasbourg",
    role: "BTS Services Informatiques aux Organisations",
    location: "Strasbourg",
    period: "2020 — 2022",
    logo: "/images/iris.png",
    logoAlt: "Logo IRIS",
    url: "https://ecoleiris.fr/strasbourg",
    stack: ["PHP 5.6", "JavaScript", "MySQL"],
    type: "education",
    description:
      "BTS SIO — option SLAM (Solutions Logicielles et Applications Métiers).",
    highlights: [
      "Développement d'un site e-commerce de vente de vélos en PHP orienté objet, JavaScript et MySQL.",
    ],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    title: "Portfolio",
    subtitle: "Ce site",
    year: "2026",
    logo: "/images/icons/favicon-32x32.png",
    logoAlt: "Portfolio",
    stack: ["Astro", "Tailwind CSS", "TypeScript"],
    description:
      "Refonte complète du portfolio personnel. Conçu from scratch avec Astro v5 et Tailwind CSS v4, déployé sur VPS via Coolify. Dark mode par défaut, responsive, sans framework JS.",
  },
  {
    title: "Alsa Roof & Sun",
    subtitle: "Site vitrine BTP",
    year: "2025",
    url: "https://alsaroofsun.fr/",
    logo: "/images/alsaroofsun.png",
    logoAlt: "Logo Alsa Roof & Sun",
    stack: ["WordPress", "CSS", "SEO"],
    description:
      "Site vitrine pour une entreprise de couverture et d'installation photovoltaïque basée à Strasbourg, certifiée QualiPV. Présentation des services, formulaire de contact et outil d'estimation de projet.",
  },
  {
    title: "Respire Info",
    subtitle: "Site informatif",
    year: "2022",
    url: "https://www.respire-info.fr/",
    logo: "/images/respire.png",
    logoAlt: "Logo Respire Info",
    stack: ["WordPress", "CSS", "SEO"],
    description:
      "Site informatif réalisé dans le cadre d'un mémoire d'orthophonie. Présente au grand public les risques liés à la respiration buccale et les parcours de soin possibles. Travail en collaboration directe avec la rédactrice du mémoire.",
  },
];

// ─── Contact ──────────────────────────────────────────────────────────────────

export const contact = {
  email: "nihad.zatric@gmail.com",
  socials: [
    {
      label: "LinkedIn",
      icon: "fa-brands fa-linkedin",
      url: "https://www.linkedin.com/in/nihadzatric/",
    },
    {
      label: "GitHub",
      icon: "fa-brands fa-github",
      url: "https://github.com/Nihad96",
    },
  ],
};
