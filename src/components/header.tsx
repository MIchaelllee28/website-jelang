"use client";

import { useState } from "react";
import Button from "@/components/ui/button";

const NAV_ITEMS = [
  { href: "#tentang", label: "Tentang" },
  { href: "#jadwal", label: "Jadwal" },
  { href: "#cerita", label: "Cerita" },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="px-6 py-6 md:px-[88px] md:py-6">
      <div className="mx-auto flex w-full max-w-[1264px] items-center justify-between">
        <a href="#atas" className="text-[36px] font-bold leading-[1.12] tracking-[-1.08px] text-ink">
          jelang.
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_ITEMS.map(({ href, label }) => (
            <a key={href} href={href} className="text-[14px] leading-[1.45] text-ink">
              {label}
            </a>
          ))}
          <Button href="#ikut">Ikut jelang↗</Button>
        </nav>

        <button
          type="button"
          className="text-[14px] font-bold leading-[1.45] text-ink md:hidden"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          Menu ☰
        </button>
      </div>

      {open ? (
        <nav className="mx-auto mt-6 flex w-full max-w-[1264px] flex-col items-start gap-4 md:hidden">
          {NAV_ITEMS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-[14px] leading-[1.45] text-ink"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <Button href="#ikut">Ikut jelang↗</Button>
        </nav>
      ) : null}
    </header>
  );
}
