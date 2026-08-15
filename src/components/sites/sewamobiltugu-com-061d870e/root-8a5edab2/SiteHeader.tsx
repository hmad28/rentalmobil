"use client";

import Image from "next/image";
import {
  ArrowRight,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

import { assetRoot, bookingUrl } from "./content";

const navigationLinks = [
  { label: "Home", href: "#top" },
  { label: "Rental Mobil", href: "#rental-mobil" },
  { label: "Rental Motor", href: "#rental-motor" },
  { label: "Tentang Kami", href: "#tentang-kami" },
  { label: "Kontak", href: "#kontak" },
] as const;

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 100);

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="relative z-[99] h-0">
      <div className="fixed inset-x-0 top-0 z-[98] h-[35px] bg-[#a91313] text-white lg:h-[45px]">
        <div className="mx-auto flex h-full w-[calc(100%-40px)] max-w-[1176px] items-center justify-between gap-4 text-[12px] lg:text-[14px]">
          <a
            href="tel:+62811261209"
            className="flex shrink-0 items-center gap-1.5 transition-opacity hover:opacity-80"
          >
            <Phone aria-hidden="true" className="size-3.5" strokeWidth={2.2} />
            <span>0811 261 209</span>
          </a>

          <div className="hidden min-w-0 items-center gap-6 md:flex">
            <a
              href="mailto:info@sewamobiltugu.com"
              className="flex min-w-0 items-center gap-2 transition-opacity hover:opacity-80"
            >
              <Mail aria-hidden="true" className="size-4 shrink-0" />
              <span className="truncate">info@sewamobiltugu.com</span>
            </a>
            <span className="flex items-center gap-2 whitespace-nowrap">
              <MapPin aria-hidden="true" className="size-4" />
              Yogyakarta, Indonesia
            </span>
          </div>

          <span className="truncate text-right text-[11px] sm:text-[12px] md:hidden">
            Rental Mobil &amp; Motor Jogja
          </span>
        </div>
      </div>

      <div
        className={`fixed inset-x-0 z-[99] h-[70px] bg-white transition-[top,box-shadow] duration-300 ${
          isScrolled
            ? "top-0 shadow-[0_10px_35px_rgba(0,0,0,0.1)]"
            : "top-[35px] shadow-none lg:top-[45px]"
        }`}
      >
        <div className="mx-auto flex h-[70px] w-[calc(100%-40px)] max-w-[1176px] items-center justify-between gap-5">
          <a href="#top" aria-label="Sewa Mobil Tugu - Beranda" onClick={closeMenu}>
            <Image
              src={`${assetRoot}/logo-header.png`}
              alt="Sewa Mobil Tugu"
              width={440}
              height={104}
              priority
              className="h-auto w-full max-w-[180px] object-contain lg:max-w-[220px]"
            />
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            <nav aria-label="Navigasi utama">
              <ul className="flex items-center gap-8">
                {navigationLinks.map((link, index) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`whitespace-nowrap text-[15px] font-medium transition-colors hover:text-[#a91313] ${
                        index === 0 ? "text-[#a91313]" : "text-[#060405]"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <a
              href={bookingUrl()}
              target="_blank"
              rel="noreferrer"
              className="group flex h-[46px] items-center gap-2.5 rounded-full bg-[#a91313] px-6 text-[15px] font-semibold text-white transition-colors hover:bg-[#7f0e0e]"
            >
              Hubungi Kami
              <ArrowRight
                aria-hidden="true"
                className="size-[18px] transition-transform group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <button
            type="button"
            aria-label={isMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="grid size-11 shrink-0 place-items-center rounded-full text-[#060405] transition-colors hover:bg-[#a91313]/10 hover:text-[#a91313] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a91313] lg:hidden"
          >
            {isMenuOpen ? (
              <X aria-hidden="true" className="size-7" strokeWidth={1.8} />
            ) : (
              <Menu aria-hidden="true" className="size-7" strokeWidth={1.8} />
            )}
          </button>
        </div>

        {isMenuOpen ? (
          <nav
            id="mobile-navigation"
            aria-label="Navigasi seluler"
            className="absolute inset-x-0 top-full h-[230px] overflow-hidden border-t border-black/5 bg-white shadow-[0_16px_28px_rgba(0,0,0,0.08)] lg:hidden"
          >
            <ul className="mx-auto flex h-full w-[calc(100%-40px)] max-w-[1176px] flex-col py-[5px]">
              {navigationLinks.map((link, index) => (
                <li key={link.href} className="h-11">
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className={`flex h-11 items-center text-[16px] font-medium transition-colors hover:text-[#a91313] ${
                      index === 0 ? "text-[#a91313]" : "text-[#060405]"
                    }`}
                  >
                    {link.label}
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
