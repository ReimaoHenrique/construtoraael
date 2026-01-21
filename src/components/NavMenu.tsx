'use client';

import React from 'react';
import Link from 'next/link';
import { navigationData } from '@/models/navigation';

interface NavMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const NavMenu: React.FC<NavMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      {/* Painel glass com mais estabilidade de contraste */}
      <div
        className="
          relative w-full h-full max-w-6xl 
          bg-black/25 backdrop-blur-xl backdrop-brightness-95   /* escurece levemente o blur pra texto branco destacar */
          border border-white/10 
          rounded-2xl shadow-2xl 
          overflow-hidden
          text-white
        "
      >
        {/* Botão fechar */}
        <button
          onClick={onClose}
          className="
            absolute top-6 right-6 
            text-white hover:text-gray-200 
            text-3xl font-light 
            transition-colors duration-200
            drop-shadow-md   /* sombra sutil no X pra visibilidade */
            z-10
          "
          aria-label="Close menu"
        >
          ×
        </button>

        {/* Conteúdo */}
        <div className="p-8 md:p-12 overflow-y-auto h-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-8">
            {/* Navegação principal */}
            <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-8">
              {navigationData.map((section) => (
                <div key={section.label}>
                  <h3 className="text-xl font-semibold text-white drop-shadow-sm mb-4">
                    <Link 
                      href={section.href} 
                      onClick={onClose}
                      className="hover:text-blue-200 transition-colors"
                    >
                      {section.label}
                    </Link>
                  </h3>
                  <ul className="space-y-3">
                    {section.sublinks?.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          onClick={onClose}
                          className="
                            text-gray-100 hover:text-white 
                            transition-colors duration-150
                            block py-1
                          "
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Destaques */}
            <div className="border-t md:border-t-0 md:border-l border-white/10 pl-8 pt-8 md:pt-0">
              <div className="mb-10">
                <h3 className="text-xl font-semibold text-white drop-shadow-sm mb-4">
                  Featured Projects
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link 
                      href="/projects/project-a" 
                      onClick={onClose}
                      className="text-gray-100 hover:text-blue-200 transition-colors"
                    >
                      Neom
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/projects/project-b" 
                      onClick={onClose}
                      className="text-gray-100 hover:text-blue-200 transition-colors"
                    >
                      Pluto Train 2
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white drop-shadow-sm mb-4">
                  News & Media
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link 
                      href="/news/press-releases" 
                      onClick={onClose}
                      className="text-gray-100 hover:text-blue-200 transition-colors"
                    >
                      Press Releases
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/news/media-contacts" 
                      onClick={onClose}
                      className="text-gray-100 hover:text-blue-200 transition-colors"
                    >
                      Media Contacts
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;