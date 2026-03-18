"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2, CheckCircle } from "lucide-react";

export default function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [challenge, setChallenge] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; role?: string }>({});

  const validate = () => {
    const newErrors: { email?: string; role?: string } = {};
    if (!email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Please enter a valid email";
    if (!role) newErrors.role = "Please select your role";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSuccess(true);
  };

  return (
    <section id="waitlist" className="py-24 bg-[#0d0d1a]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            Join the Waitlist
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Be the first to{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              reclaim your focus
            </span>
          </h2>
          <p className="text-lg text-slate-400">
            Join the waitlist and get exclusive early access, founder pricing, and a direct line to shape the product.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass rounded-3xl p-8 border border-white/10"
        >
          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">You&apos;re on the list! 🎉</h3>
              <p className="text-slate-400">
                We&apos;ll reach out as soon as early access opens. You&apos;re one of the first — we&apos;ll make it worth it.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  Email address <span className="text-rose-400">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-all duration-200 text-sm"
                />
                {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  Your role <span className="text-rose-400">*</span>
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-all duration-200 text-sm appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#0d0d1a]">Select your role...</option>
                  <option value="student" className="bg-[#0d0d1a]">Student</option>
                  <option value="remote-worker" className="bg-[#0d0d1a]">Remote Worker</option>
                  <option value="developer" className="bg-[#0d0d1a]">Developer</option>
                  <option value="creator" className="bg-[#0d0d1a]">Creator</option>
                  <option value="founder" className="bg-[#0d0d1a]">Startup Founder</option>
                  <option value="other" className="bg-[#0d0d1a]">Other</option>
                </select>
                {errors.role && <p className="text-xs text-rose-400 mt-1">{errors.role}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  What&apos;s your biggest focus challenge?{" "}
                  <span className="text-slate-500 font-normal">(optional)</span>
                </label>
                <textarea
                  value={challenge}
                  onChange={(e) => setChallenge(e.target.value.slice(0, 280))}
                  rows={3}
                  placeholder="Tell us what's stealing your attention..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-all duration-200 text-sm resize-none"
                />
                <div className="text-xs text-slate-500 text-right mt-1">{challenge.length}/280</div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-400 hover:to-violet-400 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-blue-500/25"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Joining...
                  </>
                ) : (
                  <>
                    Join the Waitlist
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-center text-xs text-slate-500">
                🔒 No spam. Cancel anytime. Your data stays private.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
