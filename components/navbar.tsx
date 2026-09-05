"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "Home", href: "/" },
  { title: "UI", href: "/ui" },
  { title: "UX", href: "/ux" },
  { title: "About Me", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const current = window.scrollY;

      if (current <= 10) setVisible(true);
      else if (current > lastScroll) setVisible(false);
      else setVisible(true);

      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-50 w-full transition-transform duration-300",
        visible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-center px-6">
        {/* Desktop */}
        <div className="hidden rounded-full border border-white/10 bg-white/5 px-8 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl md:flex">
          <NavigationMenu>
            <NavigationMenuList className="gap-10">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <NavigationMenuItem key={item.title}>
                    <Link
                      href={item.href}
                      className={cn(
                        "relative text-[15px] font-normal tracking-[-0.02em] transition-colors duration-300 after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-full after:origin-center after:rounded-full after:bg-[#46D9FF] after:transition-transform after:duration-300",
                        isActive
                          ? "text-white after:scale-x-100"
                          : "text-zinc-200 hover:text-white after:scale-x-0 hover:after:scale-x-100"
                      )}
                    >
                      {item.title}
                    </Link>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile */}
        <div className="absolute right-6 md:hidden">
  <Sheet>
    <SheetTrigger className="rounded-full border border-white/10 bg-white/5 p-2.5 text-white shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl">
      <Menu size={24} />
    </SheetTrigger>

    <SheetContent
      side="right"
      className="w-full border-l border-white/10 bg-black/35 p-0 backdrop-blur-3xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent" />

      <div className="relative z-10 px-8 pt-24">
        <nav className="space-y-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.title}
                href={item.href}
                className={`block rounded-2xl border px-6 py-5 text-3xl font-medium transition-all duration-300 ${
                  isActive
                    ? "border-cyan-400/30 bg-cyan-400/10 text-white"
                    : "border-white/5 bg-white/5 text-zinc-200 hover:border-cyan-400/20 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>
      </div>
    </SheetContent>
  </Sheet>
</div>
      </div>
    </header>
  );
}