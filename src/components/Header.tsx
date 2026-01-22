'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { navigationData } from '@/models/navigation';
import { DrawerMenu } from './DrawerMenu';
import Image from 'next/image';

const Header: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);

  const handleScroll = () => {
    const currentScroll = window.scrollY;
    if (currentScroll > scrollY && currentScroll > 100) {
      // Scroll para baixo
      setShowHeader(false);
    } else {
      // Scroll para cima
      setShowHeader(true);
    }
    setScrollY(currentScroll);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-transform duration-300 backdrop-blur-md ${
        showHeader ? 'translate-y-0 bg-blue-950/60 shadow-md' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo com imagem */}
        <Link href="/" className="text-2xl font-bold text-white">
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.avif"
            alt="Logo"
            width={80}
            height={120}
          />
          
          
        </div>
</Link>
        {/* Navegação */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navigationData.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Drawer */}
        <div className="flex items-center">
          <DrawerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
