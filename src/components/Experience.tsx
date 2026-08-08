"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, Calendar, Terminal } from "lucide-react";

export function Experience() {
  const shouldReduceMotion = useReducedMotion();
  const experiences = [
    {
      role: "Cybersecurity Analyst Intern",
      company: "Employability.life",
      period: "August 2025 – October 2025",
      responsibilities: [
        "Studied advanced threat vector topologies, security controls, and secure system design methodologies.",
        "Conducted API endpoints audit and vulnerability mapping, applying threat modeling strategies.",
        "Documented detailed vulnerability reports and defensive blueprints for mitigating exposure.",
      ],
    },
  ];

  const listContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0.05 : 0.15,
        delayChildren: shouldReduceMotion ? 0.05 : 0.2,
      },
    },
  };

  const listItem = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: shouldReduceMotion ? { duration: 0.1 } : {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section id="experience" className="py-36 px-6 bg-zinc-950/20 border-y border-zinc-900 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Title & Subtitle */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={shouldReduceMotion ? { duration: 0.2 } : { type: "spring", stiffness: 60, damping: 15 }}
            className="lg:col-span-5 space-y-8 lg:sticky lg:top-32"
          >
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-4">
                <span className="editorial-heading text-lg font-bold text-violet-400 uppercase tracking-widest">Experience</span>
                <div className="h-[1px] w-12 bg-violet-500/30" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-100 leading-tight">
                Professional <br />
                <span className="editorial-heading text-gradient-purple">Journey</span>
              </h2>
            </div>
            
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-medium text-left">
              Factual application of software security audits, threat models, and vulnerability mapping.
            </p>
          </motion.div>

          {/* Right Column: Work Card with Timeline Graphic */}
          <div className="lg:col-span-7 relative pl-8 md:pl-12 text-left">
            {/* Progressive Timeline Line */}
            <motion.div
              initial={shouldReduceMotion ? { height: "100%" } : { height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 1.5, ease: "easeOut" }}
              className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-violet-500 via-indigo-500 to-transparent origin-top"
            />

            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 0 } : { x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={shouldReduceMotion ? { duration: 0.2 } : {
                  type: "spring",
                  stiffness: 60,
                  damping: 15,
                  delay: idx * 0.1,
                }}
                className="glass-card rounded-[2.5rem] p-8 sm:p-12 relative overflow-hidden border border-zinc-800/80 hover:border-violet-500/10"
              >
                {/* Header details */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-8 border-b border-zinc-800/60 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="p-4 rounded-2xl bg-violet-955/40 border border-violet-900/30 text-violet-400 shrink-0">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-100 tracking-tight leading-tight">
                        {exp.role}
                      </h3>
                      <p className="editorial-heading text-base text-violet-400">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-955/30 border border-violet-900/30 text-zinc-300 text-xs font-bold w-fit">
                    <Calendar className="w-3.5 h-3.5 text-violet-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Outcome blocks */}
                <div className="space-y-6">
                  <h4 className="text-xs font-extrabold uppercase tracking-widest text-zinc-500">
                    Outcomes &amp; Execution
                  </h4>
                  <motion.ul 
                    variants={listContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-4"
                  >
                    {exp.responsibilities.map((resp, rIdx) => (
                      <motion.li 
                        key={rIdx} 
                        variants={listItem}
                        className="flex items-start gap-4 text-zinc-300"
                      >
                        <div className="mt-1.5 shrink-0">
                          <Terminal className="w-4 h-4 text-violet-400" />
                        </div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          {resp}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

