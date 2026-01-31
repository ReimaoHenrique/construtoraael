import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Serviços | Construtora Andrade e Lima',
  description:
    'Serviços especializados em construção civil: obras industriais, comerciais, hospitalares, hotelaria, infraestrutura, incorporação imobiliária e projetos de engenharia em Salvador e região.',
  keywords: [
    'construção civil',
    'obras industriais',
    'obras comerciais',
    'obras hospitalares',
    'hotelaria',
    'infraestrutura',
    'incorporação imobiliária',
    'projetos de engenharia',
    'construção Salvador',
    'construtora Bahia',
  ],
  openGraph: {
    title: 'Serviços - Construtora AEL',
    description:
      'Serviços especializados em construção civil com qualidade, segurança e pontualidade. Obras industriais, comerciais, hospitalares e muito mais.',
    type: 'website',
    // url: 'https://www.construtoraael.com/servicos',
    // images: '/og-servicos.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Serviços - Construtora AEL',
    description:
      'Serviços especializados em construção civil com qualidade, segurança e pontualidade.',
  },
  alternates: {
    canonical: '/servicos',
  },
};

export default function ServicosLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-gray-50">
      {children}
    </main>
  );
}
