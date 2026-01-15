"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Homes() {
  const homes = [
    {
      name: "The Cliffside Manor",
      location: "Kigali, Rwanda",
      image: "/image.png",
      tags: ["Minimalist", "Glass", "Stone"],
      status: "Active",
      link: "https://planshift.innov.rw"
    },
    {
      name: "Urban Sanctuary",
      location: "Kigali, Rwanda",
      image: "/house.jpg",
      tags: ["Modern", "Wood", "2-story"],
      status: "Coming Soon",
      link: "#"
    },
    {
      name: "Desert Oasis",
      location: "Kigali, Rwanda",
      image: "/grass.jpg",
      tags: ["Outdoor", "Eco", "Gathering"],
      status: "Coming Soon",
      link: "#"
    }
  ];

  return (
    <section id="homes" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 xl:px-32 bg-[#f9f7f5] w-full max-w-[1920px] mx-auto">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-stone-400 mb-6 block">Featured Spaces</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-stone-800 leading-tight">
            Explore dimensions that <br />breathe and inspire
          </h2>
        </motion.div>

        <div className="flex flex-col gap-16">
          {homes.map((home, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={`group flex flex-col md:flex-row gap-10 items-center bg-white p-8 rounded-[60px] shadow-sm hover:shadow-xl transition-all duration-500 ${home.status === 'Active' ? 'cursor-pointer' : 'cursor-not-allowed grayscale'}`}
              onClick={() => home.status === 'Active' && window.open(home.link, '_blank')}
            >
              <div className="relative w-full md:w-1/2 aspect-[16/9] rounded-[40px] overflow-hidden shadow-lg">
                <Image
                  src={home.image}
                  alt={home.name}
                  fill
                  className={`object-cover ${home.status === 'Active' ? 'group-hover:scale-105' : ''} transition-transform duration-1000`}
                />

                {home.status === 'Coming Soon' && (
                  <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-[4px] flex items-center justify-center z-10">
                    <span className="px-8 py-3 bg-white/10 border border-white/20 backdrop-blur-xl text-white text-[12px] font-black uppercase tracking-[0.4em] rounded-full">
                      Coming Soon
                    </span>
                  </div>
                )}

                <div className="absolute top-6 left-6 flex gap-2 z-20">
                  {home.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-white/30 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-full border border-white/30">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="w-full md:w-1/2 px-4 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary opacity-50">{home.location}</span>
                  <div className="h-[1px] w-12 bg-stone-200"></div>
                </div>
                <h3 className="text-4xl font-serif text-stone-800 mb-6 group-hover:translate-x-2 transition-transform duration-500">
                  {home.name}
                  {home.status === 'Active' && <span className="ml-4 text-primary text-2xl font-sans inline-block group-hover:translate-x-2 transition-transform opacity-60">→</span>}
                </h3>
                <p className="text-stone-500 leading-relaxed mb-8 max-w-md">
                  {home.status === 'Active'
                    ? "Experience this architectural marvel in full 3D. Explore every corner and understand the spatial harmony before you even step inside."
                    : "Work in progress. We are currently finalizing the 3D spatial textures and lighting for this immersive experience."}
                </p>
                {home.status === 'Active' && (
                  <button className="self-start text-xs font-bold uppercase tracking-[0.2em] border-b border-stone-800 pb-1 hover:opacity-60 transition-opacity">
                    Enter Experience
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://plan-shift.vercel.app', '_blank')}
            className="px-12 py-5 bg-stone-800 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-stone-700 transition-all shadow-xl"
          >
            View Full Gallery
          </motion.button>
        </div>
      </div>
    </section>
  );
}
