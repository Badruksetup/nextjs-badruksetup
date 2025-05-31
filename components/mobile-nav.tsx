import Link from "next/link";
import { navItems } from "./header";
import { Button } from "./ui/button";

export default function MobileNav({ onClose }: { onClose: () => void }) {
  return (
    <nav className="flex flex-col space-y-6 relative">
      {navItems.map((item, index) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-white hover:text-amber-300 transition-all duration-300 py-3 px-4 rounded-xl hover:bg-white/[0.08] hover:backdrop-blur-xl border border-transparent hover:border-white/10 group relative overflow-hidden"
          onClick={onClose}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {/* Gold hover gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
          <span className="relative z-10 font-medium">{item.label}</span>
          {/* Mobile underline effect */}
          <span className="absolute bottom-2 left-4 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 transition-all duration-300 group-hover:w-8 rounded-full" />
        </Link>
      ))}

      {/* Mobile CTA Button */}
      <Button className="mt-8 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-slate-900 font-semibold px-6 py-4 rounded-xl transition-all duration-300 hover:shadow-amber-500/30 hover:scale-[1.02] shadow-lg relative overflow-hidden">
        <span className="relative z-10">Kostenlos beraten lassen</span>
        {/* Button shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />
      </Button>
    </nav>
  );
}
