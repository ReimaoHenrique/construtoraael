'use client'

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

const navItems = [
  { label: "People", href: "/people" },
  { label: "Projects", href: "/projects" },
  { label: "Approach", href: "/approach" },
  { label: "Careers", href: "/careers" },
  { label: "Suppliers", href: "/suppliers" },
  { label: "Media", href: "/media" },
  { label: "Impact", href: "/impact" },
  { label: "Report", href: "/report" },
  { label: "History", href: "/history" },
  { label: "Contact", href: "/contact" },
]

export function DrawerMenu() {
  return (
    <Drawer direction="top">
      <DrawerTrigger asChild>
        <Button 
          variant="outline"
          className="
            bg-white/10 backdrop-blur-md 
            border border-white/20 
            text-gray-900 hover:bg-white/20 
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
          overflow-y-auto
          bg-black/30
          backdrop-blur-lg
          border border-white/10
          shadow-xl
          text-white
        "
      >
        <DrawerHeader className="border-b border-white/10 pb-5">
          <DrawerTitle 
            className="
              text-center 
              text-2xl font-bold 
              text-white           /* branco sólido, sem opacidade */
              tracking-wide
            "
          >
            Menu
          </DrawerTitle>
        </DrawerHeader>

        <nav className="px-6 py-8">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="
                    block px-4 py-3 rounded-lg
                    text-white/90 hover:text-white 
                    hover:bg-white/10 
                    transition-colors duration-150
                    text-base font-medium
                  "
                >
                  {item.label}
                </Link>
                <Separator className="bg-white/5 my-1" />
              </li>
            ))}
          </ul>
        </nav>
      </DrawerContent>
    </Drawer>
  )
}