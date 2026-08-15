import Image from "next/image";
import { ArrowRight, Check, Clock3, Headphones } from "lucide-react";

import { assetRoot, bookingUrl } from "./content";

export function CtaSection() {
  return (
    <section className="bg-[#F8FAFC] pb-16">
      <div className="site-container relative min-h-[310px] overflow-hidden rounded-2xl bg-[#0B4EDB] text-white shadow-[0_24px_60px_rgba(37,99,235,.2)]">
        <Image src={`${assetRoot}/drivemate-cta.png`} alt="Armada mobil dan motor DriveMate" fill sizes="1176px" className="object-cover object-[64%_center]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,55,166,.98)_0%,rgba(11,78,219,.88)_44%,rgba(11,78,219,.1)_72%)]" />
        <div className="relative z-10 max-w-[610px] px-7 py-11 sm:px-11 lg:px-14 lg:py-14">
          <h2 className="text-3xl font-bold leading-tight tracking-[-0.04em] sm:text-[40px]">Siap Menjelajahi Jogja?</h2>
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
