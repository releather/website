/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/releather-com/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/leathera/**",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/vi/**",
      },
    ],
  },
  // Reduce file watcher load to avoid EMFILE (too many open files) on macOS
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: ["**/node_modules/**", "**/.git/**", "**/.next/**"],
      };
    }
    return config;
  },
};

export default nextConfig;
