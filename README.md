# Nihad Zatric — Portfolio

Portfolio personnel disponible sur [nihad.fr](https://nihad.fr).

Refonte complète de l'ancien site HTML/CSS/JS, reconstruit avec Astro v6 et Tailwind CSS v4. Single page avec navigation par ancres, dark mode par défaut, responsive mobile.

---

## Stack

| Couche | Techno |
|---|---|
| Framework | Astro v5 (statique) |
| Style | Tailwind CSS v4 + CSS custom properties |
| Langage | TypeScript |
| Typographie | Bebas Neue + Space Grotesk (Google Fonts) |
| Icônes | Font Awesome |
| Déploiement | Coolify (VPS) via Docker |

---

## Lancer en local

```bash
pnpm install
pnpm dev
```

Le site tourne sur `http://localhost:4321`.

---

## Build & preview

```bash
pnpm build      # génère le site statique dans dist/
pnpm preview    # preview local du build
```

---

## Déploiement (Coolify)

Un `Dockerfile` multi-stage est inclus :
- **Build** : `node:22-alpine` + pnpm → `pnpm build`
- **Serve** : `nginx:alpine` → sert le contenu de `dist/`

La configuration nginx (`nginx.conf`) inclut gzip, cache long terme pour les assets statiques et fallback HTML.

Pour un déploiement automatique : configurer un webhook Coolify sur la branche `main`.

---

## Structure du projet

```
src/
├── components/
│   ├── Nav.astro         Barre de navigation fixe + toggle dark/light
│   ├── Hero.astro        Section d'accroche : nom, stats, photo, CTAs
│   ├── About.astro       Bio + tag cloud des technologies
│   ├── Experience.astro  Timeline parcours (expériences + formations)
│   ├── Projects.astro    Grille de projets personnels
│   └── Contact.astro     Email, liens sociaux, footer
├── data/
│   └── content.ts        Tout le contenu du site (source unique de vérité)
├── layouts/
│   └── Layout.astro      Structure HTML, meta, dark/light cookie
├── pages/
│   └── index.astro       Assemblage des sections
└── styles/
    └── global.css        Tokens CSS dark/light, fonts, reset

public/
└── images/               Logos, photo, favicons
    CV_Nihad_Zatric.pdf
```

---

## Modifier le contenu

Tout le contenu est centralisé dans `src/data/content.ts` : bio, expériences, formations, projets, coordonnées. Modifier ce fichier suffit — aucun autre fichier à toucher pour une mise à jour de contenu.

Les stats du Hero (années d'expérience, nombre de postes, nombre de projets) sont calculées dynamiquement depuis les données.
