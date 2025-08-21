/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co.com", // correct hostname
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
