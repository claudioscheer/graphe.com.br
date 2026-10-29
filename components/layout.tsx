import type { ReactNode } from "react";
import Link from "next/link";
import { Github, Instagram, Youtube } from "lucide-react";
import Navbar from "./navbar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const measure = "max-w-3xl";

  return (
    <div className="min-h-screen bg-[#F7F2EC]">
      <Navbar />
      <main className={`mx-auto min-w-0 overflow-x-clip px-6 py-12 ${measure}`}>
        {children}
      </main>
      <footer className="mt-20 border-t border-[#E5E5E5]">
        <div className={`mx-auto px-6 py-8 ${measure}`}>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-[#555555]">
              <span>
                © {new Date().getFullYear()} Graphe. Todos os direitos
                reservados.
              </span>
              <span>·</span>
              <Link
                href="/privacidade"
                className="transition-colors hover:text-[#222222]"
              >
                Privacidade
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/claudioscheer/graphe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#555555] transition-colors hover:text-[#222222]"
              >
                <Github size={18} />
                <span>GitHub</span>
              </Link>
              <Link
                href="https://www.instagram.com/graphebr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#555555] transition-colors hover:text-[#222222]"
              >
                <Instagram size={18} />
                <span>Instagram</span>
              </Link>
              <Link
                href="https://www.youtube.com/@grapheio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#555555] transition-colors hover:text-[#222222]"
              >
                <Youtube size={18} />
                <span>YouTube</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
