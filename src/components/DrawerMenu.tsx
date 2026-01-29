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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { navigationData, NavLink } from '@/models/navigation';

export function DrawerMenu() {
  const [activeItem, setActiveItem] = useState<NavLink | null>(navigationData[0] ?? null);

  // Opcional: se quiser forçar que "Portfólio" e "Contato" NUNCA mostrem sublinks no mobile
  const isSpecialItem = (label: string) =>
    label.toLowerCase() === 'portfólio' || label.toLowerCase() === 'contato';

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

      <DrawerContent className="max-h-[80vh] bg-blue-950/80 backdrop-blur-lg border border-white/10 text-white overflow-y-auto">
        <DrawerHeader className="border-b border-white/10 pb-4">
          <DrawerTitle className="text-center text-xl font-bold tracking-wide text-white">
            Menu
          </DrawerTitle>
        </DrawerHeader>

        {/* MOBILE - com Accordion */}
        <nav className="block md:hidden px-5 py-6">
          <Accordion type="single" collapsible className="flex flex-col gap-2">
            {navigationData.map((item) => {
              const isSpecial = isSpecialItem(item.label); // Portfólio / Contato
              const hasSublinks =
                !isSpecial && Array.isArray(item.sublinks) && item.sublinks.length > 0;
              const sublinks = item.sublinks ?? [];

              // Se NÃO tem sublinks → renderiza como link simples (clicável e fecha drawer)
              if (!hasSublinks) {
                return (
                  <div
                    key={item.label}
                    className="px-4 py-3 rounded-lg hover:bg-white/10 transition font-medium"
                  >
                    {item.href ? (
                      <Link href={item.href} className="block w-full">
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-white/60 cursor-default">{item.label}</span>
                    )}
                  </div>
                );
              }

              // Tem sublinks → usa Accordion normal
              return (
                <AccordionItem
                  key={item.label}
                  value={item.label}
                  className="border-b border-white/10 last:border-none"
                >
                  <AccordionTrigger
                    className={`
              px-4 py-3 rounded-lg
              hover:bg-white/10 transition
              text-left font-medium
            `}
                  >
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="flex-1 hover:underline"
                        onClick={(e) => e.stopPropagation()} // impede que o accordion feche ao clicar no título
                      >
                        {item.label}
                      </Link>
                    ) : (
                      item.label
                    )}
                  </AccordionTrigger>

                  <AccordionContent className="pb-2">
                    <ul className="flex flex-col gap-1 mt-1 ml-3">
                      {sublinks.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            className="block px-4 py-2.5 rounded-md text-white/80 hover:text-white hover:bg-white/10 transition text-sm"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </nav>
        {/* DESKTOP - mantido igual */}
        <nav className="hidden md:grid grid-cols-[260px_1fr] gap-6 px-6 py-8 h-full">
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

          <div className="pl-2">
            {activeItem?.sublinks && activeItem.sublinks.length > 0 ? (
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
