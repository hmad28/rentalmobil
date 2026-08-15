import { CalendarCheck2, CarFront, HandCoins, ShieldCheck, Sparkles, UserRoundCheck } from "lucide-react";

import { benefits } from "./content";

const benefitIcons = [Sparkles, CalendarCheck2, HandCoins, UserRoundCheck] as const;
const steps = [
  { title: "Pilih Tanggal & Kendaraan", description: "Tentukan jadwal, lokasi, dan kendaraan yang sesuai kebutuhan Anda.", icon: CalendarCheck2 },
  { title: "Konfirmasi & Pembayaran", description: "Isi data pemesan, pilih metode pembayaran, dan selesaikan booking.", icon: ShieldCheck },
  { title: "Siap Jalan!", description: "Kendaraan siap dijemput sesuai waktu dan lokasi yang Anda pilih.", icon: CarFront },
] as const;

export function BenefitsSection() {
  return (
    <section id="layanan" className="relative overflow-hidden bg-[linear-gradient(180deg,#F8FAFC_0%,#FFFFFF_45%,#F8FAFC_100%)] py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_32%,rgba(37,99,235,.06),transparent_22%),radial-gradient(circle_at_92%_72%,rgba(37,99,235,.05),transparent_24%)]" />
      <div className="site-container relative">
        <header className="mx-auto max-w-[720px] text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2563EB]">Kenapa memilih DriveMate?</p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-[#111827] sm:text-[40px]">Pengalaman Sewa yang<br /><span className="text-[#2563EB]">Mudah, Aman &amp; Nyaman</span></h2>
          <p className="mx-auto mt-4 max-w-[600px] text-sm leading-6 text-[#64748B]">Kami berkomitmen memberikan pengalaman sewa kendaraan yang aman, nyaman, dan terpercaya.</p>
        </header>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefitIcons[index];
            return (
              <article key={benefit.title} className="group rounded-2xl border border-[#E2E8F0] bg-white px-6 py-8 text-center shadow-[0_10px_30px_rgba(15,23,42,.045)] transition duration-300 hover:-translate-y-1 hover:border-[#BFDBFE] hover:shadow-[0_20px_45px_rgba(37,99,235,.11)]">
                <span className="mx-auto grid size-16 place-items-center rounded-2xl border border-[#DBEAFE] bg-[linear-gradient(145deg,#EFF6FF,#DBEAFE)] text-[#2563EB] shadow-[0_10px_24px_rgba(37,99,235,.12)] transition group-hover:scale-105"><Icon className="size-8" strokeWidth={1.7} /></span>
                <h3 className="mt-5 text-base font-bold text-[#111827]">{benefit.title}</h3>
                <p className="mx-auto mt-3 max-w-[230px] text-xs leading-6 text-[#64748B]">{benefit.description}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-24">
          <header className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2563EB]">Cara kerja</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-[#111827]">Mudah dalam <span className="text-[#2563EB]">3 Langkah</span></h2>
          </header>
          <div className="relative mt-12 grid gap-6 md:grid-cols-3">
            <div className="absolute left-[16.66%] right-[16.66%] top-5 hidden border-t border-dashed border-[#93C5FD] md:block" />
            {steps.map(({ title, description, icon: Icon }, index) => (
              <article key={title} className="relative rounded-2xl border border-[#E2E8F0] bg-white px-6 pb-7 pt-0 text-center shadow-[0_12px_34px_rgba(15,23,42,.05)] transition hover:-translate-y-1 hover:border-[#BFDBFE]">
                <span className="relative z-10 mx-auto -mt-5 grid size-10 place-items-center rounded-full bg-[#2563EB] text-sm font-bold text-white shadow-[0_0_0_7px_#F8FAFC]">{index + 1}</span>
                <span className="mx-auto mt-6 grid size-20 place-items-center rounded-2xl bg-[linear-gradient(145deg,#EFF6FF,#DBEAFE)] text-[#2563EB]"><Icon className="size-9" strokeWidth={1.7} /></span>
                <h3 className="mt-5 text-sm font-bold text-[#111827]">{title}</h3>
                <p className="mx-auto mt-2 max-w-[270px] text-xs leading-6 text-[#64748B]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
