import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Obras Comerciais | Construtora Andrade e Lima',
  description:
    'Construção e reforma de lojas, shoppings, escritórios e espaços comerciais com foco em layout otimizado, identidade visual e experiência do cliente em Salvador e região.',
  keywords: [
    'obras comerciais',
    'reforma lojas',
    'construção shopping',
    'reforma escritórios',
    'construção comercial',
    'arquitetura comercial',
    'obras comerciais Salvador',
  ],
  openGraph: {
    title: 'Obras Comerciais - Construtora AEL',
    description:
      'Construção e reforma de lojas, shoppings, escritórios e espaços comerciais com foco em layout otimizado e experiência do cliente.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Obras Comerciais - Construtora AEL',
    description:
      'Construção e reforma de lojas, shoppings, escritórios e espaços comerciais com foco em layout otimizado.',
  },
  alternates: {
    canonical: '/servicos/obras-comerciais',
  },
};

export default function ObrasComerciaisLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
