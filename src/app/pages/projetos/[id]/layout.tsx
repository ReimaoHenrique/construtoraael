import type { Metadata } from 'next';
import { ReactNode } from 'react';
import cards from '@/data/cardcomponente.json';

interface ProjectLayoutProps {
  children: ReactNode;
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = cards.find((card: any) => card.slug === id);

  if (!project) {
    return {
      title: 'Projeto não encontrado',
      description: 'O projeto que você está procurando não existe.',
    };
  }

  const firstImage = project.images?.[0] || project.image || '/og-image.png';
  const siteUrl = 'https://www.construtoraael.com';
  const projectUrl = `${siteUrl}/projetos/${id}`;
  const imageUrl = firstImage.startsWith('http')
    ? firstImage
    : `${siteUrl}${firstImage}`;

  const title = project.heroTitle || project.title;
  const description = project.heroDescription || project.fullDescription || project.description;

  return {
    title: `${title} | Construtora Andrade & Lima`,
    description,
    keywords: [
      'construtora',
      'obras',
      'projetos',
      'engenharia civil',
      'Salvador',
      'Bahia',
      project.location?.split(',')[0] || '',
      project.title,
    ].filter(Boolean),
    authors: [{ name: 'Construtora Andrade & Lima' }],
    creator: 'Construtora Andrade & Lima',
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      url: projectUrl,
      siteName: 'Construtora Andrade & Lima',
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} - ${description.substring(0, 100)}...`,
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: projectUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function ProjectLayout({ children }: ProjectLayoutProps) {
  return <>{children}</>;
}

