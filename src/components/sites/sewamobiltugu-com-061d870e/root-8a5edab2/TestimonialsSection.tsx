import { Quote, Star } from "lucide-react";

const testimonials = [
  { quote: "Mobil bersih, wangi, dan nyaman banget. Proses booking mudah dan adminnya responsif.", name: "Rizky Pratama", city: "Jakarta", initials: "RP" },
  { quote: "Pelayanan cepat dan profesional. Sopirnya juga ramah dan tepat waktu selama perjalanan.", name: "Dewi Lestari", city: "Bandung", initials: "DL" },
  { quote: "Harga transparan, tidak ada biaya tambahan. Unit juga terawat dan pilihannya lengkap.", name: "Andi Saputra", city: "Surabaya", initials: "AS" },
] as const;

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,.07),transparent_30%)]" />
      <div className="site-container relative">
        <header className="text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2563EB]">Testimoni pelanggan</p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-[#111827] sm:text-[38px]">Apa Kata Mereka?</h2>
        </header>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="group flex flex-col rounded-2xl border border-[#E2E8F0] bg-white p-7 shadow-[0_12px_34px_rgba(15,23,42,.055)] transition duration-300 hover:-translate-y-1 hover:border-[#BFDBFE] hover:shadow-[0_22px_48px_rgba(37,99,235,.11)]">
              <Quote className="size-9 fill-[#2563EB]/12 text-[#2563EB]" />
              <p className="mt-4 flex-1 text-sm leading-7 text-[#475569]">{item.quote}</p>
              <div className="mt-5 flex gap-1 text-[#F59E0B]">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="size-4 fill-current" />)}</div>
              <div className="mt-5 flex items-center gap-3 border-t border-[#E2E8F0] pt-5">
                <span className="grid size-11 place-items-center rounded-full border-2 border-white bg-gradient-to-br from-[#BFDBFE] to-[#60A5FA] text-xs font-bold text-white shadow-md">{item.initials}</span>
                <span><strong className="block text-sm text-[#111827]">{item.name}</strong><span className="text-xs text-[#94A3B8]">{item.city}</span></span>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-5">
          <div className="flex gap-1 text-[#F59E0B]">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="size-4 fill-current" />)}</div>
          <p className="text-xs text-[#64748B]"><strong className="text-[#111827]">4.9/5</strong> dari 2.000+ pelanggan</p>
          <span className="text-xs font-semibold text-[#2563EB]">Ulasan pelanggan DriveMate</span>
        </div>
      </div>
    </section>
  );
}
