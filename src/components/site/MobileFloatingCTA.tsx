import { Phone, FileText } from "lucide-react";

export function MobileFloatingCTA() {
  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-slate-950/95 backdrop-blur-lg border-t border-slate-800 p-2.5 shadow-[0_-8px_30px_rgba(0,0,0,0.5)]"
    >
      <div className="flex items-center gap-2 max-w-lg mx-auto">
        <button
          type="button"
          className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-slate-900 border border-slate-700 py-3 px-3 text-center text-xs font-bold text-white shadow-sm active:scale-[0.98] transition-all cursor-pointer"
          aria-label="Call Handyman At Home 24/7"
        >
          <Phone className="h-4 w-4 text-[#60a5fa] shrink-0" />
          <span className="truncate">Call (214) 814-1444</span>
        </button>

        <button
          type="button"
          className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-[#0000b9] hover:bg-[#1526d4] py-3 px-3 text-center text-xs font-bold text-white shadow-glow active:scale-[0.98] transition-all cursor-pointer"
          aria-label="Request a Free Estimate"
        >
          <FileText className="h-4 w-4 shrink-0" />
          <span className="truncate">Get A Quote</span>
        </button>
      </div>
    </aside>
  );
}
