"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { SpotlightCard } from "./ui/spotlight";

export function Projects() {
  const projectsData = [
    {
      name: "Enterprise Email Intelligence & Phishing Risk Analysis System",
      techStack: ["Python", "TensorFlow", "Secure SMTP", "NLP"],
      description: "An intelligent security system assessing incoming email headers and message vectors for phishing heuristics, generating dynamic risk indexes and threat reports.",
      github: "https://github.com/Harshini2015/SecureMail",
      githubLabel: "View Repository",
      live: null,
    },
    {
      name: "DermIQ",
      techStack: ["Python", "TensorFlow", "Keras", "Gradio"],
      description: "AI-powered dermatological screening platform that analyzes skin images and assists with acne severity assessment.",
      github: null,
      live: null,
    },
    {
      name: "Smart Loan & Debt Stress Analyzer",
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
      description: "A complete portfolio stress-testing platform evaluating debt ratios and interest variables under high-inflation simulated vectors.",
      github: "https://github.com/Harshini2015",
      githubLabel: "Repository",
      live: "https://smart-loan-debt-analyzer.vercel.app",
    },
  ];

  return (
    <section id="projects" className="py-36 px-6 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
        <div className="space-y-4 text-left">
          <div className="flex items-center gap-4">
            <span className="editorial-heading text-lg font-bold text-violet-600 uppercase tracking-widest">Projects</span>
            <div className="h-[1px] w-12 bg-violet-200" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Selected <br />
            <span className="editorial-heading text-gradient-purple">Works</span>
          </h2>
        </div>
        <p className="text-slate-600 text-sm max-w-xs text-left md:text-right font-medium">
          A showcase of full-stack engineering, machine learning models, and security systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 18,
              delay: idx * 0.1,
            }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="h-full flex text-left"
          >
            <SpotlightCard className="p-8 flex flex-col justify-between h-full w-full border border-slate-200/50 hover:border-violet-200/40 hover:shadow-[0_20px_50px_rgba(139,92,246,0.06)] transition-all duration-700">
              <div className="flex flex-col h-full justify-between">
                <div>
                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-slate-900 tracking-tight mb-3 line-clamp-2 min-h-[3.5rem]">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 text-[11px] font-bold rounded-lg bg-slate-100/60 text-slate-600 border border-slate-200/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100/60">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 hover:border-violet-200 transition-all duration-300 glossy-btn hover:scale-102 transform active:scale-98 shadow-sm"
                    >
                      <Github className="w-3.5 h-3.5 text-slate-600" />
                      <span>{project.githubLabel}</span>
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-violet-600 text-white text-xs font-bold hover:shadow-[0_4px_15px_rgba(139,92,246,0.25)] transition-all duration-300 glossy-btn hover:scale-102 transform active:scale-98"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
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

