import Home from "@/components/home"
import { generatePageMetadata } from "@/lib/metadata"

export const metadata = generatePageMetadata({
  title: "Graphe",
  description: "Graphe - Vivendo as Escrituras.",
  path: "/",
})

export default function Page() {
  return <Home />
}
