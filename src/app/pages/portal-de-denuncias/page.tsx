'use client';

import { Hero } from '@/components/heroImage';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';

export default function Page() {
  const whatsappNumber = '5511999999999';
  const whatsappMessage = encodeURIComponent('Olá, gostaria de fazer uma denúncia.');

  return (
    <>
      <Hero title="Portal de Denúncias" image="/PortalDeDenuncias.jpg" />

      <h2 className="mt-6 text-center text-3xl font-medium text-gray-700">
        Utilize este canal para relatar condutas irregulares de forma segura
      </h2>

      {/* FAQ */}
      <section className="relative z-10 mx-auto max-w-4xl px-4 py-16">
        <Card className="shadow-xl border border-gray-200/60">
          <CardContent className="p-0">
            <Accordion type="single" collapsible className="w-full divide-y">
              <AccordionItem value="item-1" className="border-none">
                <AccordionTrigger className="px-8 py-6 text-lg font-semibold hover:no-underline">
                  As denúncias são anônimas?
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-base leading-relaxed text-muted-foreground">
                  Sim. Você pode optar por não se identificar. Nenhuma informação pessoal é
                  obrigatória para o envio da denúncia.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-none">
                <AccordionTrigger className="px-8 py-6 text-lg font-semibold hover:no-underline">
                  Que tipo de situação posso denunciar?
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-base leading-relaxed text-muted-foreground">
                  Condutas antiéticas, assédio, fraudes, corrupção, desvios de conduta, violações de
                  políticas internas ou da legislação.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-none">
                <AccordionTrigger className="px-8 py-6 text-lg font-semibold hover:no-underline">
                  Preciso apresentar provas?
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-base leading-relaxed text-muted-foreground">
                  Não é obrigatório, mas qualquer evidência ajuda na apuração.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-none">
                <AccordionTrigger className="px-8 py-6 text-lg font-semibold hover:no-underline">
                  O que acontece depois que eu denuncio?
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-base leading-relaxed text-muted-foreground">
                  A denúncia é analisada por uma equipe responsável e tratada conforme políticas
                  internas e legislação.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-none">
                <AccordionTrigger className="px-8 py-6 text-lg font-semibold hover:no-underline">
                  Posso acompanhar o andamento?
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-base leading-relaxed text-muted-foreground">
                  Caso informe um meio de contato, poderá receber atualizações.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </section>

      {/* Card de denúncia */}
      <section className="relative min-h-[60vh] bg-background px-4 pb-24">
        <div className="mx-auto flex max-w-md justify-center">
          <div className="w-full rounded-xl bg-white/95 backdrop-blur shadow-xl border border-gray-200 p-8 text-center space-y-6">
            <div className="text-gray-700">
              <p className="text-base font-medium">Email:</p>
              <p className="select-all text-sm text-gray-900">denuncias@construtoraael.com</p>
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-red-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition"
            >
              Fazer denúncia pelo WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
