'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { navigationData, NavLink } from '@/models/navigation';

export function DrawerMenu() {
  const [activeItem, setActiveItem] = useState<NavLink | null>(navigationData[0] ?? null);

  return (
    <Drawer direction="top">
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="
            bg-white/10 backdrop-blur-md 
            border border-white/20 
            text-white hover:bg-white/20 
            transition-all duration-200
            shadow-sm
          "
        >
          Menu
        </Button>
      </DrawerTrigger>

      <DrawerContent
        className="
          data-[vaul-drawer-direction=top]:max-h-[70vh]
          data-[vaul-drawer-direction=top]:mt-0
          data-[vaul-drawer-direction=top]:rounded-b-2xl
          focus-visible:outline-none
          overflow-hidden
          bg-blue-950/70 
          backdrop-blur-lg
          border border-white/10
          shadow-xl
          text-white
        "
      >
        <DrawerHeader className="border-b border-white/10 pb-5">
          <DrawerTitle className="text-center text-2xl font-bold tracking-wide">Menu</DrawerTitle>
        </DrawerHeader>

        <nav className="grid grid-cols-[260px_1fr] gap-6 px-6 py-8 h-full">
          {/* Coluna esquerda — categorias */}
          <ul className="flex flex-col gap-1 border-r border-white/10 pr-4">
            {navigationData.map((item) => (
              <li key={item.label}>
                <button
                  onMouseEnter={() => setActiveItem(item)}
                  onFocus={() => setActiveItem(item)}
                  className={`
                    w-full text-left px-4 py-3 rounded-lg
                    transition-colors duration-150
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

          {/* Coluna direita — sublinks */}
          <div className="pl-2">
            {activeItem?.sublinks ? (
              <ul className="grid grid-cols-2 gap-2">
                {activeItem.sublinks.map((sub) => (
                  <li key={sub.href}>
                    <Link
                      href={sub.href}
                      className="
                        block px-4 py-3 rounded-lg
                        text-white/90 hover:text-white
                        hover:bg-white/10
                        transition-colors duration-150
                        text-sm font-medium
                      "
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
