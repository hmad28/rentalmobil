import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";

import { assetRoot, bookingUrl, motorcycles } from "./content";

export function MotorFleetSection() {
  return (
    <section
      id="rental-motor"
      className="relative overflow-hidden bg-[#F8FAFC] py-20"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={`${assetRoot}/motor-bg.webp`}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#F8FAFC]/[0.94]" />
      </div>

      <div className="site-container relative z-10">
        <header className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-[780px]">
            <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.16em] text-[#2563EB]">
              DriveMate
            </p>
            <h2 className="text-[32px] font-bold leading-[1.15] tracking-[-0.035em] text-[#111827] sm:text-[36px] lg:text-[40px]">
              Sewa Motor Praktis untuk Keliling Jogja
            </h2>
            <p className="mt-4 max-w-[720px] text-[16px] leading-[1.7] text-[#64748B] sm:text-[17px]">
              Butuh transportasi cepat dan hemat di Yogyakarta? Pilih layanan
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
            Unit Lainnya
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:translate-x-0.5"
            />
          </a>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {motorcycles.map((motor, index) => (
            <article
              key={`${motor.name}-${index}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-[#E2E8F0] bg-white shadow-[0_8px_28px_rgba(30,64,175,0.07)] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-[#BFDBFE] hover:shadow-[0_20px_48px_rgba(30,64,175,0.13)]"
            >
              <div className="overflow-hidden">
                <Image
                  src={motor.image}
                  alt={`${motor.name} - armada rental motor DriveMate`}
                  width={1080}
                  height={980}
                  sizes="(min-width: 1024px) 276px, (min-width: 640px) calc(50vw - 32px), calc(100vw - 40px)"
                  className="h-auto w-full hue-rotate-[212deg] saturate-[.92] transition-transform duration-500 group-hover:scale-[1.025]"
                />
              </div>

              <div className="flex flex-1 flex-col p-4">
                <div className="mb-4 flex min-h-12 items-center justify-between gap-3">
                  <h3 className="text-[18px] font-semibold leading-6 text-[#2563EB]">
                    {motor.name}
                  </h3>
                  <p className="text-right text-[14px] font-bold leading-5 text-[#0F172A] [font-variant-numeric:tabular-nums]">
                    {motor.dailyPrice}
                  </p>
                </div>

                <a
                  href={bookingUrl(motor.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Pesan ${motor.name} melalui WhatsApp`}
                  className="mt-auto flex h-[42px] w-full items-center justify-center gap-2 rounded-lg border border-[#2563EB] text-[14px] font-semibold text-[#2563EB] transition-all duration-200 hover:bg-[#2563EB] hover:text-white active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
                >
                  <MessageCircle aria-hidden="true" className="size-[18px]" />
                  Pesan
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
