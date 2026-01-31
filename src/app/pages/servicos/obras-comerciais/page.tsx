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
    trigger: 'Vocês fazem reformas de lojas e escritórios?',
    content:
      'Sim, realizamos reformas completas de lojas, escritórios, shoppings e espaços comerciais, incluindo adequação de layout, instalações elétricas e hidráulicas, acabamentos e identidade visual.',
  },
  {
    value: 'item-2',
    trigger: 'Quanto tempo leva uma obra comercial?',
    content:
      'O prazo varia conforme o porte do projeto. Reformas menores podem levar de 2 a 4 meses, enquanto construções de shopping centers ou grandes complexos comerciais podem levar de 12 a 24 meses.',
  },
  {
    value: 'item-3',
    trigger: 'Vocês trabalham com projetos de arquitetura comercial?',
    content:
      'Trabalhamos em parceria com arquitetos e temos equipe própria de projetos, garantindo que o layout seja otimizado para a operação comercial e experiência do cliente.',
  },
];

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <Hero title="Obras Comerciais" image="/predio.jpg" />
      
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
              Construção e Reforma de Espaços Comerciais
            </h1>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Desenvolvemos projetos comerciais que unem funcionalidade, estética e eficiência.
                Nossa expertise abrange desde pequenas reformas de lojas até grandes complexos
                comerciais, sempre com foco em otimizar o layout para a operação e experiência do cliente.
              </p>
              <p>
                Trabalhamos com lojas, shoppings, escritórios corporativos, restaurantes, salões de
                beleza e diversos outros estabelecimentos comerciais. Entendemos que cada negócio tem
                necessidades específicas e desenvolvemos soluções personalizadas.
              </p>
              <p>
                Nossos projetos incluem adequação de instalações elétricas e hidráulicas, sistemas de
                ar condicionado, acabamentos de alto padrão e integração com a identidade visual da marca.
                Garantimos execução rápida e eficiente, minimizando o tempo de paralisação do negócio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Orçamento */}
      <section className="relative isolate py-16 md:py-20 bg-gray-50 overflow-hidden">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-14">
          Solicite um orçamento para sua obra comercial
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
