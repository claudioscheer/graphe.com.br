"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/blog", label: "Blog" },
  { href: "/play", label: "Play" },
  { href: "/sobre", label: "Sobre" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-[#E5E5E5]">
      <div className="mx-auto flex max-w-3xl items-center px-6 py-4">
        <div className="mr-8 flex items-center gap-3">
          <div className="flex h-16 w-16 items-center justify-center overflow-hidden">
            <Image
              src="/graphe.png"
              alt="Graphe"
              width={72}
              height={72}
              className="object-contain"
            />
          </div>
          <Link href="/" className="group flex flex-col">
            <span className="text-xl font-medium text-[#222222] group-hover:underline">
              Graphe
            </span>
            <span className="hidden text-xs text-[#888888] sm:block">
              Vivendo as Escrituras
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-6">
          {links.map(link => {
            const selected =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={selected ? "page" : undefined}
                className={
                  selected
                    ? "text-sm font-medium text-[#222222] hover:underline"
                    : "text-sm font-normal text-[#555555] hover:underline"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
