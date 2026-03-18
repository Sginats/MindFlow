import { Zap } from "lucide-react";

const footerLinks = {
  Product: ["Features", "How It Works", "Dashboard", "Pricing"],
  Company: ["About", "Blog", "Press", "Careers"],
  Legal: ["Privacy Policy", "Terms of Service", "Data Usage"],
  Connect: ["Twitter", "LinkedIn", "GitHub", "Contact"],
};

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                MindFlow
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Technology that gives attention back.
            </p>
            <div>
              <p className="text-xs text-slate-500 mb-2">Newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500/50 transition-colors"
                />
                <button className="px-3 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 text-white text-xs font-semibold whitespace-nowrap hover:from-blue-400 hover:to-violet-400 transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Navigation columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-sm font-semibold text-white mb-4">{section}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © 2025 MindFlow. Built for the overstimulated internet age.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Privacy</a>
            <a href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
