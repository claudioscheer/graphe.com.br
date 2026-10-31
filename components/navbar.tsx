"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { PLAY_STORE_URL } from "@/lib/links";

const links = [
  { href: "/blog", label: "Blog" },
  { href: "/play", label: "Play" },
  { href: "/sobre", label: "Sobre" },
];

export default function Navbar() {
  const pathname = usePathname();
  const onPlayPage = pathname === "/play" || pathname.startsWith("/play/");
  const downloadHref = onPlayPage ? PLAY_STORE_URL : "/#baixar";

  return (
    <header className="border-line bg-paper sticky top-0 z-40 border-b">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-5 px-6 py-3.5 lg:px-10">
        <Link href="/" className="flex min-w-0 flex-col">
          <span className="text-ink font-serif text-[1.6rem] leading-none font-semibold tracking-[-0.02em]">
            Graphe
          </span>
          <span className="meta text-ink-soft mt-1 hidden text-[9px] tracking-[0.18em] sm:block">
            Vivendo as Escrituras
          </span>
        </Link>

        <nav
          className="flex items-center gap-5 sm:gap-7"
          aria-label="Principal"
        >
          {links.map(link => {
            const selected =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={selected ? "page" : undefined}
                className={`meta border-b pb-0.5 transition-colors ${
                  selected
                    ? "border-brass text-ink"
                    : "text-ink-soft hover:border-line-strong hover:text-ink border-transparent"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href={downloadHref}
            target={onPlayPage ? "_blank" : undefined}
            rel={onPlayPage ? "noopener noreferrer" : undefined}
            className="btn btn-secondary hidden px-4 py-2 text-xs sm:inline-flex"
          >
            {onPlayPage ? "Baixar o app" : "Baixar"}
            {onPlayPage ? (
              <ArrowUpRight size={14} aria-hidden="true" />
            ) : (
              <ArrowDown size={14} aria-hidden="true" />
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
