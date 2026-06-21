"use client";

import React, { useRef, useState } from "react";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(139, 92, 246, 0.12)", // Elegant purple accent glow
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-3xl border border-white/60 bg-white/70 backdrop-blur-xl transition-all duration-500 shadow-[0_8px_32px_0_rgba(31,38,135,0.04)] hover:shadow-[0_20px_50px_0_rgba(139,92,246,0.1)] hover:-translate-y-1 ${className}`}
    >
      {/* Light Reflection Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-500"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      
      {/* Glossy overlay sheen */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/0 via-white/5 to-white/20 opacity-50 mix-blend-overlay" />
      
      <div className="relative z-10">{children}</div>
    </div>
  );
}
