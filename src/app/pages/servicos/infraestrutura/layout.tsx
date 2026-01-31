import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Infraestrutura | Construtora Andrade e Lima',
  description:
    'Obras de infraestrutura urbana e industrial: pavimentação, drenagem, redes de água e esgoto, redes de energia, subestações, adutoras, ETA e ETE em Salvador e região.',
  keywords: [
    'obras infraestrutura',
    'pavimentação',
    'drenagem',
    'redes de água',
    'redes de esgoto',
    'redes de energia',
    'subestações',
    'infraestrutura Salvador',
  ],
  openGraph: {
    title: 'Infraestrutura - Construtora AEL',
    description:
      'Obras de infraestrutura urbana e industrial: pavimentação, drenagem, redes de água, esgoto e energia.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Infraestrutura - Construtora AEL',
    description:
      'Obras de infraestrutura urbana e industrial com foco em qualidade, durabilidade e eficiência.',
  },
  alternates: {
    canonical: '/servicos/infraestrutura',
  },
};

export default function InfraestruturaLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
