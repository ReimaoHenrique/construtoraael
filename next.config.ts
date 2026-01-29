/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // Para cada página específica (melhor performance e clareza)
      {
        source: '/contact',
        destination: '/pages/contact',
      },
      {
        source: '/projetos',
        destination: '/pages/projetos',
      },
      {
        source: '/history',
        destination: '/pages/history',
      },
      {
        source: '/impact-report',
        destination: '/pages/impact-report',
      },
      {
        source: '/principles',
        destination: '/pages/principles',
      },
      {
        source: '/servicos/obras-industriais',
        destination: '/pages/servicos/obras-industriais',
      },
      { source: '/servicos/obras-comerciais', destination: '/pages/servicos/obras-comerciais' },
      {
        source: '/servicos/obras-hospitalares',
        destination: '/pages/servicos/obras-hospitalares',
      },
      {
        source: '/servicos/hotelaria',
        destination: '/pages/servicos/hotelaria',
      },
      {
        source: '/servicos/infraestrutura',
        destination: '/pages/servicos/infraestrutura',
      },
      {
        source: '/servicos/projetos-de-engenharia',
        destination: '/pages/servicos/projetos-de-engenharia',
      },
      {
        source: '/servicos/incorporacao-imobiliaria',
        destination: '/pages/servicos/incorporacao-imobiliaria',
      },
      {
        source: '/Servicos',
        destination: '/pages/servicos',
      },
    ];
  },
};

export default nextConfig;
