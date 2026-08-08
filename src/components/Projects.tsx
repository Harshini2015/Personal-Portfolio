"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Github, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";
import { SpotlightCard } from "./ui/spotlight";

export function Projects() {
  const shouldReduceMotion = useReducedMotion();
  const projectsData = [
    {
      name: "Nexora AI – AI Career Coach & Placement Platform",
      category: "Featured AI Application",
      description: "An AI-powered career guidance and placement preparation platform designed to help students and job seekers prepare for their professional journey.",
      features: [
        "AI Career Coach & Guidance",
        "Resume Analyzer (PDF)",
        "Interview Simulator",
        "Career Planner & Roadmap",
        "Interactive Dashboards & Analytics"
      ],
      techStack: ["Python", "Gradio", "Groq SDK", "Llama 3.1", "Supabase", "PyPDF", "Pandas", "Plotly"],
      github: "https://github.com/Harshini2015/nexora-ai",
      live: "https://nexora-ai-cjo5.onrender.com",
      featured: true,
      colSpan: "md:col-span-2",
    },
    {
      name: "Smart Loan & Debt Stress Analyser",
      category: "Full Stack FinTech Application",
      description: "Developed a MERN-based application for loan and debt management with intelligent forecasting structures.",
      features: [
        "Debt Health Score Dashboard",
        "Interactive EMI Simulation",
        "Debt-Free Prediction Timeline",
        "AI-Based Financial Insights"
      ],
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "MERN Stack"],
      github: "https://github.com/Harshini2015",
      live: null,
      featured: false,
      colSpan: "md:col-span-1",
    },
  ];

  return (
    <section id="projects" className="py-36 px-6 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
        <div className="space-y-4 text-left">
          <div className="flex items-center gap-4">
            <span className="editorial-heading text-lg font-bold text-violet-400 uppercase tracking-widest">Projects</span>
            <div className="h-[1px] w-12 bg-violet-500/30" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-100 leading-tight">
            Selected <br />
            <span className="editorial-heading text-gradient-purple">Works</span>
          </h2>
        </div>
        <p className="text-zinc-400 text-sm max-w-xs text-left md:text-right font-medium">
          A showcase of full-stack engineering, machine learning pipelines, and AI systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projectsData.map((project, idx) => (
          <motion.div
            key={idx}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 60, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={shouldReduceMotion ? { duration: 0.2, delay: idx * 0.1 } : {
              type: "spring",
              stiffness: 80,
              damping: 18,
              delay: idx * 0.1,
            }}
            whileHover={shouldReduceMotion ? {} : { y: -8, scale: 1.008 }}
            className={`h-full flex text-left relative ${project.colSpan} ${project.featured ? "animated-gradient-border p-[1px]" : ""}`}
          >
            <SpotlightCard className={`p-8 flex flex-col justify-between h-full w-full border border-zinc-800/80 bg-zinc-900/60 hover:border-violet-500/10 hover:shadow-[0_20px_50px_rgba(139,92,246,0.08)] transition-all duration-700 rounded-[2.5rem] relative z-10`}>
              <div className="flex flex-col h-full justify-between">
                <div>
                  {/* Category badge */}
                  <div className="flex items-center gap-2 mb-3">
                    {project.featured && <Sparkles className="w-3.5 h-3.5 text-violet-400 animate-pulse" />}
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-violet-400">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-100 tracking-tight mb-3 leading-tight">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Features bullet list */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-zinc-500 block">Key Modules</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                      {project.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-zinc-400 text-xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-violet-500/70 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {project.techStack.map((tech, tIdx) => (
                      <motion.span
                        key={tIdx}
                        whileHover={shouldReduceMotion ? {} : { 
                          scale: 1.05, 
                          borderColor: "rgba(139, 92, 246, 0.4)", 
                          color: "#a78bfa" 
                        }}
                        className="px-3 py-1 text-[10px] font-bold rounded-lg bg-zinc-950/60 text-zinc-300 border border-zinc-800/40 cursor-default select-none transition-colors duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-6 border-t border-zinc-800/60">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -2 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-zinc-800 text-zinc-300 text-xs font-bold hover:bg-zinc-800 hover:border-violet-500/20 transition-all duration-300 glossy-btn shadow-sm"
                    >
                      <Github className="w-4 h-4 text-zinc-400" />
                      <span>View GitHub</span>
                    </motion.a>
                  )}

                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -2 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-violet-600 text-white text-xs font-bold hover:shadow-[0_4px_15px_rgba(139,92,246,0.3)] transition-all duration-300 glossy-btn"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

