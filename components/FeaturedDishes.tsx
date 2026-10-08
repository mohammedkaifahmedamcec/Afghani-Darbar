"use client";

import { motion } from "framer-motion";
import { featuredItems } from "@/data/menu";

// Image mapping for featured items
const dishImages: Record<string, string> = {
  "chicken-platter":
    "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=1000&q=85",
  "platter-mandi":
    "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=1000&q=85",
  "mandi-chicken":
    "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=1000&q=85",
  "shawarma-doner-cheese":
    "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=1000&q=85",
  "afghani-chicken-palav":
    "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85",
  "shawarma-classy-chicken":
    "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=1000&q=85",
  "afghani-mutton-palav":
    "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85",
  "mandi-mutton":
    "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=1000&q=85",
};

export default function FeaturedDishes() {
  return (
    <section className="relative bg-[#1F1611] py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#D4A24C]">
            The Feast
          </p>
          <h2 className="font-serif text-[clamp(2.25rem,5vw,4.5rem)] font-medium leading-tight tracking-tight text-[#FDFBF7]">
            Signature Dishes
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[#FDFBF7]/60">
            Slow-cooked, char-grilled, and made to be shared.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredItems.slice(0, 6).map((item, index) => {
            const img = dishImages[item.id];
            const isLarge = index === 0 || index === 3;

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={`group relative overflow-hidden rounded-2xl border border-[#D4A24C]/15 bg-[#2A221E] transition-all duration-500 hover:border-[#D4A24C]/50 ${
                  isLarge ? "md:col-span-2" : ""
                }`}
              >
                {/* Image */}
                {img && (
                  <div
                    className={`relative w-full overflow-hidden ${
                      isLarge ? "aspect-[16/9]" : "aspect-[4/3]"
                    }`}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url('${img}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1F1611] via-[#1F1611]/40 to-transparent" />
                  </div>
                )}

                {/* Content */}
                <div className="relative p-7">
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <h3 className="font-serif text-2xl font-medium text-[#FDFBF7]">
                      {item.name}
                    </h3>
                    {item.isSpicy && (
                      <span className="rounded-full bg-[#B04A2F]/25 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-[#D4A24C]">
                        Spicy
                      </span>
                    )}
                  </div>

                  {item.description && (
                    <p className="mb-5 text-sm leading-relaxed text-[#FDFBF7]/60">
                      {item.description}
                    </p>
                  )}

                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#D4A24C]">
                        From
                      </p>
                      <p className="font-serif text-2xl font-semibold text-[#D4A24C]">
                        ₹{typeof item.price === "number" ? item.price : item.price.split(" ")[0]}
                      </p>
                    </div>
                    {item.serving && (
                      <p className="text-xs text-[#FDFBF7]/50">{item.serving}</p>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}