import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Disable source maps in production so original .tsx code isn't exposed in DevTools */
  productionBrowserSourceMaps: false,

  /* Remove the 'x-powered-by: Next.js' header from HTTP responses */
  poweredByHeader: false,

  /* Ensure compiler minifies JavaScript code */
  // swcMinify: true,
};

export default nextConfig;