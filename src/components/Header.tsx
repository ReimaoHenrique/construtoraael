'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import NavMenu from './NavMenu';
import { navigationData } from '@/models/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="bg-white text-black shadow-md sticky top-0 z-40">
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
            <button
              onClick={handleOpenMenu}
              className="ml-8 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Menu
            </button>
          </div>
        </div>
      </header>
      <NavMenu isOpen={isMenuOpen} onClose={handleCloseMenu} />
    </>
  );
};

export default Header;
