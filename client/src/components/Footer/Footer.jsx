export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8 px-6 text-slate-400">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Left Side - Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div>
              <p className="font-semibold text-white text-lg tracking-tight">AnalytIQ</p>
              {/* <p className="text-x text-slate-500">AI Proposal & Invoice Generator</p> */}
            </div>
          </div>

          {/* Center - Copyright */}
          <div className="text-center">
            <p className="text-sm">
              © {new Date().getFullYear()} AnalytIQ AI Solutions. 
              <span className="text-slate-500"> All rights reserved.</span>
            </p>
          </div>

          {/* Right Side - Links */}
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>

        </div>
      </div>
    </footer>
  );
}