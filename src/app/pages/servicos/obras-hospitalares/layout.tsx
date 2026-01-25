// app/projetos/layout.tsx
import type { Metadata } from 'next';
import { ReactNode } from 'react';

// Metadados simples e específicos para esta seção (sobrescrevem o root onde fizer sentido)
export const metadata: Metadata = {
  title: 'Projetos | Construtora Andrade e Lima',
  description:
    'Conheça nossos projetos de construções, reformas, galpões industriais e incorporações imobiliárias em Salvador e região.',
  // Opcional: keywords, robots, etc. – mantenha mínimo se quiser leve
  // keywords: ['construção civil', 'reformas Salvador', 'galpões pré-moldados'],
  openGraph: {
    title: 'Projetos - Construtora AEL',
    description: 'Obras rápidas, seguras e de alta qualidade. Veja nosso portfólio.',
    // url: 'https://www.construtoraael.com/projetos', // opcional
    // images: '/og-projetos.jpg', // se tiver imagem específica
  },
  // Alternativa super simples se quiser ainda mais leve:
  // title: { default: 'Projetos | Construtora AEL' },
};

export default function ProjetosLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Aqui você pode colocar UI compartilhada só para a seção /projetos */}
      {/* Ex: um header diferente, sidebar, breadcrumbs, etc. */}

      <main className="min-h-screen bg-gray-50">
        {/* Exemplo de seção compartilhada */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold text-gray-800">Nossos Projetos</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Obras executadas com rapidez, qualidade e compromisso.
            </p>
          </div>
        </section>

        {/* O conteúdo da página (page.tsx) entra aqui */}
        {children}
      </main>

      {/* Footer específico da seção, se quiser */}
    </>
  );
}
