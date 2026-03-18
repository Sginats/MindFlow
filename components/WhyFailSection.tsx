"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const oldSolutions = [
  "Only track screen time without context",
  "Use guilt and shame to change behavior",
  "Don't understand emotional state or energy",
  "Ignore work patterns and deep work needs",
  "Generic recommendations that don't adapt",
  "Boring interfaces you forget exist",
];

const mindflowSolutions = [
  "AI-powered attention intelligence with full context",
  "Guidance and positive behavior design",
  "Energy and mood-aware scheduling",
  "Adapts to your unique work patterns",
  "Personalized, evolving recommendations",
  "Beautiful, calm interface you want to use",
];

export default function WhyFailSection() {
  return (
    <section className="py-24 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-4">
            Why Other Solutions Fail
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Current solutions weren&apos;t built for{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              this problem.
            </span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Productivity apps, screen time trackers, and digital detox tools all fail for the same reasons.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Old Solutions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 border border-rose-500/20 bg-rose-500/5"
          >
            <h3 className="text-xl font-bold text-rose-400 mb-6">Old Solutions</h3>
            <div className="space-y-4">
              {oldSolutions.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-rose-500/20 flex items-center justify-center mt-0.5">
                    <X className="w-3.5 h-3.5 text-rose-400" />
                  </div>
                  <span className="text-slate-400 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* MindFlow */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-2xl p-8 border border-emerald-500/20 bg-emerald-500/5"
          >
            <h3 className="text-xl font-bold text-emerald-400 mb-6">✦ MindFlow</h3>
            <div className="space-y-4">
              {mindflowSolutions.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
