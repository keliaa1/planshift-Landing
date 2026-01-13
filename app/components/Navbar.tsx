"use client"
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-8 bg-transparent">
      <div className="flex items-center gap-2">
        <div className="w-6 h-8 bg-primary clip-path-logo"></div>
        <span className="text-2xl font-semibold tracking-wider font-sans">PlanShift</span>
      </div>

      <div className="hidden md:flex items-center gap-12 text-sm font-medium tracking-wide uppercase">
        <Link href="#" className="hover:opacity-60 transition-opacity">About</Link>
        <Link href="#" className="hover:opacity-60 transition-opacity">Homes</Link>
        <Link href="#" className="hover:opacity-60 transition-opacity">Testimonials</Link>
        <Link href="#" className="hover:opacity-60 transition-opacity">Contact</Link>
      </div>

      <div className="flex items-center gap-8">
        <span className="text-sm font-semibold cursor-pointer">ENG</span>
        <Link href="#" className="text-sm font-semibold border-b border-primary pb-0.5 tracking-widest hover:opacity-60 transition-opacity">
          CONTACT US
        </Link>
      </div>
      <style jsx>{`
        .clip-path-logo {
          clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);
        }
      `}</style>
    </nav>
  );
}
