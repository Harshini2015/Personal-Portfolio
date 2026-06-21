"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Brain, Cpu } from "lucide-react";

export function About() {
  const cardData = [
    {
      num: "01",
      icon: <Shield className="w-6 h-6 text-violet-600" />,
      title: "Architectural Defense",
      description: "Exploring threat modeling, API vulnerability assessment, and secure-by-design patterns to eliminate software vulnerability vectors.",
    },
    {
      num: "02",
      icon: <Brain className="w-6 h-6 text-violet-600" />,
      title: "Applied Machine Learning",
      description: "Applying Deep Learning (TensorFlow, Keras) to vision classification problems and analyzing high-dimensional security datasets.",
    },
    {
      num: "03",
      icon: <Cpu className="w-6 h-6 text-violet-600" />,
      title: "High-Integrity Infrastructure",
      description: "Designing database models and RESTful APIs with Node.js, Express, and cloud platforms like Supabase with security as a priority.",
    },
  ];

  return (
    <section id="about" className="py-36 px-6 max-w-6xl mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column: Section Heading */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 60, damping: 15 }}
          className="lg:col-span-5 space-y-8 lg:sticky lg:top-32"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="editorial-heading text-lg font-bold text-violet-600 uppercase tracking-widest">About Me</span>
              <div className="h-[1px] w-12 bg-violet-200" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              The Mission &amp; <br />
              <span className="editorial-heading text-gradient-purple">Core Directives</span>
            </h2>
          </div>
          
          <div className="space-y-6 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            <p>
              I believe software must be both highly functional and structurally secure. As a Computer Science student, my work focuses on building robust systems designed to withstand real-world vulnerability constraints.
            </p>
            <p className="text-slate-500 font-normal">
              By combining machine learning analysis with defensive engineering practices, I aim to design backend interfaces that are both intelligent and resilient to threats.
            </p>
          </div>
        </motion.div>

        {/* Right Column: Floating Cards Stack */}
        <div className="lg:col-span-7 space-y-6">
          {cardData.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                type: "spring", 
                stiffness: 60, 
                damping: 15,
                delay: idx * 0.1 
              }}
              className="glass-card rounded-[2rem] p-8 sm:p-10 flex flex-col sm:flex-row justify-between items-start gap-8"
            >
              <div className="space-y-6 flex-1 text-left">
                {/* Header */}
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-violet-50 border border-violet-100/50 w-fit">
                    {card.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                    {card.title}
                  </h3>
                </div>
                
                {/* Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Huge Serial Number Indicator */}
              <span className="editorial-heading text-5xl sm:text-6xl text-slate-200/50 select-none font-bold align-top">
                {card.num}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

