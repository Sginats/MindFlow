"use client";

import { motion } from "framer-motion";

const steps = [
  {
    icon: "🔍",
    title: "Detect Overload",
    desc: "MindFlow monitors your digital behavior patterns to identify when you're approaching cognitive overload",
    num: "01",
  },
  {
    icon: "💡",
    title: "Suggest Intervention",
    desc: "AI-powered recommendations arrive at exactly the right moment, not to shame but to redirect",
    num: "02",
  },
  {
    icon: "🎯",
    title: "Optimize Focus",
    desc: "Personalized focus blocks and intelligent notification filtering create your ideal deep work environment",
    num: "03",
  },
  {
    icon: "🔄",
    title: "Build Better Habits",
    desc: "Over time, MindFlow rewires your relationship with technology through consistent, gentle nudges",
    num: "04",
  },
];

export default function SolutionSection() {
  return (
    <section id="how-it-works" className="py-24 bg-[#0d0d1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            The Solution
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Introducing a new category:{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Intelligent Attention Recovery
            </span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            MindFlow combines cutting-edge AI with behavioral science and digital wellness research to create a system that actually works.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-blue-500/30 flex items-center justify-center text-2xl mb-4 glass">
                  {step.icon}
                </div>
                <div className="text-xs font-bold text-blue-400/60 mb-2">{step.num}</div>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
