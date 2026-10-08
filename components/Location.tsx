"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import { restaurant } from "@/data/restaurant";

export default function Location() {
  return (
    <section id="location" className="relative bg-[#F5EFE6] py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[#C05A3E]">
            Come Join Us
          </p>
          <h2 className="font-serif text-[clamp(2.25rem,5vw,4.5rem)] font-medium leading-tight tracking-tight text-[#1F1611]">
            Find Your Table
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-[#1F1611]/10 bg-white p-7"
          >
            <MapPin className="mb-4 h-6 w-6 text-[#C05A3E]" />
            <h3 className="mb-2 font-serif text-xl font-medium text-[#1F1611]">
              Address
            </h3>
            <p className="text-sm leading-relaxed text-[#1F1611]/70">
              {restaurant.address}
              <br />
              {restaurant.city}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-[#1F1611]/10 bg-white p-7"
          >
            <Clock className="mb-4 h-6 w-6 text-[#C05A3E]" />
            <h3 className="mb-2 font-serif text-xl font-medium text-[#1F1611]">
              Hours
            </h3>
            <ul className="space-y-1 text-sm text-[#1F1611]/70">
              {restaurant.hours.map((h) => (
                <li key={h.day}>
                  <span className="font-medium">{h.day}:</span> {h.time}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-[#1F1611]/10 bg-white p-7"
          >
            <Phone className="mb-4 h-6 w-6 text-[#C05A3E]" />
            <h3 className="mb-2 font-serif text-xl font-medium text-[#1F1611]">
              Contact
            </h3>
            <p className="text-sm text-[#1F1611]/70">{restaurant.phone}</p>
            <a
              href={restaurant.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-[#C05A3E] px-6 py-2.5 text-xs font-medium uppercase tracking-wider text-[#FDFBF7] transition-all duration-300 hover:bg-[#A8492F]"
            >
              Get Directions
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}