import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos de Nous | VTC Marseille Premium",
  description:
    "Découvrez l'histoire de VTC Marseille Premium, votre partenaire de confiance pour des services de transport premium à Marseille et dans la région PACA. Plus de 10 ans d'expérience.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
