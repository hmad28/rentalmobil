import type { Metadata } from "next";

import { FleetCatalogPage } from "@/components/sites/sewamobiltugu-com-061d870e/root-8a5edab2/FleetCatalogPage";

export const metadata: Metadata = {
  title: "Rental Motor Bandung | DriveMate",
  description: "Sewa motor harian DriveMate untuk mobilitas praktis, nyaman, dan fleksibel di seluruh area Bandung Raya.",
};

export default function RentalMotorPage() {
  return <FleetCatalogPage kind="motor" />;
}
