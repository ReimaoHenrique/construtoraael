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
        source: '/obras-industriais',
        destination: '/pages/servicos/obras-industriais',
      },
      { source: '/obras-comerciais', destination: '/pages/servicos/obras-comerciais' },
      {
        source: '/obras-hospitalares',
        destination: '/pages/servicos/obras-hospitalares',
      },
      {
        source: '/hotelaria',
        destination: '/pages/servicos/hotelaria',
      },
      {
        source: '/infraestrutura',
        destination: '/pages/servicos/infraestrutura',
      },
      {
        source: '/projetos-de-engenharia',
        destination: '/pages/servicos/projetos-de-engenharia',
      },
      {
        source: '/incorporacao-imobiliaria',
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
