"use client";

import { motion } from "framer-motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=1400&q=85",
    alt: "Full Arabian Mandi platter with roasted meat on spiced rice",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=85",
    alt: "Aromatic Mandi rice",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=85",
    alt: "Char-grilled Mandi chicken",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=85",
    alt: "Kabsa Mandi with tender meat",
    span: "md:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=800&q=85",
    alt: "Grilled meat pieces",
    span: "",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-[#F5EFE6] py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#B04A2F]">
            The Experience
          </p>
          <h2 className="font-serif text-[clamp(2.25rem,5vw,4.5rem)] font-medium leading-tight tracking-tight text-[#1F1611]">
            A Glimpse Inside
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`relative overflow-hidden rounded-2xl bg-[#1F1611] ${img.span} ${
                i === 0 ? "aspect-square md:aspect-auto" : "aspect-square"
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{ backgroundImage: `url('${img.src}')` }}
                role="img"
                aria-label={img.alt}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}