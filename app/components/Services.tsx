"use client";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Planning",
      description: "Comprehensive blueprints and ergonomic spatial planning for your dream home.",
      headerColor: "#2A2522", // Blue-300
      cardPos: { top: "30px", left: "330px" },
      dotPos: { top: "270px", left: "420px" }
    },
    {
      title: "Design",
      description: "Curated material selection and atmospheric interior design tailored to you.",
      headerColor: "#E5E5E5", // Pink-300
      cardPos: { top: "280px", left: "540px" },
      dotPos: { top: "510px", left: "630px" }
    },
    {
      title: "Visualization",
      description: "Photorealistic 3D rendering and immersive virtual reality walkthroughs.",
      headerColor: "#2A2522", // Amber-100
      cardPos: { top: "580px", left: "680px" },
      dotPos: { top: "680px", left: "795px" }
    },
    {
      title: "Construction",
      description: "Master-level precision in implementation and end-to-end project management.",
      headerColor: "#E5E5E5", // Purple-300
      cardPos: { top: "780px", left: "420px" },
      dotPos: { top: "860px", left: "520px" }
    }
  ];

  return (
    <section id="services" className="py-40 px-12 bg-white relative overflow-hidden">
      {/* Background split vibe */}
      <div className="absolute inset-0 flex -z-20 opacity-10 pointer-events-none">
        <div className="flex-1 bg-rose-400"></div>
        <div className="flex-1 bg-amber-400"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-16 relative z-10"
        >
          <span className="text-sm font-medium uppercase tracking-[0.4em] text-stone-400 mb-6 px-1 border-l-2 border-stone-200">Our Workflow</span>
          <h2 className="text-7xl font-serif text-stone-800 leading-tight text-center">
            How we bring your <br />dreams into reality
          </h2>
        </motion.div>

        <div className="relative w-full max-w-[1100px] h-[600px] sm:h-[800px] lg:h-[1000px] mt-10 scale-[0.7] sm:scale-[0.8] md:scale-90 lg:scale-95 xl:scale-100 origin-top mx-auto">
            {/* Background Circle */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-white shadow-[0_0_100px_rgba(0,0,0,0.03)] border border-stone-50 -z-10"
            ></motion.div>

            {/* SVG Path */}
            <svg width="100%" height="100%" viewBox="0 0 1100 1000" className="absolute inset-0 pointer-events-none z-0">
                <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    d="M 420 270 Q 420 400 630 510 T 795 680 T 520 860"
                    stroke="#171717"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    opacity="0.8"
                />
            </svg>

            {/* Service Cards and Nodes */}
            <div className="absolute inset-0 z-10">
                {services.map((s, i) => (
                    <div key={i}>
                        {/* Dot on Path */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + i * 0.3, type: "spring" }}
                            className="absolute w-4 h-4 rounded-full shadow-lg border-2 border-white z-20"
                            style={{
                                top: s.dotPos.top,
                                left: s.dotPos.left,
                                transform: 'translate(-50%, -50%)'
                            }}
                        ></motion.div>

                        {/* Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1 + i * 0.3 }}
                            className="absolute bg-white rounded-3xl shadow-[0_30px_70px_rgba(0,0,0,0.08)] overflow-hidden w-[280px] border border-stone-100 transition-all hover:-translate-y-3 hover:shadow-[0_40px_80px_rgba(0,0,0,0.12)] cursor-default"
                            style={{
                                top: s.cardPos.top,
                                left: s.cardPos.left,
                                transform: 'translateX(-50%)'
                            }}
                        >
                            <div className="h-16 flex items-center justify-center relative" style={{ backgroundColor: s.headerColor }}>
                                <motion.div
                                  animate={{ scale: [1, 1.2, 1] }}
                                  transition={{ repeat: Infinity, duration: 2 }}
                                  className="w-3.5 h-3.5 bg-white rounded-[4px] shadow-sm"
                                ></motion.div>
                            </div>
                            <div className="p-10 text-center">
                                <h4 className="text-sm font-bold uppercase tracking-widest text-stone-800 mb-4">{s.title}</h4>
                                <p className="text-[11px] text-stone-500 font-medium leading-relaxed italic">{s.description}</p>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
