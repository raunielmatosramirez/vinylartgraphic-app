import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // ← ESTA LÍNEA ES ESENCIAL
  trailingSlash: true,  // ← RECOMENDADO PARA GitHub Pages
  images: {
    unoptimized: true,  // ← NECESARIO para export estático
    domains: ['picsum.photos', 'images.unsplash.com', 'example.com'],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/vinylartgraphic-app' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/vinylartgraphic-app/' : '',
};

export default nextConfig;