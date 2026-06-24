import type {
  Stack,
  Job,
  Project,
  HeroData,
  AboutData,
  ContactData,
} from "./types";

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const hero: HeroData = {
  name: "Nihad Zatric",
  title: { fr: "Développeur web full stack", en: "Full stack web developer" },
  subtitle: {
    fr: "Je conçois des applications web orientées métier, du back-end à l'interface.",
    en: "I design business-oriented web applications, from back-end to interface.",
  },
  photo: "/images/DSC01783.webp",
  photoAlt: "Nihad Zatric",
  cta: {
    primary: {
      label: { fr: "Voir mes projets", en: "View my projects" },
      href: "#projects",
    },
    secondary: {
      label: { fr: "Me contacter", en: "Contact me" },
      href: "#contact",
    },
  },
};

// ─── About ────────────────────────────────────────────────────────────────────

export const about: AboutData = {
  bio: {
    fr: [
      "Développeur web depuis 2020, j'ai construit l'essentiel de mon expérience autour de l'intégration et de la maintenance d'ERP — des applications qui servent des équipes entières au quotidien. PHP, Laravel, Vue.js : c'est là que je suis le plus à l'aise, même si je suis capable d'intervenir sur des projets plus classiques, sites vitrine ou applications sur mesure.",
      "Ce qui m'attire dans ce métier, c'est la résolution de problèmes concrets. Je travaille bien en autonomie mais j'apprécie les équipes où les décisions techniques se prennent ensemble. Curieux par nature, je cherche toujours à comprendre le pourquoi derrière le quoi.",
    ],
    en: [
      "Web developer since 2020, I have built most of my experience around ERP integration and maintenance — applications that serve entire teams on a daily basis. PHP, Laravel, Vue.js: this is where I am most at home, although I am equally capable of working on more traditional projects such as showcase websites or bespoke applications.",
      "What draws me to this craft is solving concrete problems. I work well independently but appreciate teams where technical decisions are made together. Curious by nature, I always want to understand the why behind the what.",
    ],
  },
  cv: {
    fr: "/CV_Nihad_Zatric.pdf",
    // TODO: add your English CV to /public and update this path
    en: "/CV_Nihad_Zatric_en.pdf",
  },
};

// ─── Tech stack ───────────────────────────────────────────────────────────────

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

// ─── Jobs ─────────────────────────────────────────────────────────────────────

