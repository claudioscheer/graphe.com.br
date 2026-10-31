import Link from "next/link";
import Layout from "@/components/layout";
import { RedirectHome } from "@/components/redirect-home";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Software de Estudo Bíblico",
  description:
    "O Graphe, software de estudo bíblico, está na página inicial. Windows, Linux e macOS.",
  path: "/software-biblico",
});

export default function SoftwarePage() {
  return (
    <Layout>
      <RedirectHome />
      <div className="border-line-strong max-w-2xl border-t pt-10">
        <h1 className="page-title text-ink">Software de estudo bíblico</h1>
        <p className="lede mt-5">
          O software está na{" "}
          <Link href="/" className="text-link">
            página inicial
          </Link>
          .
        </p>
      </div>
    </Layout>
  );
}
