export const GRAPHE_RELEASES_PAGE =
  "https://github.com/claudioscheer/graphe/releases/latest";

// Windows assets
export const GRAPHE_WINDOWS_DOWNLOAD =
  "https://github.com/claudioscheer/graphe/releases/latest/download/graphe-windows-installer.exe";
export const GRAPHE_WINDOWS_ZIP_DOWNLOAD =
  "https://github.com/claudioscheer/graphe/releases/latest/download/graphe-windows.zip";

// macOS assets
export const GRAPHE_MAC_DOWNLOAD =
  "https://github.com/claudioscheer/graphe/releases/latest/download/graphe-macos.dmg";
export const GRAPHE_MAC_ZIP_DOWNLOAD =
  "https://github.com/claudioscheer/graphe/releases/latest/download/graphe-macos.zip";

// Linux assets
export const GRAPHE_LINUX_APPIMAGE_DOWNLOAD =
  "https://github.com/claudioscheer/graphe/releases/latest/download/graphe-linux.AppImage";
export const GRAPHE_LINUX_DEB_DOWNLOAD =
  "https://github.com/claudioscheer/graphe/releases/latest/download/graphe-linux.deb";
export const GRAPHE_LINUX_TARGZ_DOWNLOAD =
  "https://github.com/claudioscheer/graphe/releases/latest/download/graphe-linux.tar.gz";

export const GRAPHE_LATEST_RELEASE_API =
  "https://api.github.com/repos/claudioscheer/graphe/releases/latest";

export type ReleaseAsset = {
  name: string;
  browser_download_url: string;
};

export function macDownloadUrl(assets: ReleaseAsset[]): string {
  const dmgs = assets.filter(
    asset =>
      typeof asset?.name === "string" &&
      typeof asset?.browser_download_url === "string" &&
      asset.name.toLowerCase().endsWith(".dmg"),
  );
  const dmg =
    dmgs.find(asset => asset.name === "graphe-macos.dmg") ??
    dmgs.find(asset => asset.name.toLowerCase().includes("universal")) ??
    dmgs[0];

  return dmg?.browser_download_url ?? GRAPHE_MAC_DOWNLOAD;
}

export function windowsDownloadUrl(assets: ReleaseAsset[]): string {
  const exes = assets.filter(
    asset =>
      typeof asset?.name === "string" &&
      typeof asset?.browser_download_url === "string" &&
      asset.name.toLowerCase().endsWith(".exe"),
  );
  const exe =
    exes.find(asset => asset.name === "graphe-windows-installer.exe") ??
    exes[0];

  return exe?.browser_download_url ?? GRAPHE_WINDOWS_DOWNLOAD;
}
