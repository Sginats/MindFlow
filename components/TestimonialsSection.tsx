"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "UX Designer",
    quote: "I reclaimed 2 hours every single day. I didn't realize how much I was unconsciously reaching for my phone until MindFlow showed me. Three weeks in and my focus is completely transformed.",
    initial: "S",
    color: "bg-blue-500",
    stars: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Software Engineer",
    quote: "The deep work sessions feature alone is worth everything. I went from 2 to 6 hours of real focused coding per day. My output has literally doubled.",
    initial: "M",
    color: "bg-violet-500",
    stars: 5,
  },
  {
    name: "Priya Patel",
    role: "PhD Student",
    quote: "I was spiraling into burnout during my dissertation. MindFlow's burnout risk detection flagged it 4 days before I hit a wall. That warning might have saved my degree.",
    initial: "P",
    color: "bg-emerald-500",
    stars: 5,
  },
  {
    name: "James Rivera",
    role: "Remote Team Lead",
    quote: "I rolled it out to my whole team and we've seen a 40% drop in after-hours Slack messages. People actually disconnect now. Our next sprint velocity went up 23%.",
    initial: "J",
    color: "bg-cyan-500",
    stars: 5,
  },
  {
    name: "Amara Osei",
    role: "Content Creator",
    quote: "I was spending 3 hours a day doom-scrolling for 'research'. MindFlow helped me see that pattern and now I create 3x more than I consume. Game changer.",
    initial: "A",
    color: "bg-amber-500",
    stars: 5,
  },
  {
    name: "David Kim",
    role: "Startup Founder",
    quote: "Running a startup means your attention is constantly pulled everywhere. MindFlow gave me back my strategic thinking time. I make better decisions and I'm less exhausted.",
    initial: "D",
    color: "bg-rose-500",
    stars: 5,
  },
];

const trustStats = [
  { value: "12,000+", label: "Beta Users" },
  { value: "4.8/5", label: "Rating" },
  { value: "2.3hrs", label: "Saved Daily" },
  { value: "67%", label: "Stress Reduced" },
];

export default function TestimonialsSection() {
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
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            What early users{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              are saying
            </span>
          </h2>
          <p className="text-lg text-slate-400">12,000+ beta users. Real results. No fluff.</p>
        </motion.div>

        {/* Trust stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-16">
          {trustStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass rounded-2xl p-4 text-center border border-white/10"
            >
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="glass rounded-2xl p-6 border border-white/10 break-inside-avoid mb-6 hover:bg-white/[0.07] transition-colors duration-200"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <span key={si} className="text-amber-400 text-sm">★</span>
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {t.initial}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured in */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-xs text-slate-500 uppercase tracking-widest mb-6">Featured In</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {["TechCrunch", "Product Hunt", "Hacker News", "Fast Company", "Forbes"].map((name) => (
              <div key={name} className="px-5 py-2 rounded-lg glass border border-white/10 text-slate-500 text-sm font-medium">
                {name}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
