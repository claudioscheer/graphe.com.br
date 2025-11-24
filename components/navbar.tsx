import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="border-b border-[#E5E5E5]">
      <div className="mx-auto flex max-w-3xl items-center px-6 py-4">
        <div className="mr-8 flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center overflow-hidden">
            <Image
              src="/graphe.png"
              alt="Graphe"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <Link
            href="/"
            className="text-xl font-medium text-[#222222] transition-colors hover:text-[#2E6BE6]"
          >
            Graphe
          </Link>
        </div>

        <Link
          href="/sobre"
          className="text-sm text-[#555555] transition-colors hover:text-[#2E6BE6]"
        >
          Sobre
        </Link>
      </div>
    </nav>
  )
}
