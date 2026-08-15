"use client";

import { ArrowRight, Headphones, Menu, X } from "lucide-react";
import { useState } from "react";

import { BrandMark } from "./BrandMark";
import { bookingUrl } from "./content";

const links = [
  ["Beranda", "#top"],
  ["Armada", "#armada"],
  ["Sewa Motor", "#rental-motor"],
  ["Layanan", "#layanan"],
  ["Tentang Kami", "#layanan"],
  ["Kontak", "#kontak"],
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-[100] border-b border-white/10 bg-[#071321]/88 text-white shadow-[0_8px_28px_rgba(0,0,0,.14)] backdrop-blur-xl">
      <div className="site-container flex h-[82px] items-center justify-between gap-5">
        <a href="#top" aria-label="DriveMate - Beranda" onClick={() => setMenuOpen(false)}>
          <BrandMark inverse compact />
        </a>

        <nav className="hidden lg:block" aria-label="Navigasi utama">
          <ul className="flex items-center gap-6 xl:gap-7">
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

        <div className="hidden items-center gap-4 lg:flex">
          <a href="tel:62811261209" className="hidden items-center gap-2 text-[11px] text-slate-300 xl:flex"><span className="grid size-8 place-items-center rounded-lg bg-white/8 text-[#60A5FA]"><Headphones className="size-4" /></span><span><span className="block text-[9px] text-slate-500">24/7 Support</span>+62 811-261-209</span></a>
          <a
            href={bookingUrl()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] px-5 text-[13px] font-semibold text-white shadow-[0_12px_28px_rgba(37,99,235,.32)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(37,99,235,.38)]"
          >
            Pesan Sekarang <ArrowRight className="size-4" />
          </a>
        </div>

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
