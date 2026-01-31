import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Incorporação Imobiliária | Construtora Andrade e Lima',
  description:
    'Desenvolvimento completo de empreendimentos residenciais e comerciais: viabilização, registro, captação e entrega de condomínios de médio e alto padrão em Salvador e região.',
  keywords: [
    'incorporação imobiliária',
    'empreendimentos residenciais',
    'condomínios',
    'incorporadora',
    'loteamentos',
    'edifícios comerciais',
    'incorporação imobiliária Salvador',
  ],
  openGraph: {
    title: 'Incorporação Imobiliária - Construtora AEL',
    description:
      'Desenvolvimento completo de empreendimentos residenciais e comerciais: viabilização, registro, captação e entrega de condomínios.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Incorporação Imobiliária - Construtora AEL',
    description:
      'Desenvolvimento completo de empreendimentos residenciais e comerciais de médio e alto padrão.',
  },
  alternates: {
    canonical: '/servicos/incorporacao-imobiliaria',
  },
};

export default function IncorporacaoImobiliariaLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
