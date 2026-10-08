export const GRAPHE_RELEASES_PAGE =
  "https://github.com/claudioscheer/graphe/releases/latest";

// The Windows installer is always published as graphe-bible.msi, so this
// URL keeps pointing at the latest release without a version in the name.
export const GRAPHE_WINDOWS_DOWNLOAD =
  "https://github.com/claudioscheer/graphe/releases/latest/download/graphe-bible.msi";

export const GRAPHE_LATEST_RELEASE_API =
  "https://api.github.com/repos/claudioscheer/graphe/releases/latest";

export type ReleaseAsset = {
  name: string;
  browser_download_url: string;
};

// The macOS disk image name includes the version (Graphe-1.0.11-universal.dmg),
// so the latest file has to be chosen from the release assets.
export function macDownloadUrl(assets: ReleaseAsset[]): string {
  const dmgs = assets.filter(
    asset =>
      typeof asset?.name === "string" &&
      typeof asset?.browser_download_url === "string" &&
      asset.name.toLowerCase().endsWith(".dmg")
  );
  const universal =
    dmgs.find(asset => asset.name.toLowerCase().includes("universal")) ??
    dmgs[0];

  return universal?.browser_download_url ?? GRAPHE_RELEASES_PAGE;
}
