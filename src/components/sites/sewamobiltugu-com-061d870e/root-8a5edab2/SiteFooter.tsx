import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { BrandMark } from "./BrandMark";
import { bookingUrl } from "./content";

const companyLinks = [["Tentang Kami", "#layanan"], ["Cara Sewa", "#layanan"], ["Armada", "#armada"], ["Kontak", "#kontak"]] as const;
const serviceLinks = [["Sewa Mobil", "#armada"], ["Sewa Motor", "#armada"], ["Dengan Driver", "#armada"], ["Antar-Jemput", "#kontak"]] as const;

export function SiteFooter() {
  return (
    <footer id="kontak" className="bg-[#0A1627] text-white">
      <div className="site-container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.35fr_.7fr_.7fr_1fr] lg:gap-12 lg:py-16">
        <div>
          <BrandMark inverse />
          <p className="mt-5 max-w-[350px] text-xs leading-6 text-slate-400">Layanan sewa mobil dan motor terpercaya di Yogyakarta. Armada terawat, harga transparan, dan pelayanan profesional untuk setiap perjalanan Anda.</p>
          <div className="mt-5 flex gap-2">{["ig", "f", "wa"].map((item) => <span key={item} className="grid size-8 place-items-center rounded-lg border border-white/10 text-[10px] font-semibold text-slate-400">{item}</span>)}</div>
        </div>
        <nav aria-label="Perusahaan"><h2 className="text-sm font-bold">Perusahaan</h2><ul className="mt-5 space-y-3">{companyLinks.map(([label, href]) => <li key={label}><a href={href} className="text-xs text-slate-400 transition hover:text-[#60A5FA]">{label}</a></li>)}</ul></nav>
        <nav aria-label="Layanan"><h2 className="text-sm font-bold">Layanan</h2><ul className="mt-5 space-y-3">{serviceLinks.map(([label, href]) => <li key={label}><a href={href} className="text-xs text-slate-400 transition hover:text-[#60A5FA]">{label}</a></li>)}</ul></nav>
        <div>
          <h2 className="text-sm font-bold">Kontak Kami</h2>
          <div className="mt-5 space-y-3 text-xs leading-5 text-slate-400">
            <p className="flex items-start gap-3"><MapPin className="mt-0.5 size-4 shrink-0 text-[#60A5FA]" />Jl. Prof. Herman Yohanes No. 53, Sleman, Yogyakarta.</p>
            <a href="tel:62811261209" className="flex items-center gap-3 hover:text-[#60A5FA]"><Phone className="size-4 text-[#60A5FA]" />0811 261 209</a>
            <a href="mailto:info@sewamobiltugu.com" className="flex items-center gap-3 hover:text-[#60A5FA]"><Mail className="size-4 text-[#60A5FA]" />info@sewamobiltugu.com</a>
          </div>
        </div>
      </div>
      <div className="site-container flex flex-col gap-3 border-t border-white/10 py-5 text-center text-[10px] text-slate-500 sm:flex-row sm:justify-between sm:text-left"><span>© 2026 DriveMate. All rights reserved.</span><span>Your Trusted Travel Companion.</span></div>
      <a aria-label="Hubungi DriveMate via WhatsApp" href={bookingUrl()} target="_blank" rel="noreferrer" className="fixed bottom-5 left-5 z-[80] grid size-14 place-items-center rounded-2xl bg-[#16A34A] text-white shadow-[0_12px_30px_rgba(22,163,74,.28)] transition hover:-translate-y-1 hover:bg-[#15803D]"><MessageCircle className="size-7" fill="currentColor" /></a>
    </footer>
  );
}
