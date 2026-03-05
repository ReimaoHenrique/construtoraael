import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Construtora Andrade & Lima',
    template: '%s | Andrade & Lima Construtora',
  },
  description:
    'Construção civil, reformas e incorporações com qualidade, prazo e responsabilidade técnica.',
  applicationName: 'Construtora Andrade & Lima',
  keywords: ['construtora', 'obras', 'reformas', 'engenharia civil', 'Salvador', 'Bahia'],
  authors: [{ name: 'Construtora Andrade & Lima' }],
  creator: 'Construtora Andrade & Lima',
  metadataBase: new URL('https://www.construtoraael.com'),

  // Ícones (já estava bom, mantive e organizei melhor)
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'icon', url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { rel: 'icon', url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.construtoraael.com',
    siteName: 'Construtora Andrade & Lima',
    title: 'Construtora Andrade & Lima',
    description:
      'Construção civil, reformas e incorporações com qualidade, prazo e responsabilidade técnica.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Construtora Andrade & Lima - Obras com qualidade e responsabilidade',
        type: 'image/png',
      },
    ],
  },

  // Twitter/X Cards (melhora previews no X)
  twitter: {
    card: 'summary_large_image',
    title: 'Construtora Andrade & Lima',
    description:
      'Construção civil, reformas e incorporações com qualidade, prazo e responsabilidade técnica.',
    images: ['/opengraph-image'],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
