"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Magnetic } from "./ui/magnetic";
import { 
  Mail, 
  Linkedin, 
  Github, 
  Phone, 
  ExternalLink,
  Sparkles
} from "lucide-react";
import { SpotlightCard } from "./ui/spotlight";

export function Contact() {
  const shouldReduceMotion = useReducedMotion();

  const contactCards = [
    {
      name: "GitHub",
      identifier: "Harshini2015",
      url: "https://github.com/Harshini2015",
      icon: <Github className="w-6 h-6 text-violet-600" />,
      actionText: "View Profile",
    },
    {
      name: "LinkedIn",
      identifier: "Harshini S",
      url: "https://linkedin.com/in/harshini-s-8400372bb",
      icon: <Linkedin className="w-6 h-6 text-violet-600" />,
      actionText: "Connect",
    },
    {
      name: "Email",
      identifier: "harshiniis2005@gmail.com",
      url: "mailto:harshiniis2005@gmail.com",
      icon: <Mail className="w-6 h-6 text-violet-600" />,
      actionText: "Send Mail",
    },
    {
      name: "Phone",
      identifier: "+91 9632144205",
      url: "tel:+919632144205",
      icon: <Phone className="w-6 h-6 text-violet-600" />,
      actionText: "Call Direct",
    },
  ];

  return (
    <section id="contact" className="py-36 px-6 bg-violet-50/30 border-t border-violet-100 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Centered Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={shouldReduceMotion ? { duration: 0.2 } : { type: "spring", stiffness: 60, damping: 15 }}
          className="space-y-4 mb-20 flex flex-col items-center"
        >
          <div className="flex items-center gap-3">
            <Sparkles className="w-4 h-4 text-violet-600" />
            <span className="editorial-heading text-lg font-bold text-violet-700 uppercase tracking-widest">Get In Touch</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-100 leading-tight">
            Let&apos;s <span className="editorial-heading text-gradient-purple">Connect</span>
          </h2>
          <p className="text-zinc-400 text-base max-w-md mx-auto font-medium leading-relaxed">
            Feel free to connect with me through my professional profiles and communication channels.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          {contactCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? { opacity: 0 } : { y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={shouldReduceMotion ? { duration: 0.2 } : {
                type: "spring",
                stiffness: 70,
                damping: 16,
                delay: idx * 0.1,
              }}
              whileHover={shouldReduceMotion ? {} : { y: -6, scale: 1.01 }}
              className="h-full flex"
            >
              <SpotlightCard className="p-8 flex flex-col justify-between w-full border border-violet-100/80 bg-white hover:border-violet-300 hover:shadow-[0_15px_40px_rgba(109,40,217,0.08)] transition-all duration-500 rounded-[2.5rem]">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="p-4 rounded-2xl bg-violet-50 border border-violet-100 shrink-0">
                    {card.icon}
                  </div>
                  <Magnetic>
                    <a
                      href={card.url}
                      target={card.url.startsWith("http") ? "_blank" : "_self"}
                      rel={card.url.startsWith("http") ? "noopener noreferrer" : ""}
                      className="p-3 rounded-full border border-violet-200 text-violet-700 hover:bg-violet-600 hover:text-white transition-all duration-300 glossy-btn shadow-sm"
                      title={card.actionText}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Magnetic>
                </div>

                <div className="space-y-1">
                  <p className="text-[10px] font-extrabold text-violet-700 uppercase tracking-widest">
                    {card.name}
                  </p>
                  <a
                    href={card.url}
                    target={card.url.startsWith("http") ? "_blank" : "_self"}
                    rel={card.url.startsWith("http") ? "noopener noreferrer" : ""}
                    className="text-lg font-extrabold text-zinc-100 hover:text-violet-700 transition-colors break-all block"
                  >
                    {card.identifier}
                  </a>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
