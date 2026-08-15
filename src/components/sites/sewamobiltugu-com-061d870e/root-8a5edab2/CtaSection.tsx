import Image from "next/image";
import { ArrowRight, Check, Clock3, Headphones } from "lucide-react";

import { assetRoot, bookingUrl } from "./content";

export function CtaSection() {
  return (
    <section className="bg-[#F8FAFC] pb-16">
      <div className="group site-container relative min-h-[350px] overflow-hidden rounded-[24px] border border-[#60A5FA]/30 bg-[#0B4EDB] text-white shadow-[0_30px_70px_rgba(37,99,235,.26)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_36px_85px_rgba(37,99,235,.34)]">
        <Image src={`${assetRoot}/drivemate-cta-bandung.png`} alt="Armada DriveMate dengan latar Gedung Sate Bandung" fill sizes="1176px" className="scale-[1.08] object-cover object-[58%_center] transition-transform duration-700 ease-out group-hover:scale-[1.115]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,42,137,.99)_0%,rgba(11,78,219,.92)_43%,rgba(11,78,219,.08)_76%)]" />
        <div className="relative z-10 max-w-[610px] px-7 py-12 sm:px-11 lg:px-14 lg:py-16">
          <h2 className="text-3xl font-bold leading-tight tracking-[-0.045em] sm:text-[42px]">Siap Menjelajahi Bandung?</h2>
          <p className="mt-4 max-w-[500px] text-sm leading-6 text-blue-100">Pesan kendaraan sekarang dan nikmati perjalanan yang aman, nyaman, dan berkesan bersama DriveMate.</p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[11px] text-blue-100">
            <span className="flex items-center gap-2"><Check className="size-4" />Unit terawat</span>
            <span className="flex items-center gap-2"><Clock3 className="size-4" />Layanan tepat waktu</span>
            <span className="flex items-center gap-2"><Headphones className="size-4" />Support 24/7</span>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={bookingUrl()} target="_blank" rel="noreferrer" className="inline-flex h-12 items-center gap-2 rounded-lg bg-white px-6 text-sm font-semibold text-[#1D4ED8] transition hover:-translate-y-0.5 hover:bg-blue-50">Pesan Sekarang <ArrowRight className="size-4" /></a>
            <a href="#armada" className="inline-flex h-12 items-center gap-2 px-3 text-sm font-semibold text-white">Lihat Pilihan <ArrowRight className="size-4" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
