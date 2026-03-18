import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
  },
  async headers() {
    return [
      {
        source: "/preview",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' https://clients.whiteoakmedia.io https://white-oak-media-client-portal.web.app http://localhost:*",
          },
          {
            key: "X-Frame-Options",
            value: "ALLOWALL",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
