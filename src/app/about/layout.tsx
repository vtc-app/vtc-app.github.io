import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos de Nous | VTC Sud 13",
  description:
    "Découvrez l'histoire de VTC Sud 13, votre partenaire de confiance pour des services de transfert premium à Marseille et dans la région PACA. Chauffeurs expérimentés.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
