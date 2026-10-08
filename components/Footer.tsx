import { restaurant } from "@/data/restaurant";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-[#B89B72]/10 bg-[#1F1611] py-14">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-2xl font-semibold text-[#FDFBF7]">
              Afghan <span className="text-[#B89B72]">Darbar</span>
            </p>
            <p className="mt-3 max-w-xs text-sm text-[#FDFBF7]/50">
              {restaurant.tagline}
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[#B89B72]">
              Visit
            </h4>
            <p className="text-sm text-[#FDFBF7]/60">
              {restaurant.address}
              <br />
              {restaurant.city}
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[#B89B72]">
              Contact
            </h4>
            <p className="text-sm text-[#FDFBF7]/60">{restaurant.phone}</p>
            <p className="mt-1 text-sm text-[#FDFBF7]/60">{restaurant.whatsapp}</p>
          </div>
        </div>

        <div className="mt-12 border-t border-[#B89B72]/10 pt-6 text-center">
          <p className="text-xs text-[#FDFBF7]/40">
            © {currentYear} {restaurant.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}