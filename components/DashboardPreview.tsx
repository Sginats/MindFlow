"use client";

import { motion } from "framer-motion";

const heatmapData = Array.from({ length: 7 }, (_, day) =>
  Array.from({ length: 24 }, (_, hour) => {
    const val = Math.random();
    if (hour < 7 || hour > 22) return 0.05;
    if (hour >= 9 && hour <= 11) return 0.2 + val * 0.2;
    if (hour >= 14 && hour <= 16) return 0.5 + val * 0.4;
    if (hour >= 20 && hour <= 22) return 0.4 + val * 0.3;
    return 0.1 + val * 0.2;
  })
);

const distractions = [
  { name: "YouTube", pct: 34, color: "bg-rose-500" },
  { name: "Slack", pct: 28, color: "bg-violet-500" },
  { name: "Twitter", pct: 21, color: "bg-blue-500" },
  { name: "Other", pct: 17, color: "bg-slate-500" },
];

const energyPoints = [30, 45, 65, 80, 75, 60, 55, 70, 85, 80, 65, 50, 40, 35, 45, 60, 70, 65, 50, 40, 35, 30, 25, 20];

export default function DashboardPreview() {
  const w = 400, h = 80;
  const pts = energyPoints.map((v, i) => `${(i / (energyPoints.length - 1)) * w},${h - (v / 100) * h}`).join(" ");

  return (
    <section id="dashboard" className="py-24 bg-[#0d0d1a] relative">
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            Dashboard
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Your attention health{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              at a glance
            </span>
          </h2>
          <p className="text-lg text-slate-400">
            A beautiful, calming dashboard that shows you exactly where your attention is going — and how to protect it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-6 md:p-8 border border-white/10 max-w-5xl mx-auto"
        >
          {/* Top Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {/* Focus Score with SVG ring */}
            <div className="glass rounded-2xl p-4 border border-blue-500/20 flex flex-col items-center">
              <svg width="64" height="64" viewBox="0 0 64 64" className="mb-2">
                <circle cx="32" cy="32" r="26" fill="none" stroke="rgba(59,130,246,0.2)" strokeWidth="6" />
                <circle
                  cx="32" cy="32" r="26"
                  fill="none"
                  stroke="url(#focusGrad)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray={`${(87 / 100) * 163.4} 163.4`}
                  transform="rotate(-90 32 32)"
                />
                <defs>
                  <linearGradient id="focusGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
                <text x="32" y="36" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">87</text>
              </svg>
              <div className="text-xs text-slate-400 text-center">Focus Score</div>
              <div className="text-xs text-blue-400 font-medium">/100</div>
            </div>

            <div className="glass rounded-2xl p-4 border border-cyan-500/20">
              <div className="text-xs text-slate-400 mb-1">Time Reclaimed</div>
              <div className="text-3xl font-bold text-cyan-400">2.3h</div>
              <div className="text-xs text-emerald-400 mt-1">↑ 12% this week</div>
            </div>

            <div className="glass rounded-2xl p-4 border border-violet-500/20">
              <div className="text-xs text-slate-400 mb-1">Notifs Blocked</div>
              <div className="text-3xl font-bold text-violet-400">47</div>
              <div className="text-xs text-emerald-400 mt-1">Today</div>
            </div>

            <div className="glass rounded-2xl p-4 border border-emerald-500/20">
              <div className="text-xs text-slate-400 mb-1">Deep Work</div>
              <div className="text-3xl font-bold text-emerald-400">4</div>
              <div className="text-xs text-slate-400 mt-1">Sessions today</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Heatmap */}
            <div className="glass rounded-2xl p-4 border border-white/5">
              <div className="text-sm font-semibold text-white mb-3">Distraction Heatmap</div>
              <div className="text-xs text-slate-500 mb-2">This week · by hour</div>
              <div className="space-y-1">
                {heatmapData.map((row, day) => (
                  <div key={day} className="flex gap-0.5">
                    {row.map((val, hour) => (
                      <div
                        key={hour}
                        className="flex-1 h-3 rounded-sm"
                        style={{
                          background: val > 0.6
                            ? `rgba(239,68,68,${val})`
                            : val > 0.3
                            ? `rgba(59,130,246,${val * 1.5})`
                            : `rgba(59,130,246,${val * 0.8})`,
                        }}
                      />
                    ))}
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-xs text-slate-500 mt-2">
                <span>12am</span><span>6am</span><span>12pm</span><span>6pm</span><span>11pm</span>
              </div>
            </div>

            {/* Energy Chart */}
            <div className="glass rounded-2xl p-4 border border-white/5">
              <div className="text-sm font-semibold text-white mb-3">Energy Trend</div>
              <div className="text-xs text-slate-500 mb-2">Today · hourly</div>
              <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-20">
                <defs>
                  <linearGradient id="energyGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <polyline
                  points={pts}
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <polygon
                  points={`0,${h} ${pts} ${w},${h}`}
                  fill="url(#energyGrad)"
                />
              </svg>
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>12am</span><span>6am</span><span>12pm</span><span>6pm</span>
              </div>
            </div>
          </div>

          {/* Distraction Sources */}
          <div className="glass rounded-2xl p-4 border border-white/5 mb-6">
            <div className="text-sm font-semibold text-white mb-4">Top Distraction Sources</div>
            <div className="space-y-3">
              {distractions.map((d) => (
                <div key={d.name} className="flex items-center gap-3">
                  <div className="w-16 text-xs text-slate-400 text-right">{d.name}</div>
                  <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${d.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className={`h-full ${d.color} rounded-full`}
                    />
                  </div>
                  <div className="w-8 text-xs text-slate-400">{d.pct}%</div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Actions */}
          <div>
            <div className="text-sm font-semibold text-white mb-3">Recommended Actions</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { icon: "☕", title: "Take a break", desc: "You've been focused for 90 min", color: "border-amber-500/20" },
                { icon: "🔕", title: "Enable Focus Mode", desc: "3 meetings coming up — prep time", color: "border-blue-500/20" },
                { icon: "🌱", title: "Daily check-in", desc: "Rate your energy to improve AI accuracy", color: "border-emerald-500/20" },
              ].map((action) => (
                <div key={action.title} className={`glass rounded-xl p-3 border ${action.color}`}>
                  <div className="text-lg mb-1">{action.icon}</div>
                  <div className="text-xs font-semibold text-white">{action.title}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{action.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
