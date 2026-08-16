import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr/WhatsappLogo";
import { ArrowRight, CheckCircle2, Gauge, Home, MapPin, ShieldCheck, Snowflake, UsersRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { assetRoot, bookingUrl, cars, motorcycles } from "./content";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type FleetKind = "car" | "motor";

const carPromos = ["Best Seller", "Favorit Keluarga", "City Car", "Paling Populer", "Nyaman", "Unit Terbaru", "City Tour", "Premium"];
const motorPromos = ["Paling Populer", "Stylish", "Hemat", "Tersedia Hari Ini", "Best Seller", "Bertenaga", "City Ride", "Premium"];

const pageConfig = {
  car: {
    eyebrow: "Katalog armada DriveMate",
    title: "Rental Mobil Bandung",
    description: "Pilih armada terbaik untuk perjalanan bisnis, keluarga, dan wisata di Bandung.",
    background: `${assetRoot}/bandung-gedung-sate.jpg`,
    backgroundPosition: "object-center",
    sectionTitle: "Pilih Kendaraan Anda",
    sectionDescription: "Armada terbaru, bersih, dan siap menemani perjalanan Anda di Bandung Raya.",
    items: cars,
    promos: carPromos,
  },
  motor: {
    eyebrow: "Jelajahi Bandung lebih bebas",
    title: "Rental Motor Bandung",
    description: "Sewa motor praktis untuk menjelajahi setiap sudut Bandung dengan lebih bebas.",
    background: `${assetRoot}/bandung-braga-dusk.jpg`,
    backgroundPosition: "object-center",
    sectionTitle: "Pilih Motor Favorit Anda",
    sectionDescription: "Unit irit, terawat, dan praktis untuk mobilitas harian maupun city ride di Bandung.",
    items: motorcycles,
    promos: motorPromos,
  },
} as const;

export function FleetCatalogPage({ kind }: { kind: FleetKind }) {
  const config = pageConfig[kind];
  const isCar = kind === "car";

  return (
    <div id="top" className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <SiteHeader />
      <main>
        <section className="relative flex min-h-[440px] items-end overflow-hidden pb-14 pt-[148px] text-white sm:min-h-[480px] lg:pb-16">
          <Image src={config.background} alt="" fill priority sizes="100vw" className={`object-cover ${config.backgroundPosition}`} />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,10,23,.98)_0%,rgba(3,17,39,.89)_43%,rgba(4,19,42,.38)_72%,rgba(3,12,28,.55)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_35%,rgba(37,99,235,.24),transparent_31%)]" />
          <div className="site-container relative z-10">
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-medium text-slate-300">
              <Link href="/" className="flex items-center gap-2 transition hover:text-white"><Home className="size-3.5 text-[#60A5FA]" />Beranda</Link>
              <span aria-hidden="true">/</span><span className="text-white">{isCar ? "Rental Mobil" : "Rental Motor"}</span>
            </nav>
            <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#60A5FA]"><MapPin className="size-4" />{config.eyebrow}</p>
            <h1 className="mt-4 max-w-[680px] text-[42px] font-bold leading-[1.02] tracking-[-0.055em] sm:text-[54px] lg:text-[64px]">{config.title}</h1>
            <p className="mt-5 max-w-[590px] text-sm leading-6 text-slate-200 sm:text-base sm:leading-7">{config.description}</p>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-slate-100">
              <span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-[#60A5FA]" />Armada lengkap</span>
              <span className="flex items-center gap-2"><ShieldCheck className="size-4 text-[#60A5FA]" />Bersih & terawat</span>
              <span className="flex items-center gap-2"><MapPin className="size-4 text-[#60A5FA]" />Siap antar-jemput</span>
            </div>
          </div>
        </section>

        <section className="catalog-atmosphere relative overflow-hidden py-16 lg:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_16%,rgba(37,99,235,.09),transparent_25%),radial-gradient(circle_at_91%_62%,rgba(96,165,250,.08),transparent_26%)]" />
          <div className="site-container relative">
            <div className="flex flex-col justify-between gap-5 border-b border-[#D9E4F2] pb-7 md:flex-row md:items-end">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.19em] text-[#2563EB]">{isCar ? "Katalog mobil" : "Katalog motor"}</p>
                <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-[#111827] sm:text-[40px]">{config.sectionTitle}</h2>
                <p className="mt-3 max-w-[650px] text-sm leading-6 text-[#64748B]">{config.sectionDescription}</p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-[#475569]">
                <span className="rounded-full bg-[#2563EB] px-4 py-2 text-white">Semua unit</span>
                <span className="rounded-full border border-[#DCE6F3] bg-white px-4 py-2">Harian</span>
                <span className="rounded-full border border-[#DCE6F3] bg-white px-4 py-2">Mingguan</span>
              </div>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {config.items.map((vehicle, index) => {
                const price = isCar ? vehicle.selfDrivePrice : vehicle.dailyPrice;
                return (
                  <article key={`${vehicle.name}-${index}`} className="group flex min-h-[468px] flex-col overflow-hidden rounded-[18px] border border-white bg-white shadow-[0_14px_40px_rgba(15,23,42,.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_26px_64px_rgba(37,99,235,.17)]">
                    <div className="relative aspect-[1.03] overflow-hidden bg-[radial-gradient(circle_at_50%_34%,#F8FBFF_0%,#E8F2FF_48%,#C9DEFA_100%)]">
                      <Image src={vehicle.image} alt={`${vehicle.name} DriveMate Bandung`} fill sizes="(min-width:1024px) 280px, (min-width:640px) 50vw, 100vw" className="object-cover hue-rotate-[212deg] saturate-[.92] transition-transform duration-500 group-hover:scale-[1.035]" />
                      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#12468D]/20 to-transparent" />
                      <span className="absolute left-3 top-3 rounded-lg bg-[#2563EB] px-2.5 py-1.5 text-[9px] font-bold text-white shadow-[0_8px_18px_rgba(37,99,235,.3)]">{config.promos[index]}</span>
                      <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-lg border border-white/70 bg-white/90 px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.06em] text-[#16A34A] shadow-sm backdrop-blur"><span className="size-1.5 rounded-full bg-[#16A34A]" />Tersedia</span>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="text-[17px] font-bold tracking-[-0.025em] text-[#111827]">{vehicle.name}</h3>
                      <div className="mt-3 flex flex-wrap gap-x-3 gap-y-2 text-[10px] text-[#64748B]">
                        <span className="flex items-center gap-1"><Gauge className="size-3.5 text-[#2563EB]" />{isCar && vehicle.name.includes("Manual") ? "Manual" : "Matic"}</span>
                        {isCar ? <span className="flex items-center gap-1"><UsersRound className="size-3.5 text-[#2563EB]" />{vehicle.name.includes("Brio") ? "5" : "7"} Kursi</span> : <span className="flex items-center gap-1"><ShieldCheck className="size-3.5 text-[#2563EB]" />Helm tersedia</span>}
                        {isCar ? <span className="flex items-center gap-1"><Snowflake className="size-3.5 text-[#2563EB]" />AC</span> : null}
                      </div>
                      <div className="mt-5 border-t border-[#E2E8F0] pt-4">
                        <span className="block text-[10px] text-[#94A3B8]">Mulai dari</span>
                        <strong className="mt-1 block text-[18px] font-bold tracking-[-0.02em] text-[#2563EB] [font-variant-numeric:tabular-nums]">{price}</strong>
                      </div>
                      <a href={bookingUrl(vehicle.name)} target="_blank" rel="noreferrer" aria-label={`Pesan ${vehicle.name} via WhatsApp`} className="mt-5 flex h-11 items-center justify-center gap-2 rounded-xl bg-[#2563EB] text-xs font-semibold text-white shadow-[0_10px_22px_rgba(37,99,235,.22)] transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]"><WhatsappLogoIcon className="size-[18px]" weight="fill" />Pesan Sekarang</a>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="relative mt-12 overflow-hidden rounded-[24px] bg-[#071A36] px-7 py-9 text-white shadow-[0_24px_58px_rgba(15,23,42,.2)] sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-12">
              <Image src={`${assetRoot}/bandung-braga-dusk.jpg`} alt="" fill sizes="1176px" className="object-cover object-center opacity-25" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,17,39,.98)_0%,rgba(5,40,96,.88)_62%,rgba(37,99,235,.72)_100%)]" />
              <div className="relative max-w-[650px]">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#93C5FD]">Perjalanan lebih mudah</p>
                <h2 className="mt-2 text-2xl font-bold tracking-[-0.04em] sm:text-[32px]">Siap Keliling Bandung?</h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">Pilih kendaraan favoritmu dan booking cepat bersama DriveMate.</p>
              </div>
              <a href={bookingUrl()} target="_blank" rel="noreferrer" className="relative mt-6 inline-flex h-12 items-center gap-2 rounded-xl bg-[#16A34A] px-6 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(22,163,74,.28)] transition hover:-translate-y-0.5 hover:bg-[#15803D] lg:mt-0"><WhatsappLogoIcon className="size-5" weight="fill" />Hubungi Kami <ArrowRight className="size-4" /></a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
