"use client";

import { useEffect, useState } from "react";
import { Menu as MenuIcon, Phone, MapPin } from "lucide-react";

export default function MobileBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-[#B89B72]/20 bg-[#1F1611]/95 backdrop-blur-md transition-transform duration-500 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="grid grid-cols-3 divide-x divide-[#B89B72]/10">
        <a
          href="#menu"
          className="flex flex-col items-center gap-1 py-3 text-[#FDFBF7]/80 transition-colors hover:text-[#B89B72]"
        >
          <MenuIcon className="h-5 w-5" />
          <span className="text-[10px] font-medium uppercase tracking-wider">
            Menu
          </span>
        </a>
        <a
          href="tel:+91XXXXXXXXXX"
          className="flex flex-col items-center gap-1 py-3 text-[#FDFBF7]/80 transition-colors hover:text-[#B89B72]"
        >
          <Phone className="h-5 w-5" />
          <span className="text-[10px] font-medium uppercase tracking-wider">
            Call
          </span>
        </a>
        <a
          href="#location"
          className="flex flex-col items-center gap-1 py-3 text-[#FDFBF7]/80 transition-colors hover:text-[#B89B72]"
        >
          <MapPin className="h-5 w-5" />
          <span className="text-[10px] font-medium uppercase tracking-wider">
            Visit
          </span>
        </a>
      </div>
    </div>
  );
}