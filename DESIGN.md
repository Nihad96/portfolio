# DESIGN.md — nihad.fr

Documentation du système de design du portfolio de Nihad Zatric.
Site : [nihad.fr](https://nihad.fr) · Stack : Astro 6 + Tailwind CSS v4 + TypeScript

---

## Table des matières

1. [Vue d'ensemble](#vue-densemble)
2. [Système de couleurs](#système-de-couleurs)
3. [Typographie](#typographie)
4. [Espacement & layout](#espacement--layout)
5. [Composants](#composants)
6. [Motion & interactions](#motion--interactions)
7. [Responsive](#responsive)

---

## Vue d'ensemble

Portfolio dark-first d'un développeur full-stack. L'esthétique est éditoriale et technique : canvas quasi-noir, un seul accent électrique, typographie condensée imposante pour les titres. Deux modes : **dark** (défaut) et **light** (togglable, persisté via cookie).

Le système repose sur des **tokens CSS custom properties** définis dans `src/styles/global.css`. Tous les composants les consomment ; aucune valeur brute de couleur n'est utilisée hors du fichier de tokens (à l'exception des couleurs de catégorie de tags, qui sont codées en dur dans `About.astro` et `Experience.astro`).

---

## Système de couleurs

### Dark mode (défaut)

| Token            | Valeur                     | Rôle                                    |
| ---------------- | -------------------------- | --------------------------------------- |
| `--bg`           | `#0c0c0c`                  | Fond principal (quasi-noir)             |
| `--bg-card`      | `#141414`                  | Fond des cartes et surfaces élevées     |
| `--bg-card-hover`| `#1a1a1a`                  | Fond des cartes au survol               |
| `--text`         | `#f0ede6`                  | Texte principal (blanc cassé chaud)     |
| `--text-muted`   | `#888580`                  | Texte secondaire / descriptions         |
| `--accent`       | `#c6ff00`                  | Lime électrique — couleur signature     |
| `--accent-hover` | `#a8d900`                  | Accent au survol (légèrement plus foncé)|
| `--border`       | `rgba(255, 255, 255, 0.08)`| Bordures discrètes                      |
| `--border-hover` | `rgba(198, 255, 0, 0.4)`   | Bordures au survol (teintées accent)    |

### Light mode (classe `.light` sur `<html>`)

| Token            | Valeur                      | Rôle                                    |
| ---------------- | --------------------------- | --------------------------------------- |
| `--bg`           | `#f7f3ec`                   | Fond principal (crème/parchemin chaud)  |
| `--bg-card`      | `#ede8df`                   | Fond des cartes                         |
| `--bg-card-hover`| `#e4ded4`                   | Fond des cartes au survol               |
| `--text`         | `#1c1917`                   | Texte principal (quasi-noir chaud)      |
| `--text-muted`   | `#78716c`                   | Texte secondaire                        |
| `--accent`       | `#7c3aed`                   | Violet — remplace le lime en light mode |
| `--accent-hover` | `#6d28d9`                   | Accent au survol                        |
| `--border`       | `rgba(0, 0, 0, 0.1)`        | Bordures discrètes                      |
| `--border-hover` | `rgba(124, 58, 237, 0.45)`  | Bordures au survol (teintées violet)    |

### Couleurs des tags de compétences

Les tags du nuage de compétences (`About.astro`) et les badges de timeline (`Experience.astro`) utilisent des couleurs fixes par catégorie, distinctes du token `--accent`.

#### Dark mode

| Catégorie  | Couleur texte | Classe CSS      |
| ---------- | ------------- | --------------- |
| Backend    | `#c6ff00`     | `.tag-backend`  |
| Frontend   | `#38bdf8`     | `.tag-frontend` |
| DB         | `#fb923c`     | `.tag-db`       |
| Tools      | `#a78bfa`     | `.tag-tools`    |

#### Light mode

| Catégorie  | Couleur texte | Classe CSS      |
| ---------- | ------------- | --------------- |
| Backend    | `#2563eb`     | `.tag-backend`  |
| Frontend   | `#0d9488`     | `.tag-frontend` |
| DB         | `#e11d48`     | `.tag-db`       |
| Tools      | `#7c3aed`     | `.tag-tools`    |

Chaque tag a un fond et une bordure à 5–6% d'opacité de sa propre couleur.

### Couleurs sémantiques fixes

| Usage                      | Dark              | Light             |
| -------------------------- | ----------------- | ----------------- |
| Badge "Travail"            | `#c6ff00` (accent)| `#7c3aed` (accent)|
| Badge "Formation"          | `#38bdf8`         | `#d97706`         |
| Sélection de texte (bg)    | `#c6ff00`         | —                 |
| Sélection de texte (color) | `#0c0c0c`         | —                 |
| Fond CTA primary (dark)    | `#0c0c0c`         | —                 |
| Fond CTA primary (light)   | —                 | `#ffffff`          |

### Transition de thème

Le changement de thème est fluide grâce à une transition sur `body` :

```css
body {
  transition: background-color 0.3s ease, color 0.3s ease;
}
```

---

## Typographie

### Familles de polices

| Token          | Famille                          | Usage                         |
| -------------- | -------------------------------- | ----------------------------- |
| `--font-heading` | `"Bebas Neue", sans-serif`     | Tous les titres (h1–h4), stats, numéros de section |
| `--font-body`    | `"Space Grotesk", sans-serif`  | Corps de texte, labels, nav   |

Chargement via Google Fonts avec `display=swap` :
```
Bebas Neue (400 uniquement) + Space Grotesk (300, 400, 500, 600, 700)
```

Propriétés de base sur `h1–h4` :
```css
font-family: var(--font-heading);
line-height: 1;
letter-spacing: 0.01em;
```

### Échelle typographique

| Élément              | Famille        | Taille                          | Poids | Notes                                |
| -------------------- | -------------- | ------------------------------- | ----- | ------------------------------------ |
| Nom (hero H1)        | Bebas Neue     | `clamp(4rem, 9vw, 8rem)`        | 400   | `line-height: 0.92`                  |
| Titres de section H2 | Bebas Neue     | `clamp(2.5rem, 5vw, 4rem)`      | 400   | `line-height: 1`                     |
| Rôle timeline H3     | Bebas Neue     | `1.5rem`                        | 400   | `line-height: 1`                     |
| Titre carte projet H3| Bebas Neue     | `1.75rem`                       | 400   | `line-height: 1.1`                   |
| Valeur stat          | Bebas Neue     | `2.8rem`                        | 400   | `line-height: 1`                     |
| Numéro de section    | Bebas Neue     | `1rem`                          | 400   | `letter-spacing: 0.1em`              |
| Logo nav "NZ."       | Bebas Neue     | `1.6rem`                        | 400   | `letter-spacing: 0.05em`             |
| Corps de texte       | Space Grotesk  | `1rem`                          | 400   | `line-height: 1.6`                   |
| Texte about          | Space Grotesk  | `1.05rem`                       | 400   | `line-height: 1.75`                  |
| Titre hero (métier)  | Space Grotesk  | `1.05rem`                       | 500   | `letter-spacing: 0.02em`             |
| Description          | Space Grotesk  | `0.9–0.95rem`                   | 400   | `line-height: 1.65`                  |
| Liens nav            | Space Grotesk  | `0.875rem`                      | 500   | —                                    |
| Labels / eyebrows    | Space Grotesk  | `0.75–0.8rem`                   | 600   | Uppercase, `letter-spacing: 0.12–0.15em` |
| Tech tags            | Space Grotesk  | `0.75rem`                       | 500   | —                                    |
| Footer               | Space Grotesk  | `0.8rem`                        | 400   | `color: var(--text-muted)`           |

**Note mobile :** le nom hero passe à `clamp(3.5rem, 16vw, 5rem)` sous 480px.

---

## Espacement & layout

### Container

```css
.container {
  width: 100%;
  max-width: 1100px;
  margin-inline: auto;
  padding-inline: clamp(1.25rem, 5vw, 3rem);
}
```

Le padding horizontal est fluide : minimum `1.25rem` sur mobile, maximum `3rem` sur grands écrans.

### Rythme vertical des sections

| Propriété                  | Valeur    |
| -------------------------- | --------- |
| `padding-block` par section| `6rem`    |
| `margin-bottom` section header | `3.5rem` |
| Séparateur entre sections  | `border-top: 1px solid var(--border)` |

### Grilles

| Composant       | Grille                          | Breakpoint mobile    |
| --------------- | ------------------------------- | -------------------- |
| About           | `1fr 1fr`, gap `4rem`           | `1fr` sous `768px`   |
| Projects        | `repeat(2, 1fr)`, gap `1.25rem` | `1fr` sous `640px`   |
| Contact         | `1fr 1fr`, gap `4rem`           | `1fr` sous `640px`   |
| Timeline        | `32px 1fr`, gap `0 1.75rem`     | `20px 1fr` sous `600px` |
| Hero            | flex row, gap `4rem`            | flex column sous `900px` |

### Border radius

| Contexte                    | Valeur  |
| --------------------------- | ------- |
| Cards projet                | `12px`  |
| Photo portrait              | `12px`  |
| Cards timeline              | `10px`  |
| Email link (contact)        | `10px`  |
| Boutons CTA                 | `8px`   |
| Social links                | `8px`   |
| Nav links, boutons icônes   | `6px`   |
| Tags (compétences, tech)    | `4px`   |
| Badges (work / education)   | `4px`   |
| Scrollbar thumb             | `2px`   |

---

## Composants

### Nav

**Fichier :** `src/components/Nav.astro`

Barre de navigation fixe (`position: fixed`, `z-index: 100`), hauteur `64px`.

**Structure :** Logo `NZ.` (point en `--accent`) · liens de navigation · actions (CV, langue, thème)

**États :**
- **Default** : fond transparent, sans bordure
- **Scrolled** (`.scrolled`, déclenché après `40px` de scroll) : fond `color-mix(in srgb, var(--bg) 85%, transparent)` + `backdrop-filter: blur(12px)` + `border-bottom: 1px solid var(--border)`

**Tokens utilisés :** `--bg`, `--bg-card`, `--text`, `--text-muted`, `--accent`, `--accent-hover`, `--border`, `--border-hover`

**Mobile** (sous `768px`) : liens et actions masqués, bouton hamburger visible (`36×36px`, `border-radius: 6px`). Menu déroulant `#mobile-nav` avec fond `var(--bg-card)`.

---

### Hero

**Fichier :** `src/components/Hero.astro`

Section pleine hauteur (`min-height: 100dvh`), centrée verticalement, `padding-top: 80px`.

**Structure :** Colonne gauche (texte + stats) · Colonne droite (portrait)

**Éléments :**
- **Eyebrow** : `0.8rem`, uppercase, `letter-spacing: 0.15em`, couleur `--accent`
- **Nom** : Bebas Neue `clamp(4rem, 9vw, 8rem)`, `line-height: 0.92`
- **Titre métier** : tiret em `—` en `--accent` suivi du titre en `--text-muted`
- **CTAs** : bouton primaire (fond `--accent`, texte `#0c0c0c`) + bouton secondaire (outline `--border`)
- **Stats** : séparés par `border-top: 1px solid var(--border)`, valeurs en Bebas Neue `2.8rem`, suffixe `+` en `--accent`
- **Portrait** : `border-radius: 12px`, `border: 1px solid var(--border)`, filtre `grayscale(20%)` → `0%` au hover. Décoration angulaire (coin bas-droit) : deux bordures `2px solid var(--accent)` formant un coin extérieur.
- **Fond** : grille de points `60px × 60px` (via `linear-gradient` sur `--border`), masquée par `radial-gradient` elliptique.

**Mobile** (sous `900px`) : la photo passe à l'intérieur de la colonne texte dans une ligne flex avec le nom/eyebrow. La photo desktop est masquée.

---

### About

**Fichier :** `src/components/About.astro`

Deux colonnes : bio à gauche, nuage de compétences à droite (`position: sticky; top: 80px` sur desktop).

**Bio :** paragraphes `1.05rem` en `--text-muted`, `line-height: 1.75`. Lien CV en `--accent` avec bordure `--border-hover`.

**Tag cloud :** flex-wrap, gap `0.5rem`. Tags `0.8rem`, `padding: 0.35rem 0.75rem`, `border-radius: 4px`. Fond et bordure tintés par catégorie (voir [Couleurs des tags](#couleurs-des-tags-de-compétences)). Au hover : `border-color` et fond intensifiés.

**Tokens utilisés :** `--bg-card`, `--text`, `--text-muted`, `--accent`, `--border`, `--border-hover`

**Mobile** (sous `768px`) : grille `1fr`, stack non-sticky.

---

### Experience (Timeline)

**Fichier :** `src/components/Experience.astro`

Timeline verticale mêlant emplois et formations, triés par date de fin décroissante (`présent` → `9999`).

**Structure par entrée :** marqueur (point + ligne) · carte contenu

**Marqueur :**
- Point `10×10px`, `border-radius: 50%`, fond `--accent`, contour double (`border: 2px solid var(--bg)` + `box-shadow: 0 0 0 2px var(--accent)`)
- Ligne verticale `1px`, `background: var(--border)`. Masquée sur le dernier élément.
- Au hover : point scale `1.4×`.

**Carte :** fond `--bg-card`, `border: 1px solid var(--border)`, `border-radius: 10px`, `padding: 1.5rem`. Au hover : `border-color` → `--border-hover`, fond → `--bg-card-hover`.

**Contenu de carte :**
- Période : `0.8rem`, `--text-muted`, `letter-spacing: 0.05em`
- Badge type : `0.7rem`, uppercase. "Travail" : teinté `--accent` ; "Formation" : teinté `#38bdf8` (dark) / `#d97706` (light)
- Logo entreprise : `max 90×60px`, `opacity: 0.9` → `1` au hover
- Rôle : Bebas Neue `1.5rem`
- Nom entreprise : `0.9rem`, couleur `--accent`
- Localisation : icône `fa-location-dot` + texte `0.8rem` en `--text-muted`
- Description : `0.95rem`, `--text-muted`, `line-height: 1.65`
- Points forts : liste sans puce, `::before` affiche `▸` en `--accent` (`0.7rem`)
- Tech tags : `0.75rem`, fond `var(--border)`, `--text-muted` (tags neutres, sans couleur catégorie)

**Tokens utilisés :** `--bg`, `--bg-card`, `--bg-card-hover`, `--text`, `--text-muted`, `--accent`, `--border`, `--border-hover`

**Mobile** (sous `600px`) : colonne marqueur réduite à `20px`, gap `1rem`.

---

### Projects

**Fichier :** `src/components/Projects.astro`

Grille `repeat(2, 1fr)`, gap `1.25rem`. Cartes en `flex-column` avec hauteur uniforme (grâce à `height: 100%` sur `.card-inner`).

**Structure de carte :**
- Top : logo projet (`40×40px`, `border-radius: 6px`) + bouton lien externe (`32×32px`, `border-radius: 6px`)
- Body : année (`0.75rem`, uppercase, `--accent`) · titre (Bebas Neue `1.75rem`) · sous-titre (`0.85rem`) · description (`0.9rem`)
- Stack : tech tags poussés en bas de carte via `margin-top: auto`

**États carte :** `border: 1px solid var(--border)` → `border-color: --border-hover`, fond → `--bg-card-hover`, `transform: translateY(-3px)` au hover.

**Bouton lien externe :** `--text-muted` → `--accent` + `--border-hover` au hover.

**Tokens utilisés :** `--bg`, `--bg-card`, `--bg-card-hover`, `--text`, `--text-muted`, `--accent`, `--border`, `--border-hover`

**Mobile** (sous `640px`) : grille `1fr`.

---

### Contact

**Fichier :** `src/components/Contact.astro`

Deux colonnes : message d'accroche à gauche, liens de contact à droite. Footer bar intégré au bas de la section.

**Email link :** carte-bouton pleine largeur (`padding: 1rem 1.25rem`, `border-radius: 10px`). Au hover : `border-color` → `--border-hover`, texte → `--accent`, `translateY(-2px)`.

**Social links :** pills flex (`padding: 0.6rem 1rem`, `border-radius: 8px`). Au hover : couleur → `--accent`, bordure → `--border-hover`, `translateY(-2px)`.

**Footer bar :** `border-top: 1px solid var(--border)`, flex entre copyright et attribution. Liens attribution : `--text-muted` → `--accent` au hover.

**Tokens utilisés :** `--bg-card`, `--bg-card-hover`, `--text`, `--text-muted`, `--accent`, `--border`, `--border-hover`

**Mobile** (sous `640px`) : grille `1fr`, social links en flex-wrap, footer centré.

---

## Motion & interactions

### Classe `.reveal` (scroll-based)

Tous les blocs de contenu démarrent masqués et se révèlent au scroll via `IntersectionObserver` (défini dans `src/pages/index.astro` et `src/pages/en/index.astro`).

```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Stagger dans le Hero

Les éléments `.reveal` du hero ont des `transition-delay` incrémentaux de `0.05s` :
- `nth-child(1)` → `0.05s`, `nth-child(2)` → `0.1s`, ... jusqu'à `0.3s`
- Photo desktop → `0.2s`

### Stagger dans Experience & Projects

Les `timeline-item` et `project-card` ont un `transition-delay` calculé dynamiquement :

```astro
style={`transition-delay: ${i * 0.07}s`}  // Experience
style={`transition-delay: ${i * 0.1}s`}   // Projects
```

### Compteurs animés (Hero stats)

Les valeurs de stats comptent de `0` jusqu'à leur cible en `~1200ms` via `setInterval`, déclenchés par `IntersectionObserver` quand `.hero-stats` est visible à `50%`.

### Transitions de hover (synthèse)

| Élément                  | Propriétés animées                              | Durée   |
| ------------------------ | ----------------------------------------------- | ------- |
| Boutons CTA              | `background-color`, `transform: translateY`     | `0.15–0.2s` |
| Cards projet             | `border-color`, `background-color`, `transform: translateY(-3px)` | `0.2s` |
| Cards timeline           | `border-color`, `background-color`              | `0.2s`  |
| Point timeline           | `transform: scale(1.4)`                         | `0.2s`  |
| Logo entreprise          | `opacity: 0.9 → 1`                              | `0.2s`  |
| Portrait (filtre)        | `filter: grayscale(20%) → grayscale(0%)`        | `0.3s`  |
| Nav scroll               | `background-color`, `border-color`, `backdrop-filter` | `0.3s` |
| Thème (body)             | `background-color`, `color`                     | `0.3s`  |
| Nav link hover           | `color`, `background-color`                     | `0.2s`  |

### Scrollbar personnalisée

```css
::-webkit-scrollbar        { width: 4px; }
::-webkit-scrollbar-track  { background: var(--bg); }
::-webkit-scrollbar-thumb  { background: var(--border); border-radius: 2px; }
```

### Sélection de texte

```css
::selection {
  background: var(--accent);
  color: #0c0c0c;
}
```

---

## Responsive

Le site cible quatre breakpoints implicites :

| Breakpoint | Contexte                             | Principaux changements                          |
| ---------- | ------------------------------------ | ----------------------------------------------- |
| `> 900px`  | Desktop                              | Layout complet, photo hero à droite, nav complète |
| `≤ 900px`  | Tablette paysage / mobile large      | Hero en colonne, photo intégrée en ligne avec le nom |
| `≤ 768px`  | Tablette portrait                    | Nav hamburger, about/contact grilles `1fr`      |
| `≤ 640px`  | Mobile                               | Projects `1fr`, contact `1fr`, footer centré    |
| `≤ 600px`  | Mobile                               | Timeline : marqueur réduit                      |
| `≤ 480px`  | Petit mobile                         | Nom hero : `clamp(3.5rem, 16vw, 5rem)`          |

**Container padding** : fluid via `clamp(1.25rem, 5vw, 3rem)` — aucun padding fixe par breakpoint.

**Stack about** : passe de `position: sticky; top: 80px` à `position: static` sous `768px`.

**Timeline** : la colonne marqueur passe de `32px` à `20px`, le gap de `1.75rem` à `1rem` sous `600px`.
