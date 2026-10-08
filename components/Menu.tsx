"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { categories, menu } from "@/data/menu";
import MenuCard from "./MenuCard";

export default function Menu() {
  const [active, setActive] = useState(categories[0].id);
  const filtered = menu.filter((item) => item.category === active);

  return (
    <section id="menu" className="relative bg-[#1F1611] py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-10 text-center"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[#B89B72]">
            The Menu
          </p>
          <h2 className="font-serif text-[clamp(2.25rem,5vw,4.5rem)] font-medium leading-tight tracking-tight text-[#FDFBF7]">
            What&apos;s on the Table
          </h2>
        </motion.div>

        {/* Category Bar */}
        <div className="sticky top-16 z-30 -mx-5 mb-10 bg-[#1F1611]/95 px-5 py-4 backdrop-blur-md sm:-mx-8 sm:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`shrink-0 rounded-full border px-5 py-2.5 text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                  active === cat.id
                    ? "border-[#C05A3E] bg-[#C05A3E] text-[#FDFBF7]"
                    : "border-[#B89B72]/25 text-[#FDFBF7]/70 hover:border-[#B89B72] hover:text-[#FDFBF7]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}