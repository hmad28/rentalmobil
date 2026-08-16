"use client";

import { ArrowRight, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { BrandMark } from "./BrandMark";
import { bookingUrl } from "./content";

type SectionId = "top" | "tentang-kami" | "layanan" | "kontak";
type HeaderLink = { label: string; href: string; path: string; section?: SectionId };

const links: readonly HeaderLink[] = [
  { label: "Beranda", href: "/", path: "/", section: "top" },
  { label: "Rental Mobil", href: "/armada", path: "/armada" },
  { label: "Rental Motor", href: "/rental-motor", path: "/rental-motor" },
  { label: "Tentang Kami", href: "/#tentang-kami", path: "/", section: "tentang-kami" },
  { label: "Layanan", href: "/#layanan", path: "/", section: "layanan" },
  { label: "Kontak", href: "/#kontak", path: "/", section: "kontak" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>("top");

  useEffect(() => {
    let animationFrame = 0;

    const updateHeader = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 48);
        if (pathname !== "/") return;

        const triggerLine = 160;
        let currentSection: SectionId = "top";
        for (const link of links) {
          if (!link.section) continue;
          const section = document.getElementById(link.section);
          if (section && section.getBoundingClientRect().top <= triggerLine) currentSection = link.section;
        }
        if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 80) currentSection = "kontak";
        setActiveSection(currentSection);
      });
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("resize", updateHeader);
    window.addEventListener("hashchange", updateHeader);
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener("resize", updateHeader);
      window.removeEventListener("hashchange", updateHeader);
    };
  }, [pathname]);

  const isActive = (link: HeaderLink) =>
    pathname === "/" ? Boolean(link.section && activeSection === link.section) : pathname === link.path && link.path !== "/";

  const handleLinkClick = (link: HeaderLink) => {
    if (pathname === "/" && link.section) setActiveSection(link.section);
    setMenuOpen(false);
  };

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
          <Link href="/" aria-label="DriveMate - Beranda" onClick={() => { setActiveSection("top"); setMenuOpen(false); }}><BrandMark inverse compact /></Link>

          <nav className="hidden lg:block" aria-label="Navigasi utama">
            <ul className="flex items-center gap-5 xl:gap-7">
              {links.map((link) => {
                const active = isActive(link);
                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => handleLinkClick(link)}
                      className={`relative flex items-center py-2 text-[13px] font-semibold transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:rounded-full after:bg-[#3B82F6] after:transition-transform after:duration-300 hover:text-[#60A5FA] hover:after:scale-x-100 xl:text-sm ${active ? "text-[#60A5FA] after:scale-x-100" : "text-slate-100 after:scale-x-0"}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <a href={bookingUrl()} target="_blank" rel="noreferrer" className="hidden h-11 items-center gap-2 rounded-[10px] bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] px-5 text-[13px] font-semibold text-white shadow-[0_12px_28px_rgba(37,99,235,.32)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(37,99,235,.38)] lg:inline-flex">
            Pesan Sekarang <ArrowRight className="size-4" />
          </a>

          <button type="button" aria-label={menuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"} aria-controls="mobile-navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)} className="grid size-10 place-items-center rounded-lg border border-white/15 text-white transition hover:bg-white/10 lg:hidden">
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {menuOpen ? (
          <nav id="mobile-navigation" aria-label="Navigasi seluler" className="absolute inset-x-0 top-full border-t border-white/10 bg-[#081424]/98 shadow-2xl backdrop-blur-xl lg:hidden">
            <ul className="site-container py-3">
              {links.map((link) => {
                const active = isActive(link);
                return <li key={link.label}><Link href={link.href} aria-current={active ? "page" : undefined} onClick={() => handleLinkClick(link)} className={`flex h-12 items-center rounded-lg px-3 text-base font-semibold transition ${active ? "bg-[#2563EB]/15 text-[#60A5FA]" : "text-slate-200 hover:bg-white/5 hover:text-[#60A5FA]"}`}>{link.label}</Link></li>;
              })}
            </ul>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
