"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Magnetic } from "./ui/magnetic";
import { ArrowRight, Terminal } from "lucide-react";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0.05 : 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion ? { duration: 0.2 } : {
        type: "spring",
        stiffness: 70,
        damping: 20,
      },
    },
  };

  // Developer-inspired floating code particles
  const floatingTags = [
    { text: "java", x: "12%", y: "20%", duration: 7 },
    { text: "sql", x: "85%", y: "15%", duration: 9 },
    { text: "mern", x: "78%", y: "75%", duration: 8 },
    { text: "ai", x: "15%", y: "80%", duration: 6 },
    { text: "dsa", x: "50%", y: "85%", duration: 10 },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-32 pb-24 px-6 md:px-12 overflow-hidden z-10">
      {/* Floating Developer Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
        {floatingTags.map((tag, index) => (
          <motion.div
            key={index}
            animate={shouldReduceMotion ? { opacity: 0.4 } : {
              y: [0, -15, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={shouldReduceMotion ? { duration: 0 } : {
              duration: tag.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              left: tag.x,
              top: tag.y,
            }}
            className="px-3 py-1 rounded-md border border-violet-500/10 bg-violet-500/5 font-mono text-[10px] tracking-widest text-violet-400 select-none shadow-[0_0_15px_rgba(139,92,246,0.03)]"
          >
            {tag.text}
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
      >
        {/* Left Column: Premium Brand Headline */}
        <div className="lg:col-span-7 space-y-8 text-left">
          {/* Headline */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-zinc-100">
              Harshini S
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-zinc-300 font-semibold max-w-xl leading-relaxed border-l-4 border-violet-500/70 pl-4"
          >
            Software Developer | Computer Science Undergraduate
          </motion.p>

          {/* Narrative Pitch */}
          <motion.p
            variants={itemVariants}
            className="text-base text-zinc-400 font-medium max-w-xl leading-relaxed"
          >
            Building practical software solutions with Java, SQL, MERN Stack and AI. Focused on core computer science disciplines and building high-integrity backend systems.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <Magnetic>
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-violet-600 text-white font-extrabold shadow-[0_8px_30px_rgba(139,92,246,0.2)] hover:shadow-[0_12px_40px_rgba(139,92,246,0.45)] transition-all duration-500 group text-xs glossy-btn transform active:scale-98"
              >
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </Magnetic>

            <Magnetic>
              <a
                href="https://github.com/Harshini2015"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-zinc-900 border border-zinc-800/80 text-zinc-300 font-bold hover:bg-zinc-800 transition-all duration-500 text-xs shadow-sm glossy-btn transform active:scale-98"
              >
                <svg className="w-4 h-4 fill-current text-violet-400" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.197 22 16.44 22 12.017 22 6.484 17.522 2 12 2z"/>
                </svg>
                <span>GitHub</span>
              </a>
            </Magnetic>

            <Magnetic>
              <a
                href="https://linkedin.com/in/harshini-s-8400372bb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-zinc-900 border border-zinc-800/80 text-zinc-300 font-bold hover:bg-zinc-800 transition-all duration-500 text-xs shadow-sm glossy-btn transform active:scale-98"
              >
                <svg className="w-4 h-4 fill-current text-violet-400" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
            </Magnetic>

            <Magnetic>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-zinc-900 border border-zinc-800/80 text-zinc-300 font-bold hover:bg-zinc-800 transition-all duration-500 text-xs shadow-sm glossy-btn transform active:scale-98"
              >
                <Terminal className="w-3.5 h-3.5 text-violet-400" />
                <span>Contact Me</span>
              </a>
            </Magnetic>
          </motion.div>
        </div>

        {/* Right Column: Centered Profile Frame */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 flex justify-center relative"
        >
          {/* Dynamic Glow Field */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-85 h-85 rounded-full bg-violet-500/10 blur-[120px] pointer-events-none" />

          {/* Clean Profile Card */}
          <motion.div
            animate={shouldReduceMotion ? {} : {
              y: [0, -8, 0],
              borderRadius: ["2.5rem", "2.8rem", "2.4rem", "2.5rem"],
            }}
            transition={shouldReduceMotion ? { duration: 0 } : {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={shouldReduceMotion ? {} : { 
              scale: 1.03,
              rotate: -0.5,
              transition: { type: "spring", stiffness: 120, damping: 25 }
            }}
            className="relative p-3 rounded-[2.5rem] bg-zinc-900/60 backdrop-blur-xl border border-zinc-800/80 shadow-[0_15px_45px_rgba(0,0,0,0.4)] cursor-pointer"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-950">
              <Image
                src="/profile.jpg"
                alt="Harshini S"
                fill
                priority
                sizes="(max-width: 768px) 288px, 320px"
                className="object-cover scale-[1.02] transition-transform duration-1000 hover:scale-105"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Luxury Scroll Guide */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none opacity-40">
        <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-zinc-500">Scroll Down</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-zinc-500 to-transparent" />
      </div>
    </section>
  );
}
