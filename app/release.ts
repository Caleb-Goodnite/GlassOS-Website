// The release the site offers. Update these when a new GlassOS release is published on GitHub.
export const VERSION = "2.1.0";
const TAG = `v${VERSION}`;
export const REPO_URL = "https://github.com/Caleb-Goodnite/GlassOS";
export const RELEASE_URL = `${REPO_URL}/releases/tag/${TAG}`;
export const ISSUES_URL = `${REPO_URL}/issues`;
const DL = `${REPO_URL}/releases/download/${TAG}`;

export type Iso = {
  arch: string;
  name: string;
  forWhat: string;
  file: string;
  size: string;
  url: string;
  sha256Url: string;
};

const iso = (arch: string, name: string, forWhat: string, size: string): Iso => {
  const file = `GlassOS-${VERSION}-${arch}.iso`;
  return { arch, name, forWhat, file, size, url: `${DL}/${file}`, sha256Url: `${DL}/${file}.sha256` };
};

export const ISOS: Iso[] = [
  iso("amd64", "PC", "64-bit Intel and AMD computers, with UEFI or older BIOS firmware.", "963 MB"),
  iso("arm64", "ARM", "ARM computers with UEFI firmware, and virtual machines on Apple Silicon Macs.", "815 MB"),
];
