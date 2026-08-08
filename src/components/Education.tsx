"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export function Education() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="education" className="py-36 px-6 bg-zinc-950/20 border-y border-zinc-900 relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-4">
              <span className="editorial-heading text-lg font-bold text-violet-400 uppercase tracking-widest">Education</span>
              <div className="h-[1px] w-12 bg-violet-500/30" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-100 leading-tight">
              Academic <br />
              <span className="editorial-heading text-gradient-purple">Foundation</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-xs text-left md:text-right font-medium">
            Rigorous computing foundations, data engineering, and algorithm analysis.
          </p>
        </div>

        {/* Premium Education Card */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={shouldReduceMotion ? { duration: 0.2 } : {
            type: "spring",
            stiffness: 60,
            damping: 15,
          }}
          whileHover={shouldReduceMotion ? {} : { y: -6, scale: 1.005 }}
          className="relative text-left"
        >
          <div className="glass-card rounded-[2.5rem] p-8 sm:p-12 border border-zinc-800/80 hover:border-violet-500/20 shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative overflow-hidden">
            {/* Background Accent glow */}
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-violet-500/5 blur-[80px] pointer-events-none" />

            <div className="flex flex-col md:flex-row gap-8 items-start justify-between relative z-10">
              {/* Badge & Info */}
              <div className="flex gap-6 items-start">
                <div className="p-4 rounded-3xl bg-violet-955/40 border border-violet-900/30 text-violet-400 shrink-0">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div className="space-y-3">
                  <span className="text-[10px] font-extrabold text-violet-400 uppercase tracking-widest">
                    PES College of Engineering, Mandya
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-100 tracking-tight leading-tight">
                    Bachelor of Engineering in Computer Science
                  </h3>
                  <div className="flex flex-wrap gap-4 text-xs font-semibold text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-violet-400" />
                      Expected Graduation: 2027
                    </span>
                  </div>
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed pt-2">
                    Focused study in core computer science disciplines including Advanced Database Systems, Analysis of Algorithms, Software Engineering, Operating Systems, and Object-Oriented Software Architectures.
                  </p>
                </div>
              </div>

              {/* CGPA Capsule */}
              <div className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-violet-955/40 border border-violet-900/30 text-zinc-200 text-sm font-bold shadow-md shrink-0 self-start md:self-auto">
                <Award className="w-5 h-5 text-violet-400" />
                <div className="text-left leading-none">
                  <p className="text-[9px] font-extrabold uppercase tracking-widest text-violet-400">Cumulative Score</p>
                  <p className="text-base font-extrabold">CGPA: 8.4 / 10</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
