"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Is this just another productivity app?",
    a: "No. Most productivity apps track behavior but don't understand it. MindFlow is an intelligent attention recovery system — it uses AI to understand why you get distracted, when you're most at risk of burnout, and what specific interventions work for you as an individual. It learns and evolves with you.",
  },
  {
    q: "How is my data handled?",
    a: "Your behavioral data is processed primarily on-device using local AI models. Aggregated, anonymized insights may be used to improve the system, but your personal data is never sold, shared, or used for advertising. You can export or delete your data at any time.",
  },
  {
    q: "Does it work across devices?",
    a: "Yes. MindFlow works across iOS, Android, Mac, Windows, and as a browser extension. Your focus settings, notification shields, and habit data sync seamlessly across all your devices in real-time.",
  },
  {
    q: "Is it for work, study, or both?",
    a: "Both — and everything in between. MindFlow adapts to your context. It recognizes when you're in deep work mode, study mode, creative mode, or recovery mode, and applies the right interventions for each.",
  },
  {
    q: "Can it help with burnout and not just focus?",
    a: "Absolutely. Burnout detection is one of our core features. MindFlow monitors early warning signals — declining focus scores, increasing screen time, disrupted break patterns — and alerts you days before burnout takes hold, giving you time to intervene.",
  },
  {
    q: "How does the AI make recommendations?",
    a: "MindFlow's AI is trained on behavioral science research and continuously learns from your patterns. It identifies what's working, what isn't, and adapts its recommendations accordingly. The more you use it, the smarter and more personalized it becomes.",
  },
  {
    q: "Is MindFlow truly privacy-first?",
    a: "Privacy is our founding principle, not a feature. We use on-device processing wherever possible, end-to-end encryption for synced data, and a zero-data-selling policy backed into our company charter. We're pursuing SOC 2 Type II certification.",
  },
  {
    q: "When is the full launch?",
    a: "We're targeting a public launch in Q2 2025. Early access beta is rolling out to waitlist members in waves starting Q1 2025. Join the waitlist to be in the first cohort and help shape the product.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Everything you need{" "}
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              to know
            </span>
          </h2>
          <p className="text-lg text-slate-400">Still have questions? We have answers.</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass rounded-2xl border border-white/10 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.03] transition-colors duration-200"
              >
                <span className="text-sm font-semibold text-white pr-4">{faq.q}</span>
                <span className="flex-shrink-0 text-blue-400">
                  {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
