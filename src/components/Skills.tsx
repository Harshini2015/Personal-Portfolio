"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { 
   Code2, 
   Terminal, 
   Cpu, 
   GitBranch 
} from "lucide-react";
import { SpotlightCard } from "./ui/spotlight";

export function Skills() {
  const shouldReduceMotion = useReducedMotion();
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code2 className="w-5 h-5 text-violet-700" />,
      skills: ["Java"],
      span: "lg:col-span-6",
      direction: "left",
    },
    {
      title: "Database",
      icon: <Cpu className="w-5 h-5 text-violet-700" />,
      skills: ["MySQL", "MongoDB"],
      span: "lg:col-span-6",
      direction: "bottom",
    },
    {
      title: "Core Computer Science",
      icon: <Terminal className="w-5 h-5 text-violet-700" />,
      skills: [
        "Data Structures", 
        "Analysis and Design of Algorithms", 
        "Database Management System", 
        "Operating System", 
        "Computer Networks", 
        "Object-Oriented Programming"
      ],
      span: "lg:col-span-7",
      direction: "bottom",
    },
    {
      title: "Tools",
      icon: <GitBranch className="w-5 h-5 text-violet-700" />,
      skills: ["Git", "GitHub", "Google Colab", "VS Code", "Cursor", "Antigravity", "Postman"],
      span: "lg:col-span-5",
      direction: "right",
    },
  ];

  const getVariants = (direction: string, index: number) => {
    if (shouldReduceMotion) {
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2, delay: index * 0.1 } }
      };
    }
    const transition = { type: "spring", stiffness: 60, damping: 15, delay: index * 0.1 };
    switch (direction) {
      case "left":
        return {
          hidden: { opacity: 0, x: -60 },
          visible: { opacity: 1, x: 0, transition }
        };
      case "right":
        return {
          hidden: { opacity: 0, x: 60 },
          visible: { opacity: 1, x: 0, transition }
        };
      case "bottom":
      default:
        return {
          hidden: { opacity: 0, y: 60 },
          visible: { opacity: 1, y: 0, transition }
        };
    }
  };

  return (
    <section id="skills" className="py-36 px-6 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-24">
        <div className="space-y-4 text-left">
          <div className="flex items-center gap-4">
            <span className="editorial-heading text-lg font-bold text-violet-700 uppercase tracking-widest">Skills</span>
            <div className="h-[1px] w-12 bg-violet-300" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-100 leading-tight">
            The Capability <br />
            <span className="editorial-heading text-gradient-purple">Matrix</span>
          </h2>
        </div>
        <p className="text-zinc-400 text-sm max-w-xs text-left md:text-right font-medium">
          Delineating specialized technical expertise and core CS competencies.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={getVariants(cat.direction, idx)}
            whileHover={{ 
              y: -4,
              scale: 1.008,
              transition: { type: "spring", stiffness: 120, damping: 25 }
            }}
            className={`${cat.span} text-left`}
          >
            <SpotlightCard className="p-8 h-full flex flex-col justify-between border border-violet-100/80 bg-white hover:border-violet-300 shadow-[0_8px_30px_rgba(109,40,217,0.04)]">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-violet-50 border border-violet-100">
                    {cat.icon}
                  </div>
                  <h3 className="text-lg font-extrabold text-zinc-100 tracking-tight">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <motion.span
                      key={sIdx}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -1.5,
                        transition: { type: "spring", stiffness: 180, damping: 22 } 
                      }}
                      className="px-4 py-2 text-xs font-bold rounded-xl bg-violet-50/70 border border-violet-100 text-violet-900 select-none shadow-sm hover:border-violet-400 hover:bg-violet-100 transition-all duration-300 cursor-pointer"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
