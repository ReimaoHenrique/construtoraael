'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import NavMenu from './NavMenu';
import { navigationData } from '@/models/navigation'
import { DrawerMenu } from './DrawerMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="bg-yellow-700text-black shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">
            <Link href="/">BECHTEL</Link>
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationData.map((link) => (
              <Link key={link.label} href={link.href} className="text-gray-700 hover:text-blue-600">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center">
            <DrawerMenu />
          </div>
        </div>
      </header>
      <NavMenu isOpen={isMenuOpen} onClose={handleCloseMenu} />
    </>
  );
};

export default Header;
