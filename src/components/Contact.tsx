"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Magnetic } from "./ui/magnetic";
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Phone, 
  Send, 
  CheckCircle,
  Code
} from "lucide-react";

export function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setIsSubmitting(true);
    
    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/harshini-s-8400372bb",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: "GitHub",
      url: "https://github.com/Harshini2015",
      icon: <Github className="w-5 h-5" />,
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/harshini1322/",
      icon: <Code className="w-5 h-5" />,
    },
    {
      name: "Email",
      url: "mailto:harshiniis2005@gmail.com",
      icon: <Mail className="w-5 h-5" />,
    },
  ];

  return (
    <section id="contact" className="py-36 px-6 bg-slate-50/50 border-t border-slate-100 relative z-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-24">
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-4">
              <span className="editorial-heading text-lg font-bold text-violet-600 uppercase tracking-widest">Contact</span>
              <div className="h-[1px] w-12 bg-violet-200" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Establish <br />
              <span className="editorial-heading text-gradient-purple">Connection</span>
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-xs text-left md:text-right font-medium">
            Send a message or reach out on my professional channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* Contact Details */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
            className="lg:col-span-2 space-y-10 text-left"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Get In Touch
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                If you have an engineering design challenge, research inquiry, or want to collaborate on development projects, feel free to reach out.
              </p>
            </div>

            {/* Direct Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-violet-50 border border-violet-100 text-violet-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest">Location</p>
                  <p className="text-sm font-extrabold text-slate-900">Chamarajanagar, Karnataka</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-violet-50 border border-violet-100 text-violet-600 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest">Phone</p>
                  <a href="tel:+919632144205" className="text-sm font-extrabold text-slate-900 hover:text-violet-600 transition-colors">
                    +91 9632144205
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-violet-50 border border-violet-100 text-violet-600 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest">Email</p>
                  <a href="mailto:harshiniis2005@gmail.com" className="text-sm font-extrabold text-slate-900 hover:text-violet-600 transition-colors break-all">
                    harshiniis2005@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest">Social Links</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, idx) => (
                  <Magnetic key={idx}>
                    <motion.a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ 
                        scale: 1.15,
                        boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="p-4 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-violet-600 hover:border-violet-300 hover:bg-violet-50/50 shadow-sm transition-all duration-300 glossy-btn"
                      title={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  </Magnetic>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form Container */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.1 }}
            className="lg:col-span-3 text-left w-full"
          >
            <div className="glass-card rounded-[2.5rem] p-8 sm:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[10px] font-extrabold text-slate-600 uppercase tracking-widest">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all duration-300 text-sm font-medium"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] font-extrabold text-slate-600 uppercase tracking-widest">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. john@domain.com"
                      className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all duration-300 text-sm font-medium"
                    />
                  </div>
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-[10px] font-extrabold text-slate-600 uppercase tracking-widest">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Describe details, queries, or project scope..."
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all duration-300 resize-none text-sm font-medium"
                  />
                </div>

                {/* Status Indicator / Submit */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-2">
                  <AnimatePresence mode="wait">
                    {isSubmitted && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-wider"
                      >
                        <CheckCircle className="w-5 h-5 shrink-0 text-emerald-600" />
                        <span>Message Sent Successfully</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <Magnetic>
                    <button
                      type="submit"
                      disabled={isSubmitting || isSubmitted}
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 w-full sm:w-auto rounded-full bg-violet-600 text-white font-extrabold shadow-md hover:shadow-[0_8px_25px_rgba(139,92,246,0.35)] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 group text-sm glossy-btn hover:scale-105 transform active:scale-95"
                    >
                      <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-white group-hover:text-white" />
                    </button>
                  </Magnetic>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

