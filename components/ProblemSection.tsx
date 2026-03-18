"use client";

import { motion } from "framer-motion";
import { Clock, Smartphone, Brain, TrendingDown, Scroll, Zap } from "lucide-react";

const stats = [
  {
    icon: Clock,
    stat: "4.7 hours",
    desc: "Average daily screen time not including work hours",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: Smartphone,
    stat: "96 times",
    desc: "How often the average person checks their phone daily",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    icon: Brain,
    stat: "23 minutes",
    desc: "Time to fully refocus after a single distraction",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: TrendingDown,
    stat: "67%",
    desc: "Remote workers reporting higher burnout rates than before",
    color: "text-rose-400",
    bg: "bg-rose-500/10",
  },
  {
    icon: Scroll,
    stat: "2.7 hours",
    desc: "Average daily time lost to doomscrolling and passive consumption",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    icon: Zap,
    stat: "40%",
    desc: "Reduction in cognitive performance from chronic multitasking",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="py-24 bg-[#0d0d1a] relative">
      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#0a0a0f] to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-medium mb-4">
            The Problem
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            The modern attention crisis is real.{" "}
            <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
              And it&#39;s getting worse.
            </span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            We&apos;re living through the largest attention-hijacking experiment in history. The data is alarming.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((item, i) => (
            <motion.div
              key={item.stat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 hover:bg-white/[0.07] transition-colors duration-200"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${item.bg} mb-4`}>
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${item.color.replace("text-", "from-")} to-white bg-clip-text text-transparent`}>
                {item.stat}
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
