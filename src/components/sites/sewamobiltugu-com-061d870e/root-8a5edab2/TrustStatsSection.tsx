import { CarFront, Clock3, Headphones, Star } from "lucide-react";

const stats = [
  { value: "16+", label: "Pilihan Armada", icon: CarFront },
  { value: "4.9/5", label: "Rating Pelanggan", icon: Star },
  { value: "5 Menit", label: "Proses Booking", icon: Clock3 },
  { value: "24/7", label: "Customer Support", icon: Headphones },
] as const;

export function TrustStatsSection() {
  return (
    <section className="bg-[#F8FAFC] pb-10 pt-5 lg:pb-20 lg:pt-7">
      <div className="site-container grid overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(110deg,#0B1728_0%,#111827_55%,#10274A_100%)] shadow-[0_20px_50px_rgba(15,23,42,.16)] sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ value, label, icon: Icon }, index) => (
          <div key={label} className={`flex items-center gap-4 px-8 py-7 ${index > 0 ? "border-t border-white/15 sm:border-t-0 sm:border-l" : ""} ${index === 2 ? "sm:border-l-0 sm:border-t lg:border-l lg:border-t-0" : ""}`}>
            <span className="grid size-12 place-items-center rounded-2xl border border-[#60A5FA]/20 bg-[#2563EB]/15 text-[#60A5FA]"><Icon className="size-6" strokeWidth={1.7} /></span>
            <span><strong className="block text-[26px] font-bold leading-none tracking-[-0.04em] text-white">{value}</strong><span className="mt-1.5 block text-[11px] font-medium text-slate-400">{label}</span></span>
          </div>
        ))}
      </div>
    </section>
  );
}