export const jobs: Job[] = [
  {
    company: "Edko",
    role: {
      fr: "Développeur front-end (freelance)",
      en: "Front-end Developer (freelance)",
    },
    location: "Paris — remote",
    period: { fr: "2025 — présent", en: "2025 — present" },
    logo: "/images/edko.webp",
    logoAlt: "Edko",
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
    description: {
      fr: "Refonte complète de l'interface d'Edko, une plateforme SaaS dédiée à l'automatisation des processus d'évaluation : questionnaires, relances, analyses et génération de rapports.",
      en: "Full redesign of Edko's interface — a SaaS platform dedicated to automating evaluation processes: questionnaires, reminders, analytics and report generation.",
    },
    highlights: {
      fr: [
        "Intégration page par page de la nouvelle charte graphique Figma, avec modernisation de l'UI pour améliorer l'intuitivité et l'engagement.",
        "Mise en place de composants factorisés et réutilisables — nettoyage et rationalisation du code existant.",
        "Migration progressive de l'application de Next.js vers Nuxt 4.",
        "Intégration de visualisations avancées via Chart.js pour les indicateurs d'analyse.",
        "Propositions d'améliorations UX et techniques : simplification, cohérence, performance.",
        "Équipe de 3 personnes.",
      ],
      en: [
        "Page-by-page integration of the new Figma design system, with UI modernisation to improve intuitiveness and engagement.",
        "Development of factorised, reusable components — cleanup and rationalisation of the existing codebase.",
        "Progressive migration of the application from Next.js to Nuxt 4.",
        "Integration of advanced data visualisations via Chart.js for analytics dashboards.",
        "UX and technical improvement proposals: simplification, consistency, performance.",
        "Team of 3.",
      ],
    },
  },

  {
    company: "France Solar",
    role: { fr: "Développeur full stack", en: "Full Stack Developer" },
    location: "Brumath",
    period: { fr: "2023 — 2025", en: "2023 — 2025" },
    logo: "/images/france_solar.png",
    logoAlt: "France Solar",
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
    description: {
      fr: "Participation au développement de l'ERP interne \"Ekoboy\", utilisé quotidiennement par 300 salariés d'un installateur de solutions photovoltaïques.",
      en: 'Contributed to the development of the in-house ERP "Ekoboy", used daily by 300 employees at a photovoltaic installation company.',
    },
    highlights: {
      fr: [
        "Développement de fonctionnalités métier : facturation, planification, gestion des litiges, suivi de chantiers.",
        "Intégration de services terrain : géolocalisation des véhicules via API, suivi en temps réel des interventions.",
        "Développement de deux applications Nuxt 3 indépendantes : gestion des demandes d'achat et pointage horaire sur chantier.",
        "Participation à la conception fonctionnelle, au découpage des tâches et à l'accompagnement d'un alternant.",
        "Équipe de 5 personnes, méthodo agile.",
      ],
      en: [
        "Development of business features: invoicing, scheduling, dispute management, and job site tracking.",
        "Integration of field services: vehicle geolocation via API, real-time intervention tracking.",
        "Development of two standalone Nuxt 3 applications: purchase request management and on-site time logging.",
        "Participation in functional design, task breakdown, and mentoring of an apprentice.",
        "5-person team, agile methodology.",
      ],
    },
  },

  {
    company: "SERMES",
    role: { fr: "Développeur web back-end", en: "Back-end Web Developer" },
    location: "Strasbourg",
    period: { fr: "2022 — 2023", en: "2022 — 2023" },
    logo: "/images/sermes.png",
    logoAlt: "SERMES",
    url: "https://www.sermes.fr/",
    stack: ["PHP 8.2", "Symfony 6", "API REST", "DB2 / SQL", "OpenAPI"],
    type: "work",
    description: {
      fr: "Conception d'une API REST avec Symfony 6 pour alimenter les nouveaux sites e-commerce de Willy Leissner et Sermes, dans le cadre de la migration vers un nouveau centre logistique à Dachstein.",
      en: "Design of a REST API with Symfony 6 to power the new e-commerce sites of Willy Leissner and Sermes, as part of a migration to a new logistics centre in Dachstein.",
    },
    highlights: {
      fr: [
        "Développement et documentation d'APIs métier (produits, stocks, commandes) via OpenAPI / Swagger.",
        "Refonte et migration des webservices AS400 vers Symfony, ou interfaçage avec des services RPG existants.",
        "Création de scripts d'import/export XML et connexion à la base DB2 via PDO ODBC.",
        "Équipe mixte : 6 développeurs AS400, 2 développeurs web.",
      ],
      en: [
        "Development and documentation of business APIs (products, stock, orders) via OpenAPI / Swagger.",
        "Redesign and migration of AS400 web services to Symfony, or interfacing with existing RPG services.",
        "Creation of XML import/export scripts and DB2 database connectivity via PDO ODBC.",
        "Mixed team: 6 AS400 developers, 2 web developers.",
      ],
    },
  },

  {
    company: "Cedam",
    role: { fr: "Développeur web", en: "Web Developer" },
    location: "Obernai",
    period: { fr: "2020 — 2022", en: "2020 — 2022" },
    logo: "/images/cedam.png",
    logoAlt: "Cedam",
    url: "https://www.cedam.fr/",
    stack: ["PHP 5.6", "JavaScript", "MySQL", "Wamp"],
    type: "work",
    description: {
      fr: "Développement d'applications web sur mesure pour accompagner l'intégration de l'ERP Divalto au sein d'un fabricant de meubles de salle de bain (40 salariés).",
      en: "Development of bespoke web applications to support the integration of the Divalto ERP system within a bathroom furniture manufacturer (40 employees).",
    },
    highlights: {
      fr: [
        "Outils pour les services administratifs et commerciaux : gestion des stocks, SAV, projets et diagramme de Gantt.",
        "Éditeur WYSIWYG pour la création de brochures commerciales.",
        "Applications connectées à la chaîne de production : scan de codes-barres, préparation de commandes, lancement de production.",
        "Travail en autonomie, rattaché à l'ingénieur méthodes.",
      ],
      en: [
        "Tools for administrative and sales teams: stock management, after-sales service, project tracking and Gantt charts.",
        "WYSIWYG editor for creating sales catalogues.",
        "Applications connected to the production line: barcode scanning, order picking, production launch.",
        "Working autonomously, reporting to the methods engineer.",
      ],
    },
  },
];

// ─── Education ────────────────────────────────────────────────────────────────

