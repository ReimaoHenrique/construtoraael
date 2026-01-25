'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { navigationData, NavLink } from '@/models/navigation';

export function DrawerMenu() {
  const [activeItem, setActiveItem] = useState<NavLink | null>(navigationData[0] ?? null);

  return (
    <Drawer direction="top">
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </DrawerTrigger>

      <DrawerContent className="max-h-[80vh] bg-blue-950/80 backdrop-blur-lg border border-white/10 text-white overflow-hidden">
        <DrawerHeader className="border-b border-white/10 pb-4">
          <DrawerTitle className="text-center text-xl font-bold tracking-wide">Menu</DrawerTitle>
        </DrawerHeader>

        {/* MOBILE */}
        <nav className="block md:hidden px-6 py-6">
          <ul className="flex flex-col gap-2">
            {navigationData.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href ?? '#'}
                  className="block px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* DESKTOP */}
        <nav className="hidden md:grid grid-cols-[260px_1fr] gap-6 px-6 py-8 h-full">
          {/* Categorias */}
          <ul className="flex flex-col gap-1 border-r border-white/10 pr-4">
            {navigationData.map((item) => (
              <li key={item.label}>
                <button
                  onMouseEnter={() => setActiveItem(item)}
                  onFocus={() => setActiveItem(item)}
                  className={`
                    w-full text-left px-4 py-3 rounded-lg transition
                    ${
                      activeItem?.label === item.label
                        ? 'bg-white/15 text-white'
                        : 'text-white/80 hover:bg-white/10 hover:text-white'
                    }
                  `}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Sublinks */}
          <div className="pl-2">
            {activeItem?.sublinks ? (
              <ul className="grid grid-cols-2 gap-2">
                {activeItem.sublinks.map((sub) => (
                  <li key={sub.href}>
                    <Link
                      href={sub.href}
                      className="block px-4 py-3 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition text-sm font-medium"
                    >
                      {sub.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-white/50 text-sm px-4 py-3">Nenhuma subcategoria</div>
            )}
          </div>
        </nav>
      </DrawerContent>
    </Drawer>
  );
}
