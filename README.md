# Patrick X. Capaldo — Personal Website & Portfolio

My minimalist personal website, portfolio tracker, and engineering notebook built with **Eleventy (11ty)**. Designed to match the technical, high-contrast aesthetic and design standards of [Silicon Carbide Imperative](https://scimperative.com/).

Hosted on **GitHub Pages** at [patrickxcapaldo.github.io](https://patrickxcapaldo.github.io/) with automated **GitHub Actions CI/CD**.

---

## 🏗️ Architecture & Structure

A standalone, zero-dependency static site. All source files live on `main`. Deploys are fully automated via GitHub Actions—there are no build artifacts or `gh-pages` branches to manage.

```text
patrickxcapaldo.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml        # Automated CI/CD GitHub Pages deployment pipeline
├── src/                      # Source content & layouts
│   ├── _includes/layouts/    # Base, post, and project page layout templates (.njk)
│   ├── assets/               # Static images and media (passed through to _site)
│   ├── css/style.css         # Complete Scimperative-aligned design system & responsive rules
│   ├── js/                   # Vanilla theme switcher & tag filter logic
│   ├── index.njk             # About & Experience timeline (/)
│   ├── thoughts.njk          # Thoughts & essay list with tag filtering (/thoughts/)
│   ├── thoughts/             # Markdown articles (.md)
│   ├── projects.njk          # Grouped projects listing (/projects/)
│   ├── projects/other/       # Markdown project pages (.md)
│   └── contact.njk           # Contact directory (/contact/)
├── eleventy.config.js        # 11ty asset passthroughs, collections, & custom filters
├── package.json              # Build scripts and dev dependencies
└── README.md                 # This manual
```

---

## 🛠️ Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Local Development Server
```bash
npm run dev
```
*(Runs `npx @11ty/eleventy --serve`)*

Open [http://localhost:8080](http://localhost:8080) in your browser. The page hot-reloads automatically whenever you save edits to markdown or styling.

### 3. Build for Production Locally (Optional Test)
```bash
npm run build
```
Compiles everything into the `_site/` directory.

---

## 🚀 How to Publish Changes (Automated CI/CD)

Deployments are 100% automated. You never need to build manually before pushing or mess with a `gh-pages` branch.

Whenever you add an article, update project details, or adjust styling:

```bash
# 1. Stage your changes
git add .

# 2. Commit
git commit -m "Add new post on orbital mechanics"

# 3. Push to main
git push origin main
```

### What Happens Automatically:
1. GitHub receives the push on `main`.
2. The [Deploy to GitHub Pages](.github/workflows/deploy.yml) workflow triggers.
3. Node 20 installs dependencies and runs `npm run build`.
4. The generated site is published directly to [https://patrickxcapaldo.github.io/](https://patrickxcapaldo.github.io/).

---

## ✍️ Writing & Adding Content

### Adding a Thought / Article
Create a new file in `src/thoughts/YYYY-MM-DD-slug.md`:

```markdown
---
layout: layouts/post.njk
title: "Your Post Title"
date: 2026-11-05
tags:
  - tutorial   # or book, blog, puzzle, essay
excerpt: "One-sentence summary for list previews."
thumbnail: /assets/img/tutorials/example.png # Optional preview image
---

Your content in Markdown here...
```

### Adding a Project
Create a new file in `src/projects/other/project_slug.md`:

```markdown
---
layout: layouts/project.njk
title: "Project Name"
date: 2026-01-01
tags: [python, ai]
status: Active   # Active | Paused | Archive
excerpt: "Project description."
thumbnail: /assets/img/projects/example.png
---

Project overview and technical details here...
```

---

## 🎨 Design System & Tokens

* **Engine:** Eleventy v3 (Nunjucks + Markdown)
* **Design Philosophy:** North Star Standard (Flat fills, 1px hairlines, zero decorative motion, mobile-first responsive).
* **Typography:**
  * Primary: `Inter, system-ui, sans-serif`
  * Monospace / Data: `JetBrains Mono, ui-monospace, monospace`
* **Color Palette:**
  * **Ink:** `#0f1117`
  * **Black:** `#000000` (deepest dark baseline)
  * **Slate:** `#475569`
  * **Mist:** `#94A3B8`
  * **Orchid (Single Accent):** `#B97FED` (`--brand-orchid`)
* **Theme Switching:** Dark mode baseline with light mode toggle support; preferences persist in `localStorage` (`pc-theme`) with zero flash of unstyled theme on page load.
