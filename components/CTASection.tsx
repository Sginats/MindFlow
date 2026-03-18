"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0d0d1a]">
      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#0a0a0f] to-transparent pointer-events-none z-10" />
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-violet-600/20 to-cyan-600/10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Stop surviving your digital life.
          </h2>
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Start thriving in it.
          </h3>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Thousands of people are rebuilding their attention. Your clarity is one decision away.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#waitlist"
              onClick={(e) => { e.preventDefault(); document.querySelector("#waitlist")?.scrollIntoView({ behavior: "smooth" }); }}
              className="flex items-center gap-2 px-10 py-4 rounded-full font-semibold text-white text-lg bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-400 hover:to-violet-400 shadow-xl shadow-blue-500/30 transition-all duration-200"
            >
              Start Reclaiming Your Focus
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#solution"
              onClick={(e) => { e.preventDefault(); document.querySelector("#solution")?.scrollIntoView({ behavior: "smooth" }); }}
              className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
            >
              Learn more about our approach ↗
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
