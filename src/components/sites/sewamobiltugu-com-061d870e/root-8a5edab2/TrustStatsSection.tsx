import { CarFront, Clock3, Headphones, Star } from "lucide-react";

const stats = [
  { value: "16+", label: "Pilihan Armada", icon: CarFront },
  { value: "4.9/5", label: "Rating Pelanggan", icon: Star },
  { value: "5 Menit", label: "Proses Booking", icon: Clock3 },
  { value: "24/7", label: "Customer Support", icon: Headphones },
] as const;

export function TrustStatsSection() {
  return (
    <section className="bg-[#F8FAFC] pb-8 pt-8 lg:pb-16 lg:pt-36">
      <div className="site-container grid overflow-hidden rounded-2xl bg-[#111827] sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ value, label, icon: Icon }, index) => (
          <div key={label} className={`flex items-center gap-4 px-7 py-6 ${index > 0 ? "border-t border-white/10 sm:border-t-0 sm:border-l" : ""} ${index === 2 ? "sm:border-l-0 sm:border-t lg:border-l lg:border-t-0" : ""}`}>
            <span className="grid size-11 place-items-center rounded-xl bg-[#2563EB]/15 text-[#60A5FA]"><Icon className="size-5" /></span>
            <span><strong className="block text-xl font-bold text-white">{value}</strong><span className="text-xs text-slate-400">{label}</span></span>
          </div>
        ))}
      </div>
    </section>
  );
}
