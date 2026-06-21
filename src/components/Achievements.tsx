"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Code2 } from "lucide-react";
import { SpotlightCard } from "./ui/spotlight";

export function Achievements() {
  const achievements = [
    {
      title: "1st Place - Project Expo Excellence",
      organization: "BGS Institute of Technology",
      description: "Recognized with top honors for innovative system engineering, design, and practical software integrity showcase.",
      icon: <Trophy className="w-6 h-6 text-amber-500" />,
    },
    {
      title: "Active Hackathon Competitor",
      organization: "Various Platforms",
      description: "Collaborated in high-intensity developer sprints, engineering secure full-stack software templates and real-time trackers.",
      icon: <Code2 className="w-6 h-6 text-violet-600" />,
    },
  ];

  return (
    <section id="achievements" className="py-36 px-6 max-w-5xl mx-auto relative z-10">
      {/* Section Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-24">
        <div className="space-y-4 text-left">
          <div className="flex items-center gap-4">
            <span className="editorial-heading text-lg font-bold text-violet-600 uppercase tracking-widest">Achievements</span>
            <div className="h-[1px] w-12 bg-violet-200" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Milestones &amp; <br />
            <span className="editorial-heading text-gradient-purple">Recognition</span>
          </h2>
        </div>
        <p className="text-slate-600 text-sm max-w-xs text-left md:text-right font-medium">
          Accolades and competitive engineering landmarks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        {achievements.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 15,
              delay: idx * 0.1,
            }}
            whileHover={{ y: -4, scale: 1.008 }}
            className="flex h-full w-full"
          >
            <SpotlightCard className="p-8 sm:p-10 flex flex-col justify-between w-full border border-slate-200/50 hover:border-violet-200/40 hover:shadow-[0_20px_50px_rgba(139,92,246,0.06)] transition-all duration-700">
              <div className="flex gap-6 items-start">
                <div className="p-4 rounded-2xl bg-violet-50 border border-violet-100/50 text-violet-600 shrink-0">
                  {item.icon}
                </div>
                <div className="space-y-3">
                  <span className="text-[10px] font-extrabold text-violet-600 uppercase tracking-widest">
                    {item.organization}
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

