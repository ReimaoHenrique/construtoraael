'use client';

import Image from 'next/image';
import { X, Newspaper, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ComboboxItem, ComboboxList } from '@/components/ui/combobox';
import { ComboboxMulti } from '@/components/ComboboxMulti';
import { useNewsletterCard } from './useNewsletterCard';

// seus tipos de serviço
const tiposServico = [
  'Obras Industriais',
  'Obras Comerciais',
  'Obras Hospitalares',
  'Hotelaria',
  'Infraestrutura',
  'Projetos de Engenharia',
  'Incorporação Imobiliária',
];

export function NewsletterModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const {
    name,
    setName,
    email,
    setEmail,
    services,
    setServices,
    isSubmitting,
    showSuccess,
    submit,
  } = useNewsletterCard({ onClose });

  return (
    <>
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="fixed right-4 top-4 z-[60] flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-3 text-white shadow-xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <CheckCircle2 className="h-5 w-5" />
            <span className="text-sm font-medium">Inscrição enviada com sucesso</span>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={onClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal container */}
            <motion.div
              // AQUI ESTÁ O AJUSTE DE ALTURA (60vh no mobile, 70vh no desktop)
              className="relative z-10 w-full max-w-[min(80vw,800px)] h-[60vh] sm:h-[70vh]"
              initial={{ scale: 0.88, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0, y: 40 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* AQUI ESTÁ O AJUSTE DE SCROLL (h-full + overflow-y-auto) */}
              <Card className="overflow-hidden border-none shadow-2xl rounded-2xl bg-gradient-to-b from-card to-card/80 h-full overflow-y-auto flex flex-col">
                {/* Imagem de capa (shrink-0 impede que ela amasse) */}
                <div className="relative w-full shrink-0">
                  <Image
                    src="/servicos-hero.jpg"
                    alt="Obras e serviços da construtora"
                    width={1200}
                    height={640}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 800px"
                    className="w-full object-cover brightness-[0.85]"
                    style={{ height: '160px' }}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                </div>

                {/* Botão fechar */}
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 z-20 rounded-full bg-black/40 p-2 text-white/90 hover:bg-black/60 hover:text-white transition-colors"
                  aria-label="Fechar modal"
                >
                  <X className="h-5 w-5" />
                </button>

                <CardHeader className="pt-8 pb-4 text-center shrink-0">
                  <div className="mx-auto mb-3 rounded-full bg-primary/10 p-3 w-fit">
                    <Newspaper className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl sm:text-3xl font-bold">
                    Assine nossa newsletter
                  </CardTitle>
                  <CardDescription className="text-base sm:text-lg mt-2 max-w-xl mx-auto">
                    Fique por dentro das novidades em engenharia, construção civil, inovação
                    industrial e grandes projetos.
                  </CardDescription>
                </CardHeader>

                <CardContent className="px-6 pb-8 sm:px-10 md:px-12 grow">
                  <form onSubmit={submit} className="flex flex-col gap-6">
                    {/* Nome */}
                    <div className="grid gap-2">
                      <Label htmlFor="name" className="text-base font-medium">
                        Nome completo
                      </Label>
                      <Input
                        id="name"
                        placeholder="Seu nome"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="h-11 text-base"
                      />
                    </div>

                    {/* Email */}
                    <div className="grid gap-2">
                      <Label htmlFor="email" className="text-base font-medium">
                        Email profissional
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-11 text-base"
                      />
                    </div>

                    {/* Serviços */}
                    <div className="grid gap-2">
                      <Label className="text-base font-medium">Áreas de interesse</Label>
                      <ComboboxMulti
                        items={tiposServico}
                        value={services}
                        onChange={setServices}
                        placeholder="Selecione os serviços que mais te interessam..."
                        className="min-h-[44px]"
                      >
                        <ComboboxList>
                          {(item) => (
                            <ComboboxItem key={item.value} value={item.value}>
                              {item.label}
                            </ComboboxItem>
                          )}
                        </ComboboxList>
                      </ComboboxMulti>
                    </div>

                    {/* Botão */}
                    <Button
                      type="submit"
                      size="lg"
                      className="h-12 text-base font-medium mt-2 w-full"
                      disabled={isSubmitting}
                    >
                      Quero receber as novidades →
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
