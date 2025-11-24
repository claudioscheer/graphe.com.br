import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="border-b border-[#E5E5E5]">
      <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 border border-[#E5E5E5] flex items-center justify-center text-xs text-[#555555]">
            G
          </div>
          <Link href="/" className="text-xl font-medium text-[#222222] hover:text-[#2E6BE6] transition-colors">
            Graphe
          </Link>
        </div>

        <Link href="/sobre" className="text-sm text-[#555555] hover:text-[#2E6BE6] transition-colors">
          Sobre
        </Link>
      </div>
    </nav>
  )
}
