'use client';

import OrcamentoForm from '@/components/forms/OrcamentoForm';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Hero } from '@/components/heroImage';
import { DotPattern } from '@/components/ui/dot-pattern';
import { cn } from '@/lib/utils';

const faqItems = [
  {
    value: 'item-1',
    trigger: 'Quais tipos de obras industriais vocês realizam?',
    content:
      'Realizamos galpões industriais, fábricas, plantas de produção, armazéns logísticos, estruturas pré-moldadas, instalações de utilidades industriais e adequações para normas técnicas específicas.',
  },
  {
    value: 'item-2',
    trigger: 'Vocês trabalham com estruturas pré-moldadas?',
    content:
      'Sim, temos expertise em estruturas pré-moldadas de concreto, que oferecem rapidez na execução, economia e alta durabilidade para projetos industriais.',
  },
  {
    value: 'item-3',
    trigger: 'Como é o processo de planejamento de uma obra industrial?',
    content:
      'Iniciamos com análise técnica detalhada, projeto executivo, planejamento de cronograma, gestão de fornecedores especializados e acompanhamento rigoroso de qualidade e segurança durante toda a execução.',
  },
];

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <Hero title="Obras Industriais" image="/obras-industriais.jpg" />
      
      {/* Descrição do Serviço */}
      <section className="relative isolate py-16 md:py-20 bg-white overflow-hidden">
        <DotPattern
          className={cn(
            'pointer-events-none absolute inset-0 -z-10 mask-image:radial-gradient(300px_circle_at_center,white,transparent)',
          )}
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8">
              Construções Industriais de Alto Padrão
            </h1>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Especializamo-nos em obras industriais de grande porte, oferecendo soluções completas
                para o setor produtivo. Nossos projetos atendem às mais rigorosas normas técnicas,
                com foco em eficiência operacional, segurança e conformidade regulatória.
              </p>
              <p>
                Trabalhamos com estruturas pré-moldadas, galpões industriais, fábricas, plantas de
                produção e instalações de utilidades. Nossa equipe técnica possui vasta experiência
                em projetos que exigem coordenação complexa entre múltiplas disciplinas de engenharia.
              </p>
              <p>
                Garantimos execução integrada, gestão de fornecedores especializados e acompanhamento
                rigoroso de qualidade, sempre respeitando prazos e orçamentos estabelecidos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Orçamento */}
      <section className="relative isolate py-16 md:py-20 bg-gray-50 overflow-hidden">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-14">
          Solicite um orçamento para sua obra industrial
        </h1>
        <DotPattern
          className={cn(
            'pointer-events-none absolute inset-0 -z-10 mask-image:radial-gradient(300px_circle_at_center,white,transparent)',
          )}
        />

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <OrcamentoForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-16 md:py-20 bg-white overflow-hidden">
        <DotPattern
          className={cn(
            'pointer-events-none absolute inset-0 -z-10 mask-image:radial-gradient(300px_circle_at_center,white,transparent)',
          )}
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-14">
            Perguntas Frequentes
          </h2>

          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            {faqItems.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger className="text-lg font-medium">{item.trigger}</AccordionTrigger>
                <AccordionContent className="text-gray-700">{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
