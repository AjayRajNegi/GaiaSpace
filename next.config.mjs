/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enables React strict mode for catching potential issues
  images: {
    // Domains where your images might be fetched from
    formats: ["image/webp", "image/avif"], // Optimize for modern formats like WebP and AVIF
  },
  async headers() {
    return [
      {
        // Match all files in the /static/earth folder
        source: "/static/earth/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // Cache for a year
          },
        ],
      },
    ];
  },
  webpack: (config) => {
    // Enable support for importing .webp files directly
    config.module.rules.push({
      test: /\.webp$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next/static/images",
            outputPath: "static/images",
            name: "[name].[hash].[ext]",
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
