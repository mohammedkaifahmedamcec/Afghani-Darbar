"use client";

import { motion } from "framer-motion";

export default function Story() {
  return (
    <section id="story" className="relative bg-[#1F1611] py-20 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-[#2A221E]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=85')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F1611]/70 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#D4A24C]">
              Our Story
            </p>
            <h2 className="font-serif text-[clamp(2.25rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-tight text-[#FDFBF7]">
              From the Heart of Afghanistan
              <span className="block italic text-[#D4A24C]">to Your Table.</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#FDFBF7]/75 sm:text-lg">
              Every Mandi we serve carries the warmth of Afghan hospitality —
              slow-cooked, generously spiced, and made for gathering. It&apos;s not
              just a meal. It&apos;s a tradition of sharing.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}