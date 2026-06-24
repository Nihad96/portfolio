// ─── UI label translations ────────────────────────────────────────────────────
// Keys are language-neutral; values are locale-specific strings.
// Add new UI strings here as the site grows.

export const translations = {
  fr: {
    // Navigation
    nav_about: "À propos",
    nav_experience: "Expériences",
    nav_projects: "Projets",
    nav_contact: "Contact",
    nav_toggle_theme: "Basculer le thème",
    nav_menu: "Menu",
    nav_lang_switch: "Switch to English",

    // Hero stats
    stat_xp: "ans d'expérience",
    stat_jobs: "postes en entreprise",
    stat_projects: "projets personnels",
    hero_eyebrow: "Strasbourg, France",

    // About
    about_title: "À propos",
    about_download_cv: "Télécharger mon CV",
    about_tech: "Technologies",

    // Experience
    experience_title: "Parcours",
    badge_work: "Expérience",
    badge_education: "Formation",

    // Projects
    projects_title: "Projets",
    project_visit_label: "Voir le projet",

    // Contact
    contact_title: "Contact",
    contact_text:
      "Disponible pour des opportunités freelance ou une collaboration en CDI. N'hésitez pas à me contacter directement par e-mail.",

    // Footer
    footer_built: "Construit avec",

    // Meta (SEO)
    meta_title: "Nihad Zatric — Développeur web full stack",
    meta_description:
      "Portfolio de Nihad Zatric, développeur web full stack spécialisé dans la conception d'applications métier. Basé à Strasbourg.",
  },

  en: {
    // Navigation
    nav_about: "About",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_contact: "Contact",
    nav_toggle_theme: "Toggle theme",
    nav_menu: "Menu",
    nav_lang_switch: "Passer en français",

    // Hero stats
    stat_xp: "years of experience",
    stat_jobs: "positions held",
    stat_projects: "personal projects",
    hero_eyebrow: "Strasbourg, France",

    // About
    about_title: "About",
    about_download_cv: "Download my CV",
    about_tech: "Technologies",

    // Experience
    experience_title: "Experience",
    badge_work: "Work",
    badge_education: "Education",

    // Projects
    projects_title: "Projects",
    project_visit_label: "Visit",

    // Contact
    contact_title: "Contact",
    contact_text:
      "Available for freelance opportunities or a permanent position. Feel free to reach out directly by email.",

    // Footer
    footer_built: "Built with",

    // Meta (SEO)
    meta_title: "Nihad Zatric — Full stack web developer",
    meta_description:
      "Portfolio of Nihad Zatric, full stack web developer specialised in business applications. Based in Strasbourg.",
  },
} as const;

export type Locale = keyof typeof translations;
export type TranslationKey = keyof typeof translations.fr;
