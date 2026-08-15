import { MapPin, MessageCircle, Phone } from "lucide-react";
import { BrandMark } from "./BrandMark";
import { bookingUrl } from "./content";

const footerLinks = [
  ["Home", "#top"],
  ["Rental Mobil", "#rental-mobil"],
  ["Rental Motor", "#rental-motor"],
  ["Tentang Kami", "#tentang-kami"],
  ["Kontak", "#kontak"],
] as const;

export function SiteFooter() {
  return (
    <footer id="kontak" className="relative overflow-hidden bg-[#111827] text-white">
      <div className="pointer-events-none absolute -right-40 -top-56 size-[520px] rounded-full bg-[#2563EB]/20 blur-3xl" />
      <div className="site-container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.7fr_1fr_.65fr] lg:gap-16 lg:py-16">
        <div>
          <BrandMark inverse />
          <p className="mt-6 max-w-xl text-sm leading-7 text-slate-300">Nikmati kemudahan berkeliling Yogyakarta bersama DriveMate, solusi transportasi terbaik untuk liburan, perjalanan bisnis, atau keperluan keluarga. Tersedia berbagai pilihan mobil terbaru — dari city car hingga kendaraan keluarga luas dan nyaman.</p>
          <div className="mt-6 flex items-center gap-4 text-white/85">
            <a aria-label="Facebook" href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="grid size-8 place-items-center rounded-lg border border-white/20 text-sm font-bold transition hover:border-[#60A5FA] hover:bg-[#2563EB]/15 hover:text-[#60A5FA]">f</a>
            <a aria-label="Instagram" href="https://www.instagram.com/rentalmotorjogja_transmed" target="_blank" rel="noreferrer" className="grid size-8 place-items-center rounded-lg border border-white/20 text-sm transition hover:border-[#60A5FA] hover:bg-[#2563EB]/15 hover:text-[#60A5FA]">◎</a>
            <a aria-label="YouTube" href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="grid size-8 place-items-center rounded-lg border border-white/20 text-[11px] transition hover:border-[#60A5FA] hover:bg-[#2563EB]/15 hover:text-[#60A5FA]">▶</a>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Kontak Kami</h2>
          <div className="mt-6 space-y-4 text-sm text-white/85">
            <a href="tel:62811261209" className="flex items-center gap-3 transition hover:text-[#60A5FA]"><Phone size={17} /> 0811261209</a>
            <a href={bookingUrl()} target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-[#60A5FA]"><MessageCircle size={17} /> 0811261209</a>
            <p className="flex items-start gap-3 leading-6"><MapPin size={18} className="mt-1 shrink-0" /> Jl. Prof. Herman Yohanes No. 53, Samirono, Depok, Sleman, Yogyakarta.</p>
          </div>
        </div>
        <nav aria-label="Menu footer">
          <h2 className="text-xl font-semibold">Menu</h2>
          <ul className="mt-6 space-y-3 text-sm text-white/85">
            {footerLinks.map(([label, href]) => <li key={label}><a href={href} className="inline-block transition hover:translate-x-0.5 hover:text-[#60A5FA]">{label}</a></li>)}
          </ul>
        </nav>
      </div>
      <div className="site-container border-t border-white/10 py-5 text-center text-xs text-slate-400">Copyright © 2026 DriveMate. All rights reserved.</div>
      <a aria-label="Hubungi DriveMate via WhatsApp" href={bookingUrl()} target="_blank" rel="noreferrer" className="fixed bottom-5 left-5 z-[80] grid size-14 place-items-center rounded-2xl bg-[#16A34A] text-white shadow-[0_12px_30px_rgba(22,163,74,.28)] transition hover:-translate-y-1 hover:bg-[#15803D] active:translate-y-0 md:size-[60px]"><MessageCircle size={29} fill="currentColor" /></a>
    </footer>
  );
}
