"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, Terminal } from "lucide-react";

export function Experience() {
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

  return (
    <section id="experience" className="py-36 px-6 bg-slate-50/50 border-y border-slate-100 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Title & Subtitle */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
            className="lg:col-span-5 space-y-8 lg:sticky lg:top-32"
          >
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-4">
                <span className="editorial-heading text-lg font-bold text-violet-600 uppercase tracking-widest">Experience</span>
                <div className="h-[1px] w-12 bg-violet-200" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Professional <br />
                <span className="editorial-heading text-gradient-purple">Journey</span>
              </h2>
            </div>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium text-left">
              Practical application of software defense audits and system mapping in collaborative enterprise environments.
            </p>
          </motion.div>

          {/* Right Column: Work Card */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 15,
                  delay: idx * 0.1,
                }}
                className="glass-card rounded-[2.5rem] p-8 sm:p-12 relative overflow-hidden"
              >
                {/* Header details */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-8 border-b border-slate-100 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="p-4 rounded-2xl bg-violet-50 border border-violet-100 text-violet-600 shrink-0">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        {exp.role}
                      </h3>
                      <p className="editorial-heading text-base text-violet-600">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-50 border border-violet-100 text-slate-600 text-xs font-bold w-fit">
                    <Calendar className="w-3.5 h-3.5 text-violet-600" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Outcome blocks */}
                <div className="space-y-6">
                  <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-500">
                    Outcomes &amp; Execution
                  </h4>
                  <ul className="space-y-4">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-4 text-slate-600">
                        <div className="mt-1.5 shrink-0">
                          <Terminal className="w-4 h-4 text-violet-600" />
                        </div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          {resp}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

