"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Award, Compass, ChevronRight } from "lucide-react";
import { SpotlightCard } from "./ui/spotlight";

export function ProfessionalDevelopment() {
  const shouldReduceMotion = useReducedMotion();
  const activities = [
    {
      title: "Hackathons & Technical Events",
      description: "Participated in hackathons, coding competitions, and technical workshops to build experimental software and address real-time coding prompts.",
      icon: <Award className="w-6 h-6 text-violet-700" />,
    },
    {
      title: "Collaborative Growth",
      description: "Improved teamwork, communication, and practical software engineering capabilities through intense developer sprints and workshops.",
      icon: <Compass className="w-6 h-6 text-violet-700" />,
    },
  ];

  return (
    <section id="professional-development" className="py-36 px-6 max-w-5xl mx-auto relative z-10">
      {/* Section Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-24">
        <div className="space-y-4 text-left">
          <div className="flex items-center gap-4">
            <span className="editorial-heading text-lg font-bold text-violet-700 uppercase tracking-widest">Growth</span>
            <div className="h-[1px] w-12 bg-violet-300" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-100 leading-tight">
            Professional <br />
            <span className="editorial-heading text-gradient-purple">Development</span>
          </h2>
        </div>
        <p className="text-zinc-400 text-sm max-w-xs text-left md:text-right font-medium">
          Continuous skill refinement, competitive coding, and technical collaborations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        {activities.map((item, idx) => (
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
            whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.008 }}
            className="flex h-full w-full"
          >
            <SpotlightCard className="p-8 sm:p-10 flex flex-col justify-between w-full border border-violet-100/80 bg-white hover:border-violet-300 shadow-[0_8px_30px_rgba(109,40,217,0.04)] rounded-[2.5rem]">
              <div className="flex gap-6 items-start">
                <div className="p-4 rounded-2xl bg-violet-50 border border-violet-100 text-violet-700 shrink-0">
                  {item.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-extrabold text-zinc-100 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-medium">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center gap-1.5 text-xs text-violet-700 font-bold pt-2">
                    <span>Verified Activities</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
