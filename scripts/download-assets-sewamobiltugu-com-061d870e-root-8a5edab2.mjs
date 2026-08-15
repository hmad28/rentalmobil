import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const outputRoot = path.join(
  process.cwd(),
  "public/sites/sewamobiltugu-com-061d870e/root-8a5edab2/images",
);

const assets = {
  "logo-header.png": "https://sewamobiltugu.com/images/modul/22logo%20ACC%20(2).png",
  "logo-footer.png": "https://sewamobiltugu.com/images/modul/15logo%20ACC.png",
  "hero-1.webp": "https://sewamobiltugu.com/images/slider/slider-1-49.png.webp",
  "hero-2.webp": "https://sewamobiltugu.com/images/slider/slider-2-83.png.webp",
  "car-calya.webp": "https://sewamobiltugu.com/images/rental/calya-matic-39.png.webp",
  "car-xenia.webp": "https://sewamobiltugu.com/images/rental/xenia-fwd-manual-57.png.webp",
  "car-brio.webp": "https://sewamobiltugu.com/images/rental/brio-matic-60.png.webp",
  "car-avanza.webp": "https://sewamobiltugu.com/images/rental/avanza-fwd-matic-88.png.webp",
  "car-reborn-lama.webp": "https://sewamobiltugu.com/images/rental/reborn-lama-12.png.webp",
  "car-reborn-baru.webp": "https://sewamobiltugu.com/images/rental/reborn-baru-55.png.webp",
  "car-xpander.webp": "https://sewamobiltugu.com/images/rental/xpander-67.png.webp",
  "car-zenix.webp": "https://sewamobiltugu.com/images/rental/zenix-matic-60.png.webp",
  "motor-beat.webp": "https://sewamobiltugu.com/images/rental_motor/beat-57.png.webp",
  "motor-scoopy.webp": "https://sewamobiltugu.com/images/rental_motor/scoopy-48.png.webp",
  "motor-vario-125-a.webp": "https://sewamobiltugu.com/images/rental_motor/vario-125-46.png.webp",
  "motor-vario-125-b.webp": "https://sewamobiltugu.com/images/rental_motor/vario-125-40.png.webp",
  "motor-vario-150.webp": "https://sewamobiltugu.com/images/rental_motor/vario-150-86.png.webp",
  "motor-vario-160.webp": "https://sewamobiltugu.com/images/rental_motor/vario-160-22.png.webp",
  "motor-stylo.webp": "https://sewamobiltugu.com/images/rental_motor/stylo-49.png.webp",
  "motor-nmax.webp": "https://sewamobiltugu.com/images/rental_motor/nmax-46.png.webp",
  "about.webp": "https://sewamobiltugu.com/images/page/sewa-mobil-jogja-%E2%80%93-jelajahi-yogyakarta-dengan-nyaman-dan-fleksibel-79.png.webp",
  "benefit-clean.webp": "https://sewamobiltugu.com/images/keunggulan/armada-bersih--terawat-25.png.webp",
  "benefit-fast.webp": "https://sewamobiltugu.com/images/keunggulan/cepat--praktis-41.png.webp",
  "benefit-price.webp": "https://sewamobiltugu.com/images/keunggulan/harga-pasti-murah-14.png.webp",
  "benefit-driver.webp": "https://sewamobiltugu.com/images/keunggulan/sopir-profesional-85.png.webp",
  "motor-bg.webp": "https://sewamobiltugu.com/assets/public/Aset%20Desain/pakai/bg/16.webp",
  "cta-bg.webp": "https://sewamobiltugu.com/assets/public/Aset%20Desain/pakai/bg/7.webp",
  "cta-ornament.webp": "https://sewamobiltugu.com/assets/public/Aset%20Desain/pakai/ornamen/cta2.webp",
  "favicon-32.png": "https://sewamobiltugu.com/images/favicon-32x32.png",
};

await mkdir(outputRoot, { recursive: true });

const entries = Object.entries(assets);
for (let index = 0; index < entries.length; index += 4) {
  await Promise.all(
    entries.slice(index, index + 4).map(async ([filename, url]) => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed ${response.status}: ${url}`);
      }
      const bytes = Buffer.from(await response.arrayBuffer());
      await writeFile(path.join(outputRoot, filename), bytes);
      process.stdout.write(`downloaded ${filename}\n`);
    }),
  );
}

process.stdout.write(`Downloaded ${entries.length} assets to ${outputRoot}\n`);
