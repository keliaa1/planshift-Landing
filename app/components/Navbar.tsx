"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger when scrolled more than 50px or roughly when Hero ends
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = isScrolled
    ? "bg-[#2A2522] text-[#E5E5E5] py-4 shadow-2xl"
    : "bg-transparent text-[#2A2522] py-8";

  const logoBg = isScrolled ? "bg-[#E5E5E5]" : "bg-primary";
  const borderCol = isScrolled ? "border-[#E5E5E5]" : "border-primary";

  return (
    <motion.nav
      animate={{
        backgroundColor: isScrolled ? "#2A2522" : "rgba(42, 37, 34, 0)",
        color: isScrolled ? "#E5E5E5" : "#2A2522",
        paddingTop: isScrolled ? "1.5rem" : "2rem",
        paddingBottom: isScrolled ? "1.5rem" : "2rem",
      }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 transition-all"
    >
      <div className="flex items-center gap-2">
        <div className={`w-6 h-8 clip-path-logo transition-colors duration-500 ${logoBg}`}></div>
        <span className="text-2xl font-semibold tracking-wider font-sans">PlanShift</span>
      </div>

      <div className="hidden md:flex items-center gap-12 text-sm font-medium tracking-wide uppercase">
        <Link href="#services" className="hover:opacity-60 transition-opacity">Services</Link>
        <Link href="#about" className="hover:opacity-60 transition-opacity">About us</Link>
        <Link href="#homes" className="hover:opacity-60 transition-opacity">Homes</Link>
        <Link href="#contact" className="hover:opacity-60 transition-opacity">Contact</Link>
      </div>

      <div className="flex items-center gap-8">
        <span className="text-sm font-semibold cursor-pointer">ENG</span>
        <Link
            href="#contact"
            className={`text-sm font-semibold border-b pb-0.5 tracking-widest hover:opacity-60 transition-all ${borderCol}`}
        >
          CONTACT US
        </Link>
      </div>
      <style jsx>{`
        .clip-path-logo {
          clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);
        }
      `}</style>
    </motion.nav>
  );
}
