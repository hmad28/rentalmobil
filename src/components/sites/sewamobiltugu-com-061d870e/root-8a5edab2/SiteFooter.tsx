import { FacebookLogoIcon } from "@phosphor-icons/react/dist/ssr/FacebookLogo";
import { InstagramLogoIcon } from "@phosphor-icons/react/dist/ssr/InstagramLogo";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr/WhatsappLogo";
import { Mail, MapPin, Phone } from "lucide-react";

import { BrandMark } from "./BrandMark";
import { bookingUrl } from "./content";

const companyLinks = [["Tentang Kami", "#layanan"], ["Cara Sewa", "#layanan"], ["Armada", "#armada"], ["Kontak", "#kontak"]] as const;
const serviceLinks = [["Sewa Mobil", "#armada"], ["Sewa Motor", "#rental-motor"], ["Dengan Driver", "#armada"], ["Antar-Jemput", "#kontak"]] as const;

export function SiteFooter() {
  return (
    <footer id="kontak" className="bg-[#0A1627] text-white">
      <div className="site-container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.35fr_.7fr_.7fr_1fr] lg:gap-12 lg:py-16">
        <div>
          <BrandMark inverse />
          <p className="mt-5 max-w-[370px] text-sm leading-7 text-slate-400">Layanan sewa mobil dan motor terpercaya di Yogyakarta. Armada terawat, harga transparan, dan pelayanan profesional untuk setiap perjalanan Anda.</p>
          <div className="mt-5 flex gap-2.5">
            <span aria-label="Instagram DriveMate" title="Instagram" className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-[#60A5FA]/40 hover:bg-white/[0.07] hover:text-[#60A5FA]"><InstagramLogoIcon className="size-5" weight="fill" /></span>
            <span aria-label="Facebook DriveMate" title="Facebook" className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-[#60A5FA]/40 hover:bg-white/[0.07] hover:text-[#60A5FA]"><FacebookLogoIcon className="size-5" weight="fill" /></span>
            <a aria-label="WhatsApp DriveMate" title="WhatsApp" href={bookingUrl()} target="_blank" rel="noreferrer" className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-[#25D366]/50 hover:bg-white/[0.07] hover:text-[#25D366]"><WhatsappLogoIcon className="size-5" weight="fill" /></a>
          </div>
        </div>
        <nav aria-label="Perusahaan"><h2 className="text-base font-bold">Perusahaan</h2><ul className="mt-5 space-y-3">{companyLinks.map(([label, href]) => <li key={label}><a href={href} className="text-[13px] text-slate-400 transition hover:text-[#60A5FA]">{label}</a></li>)}</ul></nav>
        <nav aria-label="Layanan"><h2 className="text-base font-bold">Layanan</h2><ul className="mt-5 space-y-3">{serviceLinks.map(([label, href]) => <li key={label}><a href={href} className="text-[13px] text-slate-400 transition hover:text-[#60A5FA]">{label}</a></li>)}</ul></nav>
        <div>
          <h2 className="text-base font-bold">Kontak Kami</h2>
          <div className="mt-5 space-y-3.5 text-[13px] leading-6 text-slate-400">
            <p className="flex items-start gap-3"><MapPin className="mt-0.5 size-4 shrink-0 text-[#60A5FA]" />Jl. Prof. Herman Yohanes No. 53, Sleman, Yogyakarta.</p>
            <a href="tel:62811261209" className="flex items-center gap-3 hover:text-[#60A5FA]"><Phone className="size-4 text-[#60A5FA]" />0811 261 209</a>
            <a href="mailto:info@sewamobiltugu.com" className="flex items-center gap-3 hover:text-[#60A5FA]"><Mail className="size-4 text-[#60A5FA]" />info@sewamobiltugu.com</a>
          </div>
        </div>
      </div>
      <div className="site-container flex flex-col gap-3 border-t border-white/10 py-5 text-center text-xs text-slate-500 sm:flex-row sm:justify-between sm:text-left"><span>© 2026 DriveMate. All rights reserved.</span><span>Made with trust in Yogyakarta • Your Trusted Travel Companion.</span></div>
      <a aria-label="Hubungi DriveMate via WhatsApp" href={bookingUrl()} target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-[80] grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(22,163,74,.3)] ring-4 ring-white/80 transition hover:-translate-y-1 hover:scale-105 hover:bg-[#20BD5A]"><WhatsappLogoIcon className="size-8" weight="fill" /></a>
    </footer>
  );
}
