import Image from "next/image";

import { bookingUrl, cars } from "./content";

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-[18px] shrink-0"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M20.52 3.49A11.86 11.86 0 0 0 12.07 0C5.49 0 .14 5.35.14 11.93c0 2.1.55 4.16 1.6 5.97L.04 24l6.24-1.64a11.9 11.9 0 0 0 5.78 1.47h.01C18.65 23.83 24 18.48 24 11.9c0-3.19-1.24-6.18-3.48-8.41ZM12.07 21.82h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.7.97.99-3.61-.23-.37a9.86 9.86 0 0 1-1.52-5.29c0-5.44 4.43-9.87 9.88-9.87a9.8 9.8 0 0 1 6.98 2.9 9.8 9.8 0 0 1 2.89 6.97c-.01 5.45-4.44 9.89-9.89 9.89Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47a8.9 8.9 0 0 1-1.65-2.05c-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.42.25-.69.25-1.29.18-1.41-.08-.13-.27-.2-.57-.35Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function CarFleetSection() {
  return (
    <section
      className="bg-[linear-gradient(180deg,#fff_0%,#fff8f6_24%,#f6c9c7_66%,#b70f14_100%)] pb-24 pt-20"
      id="rental-mobil"
    >
      <div className="mx-auto w-full max-w-[1216px] px-5">
        <header className="mb-11 max-w-[780px] md:mb-12">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.08em] text-[#bd1519]">
            Sewa Mobil Tugu
          </p>
          <h2 className="text-[32px] font-bold leading-[1.2] tracking-[-0.025em] text-[#b41116] sm:text-[36px] lg:text-[40px]">
            Sewa Mobil Terpercaya di Yogyakarta
          </h2>
          <p className="mt-4 max-w-[720px] text-[16px] leading-[1.7] text-[#6f7277] sm:text-[17px]">
            Nikmati kenyamanan perjalanan bersama armada mobil terbaik dari
            Sewa Mobil Tugu.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {cars.map((car) => (
            <article
              className="group flex min-h-[472px] flex-col overflow-hidden rounded-lg bg-[#fffdfb] shadow-[0_8px_24px_rgba(70,0,0,0.08)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(90,0,0,0.14)]"
              key={car.name}
            >
              <Image
                alt={`${car.name} - armada Sewa Mobil Tugu`}
                className="h-auto w-full"
                height={980}
                sizes="(min-width: 1024px) 276px, (min-width: 640px) calc(50vw - 38px), calc(100vw - 40px)"
                src={car.image}
                width={1080}
              />

              <div className="grid flex-1 grid-cols-2 items-center px-3 py-5 text-center sm:px-2 lg:px-3">
                <div className="flex min-h-[72px] flex-col justify-center border-r border-[#eadfdd] px-1.5 sm:px-2">
                  <span className="text-[13px] leading-5 text-[#77797d]">
                    Lepas Kunci
                  </span>
                  <strong className="mt-1 text-[15px] font-bold leading-5 text-[#181818] lg:text-[15px] xl:text-[16px]">
                    {car.selfDrivePrice}
                  </strong>
                </div>
                <div className="flex min-h-[72px] flex-col justify-center px-1.5 sm:px-2">
                  <span className="text-[13px] leading-5 text-[#77797d]">
                    All IN (Driver + BBM)
                  </span>
                  <strong className="mt-1 text-[15px] font-bold leading-5 text-[#181818] lg:text-[15px] xl:text-[16px]">
                    {car.allInPrice}
                  </strong>
                </div>
              </div>

              <div className="border-t border-[#efe5e3] px-3.5 py-3.5">
                <a
                  aria-label={`Pesan ${car.name} melalui WhatsApp`}
                  className="flex h-[42px] w-full items-center justify-center gap-2 rounded-md border border-[#d0161b] text-[15px] font-semibold text-[#c41419] transition-colors duration-200 hover:bg-[#c41419] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c41419]"
                  href={bookingUrl(car.name)}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <WhatsAppIcon />
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
