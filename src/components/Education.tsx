"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

export function Education() {
  const educationData = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "PES College of Engineering, Mandya",
      period: "2023 – 2027",
      highlightType: "Cumulative GPA",
      highlightValue: "8.34 / 10",
      description: "Rigorous study in core computer science disciplines including advanced database structures, analysis of algorithms, cryptographic principles, and machine learning architectures.",
    },
    {
      degree: "Pre-University Science Board",
      institution: "Excel PU College",
      period: "2021 – 2023",
      highlightType: "Performance Index",
      highlightValue: "91.83%",
      description: "Focused curriculum in Mathematics, Physics, Chemistry, and Computer Science foundation modules.",
    },
    {
      degree: "Secondary School Certification (ICSE)",
      institution: "St. Francis ICSE School",
      period: "2021",
      highlightType: "Performance Index",
      highlightValue: "91.16%",
      description: "Completed secondary education under ICSE guidelines, maintaining academic distinction.",
    },
  ];

  return (
    <section id="education" className="py-36 px-6 bg-black/30 border-y border-white/5 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Asymmetrical Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-24">
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-4">
              <span className="editorial-heading text-4xl text-violet-400">Chapter II</span>
              <div className="h-[1px] w-12 bg-white/10" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              The Academic <br />
              <span className="editorial-heading text-gradient-purple">Blueprint</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-xs text-left md:text-right font-medium">
            Foundations laid in structured computing, data integrity, and mathematical modeling.
          </p>
        </div>

        {/* Asymmetrical Custom Timeline */}
        <div className="relative border-l border-white/5 ml-4 md:ml-8 pl-8 md:pl-16 space-y-16">
          {educationData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 15,
                delay: idx * 0.12,
              }}
              className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Timeline Dot (Security Node) */}
              <div className="absolute -left-[49px] md:-left-[81px] top-2 w-8 h-8 rounded-full border border-white/10 bg-card shadow-lg flex items-center justify-center z-20">
                <GraduationCap className="w-4 h-4 text-violet-400" />
              </div>

              {/* Left timeline section (years) */}
              <div className="lg:col-span-3 pt-1 text-left">
                <span className="text-xs font-extrabold uppercase tracking-widest text-violet-400">
                  {item.period}
                </span>
              </div>

              {/* Right timeline section (card details) */}
              <div className="lg:col-span-9 glass-card rounded-[2rem] p-8 sm:p-10 text-left">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-6">
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-tight">
                      {item.degree}
                    </h3>
                    <p className="editorial-heading text-base text-violet-300">
                      {item.institution}
                    </p>
                  </div>
                  
                  {/* Score capsule */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-bold shadow-sm w-fit">
                    <Award className="w-4 h-4 text-violet-400" />
                    <span>{item.highlightType}: {item.highlightValue}</span>
                  </div>
                </div>

                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

