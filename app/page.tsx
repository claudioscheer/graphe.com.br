import Home from "@/components/home";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Graphe - Vivendo as Escrituras",
  description:
    "Graphe é um programa simples para estudar a Bíblia no Windows, no Linux e no macOS. É de graça, e o código é aberto.",
  path: "/",
});

export default function Page() {
  return <Home />;
}
