'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import cards from '@/data/cardcomponente.json';

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { id } = use(params);
  const project = cards.find((card: any) => card.slug === id);

  if (!project || !project.images) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Projeto não encontrado</h1>
          <p className="text-slate-600 mb-8">O projeto que você está procurando não existe.</p>
          <Link href="/">
            <Button>Voltar para a página inicial</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] overflow-hidden">
        {/* Imagem de fundo */}
        <div className="absolute inset-0">
          <Image
            src={project.images[0]} // primeira imagem da galeria como fundo
            alt={project.heroTitle || project.title} // fallback pro título normal
            fill
            className="object-cover"
            priority // bom para hero
            quality={85}
            sizes="100vw"
          />

          {/* Gradiente escuro para legibilidade */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        </div>

        {/* Título centralizado */}
        <div className="absolute inset-0 flex items-center justify-center px-6 z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] max-w-5xl">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Project Details */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Project Info Cards */}
          {(project.location || project.area || project.units || project.status) && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              {project.location && (
                <div className="bg-white rounded-lg p-6 shadow-md border border-slate-200">
                  <h3 className="text-sm font-semibold text-slate-600 mb-2 uppercase tracking-wide">
                    Localização
                  </h3>
                  <p className="text-2xl font-bold text-slate-900">{project.location}</p>
                </div>
              )}
              {project.area && (
                <div className="bg-white rounded-lg p-6 shadow-md border border-slate-200">
                  <h3 className="text-sm font-semibold text-slate-600 mb-2 uppercase tracking-wide">
                    Área Total
                  </h3>
                  <p className="text-2xl font-bold text-slate-900">{project.area}</p>
                </div>
              )}
              {project.units && (
                <div className="bg-white rounded-lg p-6 shadow-md border border-slate-200">
                  <h3 className="text-sm font-semibold text-slate-600 mb-2 uppercase tracking-wide">
                    Unidades
                  </h3>
                  <p className="text-2xl font-bold text-slate-900">{project.units}</p>
                </div>
              )}
              {project.status && (
                <div className="bg-white rounded-lg p-6 shadow-md border border-slate-200">
                  <h3 className="text-sm font-semibold text-slate-600 mb-2 uppercase tracking-wide">
                    Status
                  </h3>
                  <p className="text-2xl font-bold text-slate-900">{project.status}</p>
                </div>
              )}
            </div>
          )}

          {/* Full Description */}
          {project.fullDescription && (
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Sobre o Projeto
              </h2>
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-4xl">
                {project.fullDescription}
              </p>
            </div>
          )}

          {/* Image Carousel */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Galeria de Imagens
            </h2>
            <div className="relative">
              <Carousel
                opts={{
                  align: 'start',
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {project.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative w-full h-[600px] md:h-[700px] rounded-lg overflow-hidden shadow-xl">
                        <Image
                          src={image}
                          alt={`${project.title} - Imagem ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 bg-white/90 hover:bg-white border-slate-300" />
                <CarouselNext className="right-4 bg-white/90 hover:bg-white border-slate-300" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
