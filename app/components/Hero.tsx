"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center px-12 pt-20 overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Land.png"
          alt="Mountain background"
          fill
          className="object-cover brightness-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/10"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <h1 className="text-[120px] leading-[0.9] font-serif uppercase tracking-tight -ml-1">
            The<br />Perfect<br />Home<sup className="text-4xl top-[-2em]">®</sup>
          </h1>
          <p className="text-xl font-medium italic opacity-70 tracking-widest pl-2">
            / We craft custom homes /
          </p>
          <div className="mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-14 py-4 rounded-full text-sm font-bold tracking-widest uppercase shadow-xl hover:bg-stone-800 transition-colors"
            >
              Start
            </motion.button>
          </div>
        </motion.div>

        {/* Right Content - Cards and Image */}
        <div className="relative h-[700px] flex items-center justify-end">
          {/* Main White Card/Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative bg-white/90 backdrop-blur-md rounded-[50px] p-8 w-[60%] h-[40%] shadow-2xl flex flex-col z-0 self-start mt-10"
          >
            <div className="flex flex-col gap-6">
              <div className="flex gap-2">
                <span className="px-4 py-1.5 border border-stone-200 rounded-full text-[10px] font-semibold uppercase tracking-widest text-stone-400">Inerior</span>
                <span className="px-4 py-1.5 border border-stone-200 rounded-full text-[10px] font-semibold uppercase tracking-widest text-stone-400">Design</span>
                <span className="px-4 py-1.5 bg-stone-800 text-white rounded-full text-[10px] font-semibold uppercase tracking-widest">3D</span>
              </div>

              <div className="max-w-[260px]">
                <h2 className="text-3xl font-sans font-normal leading-tight tracking-tight text-stone-800">
                  Unique design & <br />ergonomics
                </h2>
                <p className="mt-2 text-sm text-stone-500 font-medium opacity-80">
                  From blueprints to renders.
                </p>
              </div>
            </div>
          </motion.div>

          {/* House Image - Overlapping */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="absolute bottom-0 right-[-10%] w-[100%] h-[90%] z-10 pointer-events-none mr-30"
          >
              <Image
                  src="/house3.png"
                  alt="House Design"
                  fill
                  className="object-contain"
              />
              {/* Visual Anchors in image */}
              <div className="absolute top-[30%] left-[45%] w-3 h-3 bg-white/80 rounded-full shadow-lg border border-white pointer-events-auto cursor-help"></div>
              <div className="absolute top-[50%] left-[62%] w-4 h-4 bg-white/40 rounded-full flex items-center justify-center shadow-lg border border-white/50 pointer-events-auto cursor-help">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div className="absolute bottom-[25%] right-[25%] w-3 h-3 bg-white/80 rounded-full shadow-lg border border-white pointer-events-auto cursor-help"></div>
          </motion.div>

          {/* Roomtour Floating Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute top-20 right-[5%] bg-[#E5E2DF] p-4 rounded-[30px] shadow-2xl w-[170px] border border-white/30 z-20"
          >
             <div className="flex items-center justify-end mb-3 px-1">
                  <span className="text-[8px] font-black tracking-[0.2em] uppercase text-stone-800 opacity-60">Roomtour</span>
             </div>

             {/* Play Button - Floating on the left edge */}
             <motion.div
                whileHover={{ scale: 1.1 }}
                className="absolute left-[-20px] top-[40%] w-9 h-9 rounded-full bg-stone-500/60 flex items-center justify-center text-white cursor-pointer hover:bg-stone-500/80 transition-colors backdrop-blur-sm z-30 shadow-lg border border-white/20"
             >
                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L9 6L1 11V1Z" fill="white" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
             </motion.div>

             <div className="relative h-28 rounded-[20px] overflow-hidden">
                  <Image
                      src="/bed.jpg"
                      alt="Room Tour"
                      fill
                      className="object-cover"
                  />
             </div>
             {/* Connecting line to anchor */}
             <svg className="absolute top-full right-1/2 w-32 h-32 pointer-events-none -z-10" style={{ transform: 'translate(40%, -10%)' }}>
                <path d="M10 0 L100 80" stroke="#A8A29E" strokeWidth="1" fill="none" opacity="0.6" />
             </svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
