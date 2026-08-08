"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Layers, Brain, Cpu } from "lucide-react";

export function About() {
  const shouldReduceMotion = useReducedMotion();
  const cardData = [
    {
      num: "01",
      icon: <Cpu className="w-6 h-6 text-violet-400" />,
      title: "Core Computer Science & OOP",
      description: "Solid foundation in Data Structures, Analysis and Design of Algorithms, Operating Systems, Computer Networks, and Object-Oriented Programming using Java and C++.",
    },
    {
      num: "02",
      icon: <Layers className="w-6 h-6 text-violet-400" />,
      title: "Full-Stack MERN Development",
      description: "Developing responsive and scalable web applications utilizing MongoDB, Express.js, React.js, and Node.js with secure database models and RESTful APIs.",
    },
    {
      num: "03",
      icon: <Brain className="w-6 h-6 text-violet-400" />,
      title: "AI Integration & Scripting",
      description: "Building smart tools (e.g. Nexora AI) using Python, Gradio, Groq SDK, Llama models, and Supabase integration to deliver automated user workflows.",
    },
  ];

  return (
    <section id="about" className="py-36 px-6 max-w-6xl mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column: Section Heading */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={shouldReduceMotion ? { duration: 0.2 } : { type: "spring", stiffness: 60, damping: 15 }}
          className="lg:col-span-5 space-y-8 lg:sticky lg:top-32"
        >
          <div className="space-y-4 font-sans">
            <div className="flex items-center gap-4">
              <span className="editorial-heading text-lg font-bold text-violet-400 uppercase tracking-widest">About Me</span>
              <div className="h-[1px] w-12 bg-violet-500/30" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-100 leading-tight">
              Academic &amp; <br />
              <span className="editorial-heading text-gradient-purple">Developer Directives</span>
            </h2>
          </div>
          
          <div className="space-y-6 text-zinc-300 text-sm sm:text-base leading-relaxed font-medium">
            <p>
              I am a Computer Science undergraduate at PES College of Engineering, Mandya. My engineering focus is on creating reliable web applications, analyzing algorithms, and integrating artificial intelligence to solve practical problems.
            </p>
            <p className="text-zinc-400 font-normal">
              By combining robust backend schemas (SQL, MongoDB) with clean OOP design principles and automated LLM flows, I aim to develop highly optimized and secure software.
            </p>
          </div>
        </motion.div>

        {/* Right Column: Floating Cards Stack */}
        <div className="lg:col-span-7 space-y-6">
          {cardData.map((card, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? { opacity: 0 } : { x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={shouldReduceMotion ? { duration: 0.2 } : { 
                type: "spring", 
                stiffness: 60, 
                damping: 15,
                delay: idx * 0.1 
              }}
              className="glass-card rounded-[2rem] p-8 sm:p-10 flex flex-col sm:flex-row justify-between items-start gap-8 border border-zinc-800/80 hover:border-violet-500/20"
            >
              <div className="space-y-6 flex-1 text-left">
                {/* Header */}
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-violet-950/30 border border-violet-800/40 w-fit">
                    {card.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-zinc-100 tracking-tight">
                    {card.title}
                  </h3>
                </div>
                
                {/* Description */}
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Huge Serial Number Indicator */}
              <span className="editorial-heading text-5xl sm:text-6xl text-zinc-800/40 select-none font-bold align-top">
                {card.num}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

