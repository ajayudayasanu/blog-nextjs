/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      // TODO: Add Strapi media host when switching to CMS
      // {
      //   protocol: "http",
      //   hostname: "localhost",
      //   port: "1337",
      //   pathname: "/uploads/**",
      // },
    ],
  },
};

export default nextConfig;
