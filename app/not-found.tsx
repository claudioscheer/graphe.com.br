import Link from "next/link"
import Layout from "@/components/layout"

export default function NotFound() {
  return (
    <Layout>
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <h1 className="mb-4 text-6xl font-bold text-[#222222]">404</h1>
        <h2 className="mb-4 text-2xl font-semibold text-[#222222]">
          Página não encontrada
        </h2>
        <p className="mb-8 text-lg text-[#555555]">
          Desculpe, a página que você está procurando não existe.
        </p>
        <Link
          href="/"
          className="border border-[#E5E5E5] px-6 py-3 text-[#222222] transition-colors hover:border-[#333333]"
        >
          Voltar para a página inicial
        </Link>
      </div>
    </Layout>
  )
}

