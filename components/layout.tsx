import type { ReactNode } from "react"
import Navbar from "./navbar"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#F7F2EC]">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-12">{children}</main>
      <footer className="mt-20 border-t border-[#E5E5E5]">
        <div className="mx-auto max-w-3xl px-6 py-8">
          <p className="text-sm text-[#555555]">
            © 2025 Graphe. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
