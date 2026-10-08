"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 animate-[slowZoom_20s_ease-out_infinite_alternate] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=2400&q=90')",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1F1611]/75 via-[#1F1611]/55 to-[#1F1611]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F1611]/50 via-transparent to-[#1F1611]/40" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-[#D4A24C]"
        >
          Authentic Afghani · Afghan Darbar
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="max-w-5xl font-serif text-[clamp(3rem,8vw,7rem)] font-medium leading-[0.95] tracking-tight text-[#FDFBF7]"
        >
          The Feast
          <span className="block italic text-[#D4A24C]">Is Here.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 max-w-xl text-base text-[#FDFBF7]/85 sm:text-lg"
        >
          Slow-roasted Mandi. Infused with saffron.
          <br />
          Made for sharing. Made for family.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#menu"
            className="inline-flex items-center justify-center rounded-full bg-[#B04A2F] px-8 py-4 text-sm font-medium tracking-wide text-[#FDFBF7] shadow-lg shadow-[#B04A2F]/30 transition-all duration-300 hover:bg-[#933D24] hover:scale-[1.03]"
          >
            Explore Menu
          </a>
          <a
            href="#location"
            className="inline-flex items-center justify-center rounded-full border border-[#D4A24C]/50 px-8 py-4 text-sm font-medium tracking-wide text-[#FDFBF7] transition-all duration-300 hover:border-[#D4A24C] hover:bg-[#D4A24C]/10"
          >
            Visit Us
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="h-5 w-5 animate-bounce text-[#D4A24C]" />
      </motion.div>
    </section>
  );
}