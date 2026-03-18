"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "🧠",
    title: "AI Focus Planner",
    desc: "Creates your ideal daily focus blocks based on energy levels, mood, and current workload",
    outcome: "3x more deep work time",
    color: "from-blue-500/20 to-blue-600/10",
    border: "border-blue-500/20",
  },
  {
    icon: "🛡️",
    title: "Smart Notification Shield",
    desc: "Intelligently filters and delays notifications during your deep work sessions",
    outcome: "47 interruptions blocked daily",
    color: "from-violet-500/20 to-violet-600/10",
    border: "border-violet-500/20",
  },
  {
    icon: "📵",
    title: "Doomscroll Interruption Engine",
    desc: "Detects unhealthy scrolling patterns and gently redirects you with a calming prompt",
    outcome: "2.1 hours reclaimed weekly",
    color: "from-rose-500/20 to-rose-600/10",
    border: "border-rose-500/20",
  },
  {
    icon: "⚠️",
    title: "Burnout Risk Detection",
    desc: "Monitors stress indicators and warns you before exhaustion turns into full burnout",
    outcome: "Early warning 3-5 days ahead",
    color: "from-amber-500/20 to-amber-600/10",
    border: "border-amber-500/20",
  },
  {
    icon: "💚",
    title: "Energy & Mood Tracking",
    desc: "Maps how you feel against your screen behavior to reveal hidden patterns",
    outcome: "Understand your peak windows",
    color: "from-emerald-500/20 to-emerald-600/10",
    border: "border-emerald-500/20",
  },
  {
    icon: "☕",
    title: "Recovery Break Coach",
    desc: "Science-backed break rituals timed perfectly to restore cognitive energy",
    outcome: "32% better afternoon focus",
    color: "from-orange-500/20 to-orange-600/10",
    border: "border-orange-500/20",
  },
  {
    icon: "📱",
    title: "Focus Mode Across Devices",
    desc: "One-click syncs your calm work environment across phone, tablet, and desktop",
    outcome: "Seamless cross-device protection",
    color: "from-cyan-500/20 to-cyan-600/10",
    border: "border-cyan-500/20",
  },
  {
    icon: "📊",
    title: "Weekly Clarity Reports",
    desc: "Beautiful, actionable analytics showing exactly where your attention goes each week",
    outcome: "Full attention health visibility",
    color: "from-indigo-500/20 to-indigo-600/10",
    border: "border-indigo-500/20",
  },
  {
    icon: "🎯",
    title: "Habit Rebuilder",
    desc: "Achievable micro-goals and streak tracking to gradually rewire your digital routines",
    outcome: "Sustainable habits in 21 days",
    color: "from-purple-500/20 to-purple-600/10",
    border: "border-purple-500/20",
  },
  {
    icon: "🔒",
    title: "Privacy-First Architecture",
    desc: "Your behavioral data never leaves your device. AI runs locally where possible.",
    outcome: "Zero data sold, ever",
    color: "from-teal-500/20 to-teal-600/10",
    border: "border-teal-500/20",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features-detail" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Every feature designed to{" "}
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              protect your attention
            </span>
          </h2>
          <p className="text-lg text-slate-400">
            Ten intelligent tools working together to rebuild your focus.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className={`glass rounded-2xl p-6 bg-gradient-to-br ${feature.color} border ${feature.border} cursor-default`}
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-base font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{feature.desc}</p>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-xs text-emerald-300 font-medium">{feature.outcome}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
