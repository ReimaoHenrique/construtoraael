'use client';

import { ContactHero } from '@/components/heroContact';

export default function Page() {
  const whatsappNumber = '5511999999999';
  const whatsappMessage = encodeURIComponent('Olá, gostaria de fazer uma denúncia.');

  return (
    <>
      <ContactHero />
      <div className="relative min-h-screen overflow-hidden bg-background">
        <div className="absolute inset-0 -z-10 flex items-center justify-center"></div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.25),rgba(255,255,255,0))]" />

        <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
          <div className="w-full max-w-md rounded-lg bg-white/90 backdrop-blur shadow-lg p-6 text-center space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Canal de Denúncias</h1>

            <p className="text-sm text-gray-600">
              Este canal pode ser utilizado para relatar condutas irregulares de forma segura.
            </p>

            <div className="text-gray-700">
              <p className="font-medium">Email:</p>
              <p className="select-all text-sm text-gray-900">denuncias@seudominio.com</p>
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-red-600 text-white py-3 rounded-md font-semibold hover:bg-red-700 transition"
            >
              Fazer denúncia pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
