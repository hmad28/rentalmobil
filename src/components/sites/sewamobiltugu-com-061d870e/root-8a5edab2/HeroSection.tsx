import Image from "next/image";
import { ArrowRight, CalendarDays, CarFront, Check, CircleDollarSign, Clock3, CreditCard, MapPin, RotateCcw, Search } from "lucide-react";

import { assetRoot, bookingUrl } from "./content";

const bookingFields = [
  { label: "Lokasi Jemput", value: "Pilih lokasi jemput", icon: MapPin },
  { label: "Lokasi Antar (Opsional)", value: "Pilih lokasi antar", icon: MapPin },
  { label: "Tanggal & Waktu", value: "Pilih jadwal", icon: CalendarDays },
  { label: "Durasi", value: "1 Hari", icon: Clock3 },
] as const;

const bookingBenefits = [
  { title: "Gratis pembatalan", note: "Hingga 12 jam sebelum", icon: RotateCcw },
  { title: "Harga terbaik", note: "Tanpa biaya tersembunyi", icon: CircleDollarSign },
  { title: "Armada terawat", note: "Bersih & siap jalan", icon: CarFront },
  { title: "Pembayaran aman", note: "Transaksi 100% aman", icon: CreditCard },
] as const;

export function HeroSection() {
  return (
    <section className="relative bg-[#F8FAFC] text-white">
      <div className="relative min-h-[790px] overflow-hidden rounded-b-[52px] bg-[#071321] sm:rounded-b-[68px] lg:min-h-[800px] lg:rounded-b-[92px]">
        <Image src={`${assetRoot}/drivemate-hero-bandung.png`} alt="Armada DriveMate dengan latar kota Bandung" fill preload sizes="100vw" className="scale-[1.03] object-cover object-[64%_center]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,11,22,.99)_0%,rgba(4,14,27,.94)_31%,rgba(5,15,28,.48)_55%,rgba(5,15,28,.04)_84%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(37,99,235,.18),transparent_26%)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#071321]/90 to-transparent" />

        <div className="site-container relative z-10 flex min-h-[790px] items-start pb-[205px] pt-[152px] sm:pt-[166px] lg:min-h-[800px] lg:items-center lg:pb-[175px] lg:pt-[120px]">
          <div className="max-w-[680px]">
          <p className="hero-reveal hero-delay-1 mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#60A5FA]"><MapPin className="size-4" /> Bandung</p>
          <h1 className="hero-reveal hero-delay-2 max-w-[680px] text-[43px] font-bold leading-[1.06] tracking-[-0.05em] text-balance sm:text-[56px] lg:text-[60px]">
            Sewa Kendaraan di <span className="text-[#3B82F6]">Bandung,</span><br />Lebih Mudah &amp; Nyaman
          </h1>
          <p className="hero-reveal hero-delay-3 mt-6 max-w-[560px] text-[15px] leading-7 text-slate-300 sm:text-base">Pilih mobil atau motor terbaik untuk liburan, bisnis, dan perjalanan harian Anda. Booking cepat, harga transparan, armada terawat.</p>
          <div className="hero-reveal hero-delay-4 mt-8 flex flex-wrap gap-3">
            <a href={bookingUrl()} target="_blank" rel="noreferrer" className="inline-flex h-12 items-center gap-2 rounded-lg bg-[#2563EB] px-6 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(37,99,235,.3)] transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">Pesan Sekarang <ArrowRight className="size-4" /></a>
            <a href="#armada" className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/30 bg-white/5 px-6 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10">Lihat Armada <ArrowRight className="size-4" /></a>
          </div>
          <div className="hero-reveal hero-delay-5 mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-slate-300">
            {["Banyak pilihan unit", "Harga transparan", "Layanan profesional"].map((item) => <span key={item} className="flex items-center gap-2"><span className="grid size-5 place-items-center rounded-full border border-[#3B82F6] text-[#60A5FA]"><Check className="size-3" /></span>{item}</span>)}
          </div>
          <div className="hero-reveal hero-delay-6 mt-5 flex items-center gap-4">
            <div className="flex -space-x-2">{["RP", "DL", "AS", "NW"].map((initials) => <span key={initials} className="grid size-8 place-items-center rounded-full border-2 border-[#071321] bg-gradient-to-br from-[#DBEAFE] to-[#93C5FD] text-[8px] font-bold text-[#1D4ED8]">{initials}</span>)}</div>
            <p className="text-[11px] leading-4 text-slate-400"><strong className="block text-xs text-white">2.000+ pelanggan puas</strong>mempercayakan perjalanan mereka</p>
          </div>
          </div>
        </div>
      </div>

      <div className="hero-reveal hero-delay-7 site-container relative z-20 -mt-[108px] pb-6 sm:-mt-[120px] lg:-mt-[126px] lg:pb-8">
        <div className="rounded-[24px] border border-white/70 bg-white/98 p-6 text-[#0F172A] shadow-[0_30px_80px_rgba(15,23,42,.24),inset_0_1px_0_rgba(255,255,255,1)] sm:p-8">
          <div className="mb-6">
            <h2 className="text-lg font-bold tracking-[-0.025em]">Mulai Perjalanan Anda</h2>
            <p className="mt-1 text-xs text-[#64748B]">Pilih jadwal dan lokasi untuk menemukan kendaraan yang tepat.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-[1fr_1fr_1.05fr_.72fr_auto] xl:items-end">
            {bookingFields.map(({ label, value, icon: Icon }) => (
              <label key={label} className="block text-[11px] font-medium text-[#64748B]">
                {label}
                <span className="mt-2 flex h-14 items-center gap-3 rounded-xl border border-[#DCE5F0] bg-[#F8FAFC] px-4 text-sm font-medium text-[#0F172A] shadow-[inset_0_1px_2px_rgba(15,23,42,.025)]"><span className="grid size-8 place-items-center rounded-lg bg-white text-[#2563EB] shadow-sm"><Icon className="size-4" /></span>{value}</span>
              </label>
            ))}
            <a href={bookingUrl()} target="_blank" rel="noreferrer" className="flex h-14 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] px-7 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(37,99,235,.28)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(37,99,235,.34)]"><Search className="size-4" />Cari Kendaraan</a>
          </div>
          <div className="mt-6 grid gap-4 border-t border-[#E2E8F0] pt-5 sm:grid-cols-2 lg:grid-cols-4">
            {bookingBenefits.map(({ title, note, icon: Icon }, index) => <div key={title} className={`flex items-center gap-3 lg:px-4 ${index === 0 ? "lg:pl-0" : "lg:border-l lg:border-[#E2E8F0]"}`}><span className="grid size-9 shrink-0 place-items-center rounded-full border border-[#DBEAFE] bg-[#EFF6FF] text-[#2563EB]"><Icon className="size-4" /></span><span><strong className="block text-[11px] font-semibold text-[#0F172A]">{title}</strong><span className="mt-0.5 block text-[10px] text-[#64748B]">{note}</span></span></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
