'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { navigationData } from '@/models/navigation';
import { DrawerMenu } from '../DrawerMenu';
import { NavItem } from './NavItem';

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const delta = 10;

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const current = window.scrollY;
          if (current < lastScrollY - delta) setShowHeader(true);
          else if (current > lastScrollY + delta && current > 120) setShowHeader(false);
          setLastScrollY(current <= 0 ? 0 : current);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-transform duration-300 ease-in-out
          ${showHeader ? 'translate-y-0' : '-translate-y-full'}
          bg-blue-950/90 backdrop-blur-md border-b border-white/10
          shadow-lg shadow-black/30
        `}
      >
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 flex justify-between items-center h-16 sm:h-20">
          {/* Logo + Brand */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 sm:gap-3.5 mr-4 sm:mr-6 select-none"
          >
            <Image
              src="/logo.svg"
              alt="Construtora Andrade & Lima"
              width={240} // ← ajuste para o tamanho natural/real do seu SVG em desktop
              height={80} // ← mantenha a proporção real do seu logo (ex: 240×80, 300×100 etc.)
              priority
              className="h-10 w-auto sm:h-12 md:h-14 lg:h-16" // controla o tamanho visual responsivo
            />

            <span
              className={`
                text-white font-semibold tracking-wide
                text-sm sm:text-base md:text-lg
                opacity-90 group-hover:opacity-100
                transition-all duration-300
                group-hover:scale-105 origin-left
                whitespace-nowrap
              `}
            >
              Andrade & Lima
            </span>
          </Link>

          {/* Desktop + Tablet Nav */}
          <nav className="hidden md:flex items-center gap-5 xl:gap-8" role="menubar">
            {navigationData.map((item) => (
              <NavItem key={item.label} item={item} />
            ))}
          </nav>

          {/* Hamburger — Mobile + Tablet */}
          <div className="md:flex lg:hidden">
            <DrawerMenu />
          </div>
        </div>
      </header>
      <div className="h-16 sm:h-20" /> {/* spacer para evitar sobreposição de conteúdo */}
    </>
  );
}
