import Image from "next/image";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { assetRoot, bookingUrl } from "./content";

const footerLinks = [
  ["Home", "#top"],
  ["Rental Mobil", "#rental-mobil"],
  ["Rental Motor", "#rental-motor"],
  ["Tentang Kami", "#tentang-kami"],
  ["Kontak", "#kontak"],
] as const;

export function SiteFooter() {
  return (
    <footer id="kontak" className="relative bg-[linear-gradient(135deg,#a30f1f_0%,#1a1a1a_100%)] text-white">
      <div className="site-container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.7fr_1fr_.65fr] lg:gap-16 lg:py-16">
        <div>
          <Image src={`${assetRoot}/logo-footer.png`} alt="Sewa Mobil Tugu" width={448} height={107} loading="eager" className="h-auto w-[220px]" />
          <p className="mt-6 max-w-xl text-sm leading-7 text-white/80">Nikmati kemudahan berkeliling Yogyakarta bersama Sewa Mobil Tugu, solusi transportasi terbaik untuk liburan, perjalanan bisnis, atau keperluan keluarga. Tersedia berbagai pilihan mobil terbaru — dari city car hingga kendaraan keluarga luas dan nyaman.</p>
          <div className="mt-6 flex items-center gap-4 text-white/85">
            <a aria-label="Facebook" href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="grid size-7 place-items-center rounded-full border border-white/25 text-sm font-bold transition hover:border-[#ffb9b9] hover:text-[#ffb9b9]">f</a>
            <a aria-label="Instagram" href="https://www.instagram.com/rentalmotorjogja_transmed" target="_blank" rel="noreferrer" className="grid size-7 place-items-center rounded-full border border-white/25 text-sm transition hover:border-[#ffb9b9] hover:text-[#ffb9b9]">◎</a>
            <a aria-label="YouTube" href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="grid size-7 place-items-center rounded-full border border-white/25 text-[11px] transition hover:border-[#ffb9b9] hover:text-[#ffb9b9]">▶</a>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Kontak Kami</h2>
          <div className="mt-6 space-y-4 text-sm text-white/85">
            <a href="tel:62811261209" className="flex items-center gap-3 transition hover:text-[#ffb9b9]"><Phone size={17} /> 0811261209</a>
            <a href={bookingUrl()} target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-[#ffb9b9]"><MessageCircle size={17} /> 0811261209</a>
            <p className="flex items-start gap-3 leading-6"><MapPin size={18} className="mt-1 shrink-0" /> Jl. Prof. Herman Yohanes No. 53, Samirono, Depok, Sleman, Yogyakarta.</p>
          </div>
        </div>
        <nav aria-label="Menu footer">
          <h2 className="text-xl font-semibold">Menu</h2>
          <ul className="mt-6 space-y-3 text-sm text-white/85">
            {footerLinks.map(([label, href]) => <li key={label}><a href={href} className="inline-block transition hover:translate-x-0.5 hover:text-[#ffb9b9]">{label}</a></li>)}
          </ul>
        </nav>
      </div>
      <div className="site-container border-t border-white/15 py-5 text-center text-xs text-white/65">Copyright © 2026 Sewa Mobil Tugu. All rights reserved.</div>
      <a aria-label="Hubungi Sewa Mobil Tugu via WhatsApp" href={bookingUrl()} target="_blank" rel="noreferrer" className="fixed bottom-5 left-5 z-[80] grid size-14 place-items-center rounded-full bg-[#25d366] text-white shadow-[0_10px_28px_rgba(0,0,0,.28)] transition hover:scale-105 md:size-[60px]"><MessageCircle size={29} fill="currentColor" /></a>
    </footer>
  );
}
