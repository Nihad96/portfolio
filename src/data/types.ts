// ─── Localisation primitives ──────────────────────────────────────────────────

/** A string that has both a French and an English value. */
export type LocalizedString = { fr: string; en: string };

/** An array of strings that has both a French and an English version. */
export type LocalizedStringArray = { fr: string[]; en: string[] };

// ─── Shared types ─────────────────────────────────────────────────────────────

export interface Stack {
  label: string;
  category: "backend" | "frontend" | "tools" | "db";
}

export interface Job {
  company: string;
  role: LocalizedString;
  location: string;
  /** "2025 — présent" / "2025 — present" — use LocalizedString to handle "présent" vs "present". */
  period: LocalizedString;
  logo: string;
  logoAlt: string;
  url: string;
  stack: string[];
  description: LocalizedString;
  highlights: LocalizedStringArray;
  type: "work" | "education";
}

export interface Project {
  title: string;
  subtitle: LocalizedString;
  year: string;
  url?: string;
  logo: string;
  logoAlt: string;
  stack: string[];
  description: LocalizedString;
}

export interface HeroData {
  name: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  photo: string;
  photoAlt: string;
  cta: {
    primary:   { label: LocalizedString; href: string };
    secondary: { label: LocalizedString; href: string };
  };
}

export interface AboutData {
  bio: LocalizedStringArray;
  /** Path to the downloadable CV — each locale can point to a different PDF. */
  cv: LocalizedString;
}

export interface ContactData {
  email: string;
  socials: { label: string; icon: string; url: string }[];
}
