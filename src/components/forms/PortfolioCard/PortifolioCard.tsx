'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { PortfolioForm } from '@/components/forms/PortfolioCard/AlertPortfolio';

interface PortfolioCategory {
  title: string;
  imageUrl: string;
  portfolioRoute: string;
  buttonLabel?: string;
}

const portfolioCategories: PortfolioCategory[] = [
  {
    title: 'Hotelaria / Hospitalar',
    imageUrl: '/predio.jpg',
    portfolioRoute: '/portfolio/hotelaria',
    buttonLabel: 'Baixar portfólio',
  },
  {
    title: 'Obras Industriais',
    imageUrl: '/servicos-hero.jpg',
    portfolioRoute: '/portfolio/industrial',
    buttonLabel: 'Baixar portfólio',
  },
  {
    title: 'Obras Comerciais',
    imageUrl: '/obras-industriais.jpg',
    portfolioRoute: '/portfolio/comercial',
    buttonLabel: 'Baixar portfólio',
  },
  {
    title: 'Incorporação Imobiliária',
    imageUrl: '/incorporacao-imobiliaria.jpg',
    portfolioRoute: '/portfolio/incorporacao',
    buttonLabel: 'Baixar portfólio',
  },
];

function PortfolioCard({ category }: { category: PortfolioCategory }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="group overflow-hidden rounded-xl border bg-card shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/50">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={category.imageUrl}
          alt={category.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold">{category.title}</h3>
        <AlertDialog open={open} onOpenChange={setOpen}>
          <AlertDialogTrigger asChild>
            <Button variant="outline" className="w-full">
              {category.buttonLabel || 'Ver portfólio'}
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="max-h-[85vh] overflow-y-auto">
            <AlertDialogCancel className="absolute right-3 top-3">Fechar</AlertDialogCancel>
            <AlertDialogHeader>
              <AlertDialogTitle>{category.title}</AlertDialogTitle>
            </AlertDialogHeader>
            <div className="pt-4">
              <h4 className="text-lg font-semibold text-center mb-4">Baixar portfólio</h4>
              <PortfolioForm
                portfolioRoute={category.portfolioRoute}
                portfolioTitle={category.title}
                onSuccess={() => setOpen(false)}
              />
            </div>
            <AlertDialogFooter>
              <AlertDialogCancel>Fechar</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => {
                  window.open(category.portfolioRoute, '_blank', 'noopener,noreferrer');
                }}
              >
                Baixar Portifolio
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}

export default function PortifolioCard() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        <section>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Nosso Portfólio</h1>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Conheça alguns dos nossos principais segmentos de atuação em construção civil e
            incorporação.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {portfolioCategories.map((cat) => (
              <PortfolioCard key={cat.portfolioRoute} category={cat} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
