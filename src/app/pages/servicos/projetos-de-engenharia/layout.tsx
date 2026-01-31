import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Projetos de Engenharia | Construtora Andrade e Lima',
  description:
    'Projetos técnicos completos de engenharia: estrutural, elétrico, hidráulico, ar condicionado, prevenção e combate a incêndio e projetos executivos em Salvador e região.',
  keywords: [
    'projetos de engenharia',
    'projeto estrutural',
    'projeto elétrico',
    'projeto hidráulico',
    'projetos executivos',
    'engenharia civil',
    'projetos engenharia Salvador',
  ],
  openGraph: {
    title: 'Projetos de Engenharia - Construtora AEL',
    description:
      'Projetos técnicos completos de engenharia: estrutural, elétrico, hidráulico, ar condicionado e projetos executivos.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projetos de Engenharia - Construtora AEL',
    description:
      'Projetos técnicos completos de engenharia com foco na execução e viabilidade construtiva.',
  },
  alternates: {
    canonical: '/servicos/projetos-de-engenharia',
  },
};

export default function ProjetosEngenhariaLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
