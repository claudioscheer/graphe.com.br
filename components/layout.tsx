import type { ReactNode } from "react";
import Link from "next/link";
import { Github, Instagram, Youtube } from "lucide-react";
import Navbar from "./navbar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-paper min-h-screen">
      <Navbar />
      <main className="mx-auto w-full max-w-[1240px] px-6 py-12 lg:px-10 lg:py-16">
        {children}
      </main>
      <footer className="border-line border-t">
        <div className="mx-auto max-w-[1240px] px-6 py-8 lg:px-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="meta flex flex-wrap items-center gap-x-3 gap-y-1">
              <span>© {new Date().getFullYear()} Graphe</span>
              <span aria-hidden="true">·</span>
              <Link
                href="/privacidade"
                className="hover:text-ink transition-colors"
              >
                Privacidade
              </Link>
            </div>
            <div className="meta flex flex-wrap items-center gap-x-5 gap-y-3">
              <Link
                href="https://github.com/claudioscheer/graphe"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink inline-flex items-center gap-2 transition-colors"
              >
                <Github size={15} aria-hidden="true" />
                GitHub
              </Link>
              <Link
                href="https://www.instagram.com/graphebr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink inline-flex items-center gap-2 transition-colors"
              >
                <Instagram size={15} aria-hidden="true" />
                Instagram
              </Link>
              <Link
                href="https://www.youtube.com/@grapheio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink inline-flex items-center gap-2 transition-colors"
              >
                <Youtube size={15} aria-hidden="true" />
                YouTube
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
