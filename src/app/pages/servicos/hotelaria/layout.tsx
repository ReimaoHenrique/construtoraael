import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Obras para Hotelaria | Construtora Andrade e Lima',
  description:
    'Especialistas em obras para hotelaria: hotéis, resorts e pousadas com design funcional, conforto premium e acabamentos de alto padrão em Salvador e região.',
  keywords: [
    'obras hotelaria',
    'construção hotéis',
    'reforma hotéis',
    'resorts',
    'pousadas',
    'construção hotelaria Salvador',
    'obras turismo',
  ],
  openGraph: {
    title: 'Obras para Hotelaria - Construtora AEL',
    description:
      'Hotéis, resorts e pousadas com design funcional, conforto premium e acabamentos de alto padrão para o setor de hospedagem.',
    type: 'website',
    // url: 'https://www.construtoraael.com/servicos/hotelaria',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Obras para Hotelaria - Construtora AEL',
    description:
      'Hotéis, resorts e pousadas com design funcional, conforto premium e acabamentos de alto padrão.',
  },
  alternates: {
    canonical: '/servicos/hotelaria',
  },
};

export default function HotelariaLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
