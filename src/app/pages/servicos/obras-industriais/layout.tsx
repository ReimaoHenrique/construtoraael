import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Obras Industriais | Construtora Andrade e Lima',
  description:
    'Especialistas em obras industriais: galpões, fábricas, plantas de produção e estruturas pré-moldadas com alto padrão técnico e conformidade com normas rigorosas em Salvador e região.',
  keywords: [
    'obras industriais',
    'galpões industriais',
    'fábricas',
    'estruturas pré-moldadas',
    'construção industrial',
    'plantas de produção',
    'construção industrial Salvador',
  ],
  openGraph: {
    title: 'Obras Industriais - Construtora AEL',
    description:
      'Projetos de grande porte com alto padrão técnico, execução integrada e conformidade com normas rigorosas de segurança e qualidade industrial.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Obras Industriais - Construtora AEL',
    description:
      'Projetos de grande porte com alto padrão técnico, execução integrada e conformidade com normas rigorosas.',
  },
  alternates: {
    canonical: '/servicos/obras-industriais',
  },
};

export default function ObrasIndustriaisLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
