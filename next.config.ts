/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/pages/:path*',
      },
    ];
  },
};

export default nextConfig;
