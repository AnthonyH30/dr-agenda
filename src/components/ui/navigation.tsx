"use client";

import { Menu } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navigation() {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b px-4 backdrop-blur">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              Doutor<span className="text-primary">Agenda</span>
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="#inicio"
              className="hover:text-foreground/80 text-foreground transition-colors"
            >
              Início
            </Link>
            <Link
              href="#planos"
              className="hover:text-foreground/80 text-foreground transition-colors"
            >
              Planos
            </Link>
            <Link
              href="/authentication"
              className="hover:text-foreground/80 text-foreground transition-colors"
            >
              Entrar
            </Link>
          </nav>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <nav className="grid gap-6 px-2 py-6">
              <li className="list-none font-bold text-black">
                Doutor<span className="text-primary">Agenda</span>
              </li>
              <Link href="#inicio" className="hover:text-foreground/80">
                Início
              </Link>
              <Link href="#planos" className="hover:text-foreground/80">
                Planos
              </Link>
              <Link href="/authentication" className="hover:text-foreground/80">
                Entrar
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Link href={"/authentication"}>
            <Button>Entrar</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
