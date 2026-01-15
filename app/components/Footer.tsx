"use client"
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-stone-900 text-stone-300 py-8 md:py-10 lg:py-12 px-6 md:px-12 lg:px-16 xl:px-20 w-full max-w-[1920px] mx-auto rounded-t-[30px] md:rounded-t-[40px] relative overflow-hidden">
      {/* Decorative Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-serif font-black text-white/[0.015] pointer-events-none whitespace-nowrap select-none">
        PLAN SHIFT
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8 md:mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white leading-tight mb-4 md:mb-6">
              Ready to create <br />your perfect home?
            </h2>
            <p className="text-sm md:text-base text-stone-400 mb-6 md:mb-8 max-w-md leading-relaxed">
              Let's discuss your vision and turn your blueprints into a reality that transcends expectations.
            </p>
            <div className="flex flex-col gap-3 md:gap-4">
              <a href="mailto:4ward@gmail.com" className="text-xl md:text-2xl font-serif text-white hover:opacity-60 transition-opacity">4ward@gmail.com</a>
              <a href="tel:+1234567890" className="text-xl md:text-2xl font-serif text-white hover:opacity-60 transition-opacity">+1 (234) 567-890</a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:gap-10">
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6 px-1 border-l-2 border-stone-700">Explore</h4>
              <ul className="flex flex-col gap-4 text-sm">
                <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="#homes" className="hover:text-white transition-colors">Homes</Link></li>
                <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Cases</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6 px-1 border-l-2 border-stone-700">Follow</h4>
              <ul className="flex flex-col gap-4 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pinterest</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Behance</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <div className="flex items-center gap-4">
            <div className="w-8 h-10 bg-white clip-path-logo"></div>
            <span className="text-2xl font-semibold tracking-wider font-sans text-white">PlanShift</span>
          </div>

          <p className="text-xs font-medium text-stone-500">
            © 2026 4ward . ALL RIGHTS RESERVED.
          </p>

          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .clip-path-logo {
          clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);
        }
      `}</style>
    </footer>
  );
}
