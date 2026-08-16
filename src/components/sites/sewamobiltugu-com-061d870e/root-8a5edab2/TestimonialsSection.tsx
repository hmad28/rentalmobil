import Image from "next/image";
import { ArrowUpRight, MapPin, Quote, Star } from "lucide-react";

import { assetRoot } from "./content";

const testimonials = [
  { quote: "Mobil bersih, wangi, dan nyaman banget. Proses booking mudah dan adminnya responsif.", name: "Rizky Pratama", city: "Jakarta", initials: "RP" },
  { quote: "Pelayanan cepat dan profesional. Sopirnya juga ramah dan tepat waktu selama perjalanan.", name: "Dewi Lestari", city: "Bandung", initials: "DL" },
  { quote: "Harga transparan, tidak ada biaya tambahan. Unit juga terawat dan pilihannya lengkap.", name: "Andi Saputra", city: "Surabaya", initials: "AS" },
] as const;

function Stars() {
  return <span className="flex gap-1 text-[#F59E0B]">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="size-4 fill-current" />)}</span>;
}

export function TestimonialsSection() {
  const [featured, ...others] = testimonials;

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#F8FAFC_0%,#EEF5FF_100%)] py-20 lg:py-28">
      <div className="pointer-events-none absolute -right-32 -top-32 size-[430px] rounded-full bg-[#DBEAFE]/70 blur-3xl" />
      <div className="site-container relative grid items-stretch gap-10 lg:grid-cols-[.78fr_1.42fr] lg:gap-14">
        <aside className="relative min-h-[470px] overflow-hidden rounded-[28px] bg-[#07182D] text-white shadow-[0_28px_70px_rgba(15,23,42,.22)]">
          <Image src={`${assetRoot}/bandung-braga-sign.jpg`} alt="Suasana Jalan Braga, Bandung" fill sizes="(min-width:1024px) 420px, 100vw" className="object-cover object-[54%_76%]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,12,25,.16),rgba(4,21,43,.94)_74%)]" />
          <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#93C5FD]">Kepercayaan pelanggan</p>
            <div className="mt-3 flex items-end gap-2"><strong className="text-6xl font-bold leading-none tracking-[-0.06em]">4.9</strong><span className="pb-1 text-2xl font-semibold text-[#60A5FA]">/5</span></div>
            <div className="mt-4"><Stars /></div>
            <p className="mt-3 text-sm font-semibold">2.000+ pelanggan puas</p>
            <a href="#kontak" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-semibold text-[#111827] transition hover:-translate-y-0.5 hover:bg-[#EFF6FF]">Lihat ulasan pelanggan <ArrowUpRight className="size-4" /></a>
          </div>
        </aside>

        <div className="flex flex-col justify-center">
          <header>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2563EB]">Testimoni pelanggan</p>
            <h2 className="mt-3 max-w-[660px] text-3xl font-bold leading-[1.08] tracking-[-0.045em] text-[#111827] sm:text-[42px]">Dipercaya untuk<br /><span className="text-[#2563EB]">Setiap Perjalanan</span></h2>
          </header>

          <article className="relative mt-8 rounded-[22px] bg-white p-6 shadow-[0_18px_46px_rgba(15,23,42,.09)] sm:p-7">
            <Quote className="absolute right-6 top-5 size-12 fill-[#2563EB]/8 text-[#2563EB]/20" />
            <p className="relative max-w-[640px] text-sm leading-7 text-[#475569]">{featured.quote}</p>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-[#E2E8F0] pt-5">
              <div className="flex items-center gap-3"><span className="grid size-11 place-items-center rounded-full bg-gradient-to-br from-[#BFDBFE] to-[#2563EB] text-xs font-bold text-white shadow-md">{featured.initials}</span><span><strong className="block text-sm text-[#111827]">{featured.name}</strong><span className="mt-0.5 flex items-center gap-1 text-xs text-[#64748B]"><MapPin className="size-3 text-[#2563EB]" />{featured.city}</span></span></div>
              <div className="flex items-center gap-3"><Stars /><span className="text-[10px] font-semibold text-[#64748B]">Google Reviews</span></div>
            </div>
          </article>

          <div className="mt-7 grid gap-6 sm:grid-cols-2">
            {others.map((item) => (
              <article key={item.name} className="border-t-2 border-[#BFDBFE] pt-5">
                <Quote className="size-8 fill-[#2563EB]/10 text-[#2563EB]" />
                <p className="mt-3 text-[13px] leading-6 text-[#475569]">{item.quote}</p>
                <div className="mt-4 flex items-center justify-between gap-3"><div className="flex items-center gap-2.5"><span className="grid size-9 place-items-center rounded-full bg-[#DBEAFE] text-[10px] font-bold text-[#1D4ED8]">{item.initials}</span><span><strong className="block text-xs text-[#111827]">{item.name}</strong><span className="text-[10px] text-[#64748B]">{item.city}</span></span></div><Stars /></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
