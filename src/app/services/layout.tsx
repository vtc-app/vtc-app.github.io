import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services VTC Marseille | Transport Premium",
  description:
    "Découvrez tous nos services VTC à Marseille : transfert aéroport, transport professionnel, courses urbaines et tours touristiques.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
