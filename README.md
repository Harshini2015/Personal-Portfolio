# Live Demo

Production Website:
https://personal-portfolio-kappa-dusky.vercel.app/

GitHub Repository:
https://github.com/Harshini2015/Personal-Portfolio

---

# Harshini S — Portfolio Website

A personal portfolio and project showcase website built with Next.js 15, React 19, Tailwind CSS v4, Framer Motion, and Lucide React. Designed as a luxury personal brand experience with fluid liquid-glass interactions, soft spring physics, and cursor spotlight sheens.

---

## 🚀 Features & Motion Experience

* **Liquid Glass Interactions**: Soft, organic hover feedback on cards that react like a surface tension field rather than basic cartoon scales.
* **Water-like Popping Effects**: Custom Framer Motion states utilizing low-damping spring ratios to establish soft, premium fluid motion.
* **Magnetic Buttons & Social Links**: Interactive anchors pull slightly towards the mouse coordinate, creating an immersive, high-end feel.
* **Light Premium Theme**: Designed on a pristine `#FAF9F6` canvas with soft glass surfaces, subtle shadows, and responsive layouts.
* **Dynamic Projects Showcase**:
  * *Enterprise Email Intelligence*: Prominent GitHub Repository redirect to `SecureMail` marked with "View Repository".
  * *DermIQ*: Displays description of deep learning acne/dermatological severity assistant with repository links completely omitted.
  * *Smart Loan*: Full-stack simulation testing suite including both active code link and live deployment link.

---

## 📁 Key File Map

```text
├── public/
│   ├── profile.jpg           # Official profile photograph
│   ├── robots.txt            # Search engine crawling rules
│   └── sitemap.xml           # Static search index directory
├── src/
│   ├── app/
│   │   ├── globals.css       # Liquid glass sheens, grid overlays, scrollbars
│   │   ├── layout.tsx        # Metadata configs, playfair & jakarta typography
│   │   └── page.tsx          # Dynamic active navigation tracker and layout section flow
│   ├── components/
│   │   ├── ui/
│   │   │   ├── background-blobs.tsx  # Ambient floating gradient backdrops
│   │   │   ├── magnetic.tsx          # Magnetic button layout wrapper
│   │   │   └── spotlight.tsx         # Liquid cursor glow card container
│   │   ├── Hero.tsx          # Clean floating picture frame and brand title
│   │   ├── About.tsx         # Mission principles and floating stack
│   │   ├── Education.tsx     # Timelines of academic milestones
│   │   ├── Skills.tsx        # Responsive matrices of capabilities with fluid bounces
│   │   ├── Experience.tsx    # Professional cybersecurity analysis outputs
│   │   ├── Projects.tsx      # Multi-interactive glassworks projects grid
│   │   ├── Achievements.tsx  # Competitive hackathons and project awards
│   │   └── Contact.tsx       # Message inputs and magnetic socials
│   └── lib/
│       └── utils.ts          # Styles utility merger
```

---

## 🛠️ Local Development & Build Guide

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

### 3. Build Instructions
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

Every push to the `main` branch immediately schedules an production build on Vercel. Production URL:
https://personal-portfolio-kappa-dusky.vercel.app/
