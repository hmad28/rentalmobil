import Image from "next/image";
import { benefits } from "./content";

export function BenefitsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8eeee] to-white pb-[70px] pt-[88px]">
      <div className="site-container relative z-10">
        <div className="mx-auto mb-12 text-center">
          <p className="font-accent mb-2 text-lg text-[#282020]">
            Sewa Mobil Tugu
          </p>
          <h2 className="text-3xl font-bold text-[#171313] md:text-4xl">
            Mengapa{" "}
            <span className="text-[#a91313]">
              Memilih Sewa Mobil Tugu?
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-[680px] text-base leading-7 text-[#7c898d]">
            Kami berkomitmen memberikan pengalaman sewa kendaraan yang aman,
            nyaman, dan terpercaya.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.title}
              className={`relative px-7 py-7 text-center ${
                index > 0 ? "border-t border-[#eadede]" : ""
              } ${
                index === 1
                  ? "md:border-l md:border-t-0"
                  : index === 2
                    ? "md:border-t lg:border-l lg:border-t-0"
                    : index === 3
                      ? "md:border-l md:border-t lg:border-t-0"
                      : ""
              }`}
            >
              <Image
                src={benefit.image}
                alt=""
                width={104}
                height={104}
                loading="eager"
                className="mx-auto mb-5 size-[84px] object-contain lg:size-[104px]"
              />
              <h3 className="text-[21px] font-semibold text-[#a91313]">
                {benefit.title}
              </h3>
              <p className="mx-auto mt-3 max-w-[240px] text-[15px] leading-[1.65] text-[#7c898d]">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
      <p
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap font-serif text-[clamp(4.5rem,9vw,8.5rem)] font-normal text-[#a91313]/[0.035]"
      >
        Sewa Mobil Tugu
      </p>
    </section>
  );
}
