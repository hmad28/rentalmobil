"use client";

import { ArrowRight, ChevronDown, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { BrandMark } from "./BrandMark";
import { bookingUrl } from "./content";

const links = [
  ["Beranda", "#top", false],
  ["Armada", "#armada", true],
  ["Sewa Motor", "#rental-motor", false],
  ["Layanan", "#layanan", true],
  ["Tentang Kami", "#layanan", false],
  ["Kontak", "#kontak", false],
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 48);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-[100] text-white">
      <div className={`pointer-events-auto h-[34px] border-b border-white/10 bg-[#030A13]/42 transition duration-300 ${isScrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}`}>
        <div className="site-container flex h-full items-center justify-between gap-4 text-[11px] font-medium text-slate-300 sm:text-xs">
          <span className="hidden items-center gap-1.5 sm:flex"><MapPin className="size-3 text-[#60A5FA]" />Melayani perjalanan Anda di Bandung Raya</span>
          <span className="sm:hidden">DriveMate Bandung</span>
          <div className="flex items-center gap-4 sm:gap-5">
            <a href="tel:62811261209" className="flex items-center gap-1.5 transition hover:text-white"><Phone className="size-3 text-[#60A5FA]" />24/7 Support&nbsp; +62 811-261-209</a>
            <a href="mailto:info@drivemate.co.id" className="hidden items-center gap-1.5 transition hover:text-white md:flex"><Mail className="size-3 text-[#60A5FA]" />info@drivemate.co.id</a>
          </div>
        </div>
      </div>

      <div className={`pointer-events-auto absolute inset-x-0 h-[78px] border-b transition-all duration-300 ${isScrolled ? "top-0 border-white/10 bg-[#071321]/92 shadow-[0_12px_34px_rgba(0,0,0,.2)] backdrop-blur-xl" : "top-[34px] border-transparent bg-transparent"}`}>
        <div className="site-container flex h-full items-center justify-between gap-5">
        <a href="#top" aria-label="DriveMate - Beranda" onClick={() => setMenuOpen(false)}>
          <BrandMark inverse compact />
        </a>

        <nav className="hidden lg:block" aria-label="Navigasi utama">
          <ul className="flex items-center gap-6 xl:gap-7">
            {links.map(([label, href, hasMenu], index) => (
              <li key={label}>
                <a
                  href={href}
                  className={`relative flex items-center gap-1 py-2 text-[13px] font-semibold transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-[#3B82F6] after:transition-transform after:duration-300 hover:text-[#60A5FA] hover:after:scale-x-100 xl:text-sm ${index === 0 ? "text-[#60A5FA]" : "text-slate-100"}`}
                >
                  {label}{hasMenu ? <ChevronDown className="size-3" strokeWidth={2} /> : null}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={bookingUrl()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-[10px] bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] px-5 text-[13px] font-semibold text-white shadow-[0_12px_28px_rgba(37,99,235,.32)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(37,99,235,.38)]"
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
        <nav id="mobile-navigation" aria-label="Navigasi seluler" className="absolute inset-x-0 top-full border-t border-white/10 bg-[#081424]/98 shadow-2xl backdrop-blur-xl lg:hidden">
          <ul className="site-container py-3">
            {links.map(([label, href]) => (
              <li key={label}>
                <a href={href} onClick={() => setMenuOpen(false)} className="flex h-12 items-center text-base font-semibold text-slate-200 hover:text-[#60A5FA]">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
      </div>
    </header>
  );
}
