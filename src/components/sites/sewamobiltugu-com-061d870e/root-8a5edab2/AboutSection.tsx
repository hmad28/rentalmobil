import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { assetRoot } from "./content";

export function AboutSection() {
  return (
    <section id="tentang-kami" className="relative overflow-hidden bg-white py-20 lg:py-24">
      <div className="absolute inset-x-0 top-[38%] h-36 -skew-y-6 bg-[#2563EB]/[0.035]" />
      <div className="site-container relative grid items-center gap-14 md:grid-cols-[.9fr_1.1fr] lg:gap-20">
        <div className="relative mx-auto w-full max-w-[520px] pb-5 pr-5">
          <div className="absolute bottom-0 right-0 h-[94%] w-[94%] rounded-2xl bg-[#2563EB]" />
          <div className="relative aspect-square overflow-hidden rounded-2xl shadow-[0_24px_70px_rgba(30,64,175,.18)]">
            <Image src={`${assetRoot}/about-bandung.jpg`} alt="Jalan Braga, salah satu ikon kota Bandung" fill sizes="(min-width:768px) 45vw, 100vw" className="object-cover object-center" />
          </div>
        </div>
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#2563EB]">Welcome to DriveMate</p>
          <h2 className="text-3xl font-bold leading-[1.15] tracking-[-0.035em] text-[#111827] md:text-[2.6rem]">Sewa Mobil Bandung – <span className="text-[#2563EB]">Jelajahi Bandung</span> dengan Nyaman dan Fleksibel</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-7 text-[#64748B] md:text-base">
            <p>Nikmati kemudahan berkeliling Bandung bersama <strong className="font-semibold text-[#0F172A]">DriveMate</strong>, solusi transportasi terbaik untuk liburan, perjalanan bisnis, atau keperluan keluarga. Tersedia berbagai pilihan mobil terbaru — dari city car hingga kendaraan keluarga luas dan nyaman.</p>
            <p>Dengan layanan <strong className="font-semibold text-[#0F172A]">antar-jemput mobil langsung ke lokasi Anda</strong>, proses sewa jadi cepat dan praktis. Harga bersahabat, armada bersih dan terawat, serta sopir berpengalaman siap menemani perjalanan Anda ke Braga, Gedung Sate, Dago, Lembang, hingga berbagai destinasi di Bandung Raya.</p>
          </div>
          <a href="#kontak" className="mt-7 inline-flex h-12 items-center gap-3 rounded-xl bg-[#2563EB] px-6 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(37,99,235,0.22)] transition hover:-translate-y-0.5 hover:bg-[#1D4ED8] active:translate-y-0">Tentang Kami <span className="grid size-7 place-items-center rounded-lg bg-white text-[#2563EB]"><ArrowRight size={15} /></span></a>
        </div>
      </div>
    </section>
  );
}
