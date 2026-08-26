"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, Award, BookOpen, School } from "lucide-react";

export function Education() {
  const shouldReduceMotion = useReducedMotion();

  const educationHistory = [
    {
      num: "01",
      qualification: "Bachelor of Engineering in Computer Science",
      institution: "PES College of Engineering, Mandya",
      period: "2023 – 2027",
      scoreType: "Cumulative Score",
      score: "CGPA: 8.4 / 10",
      description: "Focused study in core computer science disciplines including Advanced Database Systems, Analysis of Algorithms, Software Engineering, Operating Systems, and Object-Oriented Software Architectures.",
      icon: <GraduationCap className="w-6 h-6 text-violet-600" />,
      featured: true,
    },
    {
      num: "02",
      qualification: "Excel PU College",
      institution: "PUC — PCMB",
      period: "June 2021 – March 2023",
      scoreType: "Board Score",
      score: "Percentage: 92%",
      description: "Completed Pre-University Certificate with specialization in Physics, Chemistry, Mathematics, and Biology.",
      icon: <BookOpen className="w-6 h-6 text-violet-600" />,
      featured: false,
    },
    {
      num: "03",
      qualification: "St. Francis ICSE School",
      institution: "SSLC — ICSE",
      period: "June 2020 – March 2021",
      scoreType: "Board Score",
      score: "Percentage: 91%",
      description: "Completed secondary education under the ICSE curriculum with strong foundational academic records.",
      icon: <School className="w-6 h-6 text-violet-600" />,
      featured: false,
    },
  ];

  return (
    <section id="education" className="py-36 px-6 bg-violet-50/30 border-y border-violet-100 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-4">
              <span className="editorial-heading text-lg font-bold text-violet-700 uppercase tracking-widest">Education</span>
              <div className="h-[1px] w-12 bg-violet-300" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-100 leading-tight">
              Academic <br />
              <span className="editorial-heading text-gradient-purple">Foundation</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-xs text-left md:text-right font-medium">
            Rigorous computing foundations, high academic consistency, and core science background.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative pl-6 md:pl-10 space-y-10 text-left">
          {/* Vertical Timeline Bar */}
          <motion.div
            initial={shouldReduceMotion ? { height: "100%" } : { height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 1.2, ease: "easeOut" }}
            className="absolute left-0 top-3 bottom-3 w-[2px] bg-gradient-to-b from-violet-600 via-purple-400 to-transparent origin-top"
          />

          {educationHistory.map((item, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? { opacity: 0 } : { x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={shouldReduceMotion ? { duration: 0.2 } : {
                type: "spring",
                stiffness: 60,
                damping: 15,
                delay: idx * 0.1,
              }}
              whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.005 }}
              className="relative"
            >
              {/* Timeline Dot Indicator */}
              <div className="absolute -left-[31px] md:-left-[47px] top-8 w-4 h-4 rounded-full bg-white border-2 border-violet-600 shadow-[0_0_10px_rgba(109,40,217,0.3)] z-10" />

              <div className={`glass-card rounded-[2.5rem] p-8 sm:p-10 border border-violet-100/80 shadow-[0_10px_35px_rgba(109,40,217,0.04)] relative overflow-hidden ${item.featured ? "bg-white ring-1 ring-violet-200" : "bg-white/90"}`}>
                <div className="flex flex-col md:flex-row gap-6 items-start justify-between relative z-10">
                  
                  {/* Info Header */}
                  <div className="flex gap-6 items-start flex-1">
                    <div className="p-4 rounded-2xl bg-violet-50 border border-violet-100 shrink-0">
                      {item.icon}
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-extrabold text-violet-700 uppercase tracking-widest">
                          {item.num} — {item.institution}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-violet-100/70 text-violet-800 text-[10px] font-bold">
                          {item.period}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-100 tracking-tight leading-tight">
                        {item.qualification}
                      </h3>

                      <p className="text-zinc-400 text-sm sm:text-base leading-relaxed pt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Score Pill */}
                  <div className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-violet-600 text-white text-sm font-bold shadow-md shrink-0 self-start md:self-auto">
                    <Award className="w-5 h-5 text-purple-200" />
                    <div className="text-left leading-none">
                      <p className="text-[9px] font-extrabold uppercase tracking-widest text-violet-200">{item.scoreType}</p>
                      <p className="text-sm sm:text-base font-extrabold">{item.score}</p>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
