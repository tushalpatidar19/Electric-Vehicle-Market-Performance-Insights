# EV Insights — Electric Vehicle Market Performance & Insights

> **An interactive analytics platform and Tableau visualization showcase examining global electric vehicle adoption curves, manufacturer competitiveness, battery technology milestones, pricing parity, and vehicle range efficiency.**

[![Deployment Status](https://img.shields.io/badge/Deployment-GitHub%20Pages-orange?style=flat&logo=github)](https://pages.github.com/)
[![Framework](https://img.shields.io/badge/Framework-React%2019%20%2B%20Vite%208-blue?style=flat&logo=react)](https://react.dev/)
[![Styling](https://img.shields.io/badge/Styling-Tailwind%20CSS%20v4-38bdf8?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![Analytics Engine](https://img.shields.io/badge/Visualization-Tableau%20Public-e97627?style=flat&logo=tableau)](https://public.tableau.com/)

---

## 1. Project Overview

**EV Insights** was engineered as an academic capstone and data analytics showcase by **Tushal Patidar**. The initiative addresses the rapid electrification transition within the global automotive industry by converting multidimensional registration and vehicle specification datasets into clear, interactive, and actionable visual narratives.

The platform provides a responsive, dark-mode analytics portal directly integrating verified **Tableau Public** dashboards and stories, built specifically to deploy seamlessly to **GitHub Pages** with **zero server dependencies** and **zero hosting costs**.

---

## 2. Core Features

- **Direct Tableau Public Integration**:
  - Live embedding of the verified published dashboard: `EV Adoption Strategy Dashboard`.
  - Zero login credentials required for external viewers.
  - Interactive toolbar with full-screen view mode, iframe reload, and direct launch buttons.
  - Resilient loading state indicators and network troubleshooting fallback.
- **Dedicated Tableau Story Section**:
  - Modular story architecture allowing dynamic embedding of published Tableau Stories.
  - In-app interactive URL configuration setting with instant live embedding (persisted in `localStorage`).
  - Five structured insight cards exploring market inflection points, OEM competitive maneuvers, cell chemistry, pricing parity, and range anxiety mitigation.
- **Seven Analytics Feature Modules**:
  1. *Manufacturer Sales Analysis*: Volume delivery, market share shifts, and legacy vs. pure-play EV competition.
  2. *EV Pricing Comparison*: Base MSRP spread, premium tier margins, and price-per-range ratios.
  3. *Country-wise EV Distribution*: Geospatial adoption density and regional clean air mandate impacts.
  4. *Battery Capacity Analysis*: Pack kWh distributions, cell formats, and gravimetric density curves.
  5. *Driving Range Comparison*: EPA/WLTP estimated range distributions across model generations.
  6. *Manufacturer Distribution*: OEM portfolio diversity, BEV vs. PHEV ratios, and platform scalability.
  7. *EV Efficiency Analysis*: Energy consumption (kWh per 100 miles) and aerodynamic drag correlations.
- **Comprehensive 8-Stage Research Methodology**:
  - Detailed academic process flow from data hygiene and EDA through LOD calculation modeling and web integration.
- **Automated GitHub Actions CI/CD**:
  - Pre-configured `.github/workflows/deploy.yml` pipeline that builds and deploys directly to GitHub Pages upon push.

---

## 3. Technologies Used

| Technology | Category | Purpose |
| :--- | :--- | :--- |
| **React 19** | Frontend Library | Component architecture, declarative state, and hooks |
| **Vite 8** | Build System & Dev Server | Ultra-fast local HMR and optimized production rollup builds |
| **JavaScript (ES2022)** | Core Language | 100% clean modern JavaScript without TypeScript compiler complexity |
| **Tailwind CSS v4** | Styling & Theme | Utility-first design system with custom amber dark theme |
| **Lucide React** | Iconography | Lightweight, accessible semantic interface icons |
| **Tableau Public** | BI & Analytics | Verified interactive dashboard and story visual engine |
| **GitHub Actions** | CI/CD Pipeline | Automated build and deployment to GitHub Pages |
| **GitHub Pages** | Static Hosting | High-speed global CDN delivery with automatic HTTPS |

---

## 4. Project Structure

```text
ev-insights/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── favicon.svg             # Custom EV electric amber SVG favicon
│   └── assets/                 # Static public assets
├── src/
│   ├── assets/
│   │   └── images/             # High-resolution automotive design & powertrain renders
│   ├── components/
│   │   ├── Navbar.jsx          # Top navigation with active scrollspy & mobile drawer
│   │   ├── Hero.jsx            # Project introduction, CTAs, and key research dimensions
│   │   ├── About.jsx           # Rationale, scope, and technical platform architecture
│   │   ├── Dashboard.jsx       # Verified Tableau Public dashboard embed with controls
│   │   ├── Story.jsx           # Tableau Story embedding & analytical breakdown
│   │   ├── AnalyticsFeatures.jsx # 7 analytical dimension cards linked to dashboard
│   │   ├── Methodology.jsx     # 8-stage research pipeline documentation
│   │   ├── TechStack.jsx       # Verified technology stack cards
│   │   └── Footer.jsx          # Attribution, back-to-top, and repository links
│   ├── config/
│   │   └── tableau.js          # Centralized Tableau URLs and metadata configuration
│   ├── App.jsx                 # Main application layout wrapper
│   ├── main.jsx                # React root rendering entry point
│   └── index.css               # Tailwind CSS v4 imports and custom styling
├── index.html                  # HTML5 shell, SEO tags, and Tableau Embedding API
├── package.json                # Project dependencies and npm scripts
├── vite.config.ts              # Vite configuration with relative base path support
└── README.md                   # Complete documentation
```

---

## 5. Local Installation & Development

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18.0.0 or higher recommended)
- `npm` (comes bundled with Node.js)

### Step 1: Clone or Download the Repository
```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Run the Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000`.

### Step 4: Build for Production
```bash
npm run build
```
This generates a production-ready, bundled static website in the `dist/` directory with relative asset paths.

### Step 5: Preview the Production Build Locally
```bash
npm run preview
```

---

## 6. GitHub Pages Deployment Guide

This project is pre-configured to build and deploy to GitHub Pages automatically via **GitHub Actions**.

### Step-by-Step GitHub Upload & Activation:

1. **Initialize Git & Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "feat: complete EV Insights platform with Tableau integration"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

2. **Enable GitHub Pages in Your Repository**:
   - Navigate to your repository on GitHub.
   - Click on the **Settings** tab.
   - In the left sidebar, click on **Pages** (under "Code and automation").
   - Under **Build and deployment > Source**, select **GitHub Actions** (NOT "Deploy from a branch").

3. **Automatic Deployment**:
   - Pushing to `main` will automatically trigger the workflow defined in `.github/workflows/deploy.yml`.
   - You can monitor the live build progress under the **Actions** tab of your repository.
   - Once completed (~1-2 minutes), your live site will be accessible at:
     ```text
     https://<your-username>.github.io/<your-repo-name>/
     ```

---

## 7. Tableau Integration & Configuration

### A. Dashboard Integration
The dashboard is pre-configured with the author's verified published link:
- **Published URL**:
  `https://public.tableau.com/app/profile/tushal.patidar/viz/EV_Market_Performance_Market_Story_2026-10-25_17931652851740/EVAdoptionStrategyDashboard?publish=yes`
- **Embed View URL**:
  `https://public.tableau.com/views/EV_Market_Performance_Market_Story_2026-10-25_17931652851740/EVAdoptionStrategyDashboard`

To update this in code, edit `/src/config/tableau.js`:
```javascript
export const TABLEAU_CONFIG = {
  dashboard: {
    title: 'EV Adoption & Market Strategy Dashboard',
    publishedUrl: '<YOUR_DASHBOARD_URL>',
    embedViewUrl: '<YOUR_VIEWS_URL>',
  },
  // ...
};
```

### B. Configuring the Tableau Story URL
There are two easy ways to link your Tableau Story:

1. **Directly in the Web Interface (No Rebuild Required)**:
   - Scroll to the **Story** section on the website.
   - Click the **"Add Story Link"** / **"Configure Story Link"** button.
   - Paste your published Tableau Story link into the input field and click **"Save & Embed"**.
   - The application instantly embeds your Story and persists the setting in your browser's local storage.

2. **In Source Code**:
   - Open `src/config/tableau.js`.
   - Update the `story.publishedUrl` property:
     ```javascript
     story: {
       title: 'EV Market Dynamics & Strategic Growth Story',
       publishedUrl: 'https://public.tableau.com/app/profile/.../viz/.../YourStoryName',
     }
     ```
   - Commit and push changes to GitHub.

---

## 8. Known Limitations & Notes

1. **Third-Party Cookies & Ad Blockers**:
   - Certain aggressive browser extensions or strict browser privacy modes (e.g. Brave Shields, Safari cross-site tracking prevention) may block third-party Tableau `<iframe>` embeds.
   - For this reason, the platform includes clear fallback prompts and prominent **"Open on Tableau Public"** buttons so users can view the full dashboard directly under any browser configuration.
2. **Static Architecture**:
   - This project intentionally operates without a Node.js/Python server, ensuring 100% free, permanent static hosting on GitHub Pages with zero maintenance or subscription fees.

---

## 9. Author & Academic Attribution

- **Project Title**: Electric Vehicle Market Performance & Insights (EV Insights)
- **Lead Researcher & Developer**: **Tushal Patidar**
- **Tableau Public Profile**: [https://public.tableau.com/app/profile/tushal.patidar](https://public.tableau.com/app/profile/tushal.patidar)
- **Evaluation Purpose**: College Capstone Project & Data Analytics Portfolio Showcase
