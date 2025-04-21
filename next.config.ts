import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";
import type { NextConfig } from "next";

const setttingUpDevPlatform = async () => {
  if (process.env.NODE_ENV === "development") {
    await setupDevPlatform();
  }
};

const nextConfig: NextConfig = {
  /* config options here */
};

setttingUpDevPlatform();

export default nextConfig;
