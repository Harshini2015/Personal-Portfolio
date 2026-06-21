"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Terminal, 
  Cpu, 
  Layers, 
  Fingerprint, 
  GitBranch 
} from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Core Languages",
      icon: <Code2 className="w-5 h-5 text-violet-600" />,
      skills: ["Java", "JavaScript (ES6+)", "TypeScript", "Python"],
      span: "lg:col-span-4",
    },
    {
      title: "Client-Side Engineering",
      icon: <Layers className="w-5 h-5 text-violet-600" />,
      skills: ["React.js", "Next.js", "Tailwind CSS v4", "Framer Motion", "HTML5 & CSS3"],
      span: "lg:col-span-8",
    },
    {
      title: "Backend Frameworks",
      icon: <Terminal className="w-5 h-5 text-violet-600" />,
      skills: ["Node.js", "Express.js", "RESTful API Design", "System Architecture"],
      span: "lg:col-span-7",
    },
    {
      title: "Data Services",
      icon: <Cpu className="w-5 h-5 text-violet-600" />,
      skills: ["Supabase", "MongoDB", "MySQL", "Relational Database Design"],
      span: "lg:col-span-5",
    },
    {
      title: "System Principles",
      icon: <Fingerprint className="w-5 h-5 text-violet-600" />,
      skills: ["OWASP Threat Models", "Role-Based Auth", "Session Management", "API Audits"],
      span: "lg:col-span-6",
    },
    {
      title: "Toolchain & Workspace",
      icon: <GitBranch className="w-5 h-5 text-violet-600" />,
      skills: ["Git", "GitHub Actions", "Postman", "VS Code", "Cursor", "Antigravity"],
      span: "lg:col-span-6",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
      },
    },
  };

  return (
    <section id="skills" className="py-36 px-6 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-24">
        <div className="space-y-4 text-left">
          <div className="flex items-center gap-4">
            <span className="editorial-heading text-lg font-bold text-violet-600 uppercase tracking-widest">Skills</span>
            <div className="h-[1px] w-12 bg-violet-200" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            The Capability <br />
            <span className="editorial-heading text-gradient-purple">Matrix</span>
          </h2>
        </div>
        <p className="text-slate-600 text-sm max-w-xs text-left md:text-right font-medium">
          Delineating expertise across backend layers, defensive modeling, and client interfaces.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6"
      >
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            className={`${cat.span} text-left`}
          >
            <div className="glass-card rounded-[2rem] p-8 h-full flex flex-col justify-between">
              <div className="space-y-6">
                {/* Title & Icon */}
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-violet-50 border border-violet-100">
                    {cat.icon}
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">
                    {cat.title}
                  </h3>
                </div>

                {/* Skill Capsules */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-4 py-2 text-xs font-bold rounded-xl bg-slate-100/70 border border-slate-200/50 text-slate-700 select-none shadow-sm hover:border-violet-300 hover:text-violet-700 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

