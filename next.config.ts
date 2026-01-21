/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // Para cada página específica (melhor performance e clareza)
      {
        source: "/contact",
        destination: "/pages/contact",
      },
      {
        source: "/approach",
        destination: "/pages/approach",
      },
      {
        source: "/history",
        destination: "/pages/history",
      },
      {
        source: "/impact-report",
        destination: "/pages/impact-report",
      },
      {
        source: "/suppliers",
        destination: "/pages/suppliers",
      },

  
    ];
  },
};

export default nextConfig;