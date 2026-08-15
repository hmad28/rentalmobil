import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { assetRoot } from "./content";

export function AboutSection() {
  return (
    <section id="tentang-kami" className="relative overflow-hidden bg-[#fffdfd] py-20 lg:py-24">
      <div className="absolute inset-x-0 top-[38%] h-36 -skew-y-6 bg-[#a91313]/[0.045]" />
      <div className="site-container relative grid items-center gap-14 md:grid-cols-[.9fr_1.1fr] lg:gap-20">
        <div className="relative mx-auto w-full max-w-[520px] pb-5 pr-5">
          <div className="absolute bottom-0 right-0 h-[94%] w-[94%] rounded-2xl bg-[#a91313]" />
          <div className="relative aspect-square overflow-hidden rounded-2xl shadow-[0_24px_70px_rgba(70,0,0,.18)]">
            <Image src={`${assetRoot}/about.webp`} alt="Sewa Mobil Jogja bersama Sewa Mobil Tugu" fill sizes="(min-width:768px) 45vw, 100vw" className="object-cover" />
          </div>
        </div>
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#a91313]">Welcome Sewa Mobil Tugu</p>
          <h2 className="text-3xl font-bold leading-[1.18] text-[#171313] md:text-[2.6rem]">Sewa Mobil Jogja – <span className="text-[#a91313]">Jelajahi Yogyakarta</span> dengan Nyaman dan Fleksibel</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-7 text-[#69777b] md:text-base">
            <p>Nikmati kemudahan berkeliling Yogyakarta bersama <strong className="text-[#302a2a]">Sewa Mobil Tugu</strong>, solusi transportasi terbaik untuk liburan, perjalanan bisnis, atau keperluan keluarga. Tersedia berbagai pilihan mobil terbaru — dari city car hingga kendaraan keluarga luas dan nyaman.</p>
            <p>Dengan layanan <strong className="text-[#302a2a]">antar-jemput mobil langsung ke lokasi Anda</strong>, proses sewa jadi cepat dan praktis. Harga bersahabat, armada bersih dan terawat, serta sopir berpengalaman siap menemani perjalanan Anda ke Malioboro, Candi Prambanan, Kaliurang, hingga destinasi indah di Gunung Kidul.</p>
          </div>
          <a href="#kontak" className="mt-7 inline-flex h-12 items-center gap-3 rounded-full bg-[#a91313] px-6 text-sm font-semibold text-white shadow-lg shadow-red-950/15 transition hover:-translate-y-0.5 hover:bg-[#870e0e]">Tentang Kami <span className="grid size-7 place-items-center rounded-full bg-white/95 text-[#a91313]"><ArrowRight size={15} /></span></a>
        </div>
      </div>
    </section>
  );
}
