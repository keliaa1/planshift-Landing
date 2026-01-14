"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "loading">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  return (
    <section className="py-32 px-12 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <span className="text-sm font-medium uppercase tracking-[0.4em] text-stone-400 mb-6 block">Stay Connected</span>
          <h2 className="text-6xl font-serif text-stone-800 leading-tight mb-8">
            Ready to make your <br />plans a reality?
          </h2>
          <p className="text-stone-500 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Subscribe to our newsletter for the latest 3D spatial updates, architectural insights, and exclusive virtual tours.
          </p>

          <form onSubmit={handleSubmit} className="relative max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
                <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-8 py-5 rounded-full border border-stone-200 focus:outline-none focus:border-stone-800 transition-colors text-stone-800 placeholder:text-stone-300 shadow-sm"
                />
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className="px-10 py-5 bg-stone-800 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-stone-700 transition-all shadow-xl disabled:bg-stone-400"
                >
                    {status === "loading" ? "Subscribing..." : status === "success" ? "Subscribed!" : "Subscribe"}
                </motion.button>
            </div>

            {status === "success" && (
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 text-emerald-600 text-sm font-medium"
                >
                    Welcome to the PlanShift community! Check your inbox soon.
                </motion.p>
            )}
          </form>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-rose-50 rounded-full blur-3xl -z-10 opacity-60"></div>
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-stone-50 rounded-full blur-3xl -z-10 opacity-80"></div>
    </section>
  );
}
