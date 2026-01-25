'use client';

import OrcamentoForm from '@/components/forms/OrcamentoForm';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import CardDescription from '@/components/CardDescription';
import { Hero } from '@/components/heroImage';
import { DotPattern } from '@/components/ui/dot-pattern';
import { cn } from '@/lib/utils';

const servicosDestaque = [
  {
    title: 'Obras Industriais',
    description:
      'Projetos de grande porte com alto padrão técnico, execução integrada e conformidade com normas rigorosas de segurança e qualidade industrial.',
    image: '/obras-industriais.jpg',
    href: '/servicos/obras-industriais',
  },
  {
    title: 'Obras Comerciais',
    description:
      'Construção e reforma de lojas, shoppings, escritórios e espaços de varejo com foco em layout otimizado, identidade visual e experiência do cliente.',
    image: '/predio.jpg',
    href: '/servicos/obras-comerciais',
  },
  {
    title: 'Obras Hospitalares',
    description:
      'Construções e reformas especializadas para hospitais e clínicas, atendendo normas da ANVISA, biossegurança, fluxos hospitalares e ambientes estéreis.',
    image: '/construction.jpg',
    href: '/servicos/obras-hospitalares',
  },
  {
    title: 'Obras para Hotelaria',
    description:
      'Hotéis, resorts e pousadas com design funcional, conforto premium, áreas comuns atrativas e acabamentos de alto padrão para o setor de hospedagem.',
    image: '/Projetos.jpg',
    href: '/servicos/obras-hotelaria',
  },
  {
    title: 'Incorporação Imobiliária',
    description:
      'Desenvolvimento completo de empreendimentos residenciais e comerciais: viabilização, registro, captação e entrega de condomínios de médio e alto padrão.',
    image: '/incorporacao-imobiliaria.jpg',
    href: '/servicos/incorporacao-imobiliaria',
  },
];

const faqItems = [
  {
    value: 'item-1',
    trigger: 'Quanto tempo leva uma obra típica?',
    content:
      'O prazo varia conforme o porte e complexidade do projeto. Obras comerciais menores podem levar de 4 a 12 meses, enquanto obras industriais ou de infraestrutura costumam variar entre 12 e 36 meses.',
  },
  {
    value: 'item-2',
    trigger: 'Vocês atuam apenas em Salvador ou em outras regiões?',
    content:
      'Atuamos principalmente na Bahia, mas realizamos projetos em outros estados sob demanda.',
  },
];

export default function ServicosPage() {
  return (
    <>
      <Hero title="Nossos Serviços" image="/servicos-hero.jpg" />

      {/* Destaques */}
      <section className="py-8 md:py-10 bg-white border-b">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-center text-2xl md:text-3xl font-bold mb-6 px-1">
            Nossos Serviços em Destaque
          </h2>

          <div className="flex gap-4 md:gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">
            {servicosDestaque.map((item, idx) => (
              <CardDescription key={idx} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de Orçamento */}
      <section className="relative isolate py-16 md:py-20 bg-gray-50 overflow-hidden">
        <DotPattern
          className={cn(
            'pointer-events-none absolute inset-0 z-0 mask-image:radial-gradient(300px_circle_at_center,white,transparent)',
          )}
        />

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <OrcamentoForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
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
