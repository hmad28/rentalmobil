import Image from "next/image";
import { ArrowRight, Fuel, Gauge, MessageCircle } from "lucide-react";

import { assetRoot, bookingUrl, motorcycles } from "./content";

export function MotorFleetSection() {
  return (
    <section
      id="rental-motor"
      className="relative overflow-hidden bg-white py-20 lg:py-24"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={`${assetRoot}/motor-bg.webp`}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/[0.95]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_20%,rgba(37,99,235,.07),transparent_24%)]" />
      </div>

      <div className="site-container relative z-10">
        <header className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-[780px]">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#2563EB]">
              Armada motor DriveMate
            </p>
            <h2 className="text-[32px] font-bold leading-[1.15] tracking-[-0.04em] text-[#111827] sm:text-[36px] lg:text-[40px]">
              Sewa Motor Praktis untuk Keliling Bandung
            </h2>
            <p className="mt-4 max-w-[650px] text-sm leading-6 text-[#64748B]">
              Butuh transportasi cepat dan hemat di Bandung? Pilih layanan
              rental motor kami! Dengan motor terbaru, bahan bakar irit, dan
              harga bersahabat.
            </p>
          </div>

          <a
            href={bookingUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-11 w-fit shrink-0 items-center gap-2 rounded-lg border border-[#2563EB] px-5 text-[14px] font-semibold text-[#2563EB] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2563EB] hover:text-white active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
          >
            Lihat Unit Lainnya
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:translate-x-0.5"
            />
          </a>
        </header>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {motorcycles.map((motor, index) => (
            <article
              key={`${motor.name}-${index}`}
              className="group flex min-h-[450px] flex-col overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_10px_30px_rgba(15,23,42,.06)] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1.5 hover:border-[#93C5FD] hover:shadow-[0_24px_55px_rgba(37,99,235,.14)]"
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
                <span className="absolute right-3 top-3 rounded-lg border border-white/60 bg-white/85 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#16A34A] shadow-sm backdrop-blur">Available</span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="mb-4 flex min-h-14 items-start justify-between gap-3">
                  <div>
                  <h3 className="text-[17px] font-bold leading-6 text-[#111827]">
                    {motor.name}
                  </h3>
                  <p className="mt-2 flex gap-3 text-[10px] text-[#64748B]"><span className="flex items-center gap-1"><Gauge className="size-3.5 text-[#2563EB]" />Matic</span><span className="flex items-center gap-1"><Fuel className="size-3.5 text-[#2563EB]" />Irit</span></p>
                  </div>
                  <p className="text-right text-[14px] font-bold leading-5 text-[#0F172A] [font-variant-numeric:tabular-nums]">
                    {motor.dailyPrice}
                  </p>
                </div>

                <a
                  href={bookingUrl(motor.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Pesan ${motor.name} melalui WhatsApp`}
                  className="mt-auto flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-[#2563EB] bg-[#EFF6FF] text-xs font-semibold text-[#2563EB] transition-all duration-200 hover:bg-[#2563EB] hover:text-white active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
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
