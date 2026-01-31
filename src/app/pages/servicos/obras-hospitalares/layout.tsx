import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Obras Hospitalares | Construtora Andrade e Lima',
  description:
    'Construções e reformas especializadas para hospitais e clínicas, atendendo normas da ANVISA, biossegurança, fluxos hospitalares e ambientes estéreis em Salvador e região.',
  keywords: [
    'obras hospitalares',
    'construção hospitais',
    'reforma clínicas',
    'biossegurança',
    'normas ANVISA',
    'construção hospitalar',
    'obras hospitalares Salvador',
  ],
  openGraph: {
    title: 'Obras Hospitalares - Construtora AEL',
    description:
      'Construções e reformas especializadas para hospitais e clínicas, atendendo normas da ANVISA, biossegurança e fluxos hospitalares.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Obras Hospitalares - Construtora AEL',
    description:
      'Construções e reformas especializadas para hospitais e clínicas, atendendo normas da ANVISA e biossegurança.',
  },
  alternates: {
    canonical: '/servicos/obras-hospitalares',
  },
};

export default function ObrasHospitalaresLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
