"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { BackgroundBlobs } from "@/components/ui/background-blobs";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Menu, X, ArrowUp } from "lucide-react";
import { Magnetic } from "@/components/ui/magnetic";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const scrollPos = window.scrollY + 250;
      for (const item of navItems) {
        const el = document.querySelector(item.href);
        if (el) {
          const top = (el as HTMLElement).offsetTop;
          const height = (el as HTMLElement).offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.href.replace("#", ""));
          }
        }
      }
      if (window.scrollY < 100) {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen selection:bg-violet-100 selection:text-violet-900 bg-background text-foreground overflow-clip">
      {/* Ambient Grid Overlay & Blobs */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none z-0" />
      <BackgroundBlobs />

      {/* Floating Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent z-50 origin-left shadow-[0_0_10px_rgba(139,92,246,0.3)]"
        style={{ scaleX }}
      />

      {/* Floating Centered Glass Navigation Header */}
      <header className="fixed top-6 left-0 right-0 z-40 px-4">
        <div className="max-w-4xl mx-auto rounded-full glass border border-slate-100 shadow-[0_8px_32px_rgba(139,92,246,0.06)] px-6 py-3 flex items-center justify-between">
          <a href="#" className="text-sm font-extrabold tracking-tight text-slate-900 hover:text-accent transition-colors duration-300">
            HARSHINI S.
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                  activeSection === item.href.replace("#", "")
                    ? "text-accent bg-accent/8"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden md:block">
            <Magnetic>
              <a
                href="#contact"
                className="px-5 py-2 rounded-full bg-accent text-white text-xs font-extrabold shadow-[0_4px_20px_rgba(139,92,246,0.2)] hover:bg-violet-700 hover:shadow-[0_4px_25px_rgba(139,92,246,0.3)] transition-all duration-300"
              >
                Connect
              </a>
            </Magnetic>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1.5 text-slate-600 hover:text-slate-900 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 md:hidden">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-bold tracking-tight text-slate-700 hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-8 py-3.5 rounded-full bg-accent text-white font-extrabold shadow-md hover:bg-violet-700 transition-all duration-300"
          >
            Connect
          </a>
        </div>
      )}

      {/* Page Sections (flowing story structure) */}
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />

      {/* Footer */}
      <footer className="py-16 border-t border-slate-100 bg-white/40 backdrop-blur-md relative z-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <p className="text-sm font-extrabold text-slate-900 tracking-wider">HARSHINI S</p>
            <p className="text-xs text-slate-600">
              Computer Science Undergraduate &amp; Cybersecurity Enthusiast
            </p>
          </div>
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Harshini S. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <Magnetic>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="p-3.5 rounded-full bg-white border border-slate-200 shadow-md text-slate-600 hover:text-accent hover:border-accent/20 transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </Magnetic>
        </motion.div>
      )}
    </main>
  );
}

