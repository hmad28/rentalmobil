import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";

import { assetRoot, bookingUrl, motorcycles } from "./content";

export function MotorFleetSection() {
  return (
    <section
      id="rental-motor"
      className="relative overflow-hidden py-20"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={`${assetRoot}/motor-bg.webp`}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/[0.89]" />
      </div>

      <div className="site-container relative z-10">
        <header className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-[780px]">
            <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.08em] text-[#a91313]">
              Sewa Mobil Tugu
            </p>
            <h2 className="text-[32px] font-bold leading-[1.2] tracking-[-0.025em] text-[#171313] sm:text-[36px] lg:text-[40px]">
              Sewa Motor Praktis untuk Keliling Jogja
            </h2>
            <p className="mt-4 max-w-[720px] text-[16px] leading-[1.7] text-[#718084] sm:text-[17px]">
              Butuh transportasi cepat dan hemat di Yogyakarta? Pilih layanan
              rental motor kami! Dengan motor terbaru, bahan bakar irit, dan
              harga bersahabat.
            </p>
          </div>

          <a
            href={bookingUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-11 w-fit shrink-0 items-center gap-2 rounded-lg border border-[#a91313] px-5 text-[14px] font-semibold text-[#a91313] transition-colors duration-200 hover:bg-[#a91313] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a91313]"
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
              className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-[0_8px_24px_rgba(70,0,0,0.08)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(90,0,0,0.14)]"
            >
              <div className="overflow-hidden">
                <Image
                  src={motor.image}
                  alt={`${motor.name} - armada rental motor Sewa Mobil Tugu`}
                  width={1080}
                  height={980}
                  sizes="(min-width: 1024px) 276px, (min-width: 640px) calc(50vw - 32px), calc(100vw - 40px)"
                  className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.025]"
                />
              </div>

              <div className="flex flex-1 flex-col p-4">
                <div className="mb-4 flex min-h-12 items-center justify-between gap-3">
                  <h3 className="text-[18px] font-semibold leading-6 text-[#a91313]">
                    {motor.name}
                  </h3>
                  <p className="text-right text-[14px] font-bold leading-5 text-[#171313]">
                    {motor.dailyPrice}
                  </p>
                </div>

                <a
                  href={bookingUrl(motor.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Pesan ${motor.name} melalui WhatsApp`}
                  className="mt-auto flex h-[42px] w-full items-center justify-center gap-2 rounded-md border border-[#d0161b] text-[15px] font-semibold text-[#c41419] transition-colors duration-200 hover:bg-[#c41419] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c41419]"
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
