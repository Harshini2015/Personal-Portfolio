# Harshini S — Portfolio Website

A personal portfolio and project showcase website built with **Next.js 15**, **React 19**, **Tailwind CSS v4**, **Framer Motion**, and **Lucide React**. Designed as a premium personal brand experience with fluid animations, hover sheens, and responsive layouts.

## 🚀 Live Demo

- **Production Website**: [https://personal-portfolio-kappa-dusky.vercel.app/](https://personal-portfolio-kappa-dusky.vercel.app/)
- **GitHub Repository**: [https://github.com/Harshini2015/Personal-Portfolio](https://github.com/Harshini2015/Personal-Portfolio)

---

## 🎨 Motion & Design Features

- **Sequential Scroll Reveals**: Sections slide and fade into view smoothly. Handles customized entry directions:
  - **Hero**: Fade + upward spring reveal.
  - **About**: Slide from left.
  - **Skills**: Categories stagger sequence from multiple directions (left, right, bottom).
  - **Experience**: Progressive timeline expansion with staggered outcome fades.
  - **Projects**: Slide from bottom with scale highlights.
  - **Education**: Slide from right.
  - **Professional Development**: Slide from left.
  - **Contact**: Slide from bottom.
  - **Footer**: Fade upward.
- **Scroll Progress & Dynamic Navbar**:
  - A subtle gradient progress bar locked to the top.
  - Transparent sticky header that blurs and darkens on scroll.
  - Framer Motion `layoutId` pill transition that glides underneath active nav links.
- **Accessibly Powered**: Full support for `prefers-reduced-motion` media queries. Bypasses physical slide-translations, particles, and float cycles to render simple opacity fades.
- **Spotlight Cards**: High-end glass effect containers with cursor-tracking spotlight shadows.
- **Magnetic Buttons & Social Links**: Soft spring pulls on elements based on cursor distance.

---

## 📁 Key File Map

```text
├── public/
│   ├── profile.jpg           # Official profile photograph
│   ├── robots.txt            # Search engine crawling rules
│   └── sitemap.xml           # Static search index directory
├── src/
│   ├── app/
│   │   ├── globals.css       # Custom color schemes, grid overlays, scrollbars, gradients
│   │   ├── layout.tsx        # Metadata config, OG details, typography setup
│   │   └── page.tsx          # Dynamic active navigation tracker and layout section flow
│   ├── components/
│   │   ├── ui/
│   │   │   ├── background-blobs.tsx  # Ambient floating gradient backdrops
│   │   │   ├── magnetic.tsx          # Magnetic button layout wrapper
│   │   │   └── spotlight.tsx         # Liquid cursor glow card container
│   │   ├── Hero.tsx          # Floating profile frame, CTA buttons, particles
│   │   ├── About.tsx         # Academic directives and floating stack
│   │   ├── Skills.tsx        # Technical categories staggered slide reveals
│   │   ├── Experience.tsx    # Cybersecurity Internship details & timeline graphic
│   │   ├── Projects.tsx      # Multi-interactive glassworks projects grid (Nexora AI & Smart Loan)
│   │   ├── Education.tsx     # Timelines of academic milestones (Bachelor of Engineering in CS)
│   │   ├── ProfessionalDevelopment.tsx # Hackathon details and collaborative growth workshops
│   │   └── Contact.tsx       # Clickable direct details and message forms
│   └── lib/
│       └── utils.ts          # Styles utility merger
```

---

## 🛠️ Local Development & Build Guide

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18.x or 20.x+ recommended)
- [npm](https://www.npmjs.com/)

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

### 3. Build & Compile
Compile the project to verify TypeScript syntax and Next.js static asset optimizations:
```bash
npm run build
```

---

## 📦 Deployment & Vercel Configuration

The website is configured for automated deployments on Vercel linked directly to the `main` branch.

```text
Commit and push to 'main'
        ↓
Vercel Webhook Triggers Build
        ↓
TypeScript & Lint Validation
        ↓
Optimized Production Bundle Deployment
```

Every push to the `main` branch immediately schedules a production build on Vercel. Production URL:
[https://personal-portfolio-kappa-dusky.vercel.app/](https://personal-portfolio-kappa-dusky.vercel.app/)
