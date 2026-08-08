"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence, useReducedMotion } from "framer-motion";
import { BackgroundBlobs } from "@/components/ui/background-blobs";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { ProfessionalDevelopment } from "@/components/ProfessionalDevelopment";
import { Contact } from "@/components/Contact";
import { Menu, X, ArrowUp } from "lucide-react";
import { Magnetic } from "@/components/ui/magnetic";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      setIsScrolled(window.scrollY > 50);

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
    <main className="relative min-h-screen selection:bg-violet-950 selection:text-violet-100 bg-background text-foreground overflow-clip animated-bg-gradient">
      {/* Ambient Grid Overlay & Blobs */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none z-0" />
      <BackgroundBlobs />

      {/* Floating Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-500 z-50 origin-left shadow-[0_0_10px_rgba(139,92,246,0.6)]"
        style={{ scaleX }}
      />

      {/* Sticky Glass Navbar Header */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 px-6 border-b ${
        isScrolled 
          ? "bg-zinc-950/75 backdrop-blur-md border-zinc-800/50 shadow-[0_4px_30px_rgba(0,0,0,0.4)] py-4" 
          : "bg-transparent border-transparent py-6"
      }`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between w-full">
          <a href="#hero" className="text-sm font-extrabold tracking-tight text-zinc-100 hover:text-accent transition-all duration-300">
            HARSHINI S.
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1.5">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 hover:scale-105 ${
                  activeSection === item.href.replace("#", "")
                    ? "text-white font-extrabold"
                    : "text-zinc-400 hover:text-zinc-100"
                }`}
              >
                {activeSection === item.href.replace("#", "") && (
                  <motion.span
                    layoutId={shouldReduceMotion ? undefined : "activeNavSection"}
                    className="absolute inset-0 rounded-full bg-accent/15 border border-violet-500/30 shadow-[0_0_15px_rgba(139,92,246,0.2)] z-[-1]"
                    transition={{ type: "spring", stiffness: 140, damping: 18 }}
                  />
                )}
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden md:block">
            <Magnetic>
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-full bg-accent text-white text-xs font-extrabold shadow-[0_4px_20px_rgba(139,92,246,0.3)] hover:shadow-[0_4px_25px_rgba(139,92,246,0.5)] transition-all duration-300 glossy-btn hover:scale-105 transform inline-block"
              >
                Connect
              </a>
            </Magnetic>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1.5 text-zinc-400 hover:text-zinc-100 focus:outline-none z-50 relative"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: shouldReduceMotion ? 0.1 : 0.3 }}
            className="fixed inset-0 z-30 bg-background/98 backdrop-blur-2xl flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
                  activeSection === item.href.replace("#", "") ? "text-accent" : "text-zinc-300 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-8 py-3.5 rounded-full bg-accent text-white font-extrabold shadow-md hover:bg-violet-750 transition-all duration-300"
            >
              Connect
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Sections (flowing story structure) */}
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <ProfessionalDevelopment />
      <Contact />

      {/* Footer */}
      <footer className="py-16 border-t border-zinc-800/80 bg-zinc-950/40 backdrop-blur-md relative z-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <p className="text-sm font-extrabold text-zinc-100 tracking-wider">HARSHINI S</p>
            <p className="text-xs text-zinc-400">
              Software Developer | Computer Science Undergraduate
            </p>
          </div>
          <p className="text-xs text-zinc-500">
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
              className="p-3.5 rounded-full bg-zinc-900 border border-zinc-800 shadow-md text-zinc-400 hover:text-accent hover:border-accent/20 transition-all duration-300"
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
