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
          {/* Headline */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-slate-900">
              Harshini S
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-slate-600 font-semibold max-w-xl leading-relaxed border-l-4 border-violet-500 pl-4"
          >
            Computer Science Undergraduate | Cybersecurity Enthusiast | Full-Stack Developer
          </motion.p>

          {/* Narrative Pitch */}
          <motion.p
            variants={itemVariants}
            className="text-base text-slate-500 font-medium max-w-xl leading-relaxed"
          >
            Computer Science undergraduate at PES College of Engineering. Exploring the convergence of cryptographic security practices, high-integrity backend architectures, and machine learning models.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
          >
            <Magnetic>
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-violet-600 text-white font-extrabold shadow-[0_8px_30px_rgba(139,92,246,0.15)] hover:shadow-[0_12px_40px_rgba(139,92,246,0.3)] transition-all duration-500 group text-sm glossy-btn transform active:scale-98"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Magnetic>

            <Magnetic>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/70 backdrop-blur-md border border-slate-200/50 text-slate-700 font-bold hover:bg-white transition-all duration-500 text-sm shadow-sm glossy-btn transform active:scale-98"
              >
                <Terminal className="w-4 h-4 text-violet-500" />
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-85 h-85 rounded-full bg-violet-200/25 blur-[120px] pointer-events-none" />

          {/* Clean Profile Card */}
          <motion.div
            animate={{
              y: [0, -8, 0],
              borderRadius: ["2.5rem", "2.8rem", "2.4rem", "2.5rem"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ 
              scale: 1.03,
              rotate: -0.5,
              transition: { type: "spring", stiffness: 120, damping: 25 }
            }}
            className="relative p-3 rounded-[2.5rem] bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_15px_45px_rgba(139,92,246,0.06)] cursor-pointer"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-[2rem] overflow-hidden border border-white bg-slate-50">
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
        <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-slate-400">Scroll Down</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-slate-400 to-transparent" />
      </div>
    </section>
  );
}

