import { X } from "lucide-react";
import MobileNav from "./mobile-nav";
import { Button } from "./ui/button";
import { SheetContent } from "./ui/sheet";

export default function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <SheetContent
      side="right"
      className="bg-slate-900/95 backdrop-blur-2xl border-white/20 p-0 w-full sm:w-80"
    >
      {/* Mobile Menu Glass Container */}
      <div className="h-full p-6">
        <div className="bg-gradient-to-br from-white/[0.08] via-white/[0.12] to-white/[0.08] backdrop-blur-xl border border-white/20 rounded-3xl p-6 h-full shadow-2xl relative overflow-hidden">
          {/* Gold gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-yellow-500/10 to-amber-600/5 rounded-3xl pointer-events-none" />

          {/* Close button */}
          <div className="flex justify-end mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={onClose}
              className="bg-white/[0.08] backdrop-blur-xl border-white/20 text-white hover:bg-white/[0.15] hover:border-amber-400/30 transition-all duration-300 relative"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Navigation */}
          <MobileNav onClose={onClose} />
        </div>
      </div>
    </SheetContent>
  );
}
