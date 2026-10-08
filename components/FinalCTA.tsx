"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#1F1611] py-24 sm:py-32">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=2000&q=80')",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1F1611] via-[#1F1611]/80 to-[#1F1611]" />

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[#B89B72]">
            Bring the Family
          </p>
          <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.05] tracking-tight text-[#FDFBF7]">
            Your Table
            <span className="block italic text-[#B89B72]">Is Waiting.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-[#FDFBF7]/70 sm:text-lg">
            Come hungry. Leave with memories.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-full bg-[#C05A3E] px-7 py-3.5 text-sm font-medium tracking-wide text-[#FDFBF7] transition-all duration-300 hover:bg-[#A8492F] hover:scale-[1.02]"
            >
              Explore the Menu
            </a>
            <a
              href="#location"
              className="inline-flex items-center justify-center rounded-full border border-[#B89B72]/40 px-7 py-3.5 text-sm font-medium tracking-wide text-[#FDFBF7] transition-all duration-300 hover:border-[#B89B72] hover:bg-[#B89B72]/10"
            >
              Plan Your Visit
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}