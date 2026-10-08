"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import {
  GRAPHE_LATEST_RELEASE_API,
  GRAPHE_RELEASES_PAGE,
  GRAPHE_WINDOWS_DOWNLOAD,
  macDownloadUrl,
  type ReleaseAsset,
} from "@/lib/graphe-release";

let macDownloadPromise: Promise<string> | null = null;

function loadMacDownload(): Promise<string> {
  if (!macDownloadPromise) {
    macDownloadPromise = fetch(GRAPHE_LATEST_RELEASE_API, {
      headers: { Accept: "application/vnd.github+json" },
    })
      .then(async response => {
        if (!response.ok) {
          macDownloadPromise = null;
          return GRAPHE_RELEASES_PAGE;
        }
        const body = (await response.json()) as { assets?: ReleaseAsset[] };
        return macDownloadUrl(Array.isArray(body.assets) ? body.assets : []);
      })
      .catch(() => {
        macDownloadPromise = null;
        return GRAPHE_RELEASES_PAGE;
      });
  }

  return macDownloadPromise;
}

function DownloadLink({
  href,
  children,
  primary = false,
}: {
  href: string;
  children: ReactNode;
  primary?: boolean;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        primary
          ? "inline-flex items-center justify-center bg-[#222222] px-8 py-4 text-sm text-white transition-colors hover:bg-[#333333]"
          : "inline-flex items-center justify-center border border-[#E5E5E5] px-8 py-4 text-sm text-[#222222] transition-colors hover:border-[#333333]"
      }
    >
      {children}
    </Link>
  );
}

export function SoftwareDownloads({
  explain = false,
  children,
}: {
  explain?: boolean;
  children?: ReactNode;
}) {
  const [macDownload, setMacDownload] = useState(GRAPHE_RELEASES_PAGE);

  useEffect(() => {
    let cancelled = false;
    loadMacDownload().then(url => {
      if (!cancelled) setMacDownload(url);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const links = (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <DownloadLink href={GRAPHE_WINDOWS_DOWNLOAD} primary>
        Baixar para Windows
      </DownloadLink>
      <DownloadLink href={macDownload} primary>
        Baixar para macOS
      </DownloadLink>
      <DownloadLink href={GRAPHE_RELEASES_PAGE}>
        Escolher pacote Linux
      </DownloadLink>
      {children}
    </div>
  );

  if (!explain) return links;

  return (
    <div className="mb-12">
      {links}
      <p className="mt-4 text-sm leading-relaxed text-[#555555]">
        Windows baixa o instalador (.msi) e macOS o disco universal (.dmg),
        sempre da última versão no GitHub. No Linux, a release traz mais de um
        pacote: escolha o seu.
      </p>
    </div>
  );
}
