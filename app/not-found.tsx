import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/layout";

export default function NotFound() {
  return (
    <Layout>
      <div className="border-line-strong flex min-h-[58vh] flex-col justify-center border-t pt-12">
        <p className="text-brass font-serif text-[clamp(7rem,18vw,14rem)] leading-[0.8] font-semibold tracking-[-0.05em]">
          404
        </p>
        <h1 className="page-title text-ink mt-6">Página não encontrada</h1>
        <p className="lede mt-4 max-w-xl">
          Desculpe, a página que você está procurando não existe.
        </p>
        <div className="mt-8">
          <Link href="/" className="btn btn-primary">
            <ArrowLeft size={15} aria-hidden="true" />
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </Layout>
  );
}
