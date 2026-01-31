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
    trigger: 'Quais tipos de projetos de engenharia vocês desenvolvem?',
    content:
      'Desenvolvemos projetos estruturais, elétricos, hidráulicos, de ar condicionado, de prevenção e combate a incêndio, de segurança, de automação e projetos executivos completos para obras de todos os portes.',
  },
  {
    value: 'item-2',
    trigger: 'Vocês fazem apenas projetos ou também executam?',
    content:
      'Oferecemos tanto o desenvolvimento de projetos quanto a execução das obras. Trabalhamos de forma integrada, garantindo que o projeto seja viável e executável, ou podemos desenvolver projetos para outras construtoras executarem.',
  },
  {
    value: 'item-3',
    trigger: 'Quanto tempo leva para desenvolver um projeto completo?',
    content:
      'O prazo varia conforme a complexidade e porte do projeto. Projetos residenciais menores podem levar de 2 a 4 semanas, enquanto projetos industriais ou de grande porte podem levar de 2 a 6 meses, incluindo todas as disciplinas de engenharia.',
  },
];

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <Hero title="Projetos de Engenharia" image="/Projetos.jpg" />
      
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
              Projetos Técnicos de Excelência
            </h1>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Nossa equipe de engenharia desenvolve projetos técnicos completos e detalhados para
                obras de todos os portes. Trabalhamos com todas as disciplinas de engenharia,
                garantindo projetos viáveis, econômicos e em total conformidade com as normas técnicas.
              </p>
              <p>
                Desenvolvemos projetos estruturais, elétricos, hidráulicos, de ar condicionado,
                prevenção e combate a incêndio, segurança, automação predial e projetos executivos
                completos. Utilizamos softwares de última geração e metodologias BIM quando necessário.
              </p>
              <p>
                Nossos projetos são desenvolvidos com foco na execução, considerando desde o início
                a viabilidade construtiva, otimização de materiais, facilidade de manutenção e
                eficiência energética. Trabalhamos de forma integrada com arquitetos e outros
                profissionais, garantindo coordenação completa entre todas as disciplinas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Orçamento */}
      <section className="relative isolate py-16 md:py-20 bg-gray-50 overflow-hidden">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-14">
          Solicite um orçamento para seu projeto de engenharia
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
