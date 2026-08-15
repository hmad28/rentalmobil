"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

import { BrandMark } from "./BrandMark";
import { bookingUrl } from "./content";

const links = [
  ["Beranda", "#top"],
  ["Armada", "#armada"],
  ["Sewa Motor", "#armada"],
  ["Layanan", "#layanan"],
  ["Tentang Kami", "#layanan"],
  ["Kontak", "#kontak"],
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-[100] border-b border-white/10 bg-[#081424]/90 text-white backdrop-blur-xl">
      <div className="site-container flex h-[74px] items-center justify-between gap-5">
        <a href="#top" aria-label="DriveMate - Beranda" onClick={() => setMenuOpen(false)}>
          <BrandMark inverse compact />
        </a>

        <nav className="hidden lg:block" aria-label="Navigasi utama">
          <ul className="flex items-center gap-7">
            {links.map(([label, href], index) => (
              <li key={label}>
                <a
                  href={href}
                  className={`text-[13px] font-semibold transition-colors hover:text-[#60A5FA] ${index === 0 ? "text-[#60A5FA]" : "text-slate-200"}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={bookingUrl()}
          target="_blank"
          rel="noreferrer"
          className="hidden h-11 items-center gap-2 rounded-lg bg-[#2563EB] px-5 text-[13px] font-semibold text-white shadow-[0_10px_24px_rgba(37,99,235,.25)] transition hover:-translate-y-0.5 hover:bg-[#1D4ED8] lg:inline-flex"
        >
          Pesan Sekarang <ArrowRight className="size-4" />
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="grid size-10 place-items-center rounded-lg border border-white/15 text-white transition hover:bg-white/10 lg:hidden"
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {menuOpen ? (
        <nav id="mobile-navigation" aria-label="Navigasi seluler" className="border-t border-white/10 bg-[#081424] lg:hidden">
          <ul className="site-container py-3">
            {links.map(([label, href]) => (
              <li key={label}>
                <a href={href} onClick={() => setMenuOpen(false)} className="flex h-11 items-center text-sm font-semibold text-slate-200 hover:text-[#60A5FA]">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
