import Image from "next/image";
import { ArrowRight, Gauge, MessageCircle, Snowflake, UsersRound } from "lucide-react";

import { bookingUrl, cars } from "./content";

export function CarFleetSection() {
  return (
    <section id="armada" className="relative overflow-hidden bg-[#F8FAFC] py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(37,99,235,.07),transparent_24%),radial-gradient(circle_at_88%_72%,rgba(59,130,246,.05),transparent_28%)]" />
      <div className="site-container relative">
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div className="max-w-[650px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2563EB]">Armada terbaik kami</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.04em] text-[#111827] sm:text-[40px]">Pilih Kendaraan<br />Sesuai Kebutuhan Anda</h2>
            <p className="mt-4 max-w-[560px] text-sm leading-6 text-[#64748B]">Beragam pilihan mobil dan motor terawat untuk perjalanan bisnis, liburan, atau kebutuhan harian di Bandung.</p>
          </div>
          <a href={bookingUrl()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8]">Lihat semua armada <ArrowRight className="size-4" /></a>
        </div>

        <div className="mt-8 flex gap-2 border-b border-[#E2E8F0]">
          <span className="border-b-2 border-[#2563EB] px-5 py-3 text-sm font-semibold text-[#2563EB]">Mobil</span>
          <a href="#rental-motor" className="px-5 py-3 text-sm font-semibold text-[#64748B] transition hover:text-[#111827]">Motor</a>
        </div>

        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {cars.map((vehicle, index) => {
            const price = vehicle.selfDrivePrice;
            const secondaryPrice = vehicle.allInPrice;
            return (
              <article key={`${vehicle.name}-${index}`} className="group flex min-h-[470px] flex-col overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_10px_30px_rgba(15,23,42,.06)] transition duration-300 hover:-translate-y-1.5 hover:border-[#93C5FD] hover:shadow-[0_24px_55px_rgba(37,99,235,.14)]">
                <div className="relative aspect-[1.03] overflow-hidden bg-[radial-gradient(circle_at_50%_38%,#EFF6FF_0%,#DBEAFE_52%,#BFDBFE_100%)]">
                  <Image src={vehicle.image} alt={`${vehicle.name} DriveMate`} fill sizes="(min-width:1024px) 280px, (min-width:640px) 50vw, 100vw" className="object-cover hue-rotate-[212deg] saturate-[.92] transition-transform duration-500 group-hover:scale-[1.025]" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0F3E88]/20 to-transparent" />
                  <span className="absolute right-3 top-3 rounded-lg border border-white/60 bg-white/85 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#16A34A] shadow-sm backdrop-blur">Available</span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-[17px] font-bold tracking-[-0.025em] text-[#111827]">{vehicle.name}</h3>
                  <div className="mt-3 flex flex-wrap gap-x-3 gap-y-2 text-[10px] text-[#64748B]">
                    <span className="flex items-center gap-1"><Gauge className="size-3.5 text-[#2563EB]" />{vehicle.name.includes("Manual") ? "Manual" : "Matic"}</span>
                    <span className="flex items-center gap-1"><UsersRound className="size-3.5 text-[#2563EB]" />{vehicle.name.includes("Brio") ? "5" : "7"} Kursi</span>
                    <span className="flex items-center gap-1"><Snowflake className="size-3.5 text-[#2563EB]" />AC</span>
                  </div>
                  <div className="mt-5 flex items-end justify-between gap-3 border-t border-[#E2E8F0] pt-4">
                    <div><span className="block text-[10px] text-[#94A3B8]">Mulai dari</span><strong className="text-[15px] font-bold text-[#0F172A] [font-variant-numeric:tabular-nums]">{price}</strong></div>
                    {secondaryPrice ? <span className="max-w-[92px] text-right text-[10px] leading-4 text-[#64748B]">All-in<br />{secondaryPrice}</span> : null}
                  </div>
                  <a href={bookingUrl(vehicle.name)} target="_blank" rel="noreferrer" className="mt-5 flex h-11 items-center justify-center gap-2 rounded-xl border border-[#2563EB] bg-[#EFF6FF] text-xs font-semibold text-[#2563EB] transition hover:bg-[#2563EB] hover:text-white"><MessageCircle className="size-4" />Pesan Sekarang</a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
