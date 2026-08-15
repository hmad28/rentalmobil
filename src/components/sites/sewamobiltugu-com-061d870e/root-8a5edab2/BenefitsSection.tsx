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
    <section id="layanan" className="bg-white py-20 lg:py-28">
      <div className="site-container">
        <header className="mx-auto max-w-[720px] text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2563EB]">Kenapa memilih DriveMate?</p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-[#111827] sm:text-[40px]">Pengalaman Sewa yang<br /><span className="text-[#2563EB]">Mudah, Aman &amp; Nyaman</span></h2>
          <p className="mx-auto mt-4 max-w-[600px] text-sm leading-6 text-[#64748B]">Kami berkomitmen memberikan pengalaman sewa kendaraan yang aman, nyaman, dan terpercaya.</p>
        </header>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefitIcons[index];
            return (
              <article key={benefit.title} className={`px-7 py-6 text-center ${index > 0 ? "border-t border-[#E2E8F0] md:border-t-0 md:border-l" : ""} ${index === 2 ? "md:border-l-0 md:border-t lg:border-l lg:border-t-0" : ""}`}>
                <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-[#EFF6FF] text-[#2563EB]"><Icon className="size-8" strokeWidth={1.7} /></span>
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
          <div className="relative mt-12 grid gap-10 md:grid-cols-3 md:gap-6">
            <div className="absolute left-[16.66%] right-[16.66%] top-5 hidden border-t border-dashed border-[#93C5FD] md:block" />
            {steps.map(({ title, description, icon: Icon }, index) => (
              <article key={title} className="relative text-center">
                <span className="relative z-10 mx-auto grid size-10 place-items-center rounded-full bg-[#2563EB] text-sm font-bold text-white shadow-[0_0_0_7px_white]">{index + 1}</span>
                <span className="mx-auto mt-6 grid size-20 place-items-center rounded-2xl bg-[#EFF6FF] text-[#2563EB]"><Icon className="size-9" strokeWidth={1.7} /></span>
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
