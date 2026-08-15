import Image from "next/image";
import { benefits } from "./content";

export function BenefitsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#EFF6FF] to-[#F8FAFC] pb-[70px] pt-[88px]">
      <div className="site-container relative z-10">
        <div className="mx-auto mb-12 text-center">
          <p className="font-accent mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#2563EB]">
            DriveMate
          </p>
          <h2 className="text-3xl font-bold tracking-[-0.035em] text-[#111827] md:text-4xl">
            Mengapa{" "}
            <span className="text-[#2563EB]">
              Memilih DriveMate?
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-[680px] text-base leading-7 text-[#64748B]">
            Kami berkomitmen memberikan pengalaman sewa kendaraan yang aman,
            nyaman, dan terpercaya.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.title}
              className={`relative px-7 py-7 text-center ${
                index > 0 ? "border-t border-[#E2E8F0]" : ""
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
                className="mx-auto mb-5 size-[84px] object-contain hue-rotate-[212deg] saturate-[.92] lg:size-[104px]"
              />
              <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-[#111827]">
                {benefit.title}
              </h3>
              <p className="mx-auto mt-3 max-w-[240px] text-[15px] leading-[1.65] text-[#64748B]">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
      <p
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-[clamp(4.5rem,9vw,8.5rem)] font-bold tracking-[-0.06em] text-[#2563EB]/[0.04]"
      >
        DriveMate
      </p>
    </section>
  );
}
