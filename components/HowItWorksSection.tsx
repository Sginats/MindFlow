"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    icon: "📊",
    title: "Understand Your Patterns",
    desc: "Connect your devices and let MindFlow map your complete digital behavior landscape over 7 days.",
    align: "right",
  },
  {
    num: "02",
    icon: "🔕",
    title: "Reduce Digital Noise",
    desc: "MindFlow's AI automatically filters, shields, and interrupts unhealthy patterns without requiring constant decisions from you.",
    align: "left",
  },
  {
    num: "03",
    icon: "🌱",
    title: "Rebuild Healthy Focus",
    desc: "Personalized interventions, focus sessions, and habit coaching guide you toward sustainable attention health.",
    align: "right",
  },
  {
    num: "04",
    icon: "📈",
    title: "Sustain Long-Term Balance",
    desc: "Track your progress week over week and watch your attention health score improve over time.",
    align: "left",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-[#0d0d1a] relative">
      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#0a0a0f] to-transparent pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Four simple steps to{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              reclaim your focus
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical connecting line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/30 to-transparent transform -translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: step.align === "right" ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`flex items-center gap-8 ${step.align === "left" ? "md:flex-row-reverse" : "md:flex-row"} flex-col`}
              >
                <div className={`flex-1 ${step.align === "left" ? "md:text-right" : "md:text-left"} text-left`}>
                  <div className="glass rounded-2xl p-6 inline-block w-full">
                    <div className="text-xs font-bold text-blue-400/60 mb-2">{step.num}</div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {step.icon} {step.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 items-center justify-center shadow-lg shadow-blue-500/30 z-10">
                  <span className="text-white font-bold text-sm">{parseInt(step.num)}</span>
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