export const education: Job[] = [
  {
    company: "CCI Campus Alsace",
    role: {
      fr: "Concepteur développeur d'applications",
      en: "Application Designer & Developer",
    },
    location: "Strasbourg",
    period: { fr: "2022 — 2023", en: "2022 — 2023" },
    logo: "/images/cci.png",
    logoAlt: "CCI Campus Alsace",
    url: "https://www.alsace-eurometropole.cci.fr/se-former-avec-cci-campus-alsace",
    stack: [".NET Core", "TypeScript", "React Native", "React"],
    type: "education",
    description: {
      fr: "Titre professionnel de niveau 6 (Bac+3/4).",
      en: "Level 6 professional qualification (equivalent to a Bachelor's degree).",
    },
    highlights: {
      fr: [
        "Application web de simulation de tirages de loterie avec interface interactive et historique — architecture MVC .NET Core.",
        "Jeu mobile multijoueur développé à trois en environnement agile, avec connexion à une API externe en temps réel.",
      ],
      en: [
        "Web application for lottery draw simulation with interactive interface and history — .NET Core MVC architecture.",
        "Multiplayer mobile game developed as a team of three in an agile environment, with real-time connection to an external API.",
      ],
    },
  },

  {
    company: "IRIS Strasbourg",
    role: {
      fr: "BTS Services Informatiques aux Organisations",
      en: "Higher National Certificate in IT Services",
    },
    location: "Strasbourg",
    period: { fr: "2020 — 2022", en: "2020 — 2022" },
    logo: "/images/iris.png",
    logoAlt: "IRIS Strasbourg",
    url: "https://ecoleiris.fr/strasbourg",
    stack: ["PHP 5.6", "JavaScript", "MySQL"],
    type: "education",
    description: {
      fr: "BTS SIO — option SLAM (Solutions Logicielles et Applications Métiers).",
      en: "HNC in IT — Software Applications track (SLAM option).",
    },
    highlights: {
      fr: [
        "Développement d'un site e-commerce de vente de vélos en PHP orienté objet, JavaScript et MySQL.",
      ],
      en: [
        "Development of a bicycle e-commerce website in object-oriented PHP, JavaScript and MySQL.",
      ],
    },
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    title: "La Wantzenau FC",
    subtitle: {
      fr: "Site vitrine club de football",
      en: "Football club website",
    },
    year: "2026",
    url: "https://la-wantzenau-fc.com/",
    logo: "/images/lwfc.png",
    logoAlt: "La Wantzenau FC",
    stack: ["WordPress", "CSS", "SEO"],
    description: {
      fr: "Site vitrine pour le FC La Wantzenau, club amateur du nord de Strasbourg. Présentation du club et de ses équipes (séniors, féminines, jeunes), résultats en direct via l'API FFF, et espace partenaires entreprises.",
      en: "Showcase website for FC La Wantzenau, an amateur football club in northern Strasbourg. Club and team pages (seniors, women's, youth), live results via the FFF API, and a business partnership section.",
    },
  },

  {
    title: "ALEXISTANNEAU.COM",
    subtitle: {
      fr: "Portfolio professionnel",
      en: "Professional portfolio",
    },
    year: "2026",
    url: "https://alexistanneau.com/",
    logo: "/images/alexistanneau.png",
    logoAlt: "Alexis Tanneau",
    stack: ["Astro", "Tailwind CSS", "TypeScript"],
    description: {
      fr: "Portfolio pour Alexis Tanneau, spécialiste gaming & creator economy. Présentation de campagnes de marque, parcours professionnel, formation et compétences, avec mise en avant des indicateurs d'impact (vues, deals, expérience). Site statique performant, responsive et orienté conversion (CV, contact, LinkedIn).",
      en: "Portfolio for Alexis Tanneau, a gaming & creator economy specialist. Showcases brand campaigns, work history, education and skills, with highlighted impact metrics (views, deals, experience). Performant static site, responsive and conversion-focused (CV, contact, LinkedIn).",
    },
  },

  {
    title: "Portfolio",
    subtitle: { fr: "Ce site", en: "This site" },
    year: "2026",
    logo: "/images/icons/android-chrome-192x192.png",
    logoAlt: "Portfolio",
    stack: ["Astro", "Tailwind CSS", "TypeScript"],
    description: {
      fr: "Refonte complète du portfolio personnel. Conçu from scratch avec Astro v5 et Tailwind CSS v4, déployé sur VPS via Coolify. Dark mode par défaut, responsive, sans framework JS.",
      en: "Complete rebuild of my personal portfolio. Designed from scratch with Astro v5 and Tailwind CSS v4, deployed on a VPS via Coolify. Dark mode by default, responsive, no JS framework.",
    },
  },

  {
    title: "Alsa Roof & Sun",
    subtitle: { fr: "Site vitrine BTP", en: "Building trade showcase" },
    year: "2025",
    url: "https://alsaroofsun.fr/",
    logo: "/images/alsaroofsun.png",
    logoAlt: "Alsa Roof & Sun",
    stack: ["WordPress", "CSS", "SEO"],
    description: {
      fr: "Site vitrine pour une entreprise de couverture et d'installation photovoltaïque basée à Strasbourg, certifiée QualiPV. Présentation des services, formulaire de contact et outil d'estimation de projet.",
      en: "Showcase website for a roofing and solar panel installation company based in Strasbourg, QualiPV certified. Service presentation, contact form and project estimation tool.",
    },
  },

  {
    title: "Respire Info",
    subtitle: { fr: "Site informatif", en: "Informational website" },
    year: "2022",
    url: "https://www.respire-info.fr/",
    logo: "/images/respire.png",
    logoAlt: "Respire Info",
    stack: ["WordPress", "CSS", "SEO"],
    description: {
      fr: "Site informatif réalisé dans le cadre d'un mémoire d'orthophonie. Présente au grand public les risques liés à la respiration buccale et les parcours de soin possibles. Travail en collaboration directe avec la rédactrice du mémoire.",
      en: "Informational website created for a speech therapy research paper. Presents the general public with the risks of mouth breathing and available care pathways. Developed in direct collaboration with the paper's author.",
    },
  },
];

// ─── Contact ──────────────────────────────────────────────────────────────────

export const contact: ContactData = {
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
