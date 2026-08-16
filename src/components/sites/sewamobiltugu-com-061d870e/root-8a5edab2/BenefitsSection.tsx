import { CalendarCheckIcon } from "@phosphor-icons/react/dist/ssr/CalendarCheck";
import { CarIcon } from "@phosphor-icons/react/dist/ssr/Car";
import { CarSimpleIcon } from "@phosphor-icons/react/dist/ssr/CarSimple";
import { CheckCircleIcon } from "@phosphor-icons/react/dist/ssr/CheckCircle";
import { CreditCardIcon } from "@phosphor-icons/react/dist/ssr/CreditCard";
import { SparkleIcon } from "@phosphor-icons/react/dist/ssr/Sparkle";
import { SteeringWheelIcon } from "@phosphor-icons/react/dist/ssr/SteeringWheel";
import { TagIcon } from "@phosphor-icons/react/dist/ssr/Tag";
import { TimerIcon } from "@phosphor-icons/react/dist/ssr/Timer";
import Image from "next/image";

import { assetRoot, benefits } from "./content";

const benefitIcons = [CarIcon, TimerIcon, TagIcon, SteeringWheelIcon] as const;
const steps = [
  { title: "Pilih Tanggal & Kendaraan", description: "Tentukan jadwal, lokasi, dan kendaraan yang sesuai kebutuhan Anda.", icon: CalendarCheckIcon },
  { title: "Konfirmasi & Pembayaran", description: "Isi data pemesan, pilih metode pembayaran, dan selesaikan booking.", icon: CreditCardIcon },
  { title: "Siap Jalan!", description: "Kendaraan siap dijemput sesuai waktu dan lokasi yang Anda pilih.", icon: CarSimpleIcon },
] as const;

export function BenefitsSection() {
  return (
    <section id="layanan" className="relative scroll-mt-20 overflow-hidden bg-[linear-gradient(180deg,#EEF5FF_0%,#F8FAFC_48%,#FFFFFF_100%)] py-16 lg:py-20">
      <Image src={`${assetRoot}/bandung-gedung-sate.jpg`} alt="" fill sizes="100vw" className="pointer-events-none object-cover object-center opacity-[0.14] mix-blend-multiply" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(238,245,255,.36),rgba(248,250,252,.82)_45%,rgba(255,255,255,.97)),radial-gradient(circle_at_8%_22%,rgba(37,99,235,.1),transparent_22%),radial-gradient(circle_at_92%_76%,rgba(37,99,235,.06),transparent_20%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-10 h-44 opacity-40 [background-image:radial-gradient(circle,#60A5FA_1.2px,transparent_1.2px)] [background-size:24px_24px] [mask-image:linear-gradient(90deg,black,transparent_32%,transparent_68%,black)]" />
      <div className="site-container relative">
        <header className="mx-auto max-w-[680px] text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2563EB]">Kenapa memilih DriveMate?</p>
          <h2 className="mt-3 text-3xl font-bold leading-[1.12] tracking-[-0.045em] text-[#111827] sm:text-[38px]">Pengalaman Sewa yang<br />Mudah, Aman &amp; Nyaman</h2>
          <p className="mx-auto mt-3 max-w-[580px] text-[13px] leading-6 text-[#64748B]">Kami berkomitmen memberikan pengalaman sewa kendaraan yang aman, nyaman, dan terpercaya.</p>
        </header>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefitIcons[index];
            return (
              <article key={benefit.title} className="group flex min-h-[224px] flex-col items-center rounded-[18px] border border-white/80 bg-white/88 px-5 py-5 text-center shadow-[0_16px_42px_rgba(37,99,235,.09)] backdrop-blur-sm transition duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_24px_54px_rgba(37,99,235,.15)]">
                <span className="relative grid h-[82px] w-[92px] place-items-center text-[#2563EB] transition duration-300 group-hover:scale-105">
                  <span className="absolute inset-x-1 bottom-1 h-14 rounded-[50%] bg-[radial-gradient(circle,#DBEAFE_0%,#EFF6FF_62%,transparent_64%)]" />
                  <Icon className="relative size-[68px] drop-shadow-[0_9px_10px_rgba(37,99,235,.14)]" weight="duotone" />
                  {index === 0 ? <SparkleIcon className="absolute right-0 top-0 size-6 text-[#60A5FA]" weight="fill" /> : null}
                </span>
                <h3 className="mt-3 max-w-[230px] text-[16px] font-bold leading-5 text-[#111827]">{benefit.title}</h3>
                <p className="mx-auto mt-2 max-w-[230px] text-[12px] leading-[1.65] text-[#64748B]">{benefit.description}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-14 lg:mt-16">
          <header className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2563EB]">Cara kerja</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.045em] text-[#111827] sm:text-[36px]">Mudah dalam 3 Langkah</h2>
          </header>
          <div className="relative mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
            <div className="absolute left-[16.66%] right-[16.66%] top-[51px] hidden border-t-2 border-dashed border-[#93C5FD] md:block" />
            {steps.map(({ title, description, icon: Icon }, index) => (
              <article key={title} className="relative z-10 flex flex-col items-center text-center">
                <span className="relative grid size-[104px] place-items-center rounded-[24px] bg-[linear-gradient(145deg,#F4F8FF,#E8F1FF)] text-[#2563EB] shadow-[0_14px_32px_rgba(37,99,235,.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_38px_rgba(37,99,235,.15)]">
                  <Icon className="size-[58px]" weight="duotone" />
                  {index === 1 ? <CheckCircleIcon className="absolute -bottom-2 -right-2 size-8 rounded-full bg-white text-[#111827]" weight="fill" /> : null}
                  <span className="absolute -left-4 -top-3 grid size-9 place-items-center rounded-full bg-[#2563EB] text-sm font-bold text-white shadow-[0_8px_18px_rgba(37,99,235,.28)] ring-[5px] ring-white">{index + 1}</span>
                </span>
                <h3 className="mt-5 text-[15px] font-bold text-[#111827]">{title}</h3>
                <p className="mx-auto mt-2 max-w-[300px] text-[12px] leading-[1.65] text-[#64748B]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
