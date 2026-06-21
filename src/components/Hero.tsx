"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Magnetic } from "./ui/magnetic";
import { ArrowRight, Terminal } from "lucide-react";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 20,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-24 px-6 md:px-12 overflow-hidden z-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
      >
        {/* Left Column: Premium Brand Headline */}
        <div className="lg:col-span-7 space-y-8 text-left">
          {/* Tagline / System Status */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-4.5 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
            </span>
            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-violet-300">
              Personal Brand System v1.5
            </span>
          </motion.div>

          {/* Majestic Editorial Title */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-white">
              Architecting <br />
              <span className="editorial-heading text-gradient-purple">secure protocols</span> <br />
              <span className="text-white">&amp; cognitive systems.</span>
            </h1>
          </motion.div>

          {/* Narrative Pitch */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-400 font-medium max-w-xl leading-relaxed"
          >
            Computer Science undergraduate at PES College of Engineering. Exploring the convergence of cryptographic security practices and deep learning systems.
          </motion.p>

          {/* Call to Actions (No Resume Button) */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
          >
            <Magnetic>
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black font-extrabold shadow-[0_10px_30px_rgba(255,255,255,0.15)] hover:bg-violet-400 hover:text-black transition-all duration-300 group text-sm"
              >
                <span>Explore Systems</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Magnetic>

            <Magnetic>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full glass border border-white/5 text-white font-bold hover:bg-white/5 transition-all duration-300 text-sm"
              >
                <Terminal className="w-4 h-4 text-violet-400" />
                <span>Initialize Connection</span>
              </a>
            </Magnetic>
          </motion.div>
        </div>

        {/* Right Column: Layered Glass Showcase & Interactive Profile Frame */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 flex justify-center lg:justify-end relative"
        >
          {/* Dynamic Glow Field */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-violet-500/10 blur-[100px] pointer-events-none" />

          {/* Asymmetrical Framed Profile Glass Card */}
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative p-3.5 rounded-[2.5rem] glass border border-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.8)]"
          >
            {/* Geometric Cut */}
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-[2rem] overflow-hidden border border-white/10 bg-black/40">
              <Image
                src="/profile.jpg"
                alt="Harshini S"
                fill
                priority
                sizes="(max-width: 768px) 288px, 320px"
                className="object-cover scale-[1.02] contrast-[1.05] brightness-[0.95] transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Micro Details Glass Capsule */}
            <div className="absolute -bottom-6 -left-6 px-5 py-3 rounded-2xl glass border border-white/5 shadow-2xl flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <div className="text-left">
                <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Current Status</p>
                <p className="text-xs font-extrabold text-white">PESCE Mandya &bull; CSE</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Luxury Scroll Guide */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none opacity-40">
        <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-slate-500">Scroll Down</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-slate-500 to-transparent" />
      </div>
    </section>
  );
}

