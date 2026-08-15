import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { assetRoot, bookingUrl } from "./content";

export function CtaSection() {
  return (
    <section className="bg-white py-12">
      <div className="site-container relative min-h-[220px] overflow-hidden rounded-2xl bg-[#a91313] px-7 py-10 text-white md:px-11 md:py-12">
        <Image src={`${assetRoot}/cta-bg.webp`} alt="" fill loading="eager" sizes="1176px" className="object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#a91313]/95 via-[#a91313]/85 to-[#a91313]/45" />
        <div className="relative z-10 max-w-[720px] md:pr-36">
          <h2 className="text-3xl font-bold leading-tight">Pesan Kendaraan Sekarang</h2>
          <p className="mt-3 text-[15px] leading-7 text-white/90 md:text-base">Kami hadir kapan pun Anda butuh kendaraan di Yogyakarta. Aman, cepat, dan tanpa ribet!</p>
          <a href={bookingUrl()} target="_blank" rel="noreferrer" className="group mt-6 inline-flex h-12 items-center gap-3 rounded-full bg-[#1c1c1c] px-6 text-sm font-semibold text-white transition hover:bg-black">Hubungi Kami <ArrowRight size={17} className="transition group-hover:translate-x-1" /></a>
        </div>
        <Image src={`${assetRoot}/cta-ornament.webp`} alt="Ilustrasi perjalanan di Yogyakarta" width={829} height={523} loading="eager" className="absolute -bottom-14 -right-12 hidden w-[430px] object-contain md:block lg:-right-3" />
      </div>
    </section>
  );
}
