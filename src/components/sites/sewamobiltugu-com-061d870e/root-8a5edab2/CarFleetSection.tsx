"use client";

import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useState } from "react";

import { bookingUrl, cars, motorcycles } from "./content";

type FleetTab = "cars" | "motorcycles";

export function CarFleetSection() {
  const [tab, setTab] = useState<FleetTab>("cars");
  const vehicles = tab === "cars" ? cars : motorcycles;

  return (
    <section id="armada" className="bg-[#F8FAFC] py-20 lg:py-24">
      <div className="site-container">
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div className="max-w-[650px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2563EB]">Armada terbaik kami</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.04em] text-[#111827] sm:text-[40px]">Pilih Kendaraan<br />Sesuai Kebutuhan Anda</h2>
            <p className="mt-4 max-w-[560px] text-sm leading-6 text-[#64748B]">Beragam pilihan mobil dan motor terawat untuk perjalanan bisnis, liburan, atau kebutuhan harian di Yogyakarta.</p>
          </div>
          <a href={bookingUrl()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8]">Lihat semua armada <ArrowRight className="size-4" /></a>
        </div>

        <div className="mt-8 flex gap-2 border-b border-[#E2E8F0]">
          <button type="button" onClick={() => setTab("cars")} className={`px-5 py-3 text-sm font-semibold transition ${tab === "cars" ? "border-b-2 border-[#2563EB] text-[#2563EB]" : "text-[#64748B] hover:text-[#111827]"}`}>Mobil</button>
          <button type="button" onClick={() => setTab("motorcycles")} className={`px-5 py-3 text-sm font-semibold transition ${tab === "motorcycles" ? "border-b-2 border-[#2563EB] text-[#2563EB]" : "text-[#64748B] hover:text-[#111827]"}`}>Motor</button>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {vehicles.map((vehicle, index) => {
            const price = "dailyPrice" in vehicle ? vehicle.dailyPrice : vehicle.selfDrivePrice;
            const secondaryPrice = "allInPrice" in vehicle ? vehicle.allInPrice : null;
            return (
              <article key={`${vehicle.name}-${index}`} className="group flex flex-col overflow-hidden rounded-xl border border-[#E2E8F0] bg-white shadow-[0_8px_24px_rgba(15,23,42,.045)] transition duration-300 hover:-translate-y-1 hover:border-[#BFDBFE] hover:shadow-[0_18px_42px_rgba(37,99,235,.10)]">
                <div className="relative aspect-[1.08] overflow-hidden bg-[#F8FAFC]">
                  <Image src={vehicle.image} alt={`${vehicle.name} DriveMate`} fill sizes="(min-width:1024px) 280px, (min-width:640px) 50vw, 100vw" className="object-cover hue-rotate-[212deg] saturate-[.92] transition-transform duration-500 group-hover:scale-[1.025]" />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="text-[15px] font-bold tracking-[-0.02em] text-[#111827]">{vehicle.name}</h3>
                  <p className="mt-1 text-[11px] text-[#64748B]">Armada bersih • Terawat</p>
                  <div className="mt-4 flex items-end justify-between gap-3">
                    <div><span className="block text-[10px] text-[#94A3B8]">Mulai dari</span><strong className="text-[15px] font-bold text-[#0F172A] [font-variant-numeric:tabular-nums]">{price}</strong></div>
                    {secondaryPrice ? <span className="max-w-[92px] text-right text-[10px] leading-4 text-[#64748B]">All-in<br />{secondaryPrice}</span> : null}
                  </div>
                  <a href={bookingUrl(vehicle.name)} target="_blank" rel="noreferrer" className="mt-5 flex h-10 items-center justify-center gap-2 rounded-lg border border-[#2563EB] text-xs font-semibold text-[#2563EB] transition hover:bg-[#2563EB] hover:text-white"><MessageCircle className="size-4" />Pesan Sekarang</a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
