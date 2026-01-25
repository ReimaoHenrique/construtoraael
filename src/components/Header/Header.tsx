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

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      if (current > lastScrollY && current > 120) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(current);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 transition-transform duration-500
          ${showHeader ? 'translate-y-0' : '-translate-y-full'}
          bg-blue-950 shadow-lg
        `}
        style={{ '--header-height': '80px' } as React.CSSProperties}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center h-[--header-height]">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.avif" alt="Logo" width={80} height={60} priority />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-10" role="menubar">
            {navigationData.map((item) => (
              <NavItem key={item.label} item={item} />
            ))}
          </nav>

          {/* Mobile */}
          <DrawerMenu />
        </div>
      </header>

      <div className="h-[--header-height]" />
    </>
  );
}
