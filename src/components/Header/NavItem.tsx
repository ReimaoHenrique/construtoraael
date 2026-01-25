'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import type { NavLink } from '@/models/navigation';

export function NavItem({ item }: { item: NavLink }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const firstFocusableRef = useRef<HTMLAnchorElement | null>(null);

  const toggle = () => setIsOpen((v) => !v);
  const close = () => setIsOpen(false);

  // Clique fora para fechar
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        close();
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isOpen]);

  // Tecla ESC para fechar
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen]);

  // Foco no primeiro item ao abrir
  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        firstFocusableRef.current?.focus();
      });
    }
  }, [isOpen]);

  // Caso não tenha sublinks → link simples
  if (!item.sublinks) {
    return (
      <Link
        href={item.href}
        className="text-gray-300 hover:text-white transition-colors duration-200"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div ref={containerRef} className="relative">
      {/* Botão trigger */}
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === 'Escape') close();
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggle();
          }
        }}
        className="
          text-gray-300 hover:text-white transition-colors duration-200
          flex items-center gap-1.5 focus:outline-none focus:ring-2
          focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900
          rounded-md px-3 py-2
        "
      >
        {item.label}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Mega Menu */}
      {isOpen && (
        <div
          className="
            fixed left-0 right-0 top-[--header-height] z-40
            bg-white shadow-2xl border-t border-gray-200
            animate-in fade-in slide-in-from-top-2 duration-200
          "
          style={{ height: '50vh' }}
          role="menu"
          aria-label={`Menu de ${item.label}`}
        >
          <div className="container mx-auto px-6 py-10 h-full">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 h-full">
              {/* Coluna principal / introdução */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">{item.label}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Soluções completas em {item.label.toLowerCase()} com qualidade, tecnologia de
                  ponta e prazo garantido.
                </p>
                {/* Você pode adicionar mais conteúdo aqui no futuro (ícones, CTA, etc.) */}
              </div>

              {/* Área com imagem de fundo + overlay 60% + cards */}
              <div className="col-span-3 relative rounded-2xl overflow-hidden shadow-inner">
                {/* Background image + overlay preto 60% */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('/images/construction-bg.jpg')`, // ← TROQUE PELO SEU CAMINHO DE IMAGEM
                  }}
                >
                  <div className="absolute inset-0 bg-black/60" />
                </div>

                {/* Conteúdo (cards) por cima */}
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 md:p-8 h-full">
                  {item.sublinks.map((sub, idx) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      ref={idx === 0 ? firstFocusableRef : null}
                      role="menuitem"
                      onClick={close}
                      className="
                        block p-5 rounded-xl
                        bg-white/85 backdrop-blur-md
                        hover:bg-white/95 hover:scale-[1.02] hover:shadow-lg
                        transition-all duration-300 ease-out
                        border border-gray-200/60
                        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
                        shadow-sm
                      "
                    >
                      <div className="font-semibold text-gray-900 text-lg">{sub.label}</div>
                      {sub.description && (
                        <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                          {sub.description}
                        </p>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
