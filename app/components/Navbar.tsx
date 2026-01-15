"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
          marginTop: isCompact ? "2rem" : isScrolled ? "1.5rem" : "2rem",
          borderRadius: isCompact ? "9999px" : "2rem",
          paddingTop: isCompact ? "0.75rem" : "1rem", // Increased padding for comfort
          paddingBottom: isCompact ? "0.75rem" : "1rem",
          width: isCompact ? "auto" : "50%",
          paddingLeft: isCompact ? "1.5rem" : "2.5rem", // More space for logo+text
          paddingRight: isCompact ? "1.5rem" : "2.5rem",
        }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }} // Smooth cubic-bezier
        className="flex items-center justify-between overflow-hidden shadow-2xl backdrop-blur-md pointer-events-auto"
        style={{ position: "relative" }}
      >
        <motion.div layout className="flex items-center gap-2 flex-shrink-0">
          <div className={`w-6 h-8 clip-path-logo transition-colors duration-500 ${logoBg}`}></div>
          <motion.span
            layout
            className="text-2xl font-semibold tracking-wider font-sans whitespace-nowrap overflow-hidden"
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
              <div className="hidden md:flex items-center gap-12 text-sm font-medium tracking-wide uppercase whitespace-nowrap">
                  <Link href="#services" className="hover:opacity-60 transition-opacity">Services</Link>
                  <Link href="#about" className="hover:opacity-60 transition-opacity">About us</Link>
                  <Link href="#homes" className="hover:opacity-60 transition-opacity">Homes</Link>
                  <Link href="#contact" className="hover:opacity-60 transition-opacity">Contact</Link>
              </div>

              <div className="flex items-center gap-8 ml-auto whitespace-nowrap">
                  <span className="text-sm font-semibold cursor-pointer">ENG</span>
                  <Link
                      href="#contact"
                      className={`text-sm font-semibold border-b pb-0.5 tracking-widest hover:opacity-60 transition-all ${borderCol}`}
                  >
                  CONTACT US
                  </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <style jsx>{`
          .clip-path-logo {
            clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);
          }
        `}</style>
      </motion.nav>
    </div>
  );
}
