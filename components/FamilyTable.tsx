"use client";

import { motion } from "framer-motion";

export default function FamilyTable() {
  return (
    <section className="relative overflow-hidden bg-[#F5EFE6] py-20 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#B04A2F]">
              Made for Sharing
            </p>
            <h2 className="font-serif text-[clamp(2.25rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-tight text-[#1F1611]">
              One Table.
              <br />
              Many Conversations.
              <br />
              <span className="italic text-[#B04A2F]">One Unforgettable Feast.</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#1F1611]/70 sm:text-lg">
              Bring your people. We&apos;ll take care of the feast. Our Mandi and
              platters are built for the whole table — cousins, grandparents,
              friends, and everyone in between.
            </p>
            <a
              href="#menu"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-[#B04A2F] px-8 py-4 text-sm font-medium tracking-wide text-[#FDFBF7] shadow-lg shadow-[#B04A2F]/20 transition-all duration-300 hover:bg-[#933D24]"
            >
              Explore the Feast
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-[#1F1611]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F1611]/60 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}