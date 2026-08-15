import type { Benefit, Vehicle } from "@/types/sewamobil";

export const assetRoot =
  "/sites/sewamobiltugu-com-061d870e/root-8a5edab2/images";

export const whatsappBase = "https://wa.me/62811261209";

export const cars: Vehicle[] = [
  { name: "Calya Matic", image: `${assetRoot}/car-calya.webp`, selfDrivePrice: "Rp 300.000 / Hari", allInPrice: "Rp 650.000 / Hari" },
  { name: "Xenia FWD Manual", image: `${assetRoot}/car-xenia.webp`, selfDrivePrice: "Rp 300.000 / Hari", allInPrice: "Rp 650.000 / Hari" },
  { name: "Brio Matic", image: `${assetRoot}/car-brio.webp`, selfDrivePrice: "Rp 325.000 / Hari", allInPrice: "Rp 650.000 / Hari" },
  { name: "Avanza FWD Matic", image: `${assetRoot}/car-avanza.webp`, selfDrivePrice: "Rp 400.000 / Hari", allInPrice: "Rp 700.000 / Hari" },
  { name: "Innova Reborn", image: `${assetRoot}/car-reborn-lama.webp`, selfDrivePrice: "Rp 500.000 / Hari", allInPrice: "Rp 825.000 / Hari" },
  { name: "Innova New Reborn", image: `${assetRoot}/car-reborn-baru.webp`, selfDrivePrice: "Rp 500.000 / Hari", allInPrice: "Rp 825.000 / Hari" },
  { name: "Xpander", image: `${assetRoot}/car-xpander.webp`, selfDrivePrice: "Rp 550.000 / Hari", allInPrice: "Rp 850.000 / Hari" },
  { name: "Zenix Matic", image: `${assetRoot}/car-zenix.webp`, selfDrivePrice: "Rp 650.000 / Hari", allInPrice: "Rp 1.000.000 / Hari" },
];

export const motorcycles: Vehicle[] = [
  { name: "Beat", image: `${assetRoot}/motor-beat.webp`, dailyPrice: "Rp 80.000 / Hari" },
  { name: "Scoopy", image: `${assetRoot}/motor-scoopy.webp`, dailyPrice: "Rp 90.000 / Hari" },
  { name: "Vario 125", image: `${assetRoot}/motor-vario-125-a.webp`, dailyPrice: "Rp 100.000 / Hari" },
  { name: "Vario 125", image: `${assetRoot}/motor-vario-125-b.webp`, dailyPrice: "Rp 100.000 / Hari" },
  { name: "Vario 150", image: `${assetRoot}/motor-vario-150.webp`, dailyPrice: "Rp 100.000 / Hari" },
  { name: "Vario 160", image: `${assetRoot}/motor-vario-160.webp`, dailyPrice: "Rp 110.000 / Hari" },
  { name: "Stylo", image: `${assetRoot}/motor-stylo.webp`, dailyPrice: "Rp 115.000 / Hari" },
  { name: "NMAX", image: `${assetRoot}/motor-nmax.webp`, dailyPrice: "Rp 130.000 / Hari" },
];

export const benefits: Benefit[] = [
  { title: "Armada Bersih & Terawat", description: "Setiap mobil selalu dalam kondisi prima & rutin diservis, nyaman dan aman.", image: `${assetRoot}/benefit-clean.webp` },
  { title: "Praktis & Cepat", description: "Cukup pesan lewat WhatsApp atau website, mobil langsung kami antar ke lokasi Anda.", image: `${assetRoot}/benefit-fast.webp` },
  { title: "Harga Terjangkau", description: "Nikmati tarif sewa mobil yang bersahabat tanpa biaya tambahan tersembunyi.", image: `${assetRoot}/benefit-price.webp` },
  { title: "Sopir Profesional", description: "Tersedia layanan dengan sopir berpengalaman yang hafal jalanan Jogja.", image: `${assetRoot}/benefit-driver.webp` },
];

export function bookingUrl(unit?: string) {
  const message = unit
    ? `Halo Sewa Mobil Tugu, saya ingin booking unit ${unit}. Bisa minta informasi lebih lanjut?`
    : "Halo Sewa Mobil Tugu, saya bisa minta informasi lebih lanjut?";
  return `${whatsappBase}?text=${encodeURIComponent(message)}`;
}
