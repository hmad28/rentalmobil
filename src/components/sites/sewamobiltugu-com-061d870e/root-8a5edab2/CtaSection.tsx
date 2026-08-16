import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr/WhatsappLogo";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CarFront, Check, Clock3, Headphones } from "lucide-react";

import { assetRoot, bookingUrl } from "./content";

export function CtaSection() {
  return (
    <section className="bg-[#F8FAFC] pb-16 pt-3">
      <div className="group site-container relative min-h-[410px] overflow-hidden rounded-[28px] border border-[#60A5FA]/30 bg-[#061426] text-white shadow-[0_34px_80px_rgba(15,23,42,.28)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_42px_95px_rgba(37,99,235,.3)]">
        <Image src={`${assetRoot}/drivemate-cta-bandung.png`} alt="Armada DriveMate dengan latar Gedung Sate Bandung" fill sizes="1176px" className="scale-[1.1] object-cover object-[60%_center] transition-transform duration-700 ease-out group-hover:scale-[1.135]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,15,34,.99)_0%,rgba(5,33,78,.95)_46%,rgba(7,39,94,.12)_78%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(37,99,235,.24),transparent_30%)]" />
        <div className="relative z-10 max-w-[620px] px-7 py-14 sm:px-11 lg:px-14 lg:py-[72px]">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#60A5FA]">Your trusted travel companion</p>
          <h2 className="mt-3 text-3xl font-bold leading-[1.08] tracking-[-0.05em] sm:text-[46px]">Siap Menjelajahi<br />Bandung?</h2>
          <p className="mt-4 max-w-[500px] text-sm leading-6 text-slate-300">Pesan kendaraan sekarang dan nikmati perjalanan yang aman, nyaman, dan berkesan bersama DriveMate.</p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[11px] text-slate-200">
            <span className="flex items-center gap-2"><Check className="size-4" />Unit terawat</span>
            <span className="flex items-center gap-2"><Clock3 className="size-4" />Layanan tepat waktu</span>
            <span className="flex items-center gap-2"><Headphones className="size-4" />Support 24/7</span>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={bookingUrl()} target="_blank" rel="noreferrer" className="inline-flex h-12 items-center gap-2 rounded-xl bg-[#16A34A] px-5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(22,163,74,.28)] transition hover:-translate-y-0.5 hover:bg-[#15803D]"><WhatsappLogoIcon className="size-5" weight="fill" />Booking via WhatsApp</a>
            <Link href="/armada" className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/25 bg-white/8 px-5 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"><CarFront className="size-4" />Lihat Armada <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
