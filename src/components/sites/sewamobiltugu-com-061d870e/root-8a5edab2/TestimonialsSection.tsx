import { Quote, Star } from "lucide-react";

const testimonials = [
  { quote: "Mobil bersih, wangi, dan nyaman banget. Proses booking mudah dan adminnya responsif.", name: "Rizky Pratama", city: "Jakarta", initials: "RP" },
  { quote: "Pelayanan cepat dan profesional. Sopirnya juga ramah dan tepat waktu selama perjalanan.", name: "Dewi Lestari", city: "Bandung", initials: "DL" },
  { quote: "Harga transparan, tidak ada biaya tambahan. Unit juga terawat dan pilihannya lengkap.", name: "Andi Saputra", city: "Surabaya", initials: "AS" },
] as const;

export function TestimonialsSection() {
  return (
    <section className="bg-[#F8FAFC] py-20 lg:py-24">
      <div className="site-container">
        <header className="text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2563EB]">Testimoni pelanggan</p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-[#111827] sm:text-[38px]">Apa Kata Mereka?</h2>
        </header>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="flex flex-col rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-[0_8px_28px_rgba(15,23,42,.045)]">
              <Quote className="size-7 fill-[#2563EB] text-[#2563EB]" />
              <p className="mt-4 flex-1 text-sm leading-7 text-[#475569]">{item.quote}</p>
              <div className="mt-5 flex gap-1 text-[#F59E0B]">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="size-4 fill-current" />)}</div>
              <div className="mt-5 flex items-center gap-3 border-t border-[#E2E8F0] pt-5">
                <span className="grid size-10 place-items-center rounded-full bg-[#DBEAFE] text-xs font-bold text-[#2563EB]">{item.initials}</span>
                <span><strong className="block text-sm text-[#111827]">{item.name}</strong><span className="text-xs text-[#94A3B8]">{item.city}</span></span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
