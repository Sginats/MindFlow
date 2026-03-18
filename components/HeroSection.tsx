"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const floatingCards = [
  { label: "Focus Score", value: "87/100", color: "from-blue-500/20 to-blue-600/20", border: "border-blue-500/30", delay: 0 },
  { label: "Notifications Blocked", value: "47", color: "from-violet-500/20 to-violet-600/20", border: "border-violet-500/30", delay: 0.2 },
  { label: "Screen Time", value: "-2.3h", color: "from-cyan-500/20 to-cyan-600/20", border: "border-cyan-500/30", delay: 0.4 },
  { label: "Deep Work Sessions", value: "4", color: "from-emerald-500/20 to-emerald-600/20", border: "border-emerald-500/30", delay: 0.6 },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f] pt-16">
      {/* Animated mesh background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "0.5s" }} />
        
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Now in Beta · 12,000+ Users
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white mb-6"
          >
            Your attention is your{" "}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              most valuable
            </span>{" "}
            resource. Stop letting the internet steal it.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            MindFlow is the AI-powered platform that helps you beat digital burnout, silence the noise, and reclaim deep focus — so you can do work that actually matters.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <a
              href="#waitlist"
              onClick={(e) => { e.preventDefault(); document.querySelector("#waitlist")?.scrollIntoView({ behavior: "smooth" }); }}
              className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-400 hover:to-violet-400 shadow-lg shadow-blue-500/30 transition-all duration-200 text-base"
            >
              Get Early Access
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#solution"
              onClick={(e) => { e.preventDefault(); document.querySelector("#solution")?.scrollIntoView({ behavior: "smooth" }); }}
              className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-slate-300 border border-white/20 hover:border-white/40 hover:text-white bg-white/5 transition-all duration-200 text-base"
            >
              <Play className="w-4 h-4" />
              See How It Works
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm text-slate-500 mb-12"
          >
            Join 12,000+ students, creators, and remote teams rebuilding their focus
          </motion.p>

          {/* Floating stat cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {floatingCards.map((card) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + card.delay }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`glass rounded-2xl p-5 bg-gradient-to-br ${card.color} border ${card.border}`}
              >
                <div className="text-2xl font-bold text-white mb-1">{card.value}</div>
                <div className="text-xs text-slate-400 leading-tight">{card.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
