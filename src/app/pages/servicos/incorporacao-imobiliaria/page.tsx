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
    trigger: 'O que é incorporação imobiliária?',
    content:
      'Incorporação imobiliária é o processo de desenvolvimento completo de um empreendimento, desde a viabilização do projeto, registro na prefeitura, captação de recursos, construção e entrega das unidades aos compradores.',
  },
  {
    value: 'item-2',
    trigger: 'Vocês fazem apenas a construção ou todo o processo?',
    content:
      'Oferecemos o desenvolvimento completo do empreendimento, incluindo viabilização técnica e financeira, projetos arquitetônicos e de engenharia, registro e aprovações, captação de compradores, construção e entrega das chaves.',
  },
  {
    value: 'item-3',
    trigger: 'Quais tipos de empreendimentos vocês desenvolvem?',
    content:
      'Desenvolvemos condomínios residenciais de médio e alto padrão, edifícios comerciais, complexos mistos (residencial e comercial) e loteamentos, sempre com foco em qualidade, localização estratégica e valorização do investimento.',
  },
];

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <Hero title="Incorporação Imobiliária" image="/incorporacao-imobiliaria.jpg" />
      
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
              Desenvolvimento Completo de Empreendimentos
            </h1>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Atuamos como incorporadora imobiliária, desenvolvendo empreendimentos residenciais e
                comerciais de médio e alto padrão. Oferecemos uma solução completa, desde a concepção
                do projeto até a entrega das chaves aos compradores.
              </p>
              <p>
                Nossa expertise abrange viabilização técnica e financeira, desenvolvimento de projetos
                arquitetônicos e de engenharia, obtenção de todas as licenças e aprovações necessárias,
                registro do empreendimento, captação de compradores e execução da obra com qualidade
                e pontualidade.
              </p>
              <p>
                Desenvolvemos condomínios residenciais, edifícios comerciais e complexos mistos,
                sempre priorizando localização estratégica, qualidade construtiva, acabamentos de
                alto padrão e valorização do investimento. Garantimos transparência em todo o processo
                e entrega dentro do prazo estabelecido.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Orçamento */}
      <section className="relative isolate py-16 md:py-20 bg-gray-50 overflow-hidden">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-14">
          Solicite informações sobre nossos empreendimentos
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
