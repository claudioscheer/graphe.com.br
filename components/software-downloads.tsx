"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import {
  GRAPHE_LATEST_RELEASE_API,
  GRAPHE_LINUX_APPIMAGE_DOWNLOAD,
  GRAPHE_LINUX_DEB_DOWNLOAD,
  GRAPHE_LINUX_TARGZ_DOWNLOAD,
  GRAPHE_MAC_DOWNLOAD,
  GRAPHE_RELEASES_PAGE,
  GRAPHE_WINDOWS_DOWNLOAD,
  macDownloadUrl,
  windowsDownloadUrl,
  type ReleaseAsset,
} from "@/lib/graphe-release";

type DownloadsState = {
  windows: string;
  mac: string;
};

let downloadsPromise: Promise<DownloadsState> | null = null;

function loadDownloads(): Promise<DownloadsState> {
  if (!downloadsPromise) {
    downloadsPromise = fetch(GRAPHE_LATEST_RELEASE_API, {
      headers: { Accept: "application/vnd.github+json" },
    })
      .then(async response => {
        if (!response.ok) {
          downloadsPromise = null;
          return {
            windows: GRAPHE_WINDOWS_DOWNLOAD,
            mac: GRAPHE_MAC_DOWNLOAD,
          };
        }
        const body = (await response.json()) as { assets?: ReleaseAsset[] };
        const assets = Array.isArray(body.assets) ? body.assets : [];
        return {
          windows: windowsDownloadUrl(assets),
          mac: macDownloadUrl(assets),
        };
      })
      .catch(() => {
        downloadsPromise = null;
        return {
          windows: GRAPHE_WINDOWS_DOWNLOAD,
          mac: GRAPHE_MAC_DOWNLOAD,
        };
      });
  }

  return downloadsPromise;
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
  const [downloads, setDownloads] = useState<DownloadsState>({
    windows: GRAPHE_WINDOWS_DOWNLOAD,
    mac: GRAPHE_MAC_DOWNLOAD,
  });

  useEffect(() => {
    let cancelled = false;
    loadDownloads().then(urls => {
      if (!cancelled) setDownloads(urls);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const links = (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <DownloadLink href={downloads.windows} primary>
        Baixar para Windows
      </DownloadLink>
      <DownloadLink href={downloads.mac} primary>
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
        Windows baixa o instalador (.exe) e macOS a imagem de disco (.dmg),
        sempre da última versão no GitHub. No Linux, escolha entre{" "}
        <Link
          href={GRAPHE_LINUX_APPIMAGE_DOWNLOAD}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[#222222]"
        >
          AppImage
        </Link>
        {", "}
        <Link
          href={GRAPHE_LINUX_DEB_DOWNLOAD}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[#222222]"
        >
          .deb
        </Link>{" "}
        ou{" "}
        <Link
          href={GRAPHE_LINUX_TARGZ_DOWNLOAD}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[#222222]"
        >
          .tar.gz
        </Link>
        .
      </p>
    </div>
  );
}
