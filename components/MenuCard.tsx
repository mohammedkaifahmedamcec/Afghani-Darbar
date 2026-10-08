import type { MenuItem } from "@/data/menu";

export default function MenuCard({ item }: { item: MenuItem }) {
  const priceDisplay =
    typeof item.price === "number" ? `₹${item.price}` : `₹${item.price}`;

  return (
    <article className="group rounded-2xl border border-[#B89B72]/15 bg-[#2A221E] p-6 transition-all duration-500 hover:border-[#B89B72]/40">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-serif text-xl font-medium text-[#FDFBF7]">
          {item.name}
        </h3>
        <div className="flex shrink-0 items-center gap-2">
          {item.isVeg && (
            <span
              title="Vegetarian"
              className="h-3 w-3 rounded-sm border border-green-500"
            >
              <span className="m-auto mt-[3px] block h-1.5 w-1.5 rounded-full bg-green-500" />
            </span>
          )}
          {item.isSpicy && (
            <span className="rounded-full bg-[#C05A3E]/20 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[#C05A3E]">
              Spicy
            </span>
          )}
        </div>
      </div>

      {item.description && (
        <p className="mt-2 text-sm leading-relaxed text-[#FDFBF7]/55">
          {item.description}
        </p>
      )}

      <div className="mt-4 flex items-end justify-between border-t border-[#B89B72]/10 pt-4">
        <div>
          <p className="font-serif text-xl font-semibold text-[#B89B72]">
            {priceDisplay}
          </p>
          {item.serving && (
            <p className="text-xs text-[#FDFBF7]/50">{item.serving}</p>
          )}
        </div>

        {item.variants && (
          <div className="flex gap-2">
            {item.variants.slice(0, 2).map((v) => (
              <span
                key={v.label}
                className="rounded-full border border-[#B89B72]/30 px-3 py-1 text-[10px] uppercase tracking-wider text-[#FDFBF7]/70"
              >
                {v.label} ₹{v.price}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
