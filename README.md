# Harshini S — Portfolio Website

A personal portfolio and project showcase website built with Next.js 15, React 19, Tailwind CSS v4, Framer Motion, and Lucide React.

---

## 🚀 Tech Stack

* **Core Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
* **Runtime**: [React 19](https://react.dev/)
* **Programming Language**: [TypeScript](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
* **Motion Design**: [Framer Motion](https://www.framer.com/motion/)
* **Iconography**: [Lucide React](https://lucide.dev/)
* **Deployment**: [Vercel](https://vercel.com/)

---

## ✨ Design Elements & Architecture

* **Obsidian Dark Palette**: Premium `#030303` base with deep Slate interfaces and high-contrast violet glow layers.
* **Cinematic Storytelling**: Alternating asymmetric column grids structured as chapters (Chapters I-VII).
* **High-Contrast Editorial Typography**: Combination of modern geometric tech font (`Plus Jakarta Sans`) and classic serif italics (`Playfair Display`).
* **Layered Glassmorphism**: Interactive cards utilizing dark backdrop-filter overlays, micro-borders, and hover glow transitions.
* **Interactive Terminal Previews**: Live mock terminal shells displaying active code and analysis snippets for ML and security systems.
* **Zero Stock Imagery**: Relies entirely on the official user profile image (`public/profile.jpg`) and computed graphic states.
* **Vercel Build Ready**: Built and validated for static generation, zero lints, and clean build checks.

---

## 📁 Key File Map

```text
├── public/
│   ├── profile.jpg           # Official profile photograph
│   ├── robots.txt            # Search engine crawling rules
│   └── sitemap.xml           # Static search index directory
├── src/
│   ├── app/
│   │   ├── globals.css       # Core design tokens, grid patterns, scrollbars
│   │   ├── layout.tsx        # Metadata config, serif/sans fonts, and root page
│   │   └── page.tsx          # Dynamic navigation shell and sections flow
│   ├── components/
│   │   ├── ui/
│   │   │   ├── background-blobs.tsx  # Floating gradient light fields
│   │   │   └── magnetic.tsx          # Magnetic button hover wrapper
│   │   ├── Hero.tsx          # Asymmetric launch headline and profile showcase
│   │   ├── About.tsx         # Chapter I: Core Directives & philosophy
│   │   ├── Education.tsx     # Chapter II: Timeline of academic blueprints
│   │   ├── Skills.tsx        # Chapter III: Skill matrix grid
│   │   ├── Experience.tsx    # Chapter IV: Cybersecurity internship details
│   │   ├── Projects.tsx      # Chapter V: System products and terminal logs
│   │   ├── Achievements.tsx  # Chapter VI: Mileposts and hackathon results
│   │   └── Contact.tsx       # Chapter VII: Sockets initialization form
│   └── lib/
│       └── utils.ts          # Class merging utility (cn)
```

---

## 🛠️ Local Development Guide

### Prerequisites
* [Node.js](https://nodejs.org/) (version 18.x or 20.x+ recommended)
* [npm](https://www.npmjs.com/)

### 1. Installation
Clone the repository and install all dependencies:
```bash
git clone https://github.com/Harshini2015/Personal-Portfolio.git
cd Personal-Portfolio
npm install
```

### 2. Run Locally
Start the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build Verification
Compile the project to verify TypeScript syntax and Next.js static asset optimizations:
```bash
npm run build
```

---

## ☁️ Vercel Deployment

This repository is optimized for instant Vercel deployment:
1. Connect your GitHub repository to [Vercel](https://vercel.com).
2. Vercel automatically detects Next.js configurations.
3. Every push to the `main` branch immediately triggers a clean build and deployment update.

---

## ✉️ Coordination Details

* **Email**: [harshiniis2005@gmail.com](mailto:harshiniis2005@gmail.com)
* **LinkedIn**: [Harshini S on LinkedIn](https://linkedin.com/in/harshini-s-8400372bb)
* **GitHub**: [Harshini2015 on GitHub](https://github.com/Harshini2015)
* **LeetCode**: [Harshini S on LeetCode](https://leetcode.com/u/harshini1322/)
* **Location**: Chamarajanagar, Karnataka