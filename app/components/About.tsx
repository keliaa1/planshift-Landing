"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full lg:w-1/2 aspect-[4/5]"
        >
          <div className="absolute inset-0 bg-stone-100 rounded-[60px] translate-x-6 translate-y-6 -z-10"></div>
          <Image
            src="/house-plan.jpg"
            alt="Inspired by nature"
            fill
            className="object-cover rounded-[60px]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute -bottom-10 -right-10 bg-primary text-white p-12 rounded-[40px] shadow-2xl max-w-xs z-10"
          >
            <h4 className="text-3xl font-serif mb-4 leading-tight text-white">Inspired by the elements</h4>
            <p className="text-sm opacity-80 leading-relaxed text-white">
              We draw our palette from the earth and our structure from the mountains, creating homes that resonate with their surroundings.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex flex-col gap-10"
        >
          <div>
            <span className="text-sm font-medium uppercase tracking-[0.3em] text-stone-400 mb-6 block">About Us</span>
            <h2 className="text-6xl font-serif text-stone-800 leading-tight mb-8">
              PlanShift: <br />From drawings to dimensions
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed font-medium">
             PlanShift brings spaces to life in 3D — right in your browser. From turning 2D house plans into interactive 3D models to exploring hotels, museums, gardens, and tourist sites before visiting or booking, PlanShift makes visualization simple and accessible. Built with Blender and Three.js, it lets anyone explore real spaces with no VR, no downloads, and no guesswork — just clear, immersive experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 border-t border-stone-100 pt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-4xl font-serif text-stone-800 block mb-2">120+</span>
              <span className="text-xs font-bold uppercase tracking-widest text-stone-400">Homes Built</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <span className="text-4xl font-serif text-stone-800 block mb-2">15</span>
              <span className="text-xs font-bold uppercase tracking-widest text-stone-400">Awards Won</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <button className="px-8 py-4 border border-stone-800 text-stone-800 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-stone-800 hover:text-white transition-all">
              Learn Our Philosophy
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
