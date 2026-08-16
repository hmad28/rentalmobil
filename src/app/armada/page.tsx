import type { Metadata } from "next";

import { FleetCatalogPage } from "@/components/sites/sewamobiltugu-com-061d870e/root-8a5edab2/FleetCatalogPage";

export const metadata: Metadata = {
  title: "Rental Mobil Bandung | DriveMate",
  description: "Pilih armada mobil DriveMate yang bersih, terawat, dan siap untuk perjalanan bisnis, keluarga, maupun wisata di Bandung.",
};

export default function ArmadaPage() {
  return <FleetCatalogPage kind="car" />;
}
