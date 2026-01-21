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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full h-full max-w-6xl bg-white p-8 md:p-12 overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-500 hover:text-gray-900 text-2xl"
          aria-label="Close menu"
        >
          &times;
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          {/* Coluna de Navegação */}
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {navigationData.map((section) => (
              <div key={section.label}>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  <Link href={section.href} onClick={onClose}>
                    {section.label}
                  </Link>
                </h3>
                <ul>
                  {section.sublinks?.map((link) => (
                    <li key={link.label} className="mb-2">
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className="text-gray-600 hover:text-blue-600"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Coluna de Conteúdo em Destaque */}
          <div className="border-t md:border-t-0 md:border-l border-gray-200 pl-8 pt-8 md:pt-0">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Featured Projects
              </h3>
              <ul className="mb-6">
                <li className="mb-2">
                  <Link href="/projects/project-a" onClick={onClose} className="text-gray-600 hover:text-blue-600">
                    Neom
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/projects/project-b" onClick={onClose} className="text-gray-600 hover:text-blue-600">
                    Pluto Train 2
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                News & Media
              </h3>
              <ul>
                <li className="mb-2">
                  <Link href="/news/press-releases" onClick={onClose} className="text-gray-600 hover:text-blue-600">
                    Press Releases
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/news/media-contacts" onClick={onClose} className="text-gray-600 hover:text-blue-600">
                    Media Contacts
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
