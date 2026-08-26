"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Github, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";
import { SpotlightCard } from "./ui/spotlight";

export function Projects() {
  const shouldReduceMotion = useReducedMotion();
  const projectsData = [
    {
      num: "01",
      name: "HelpDesk Ticket Management System",
      category: "Featured Full-Stack Application",
      description: "A corporate-grade IT HelpDesk platform built to streamline employee support requests, ticket management, and resolution workflows with role-based access and database-driven dashboards.",
      features: [
        "Role-Based Authentication & Dashboards",
        "Employee Ticket Creation & Tracking",
        "Support Agent Ticket Management",
        "Admin Dashboard & System Metrics",
        "Ticket History & Audit Trails",
        "Search, Filtering & Priority Management"
      ],
      techStack: [
        "Java",
        "Jakarta Servlets",
        "JDBC",
        "MySQL",
        "HTML5",
        "CSS3",
        "JavaScript",
        "JSP",
        "Maven",
        "Apache Tomcat",
        "Docker"
      ],
      github: "https://github.com/Harshini2015/HelpDesk-Ticket-Management-System",
      featured: true,
      slideDirection: "left",
    },
    {
      num: "02",
      name: "Smart Loan & Debt Stress Analyzer",
      category: "Featured AI-Powered Full-Stack Application",
      description: "An AI-powered financial wellness platform built with the MERN stack to help users manage loans, analyze debt stress, plan emergency funds, track financial goals, and make smarter financial decisions.",
      features: [
        "AI Financial Assistant with Groq & Llama 3.3",
        "Loan Management & EMI Simulation",
        "Debt-to-Income Stress Analysis",
        "Emergency Fund Planner",
        "Financial Goals & Expense Tracking",
        "Financial Health Score & Analytics"
      ],
      techStack: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Groq API",
        "Llama 3.3"
      ],
      github: "https://github.com/Harshini2015/smart-loan-debt-analyzer",
      live: "https://smart-loan-debt-analyzer.vercel.app/",
      featured: true,
      slideDirection: "right",
    },
  ];

  return (
    <section id="projects" className="py-36 px-6 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
        <div className="space-y-4 text-left">
          <div className="flex items-center gap-4">
            <span className="editorial-heading text-lg font-bold text-violet-700 uppercase tracking-widest">Projects</span>
            <div className="h-[1px] w-12 bg-violet-300" />
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {projectsData.map((project, idx) => (
          <motion.div
            key={idx}
            initial={shouldReduceMotion ? { opacity: 0 } : { 
              opacity: 0, 
              x: project.slideDirection === "left" ? -60 : 60 
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={shouldReduceMotion ? { duration: 0.2, delay: idx * 0.1 } : {
              type: "spring",
              stiffness: 70,
              damping: 16,
              delay: idx * 0.1,
            }}
            whileHover={shouldReduceMotion ? {} : { y: -8, scale: 1.008 }}
            className={`h-full flex text-left relative ${project.featured ? "animated-gradient-border p-[1px]" : ""}`}
          >
            <SpotlightCard className="p-8 sm:p-10 flex flex-col justify-between h-full w-full border border-violet-100/80 bg-white/95 hover:border-violet-300 hover:shadow-[0_20px_50px_rgba(109,40,217,0.15)]">
              <div className="flex flex-col h-full justify-between">
                <div>
                  {/* Card Header & Category badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      {project.featured && <Sparkles className="w-4 h-4 text-violet-600 animate-pulse" />}
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-violet-700">
                        {project.category}
                      </span>
                    </div>
                    <span className="editorial-heading text-2xl font-bold text-violet-300">
                      {project.num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-100 tracking-tight mb-3 leading-tight">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-medium">
                    {project.description}
                  </p>

                  {/* Features bullet list */}
                  <div className="space-y-2.5 mb-6">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-zinc-500 block">Key Highlights</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                      {project.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-zinc-300 text-xs font-semibold">
                          <CheckCircle2 className="w-3.5 h-3.5 text-violet-600 shrink-0" />
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
                          borderColor: "#6D28D9", 
                          color: "#6D28D9" 
                        }}
                        className="px-3 py-1 text-[10px] font-bold rounded-xl bg-violet-50/70 text-violet-900 border border-violet-100 cursor-default select-none transition-colors duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons (bottom aligned) */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-6 border-t border-violet-100 mt-auto">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -2 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-violet-200 text-zinc-100 text-xs font-bold hover:bg-violet-50 hover:border-violet-400 transition-all duration-300"
                    >
                      <Github className="w-4 h-4 text-violet-700" />
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
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-violet-600 text-white text-xs font-bold hover:bg-violet-700 hover:shadow-[0_6px_20px_rgba(109,40,217,0.4)] transition-all duration-300"
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
