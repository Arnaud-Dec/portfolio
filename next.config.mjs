/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  output: 'export', // Génère un export statique
  // On retire le basePath et l'assetPrefix pour que les URLs soient relatives à la racine.
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '',
  trailingSlash: true,

  basePath: "/portfolio",
  assetPrefix: "/portfolio", 
  trailingSlash: true, 
};

let userConfig = undefined;
try {
  userConfig = await import('./v0-user-next.config');
  mergeConfig(nextConfig, userConfig);
} catch (e) {
  // ignore error
}

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) return;
  for (const key in userConfig) {
    if (typeof nextConfig[key] === 'object' && !Array.isArray(nextConfig[key])) {
      nextConfig[key] = { ...nextConfig[key], ...userConfig[key] };
    } else {
      nextConfig[key] = userConfig[key];
    }
  }
}

export default nextConfig;
