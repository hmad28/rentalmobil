import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Fuel, Gauge, MapPin, MessageCircle, Star } from "lucide-react";

import { assetRoot, bookingUrl, motorcycles } from "./content";

export function MotorFleetSection() {
  const promos = ["Paling Populer", "Harga Hemat", "Favorit Harian", "Tersedia Hari Ini", "Irit", "Best Seller", "City Ride", "Unit Terbatas"] as const;

  return (
    <section
      id="rental-motor"
      className="relative overflow-hidden bg-[#061426] py-20 text-white lg:py-28"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={`${assetRoot}/bandung-braga-dusk.jpg`}
          alt=""
          fill
          sizes="100vw"
          className="scale-[1.03] object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,12,24,.99)_0%,rgba(4,20,40,.93)_35%,rgba(5,23,45,.82)_68%,rgba(4,16,31,.93)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(37,99,235,.3),transparent_28%)]" />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(96,165,250,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,.1)_1px,transparent_1px)] [background-size:54px_54px]" />
      </div>

      <div className="site-container relative z-10">
        <header className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-[780px]">
            <p className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#60A5FA]">
              <MapPin className="size-4" /> Jelajahi Bandung lebih bebas
            </p>
            <h2 className="text-[32px] font-bold leading-[1.15] tracking-[-0.04em] text-white sm:text-[36px] lg:text-[44px]">
              Sewa Motor Praktis untuk Keliling Bandung
            </h2>
            <p className="mt-4 max-w-[650px] text-sm leading-6 text-slate-300">
              Butuh transportasi cepat dan hemat di Bandung? Pilih layanan
              rental motor kami! Dengan motor terbaru, bahan bakar irit, dan
              harga bersahabat.
            </p>
          </div>

          <Link
            href="/rental-motor"
            className="group inline-flex h-11 w-fit shrink-0 items-center gap-2 rounded-lg border border-[#60A5FA]/60 bg-[#2563EB]/15 px-5 text-[14px] font-semibold text-white backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2563EB] active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#60A5FA]"
          >
            Lihat Unit Lainnya
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </header>

        <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4 lg:gap-6">
          {motorcycles.map((motor, index) => (
            <article
              key={`${motor.name}-${index}`}
              className="group flex min-h-[450px] w-[82vw] max-w-[310px] shrink-0 snap-start flex-col overflow-hidden rounded-[20px] border border-white/60 bg-white shadow-[0_18px_46px_rgba(0,0,0,.28)] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-2 hover:border-[#93C5FD] hover:shadow-[0_28px_64px_rgba(37,99,235,.3)] sm:w-auto sm:max-w-none"
            >
              <div className="relative aspect-[1.03] overflow-hidden bg-[radial-gradient(circle_at_50%_38%,#EFF6FF_0%,#DBEAFE_52%,#BFDBFE_100%)]">
                <Image
                  src={motor.image}
                  alt={`${motor.name} - armada rental motor DriveMate`}
                  fill
                  sizes="(min-width: 1024px) 276px, (min-width: 640px) calc(50vw - 32px), calc(100vw - 40px)"
                  className="object-cover hue-rotate-[212deg] saturate-[.92] transition-transform duration-500 group-hover:scale-[1.025]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0F3E88]/20 to-transparent" />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-lg bg-[#2563EB] px-2.5 py-1.5 text-[9px] font-bold text-white shadow-[0_8px_20px_rgba(37,99,235,.28)]"><Star className="size-3 fill-current" />{promos[index]}</span>
                <span className="absolute right-3 top-3 rounded-lg border border-white/60 bg-white/90 px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.08em] text-[#16A34A] shadow-sm backdrop-blur">Tersedia</span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="mb-4 flex min-h-14 items-start justify-between gap-3">
                  <div>
                  <h3 className="text-[17px] font-bold leading-6 text-[#111827]">
                    {motor.name}
                  </h3>
                  <p className="mt-2 flex gap-3 text-[10px] text-[#64748B]"><span className="flex items-center gap-1"><Gauge className="size-3.5 text-[#2563EB]" />Matic</span><span className="flex items-center gap-1"><Fuel className="size-3.5 text-[#2563EB]" />Irit</span></p>
                  </div>
                  <p className="text-right text-[17px] font-bold leading-5 text-[#2563EB] [font-variant-numeric:tabular-nums]">
                    {motor.dailyPrice}
                  </p>
                </div>

                <a
                  href={bookingUrl(motor.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Pesan ${motor.name} melalui WhatsApp`}
                  className="mt-auto flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#2563EB] text-xs font-semibold text-white shadow-[0_10px_22px_rgba(37,99,235,.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1D4ED8] active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
                >
                  <MessageCircle aria-hidden="true" className="size-[18px]" />
                  Pesan Sekarang
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
