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
    trigger: 'Vocês atendem às normas da ANVISA?',
    content:
      'Sim, todos os nossos projetos hospitalares são desenvolvidos em total conformidade com as normas da ANVISA, incluindo requisitos de biossegurança, fluxos hospitalares e ambientes estéreis.',
  },
  {
    value: 'item-2',
    trigger: 'Quais tipos de instalações hospitalares vocês constroem?',
    content:
      'Construímos e reformamos hospitais, clínicas, laboratórios, unidades de terapia intensiva (UTI), centros cirúrgicos, pronto-socorros e demais instalações de saúde, sempre seguindo padrões rigorosos de qualidade.',
  },
  {
    value: 'item-3',
    trigger: 'Como é garantida a biossegurança nas obras?',
    content:
      'Utilizamos materiais e sistemas específicos para ambientes hospitalares, seguimos protocolos rigorosos de isolamento durante obras em funcionamento e garantimos que todos os sistemas de ar condicionado, água e esgoto atendam aos padrões de biossegurança.',
  },
];

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <Hero title="Obras Hospitalares" image="/construction.jpg" />
      
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
              Construções Especializadas para o Setor de Saúde
            </h1>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Somos especialistas em obras hospitalares e de saúde, com profundo conhecimento das
                normas técnicas e regulamentações que regem este setor. Nossos projetos atendem
                rigorosamente às exigências da ANVISA e demais órgãos reguladores.
              </p>
              <p>
                Desenvolvemos e executamos projetos para hospitais, clínicas, laboratórios, UTIs,
                centros cirúrgicos e demais instalações de saúde. Entendemos a complexidade dos
                fluxos hospitalares, sistemas de biossegurança e necessidades específicas de cada
                ambiente médico.
              </p>
              <p>
                Nossos projetos incluem sistemas especiais de ar condicionado com controle de
                pressão e filtragem, instalações hidráulicas com água tratada, sistemas elétricos
                com geradores de emergência e materiais que atendem aos padrões de biossegurança.
                Garantimos execução que minimiza impactos em instalações em funcionamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Orçamento */}
      <section className="relative isolate py-16 md:py-20 bg-gray-50 overflow-hidden">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-14">
          Solicite um orçamento para sua obra hospitalar
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
