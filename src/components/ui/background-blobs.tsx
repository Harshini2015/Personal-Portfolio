"use client";

import React from "react";
import { motion } from "framer-motion";

export function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Glow Blob 1 - Top Left Violet */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -70, 50, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[5%] left-[5%] w-[35rem] h-[35rem] rounded-full bg-violet-200/40 blur-[130px]"
      />
      
      {/* Glow Blob 2 - Bottom Right Indigo */}
      <motion.div
        animate={{
          x: [0, -100, 60, 0],
          y: [0, 80, -90, 0],
          scale: [1, 0.85, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[10%] right-[5%] w-[40rem] h-[40rem] rounded-full bg-purple-200/30 blur-[150px]"
      />
      
      {/* Glow Blob 3 - Center Light Lavender */}
      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, 50, -50, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[40%] left-[25%] w-[30rem] h-[30rem] rounded-full bg-indigo-200/20 blur-[120px]"
      />
    </div>
  );
}
