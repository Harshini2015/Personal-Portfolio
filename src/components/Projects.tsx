"use client";

import React from "react";
import { motion } from "framer-motion";
import { Magnetic } from "./ui/magnetic";
import { Github, ExternalLink, ShieldCheck, Cpu, Code2 } from "lucide-react";

export function Projects() {
  const projectsData = [
    {
      name: "Enterprise Email Intelligence & Phishing Risk Analysis System",
      category: "Cybersecurity & ML Core",
      techStack: ["Python", "TensorFlow", "Secure SMTP", "NLP"],
      status: "Security Alpha Sandbox",
      description: "An intelligent security system assessing incoming email headers and message vectors for phishing heuristics, generating dynamic risk indexes and threat reports.",
      github: "https://github.com/Harshini2015",
      live: null,
      icon: <ShieldCheck className="w-6 h-6 text-violet-400" />,
      previewData: {
        title: "SMTP Threat Scan",
        lines: [
          "[INFO] Listening on port 587...",
          "[SCAN] Analyzing incoming headers from mail-auth.net",
          "[WARN] SPF Alignment: FAIL | DMARC Verification: FAIL",
          "[ML] Phishing Probability Index: 98.4%",
          "[ACTION] Quarantined package #SMTP-4929"
        ]
      }
    },
    {
      name: "DermIQ",
      category: "Computer Vision & Clinical Analytics",
      techStack: ["Python", "TensorFlow", "Keras", "Gradio"],
      status: "Validation Phase",
      description: "Applied deep learning convolutional neural network models to assess skin lesions and classify risk metrics, encapsulated in an interactive diagnostic portal.",
      github: "https://github.com/Harshini2015",
      live: null,
      icon: <Cpu className="w-6 h-6 text-violet-400" />,
      previewData: {
        title: "CNN Classifier Matrix",
        lines: [
          "[LOAD] Model weights loaded: cnn_v2.h5",
          "[EVAL] Image Dimensions: 512x512x3",
          "[PREDICT] Class: Melanoma (Confidence: 89.2%)",
          "[PREDICT] Class: Seborrheic (Confidence: 7.1%)",
          "[METRIC] Processing Latency: 42ms"
        ]
      }
    },
    {
      name: "Smart Loan & Debt Stress Analyzer",
      category: "Enterprise MERN Integration",
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
      status: "Production Ready Platform",
      description: "A complete portfolio stress-testing platform evaluating debt ratios and interest variables under high-inflation simulated vectors.",
      github: "https://github.com/Harshini2015",
      live: "https://smart-loan-debt-analyzer.vercel.app",
      icon: <Code2 className="w-6 h-6 text-violet-400" />,
      previewData: {
        title: "Stress Index Engine",
        lines: [
          "[DB] Connected to MongoDB Atlas",
          "[CALC] Running stress run #82 (Rate Hike: +2.5%)",
          "[CALC] Debt Service Coverage Ratio (DSCR): 1.15",
          "[CALC] High-Risk Portfolio exposure: 14.8%",
          "[API] Dispatched alert to stress-webhook"
        ]
      }
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 18,
      },
    },
  };

  return (
    <section id="projects" className="py-36 px-6 max-w-6xl mx-auto relative z-10">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-28">
        <div className="space-y-4 text-left">
          <div className="flex items-center gap-4">
            <span className="editorial-heading text-4xl text-violet-400">Chapter V</span>
            <div className="h-[1px] w-12 bg-white/10" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            The Product <br />
            <span className="editorial-heading text-gradient-purple">Registry</span>
          </h2>
        </div>
        <p className="text-slate-400 text-sm max-w-xs text-left md:text-right font-medium">
          Showcasing production engines, deep neural nets, and enterprise defense interfaces.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-24"
      >
        {projectsData.map((project, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVariants} 
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            {/* Left Box: Details (Asymmetric layout) */}
            <div className={`lg:col-span-6 space-y-6 text-left ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
              {/* Category & Status */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-violet-400">
                  {project.category}
                </span>
                <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
                <span className="inline-flex items-center text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/5 text-slate-300">
                  {project.status}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3.5 py-1.5 text-xs font-bold rounded-xl bg-white/5 text-slate-300 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <Magnetic>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white text-xs font-extrabold transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span>Repository</span>
                  </a>
                </Magnetic>

                {project.live && (
                  <Magnetic>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black hover:bg-violet-400 hover:text-black text-xs font-extrabold shadow-sm transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Launch Interface</span>
                    </a>
                  </Magnetic>
                )}
              </div>
            </div>

            {/* Right Box: Mock Terminal Visualizer (Asymmetric order) */}
            <div className={`lg:col-span-6 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
              <div className="glass-card rounded-[2rem] p-6 md:p-8 font-mono border border-white/5 bg-black/60 shadow-[0_20px_50px_rgba(0,0,0,0.6)] text-left select-none overflow-hidden relative group">
                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                    {project.previewData.title}
                  </span>
                </div>

                {/* Terminal Output */}
                <div className="space-y-3.5 text-xs">
                  {project.previewData.lines.map((line, lIdx) => (
                    <div 
                      key={lIdx} 
                      className={`leading-relaxed ${
                        line.includes("[WARN]") 
                          ? "text-amber-300" 
                          : line.includes("[ML]") || line.includes("[PREDICT]") 
                          ? "text-violet-300 font-bold" 
                          : line.includes("[ACTION]") 
                          ? "text-emerald-300 font-bold" 
                          : "text-slate-400"
                      }`}
                    >
                      {line}
                    </div>
                  ))}
                </div>

                {/* Glare effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/2 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-700" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

