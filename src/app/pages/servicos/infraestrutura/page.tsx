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
    trigger: 'Quais tipos de obras de infraestrutura vocês realizam?',
    content:
      'Realizamos obras de infraestrutura urbana e industrial, incluindo pavimentação, drenagem, redes de água e esgoto, redes de energia elétrica, subestações, adutoras, estações de tratamento de água (ETA) e esgoto (ETE), e tubulações de grande porte.',
  },
  {
    value: 'item-2',
    trigger: 'Vocês trabalham com obras públicas?',
    content:
      'Sim, temos experiência em obras de infraestrutura para o setor público, sempre seguindo rigorosamente as normas de licitação e execução de contratos públicos, com foco em qualidade, prazos e transparência.',
  },
  {
    value: 'item-3',
    trigger: 'Como é o processo de execução de uma obra de infraestrutura?',
    content:
      'Iniciamos com estudos topográficos e geotécnicos detalhados, desenvolvimento de projetos executivos, planejamento de logística e cronograma, execução com acompanhamento técnico rigoroso e testes de funcionamento antes da entrega.',
  },
];

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <Hero title="Infraestrutura" image="/construction.jpg" />
      
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
              Obras de Infraestrutura Urbana e Industrial
            </h1>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Especializamo-nos em obras de infraestrutura que formam a base do desenvolvimento
                urbano e industrial. Nossos projetos atendem às necessidades de comunidades, empresas
                e governos, sempre com foco em qualidade, durabilidade e eficiência.
              </p>
              <p>
                Desenvolvemos e executamos projetos de pavimentação asfáltica e de concreto, sistemas
                de drenagem pluvial, redes de distribuição de água e coleta de esgoto, redes de
                energia elétrica, subestações, adutoras, estações de tratamento de água (ETA) e
                esgoto (ETE), e tubulações de grande porte.
              </p>
              <p>
                Nossas obras de infraestrutura são planejadas com estudos técnicos detalhados,
                considerando aspectos topográficos, geotécnicos, hidrológicos e ambientais.
                Utilizamos equipamentos modernos e metodologias comprovadas, garantindo execução
                eficiente e resultados duradouros que beneficiam toda a comunidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Orçamento */}
      <section className="relative isolate py-16 md:py-20 bg-gray-50 overflow-hidden">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-14">
          Solicite um orçamento para sua obra de infraestrutura
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
