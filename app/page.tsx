import Home from "@/components/home"
import { generatePageMetadata } from "@/lib/metadata"

export const metadata = generatePageMetadata({
  title: "Graphe",
  description:
    "Graphe - Artigos e reflexões sobre temas relevantes da fé cristã. Estudos bíblicos e ensinamentos para aplicar a Palavra de Deus no dia a dia.",
  path: "/",
})

export default function Page() {
  return <Home />
}
