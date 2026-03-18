"use client";

import { motion } from "framer-motion";

const cases = [
  {
    icon: "🎓",
    title: "Students",
    problem: "TikTok, YouTube, and constant notifications derail study sessions and spike anxiety.",
    solution: "Smart study blocks with distraction shields and exam stress detection.",
    outcome: "2x study retention reported",
    color: "border-blue-500/20",
    bg: "from-blue-500/10 to-transparent",
  },
  {
    icon: "💻",
    title: "Remote Workers",
    problem: "Zoom fatigue, Slack overload, and always-on culture are causing record burnout.",
    solution: "Meeting buffer zones, async communication coaching, and work-life boundary enforcement.",
    outcome: "34% reduction in work anxiety",
    color: "border-violet-500/20",
    bg: "from-violet-500/10 to-transparent",
  },
  {
    icon: "👨‍💻",
    title: "Developers",
    problem: "Context switching and constant interruptions destroy the deep focus coding requires.",
    solution: "Deep work mode with git-aware focus sessions and interruption analytics.",
    outcome: "47% more flow state hours",
    color: "border-cyan-500/20",
    bg: "from-cyan-500/10 to-transparent",
  },
  {
    icon: "✍️",
    title: "Creators",
    problem: "Mindless platform scrolling drains creative inspiration and feeds comparison culture.",
    solution: "Creation vs. consumption ratio tracking and inspiration-preserving browsing habits.",
    outcome: "3x creative output reported",
    color: "border-emerald-500/20",
    bg: "from-emerald-500/10 to-transparent",
  },
  {
    icon: "🚀",
    title: "Startup Founders",
    problem: "Decision fatigue, always-on culture, and team demands lead to rapid cognitive decline.",
    solution: "Executive focus protocols, decision batching, and team-aware scheduling.",
    outcome: "Better decisions, less stress",
    color: "border-amber-500/20",
    bg: "from-amber-500/10 to-transparent",
  },
  {
    icon: "📋",
    title: "Overwhelmed Professionals",
    problem: "Meeting overload, email anxiety, and digital exhaustion are becoming the new normal.",
    solution: "Email batching, meeting-free blocks, and daily cognitive load management.",
    outcome: "2.3 hours reclaimed daily",
    color: "border-rose-500/20",
    bg: "from-rose-500/10 to-transparent",
  },
];

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
            Use Cases
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Built for every{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              modern mind
            </span>
          </h2>
          <p className="text-lg text-slate-400">
            Whether you&apos;re studying, building, creating, or leading — MindFlow adapts to your unique attention needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`glass rounded-2xl p-6 bg-gradient-to-b ${item.bg} border ${item.color}`}
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-bold text-white mb-4">{item.title}</h3>
              
              <div className="space-y-3">
                <div>
                  <span className="text-xs font-semibold text-rose-400 uppercase tracking-wide">Problem</span>
                  <p className="text-slate-400 text-sm mt-1 leading-relaxed">{item.problem}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-wide">Solution</span>
                  <p className="text-slate-300 text-sm mt-1 leading-relaxed">{item.solution}</p>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-white/5">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="text-xs text-emerald-300 font-medium">{item.outcome}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
