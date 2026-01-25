'use client';

import { ContactHero } from '@/components/heroContact';

export default function ContactPage() {
  const whatsappNumber = '5511999999999'; // troca essa desgraça
  const whatsappMessage = encodeURIComponent('Olá, gostaria de falar com vocês.');

  return (
    <>
      <ContactHero />
      <div className="relative min-h-screen overflow-hidden bg-background">
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.25),rgba(255,255,255,0))]" />

        <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
          <div className="w-full max-w-md rounded-lg bg-white/90 backdrop-blur shadow-lg p-6 text-center space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Contato</h1>

            <div className="text-gray-700">
              <p className="font-medium">Email:</p>
              <p className="select-all text-sm text-gray-900">contato@seudominio.com</p>
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition"
            >
              Falar no WhatsApp
            </a>
          </div>
          
          </div>
      </div>
     
    </>
  );
}
