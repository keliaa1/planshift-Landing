"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger when scrolled more than 80px
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // The navbar is "compact" if we are scrolled down AND not hovering over it.
  const isCompact = isScrolled && !isHovered;

  // Colors
  const navBg = isScrolled ? "#2A2522" : "rgba(42, 37, 34, 0)";
  const navText = isScrolled ? "#E5E5E5" : "#2A2522";

  // Specific logo styling
  // If scrolled (dark bg) -> light logo.
  // If not scrolled (transparent bg) -> dark logo (primary).
  // Note: The original code had specific logic for logoBg.
  const logoBg = isScrolled ? "bg-[#E5E5E5]" : "bg-primary";
  const borderCol = isScrolled ? "border-[#E5E5E5]" : "border-primary";

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none">
      <motion.nav
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ width: "50%", y: 0, borderRadius: "2rem" }}
        animate={{
          backgroundColor: navBg,
          color: navText,
          marginTop: isCompact ? "1.5rem" : isScrolled ? "1rem" : "1.5rem",
          borderRadius: isCompact ? "9999px" : "1.5rem",
          paddingTop: isCompact ? "0.5rem" : "0.75rem",
          paddingBottom: isCompact ? "0.5rem" : "0.75rem",
          width: isCompact ? "auto" : "65%",
          paddingLeft: isCompact ? "1rem" : "1.5rem",
          paddingRight: isCompact ? "1rem" : "1.5rem",
        }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }} // Smooth cubic-bezier
        className="flex items-center justify-between overflow-hidden shadow-2xl backdrop-blur-md pointer-events-auto w-full max-w-[800px]"
        style={{ position: "relative" }}
      >
        <motion.div layout className="flex items-center gap-2 flex-shrink-0">
          <div className={`w-5 h-7 clip-path-logo transition-colors duration-500 ${logoBg}`}></div>
          <motion.span
            layout
            className="text-xl font-semibold tracking-wider font-sans whitespace-nowrap overflow-hidden"
            initial={{ opacity: 1, width: "auto" }}
            animate={{ opacity: 1, width: "auto" }}
          >
            PlanShift
          </motion.span>
        </motion.div>

        <AnimatePresence mode="wait">
          {!isCompact && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-between flex-grow ml-12 overflow-hidden"
            >
              <div className="hidden lg:flex items-center gap-6 text-xs font-medium tracking-wide uppercase whitespace-nowrap">
                  <Link href="#services" className="hover:opacity-60 transition-opacity">Services</Link>
                  <Link href="#about" className="hover:opacity-60 transition-opacity">About us</Link>
                  <Link href="#homes" className="hover:opacity-60 transition-opacity">Homes</Link>
                  <Link href="#contact" className="hover:opacity-60 transition-opacity">Contact</Link>
              </div>

              <div className="hidden lg:flex items-center gap-4 ml-auto whitespace-nowrap">
                  <span className="text-xs font-semibold cursor-pointer">ENG</span>
                  <Link
                      href="#contact"
                      className={`text-xs font-semibold border-b pb-0.5 tracking-widest hover:opacity-60 transition-all ${borderCol}`}
                  >
                  CONTACT US
                  </Link>
              </div>

              {/* Mobile Hamburger */}
              <button
                className={`lg:hidden ml-auto p-2 ${isScrolled ? "text-[#E5E5E5]" : "text-[#2A2522]"}`}
                onClick={() => setIsMobileOpen(true)}
              >
                <div className="space-y-1.5 hover:opacity-70 transition-opacity">
                    <span className={`block w-6 h-0.5 ${isScrolled ? "bg-[#E5E5E5]" : "bg-[#2A2522]"}`}></span>
                    <span className={`block w-6 h-0.5 ${isScrolled ? "bg-[#E5E5E5]" : "bg-[#2A2522]"}`}></span>
                </div>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <style jsx>{`
          .clip-path-logo {
            clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);
          }
        `}</style>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-[#1a1a1a] flex flex-col items-center justify-center pointer-events-auto"
          >
            <button
                onClick={() => setIsMobileOpen(false)}
                className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-4"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6L18 18" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>

            <div className="flex flex-col items-center gap-8 text-white">
                 <Link href="#services" onClick={() => setIsMobileOpen(false)} className="text-3xl font-serif hover:opacity-60 transition-opacity">Services</Link>
                 <Link href="#about" onClick={() => setIsMobileOpen(false)} className="text-3xl font-serif hover:opacity-60 transition-opacity">About us</Link>
                 <Link href="#homes" onClick={() => setIsMobileOpen(false)} className="text-3xl font-serif hover:opacity-60 transition-opacity">Homes</Link>
                 <Link href="#contact" onClick={() => setIsMobileOpen(false)} className="text-3xl font-serif hover:opacity-60 transition-opacity">Contact</Link>

                 <div className="w-12 h-[1px] bg-white/20 my-4"></div>

                 <Link href="#contact" onClick={() => setIsMobileOpen(false)} className="text-sm font-bold tracking-widest uppercase border-b border-white pb-1">Contact Us</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
