import type { NextConfig } from "next";

/**
 * Static export for Cloudflare Pages (`out/`).
 * - `images.unoptimized`: required so `<Image>` does not rely on the Image Optimization API
 *   (not available on static hosting); without this, images often break or look missing.
 * - Asset URLs in HTML/CSS are root-relative (`/_next/...`). That is correct when the site
 *   is served from the domain root. If you deploy under a subpath (e.g. `/docs`), set
 *   `basePath` and `assetPrefix` to that path (same value).
 */
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
