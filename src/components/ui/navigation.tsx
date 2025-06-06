"use client";

import { Menu, Search } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navigation() {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              PromptMarket
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/browse"
              className="hover:text-foreground/80 text-foreground transition-colors"
            >
              Browse
            </Link>
            <Link
              href="/sell"
              className="hover:text-foreground/80 text-foreground transition-colors"
            >
              Sell
            </Link>
            <Link
              href="/governance"
              className="hover:text-foreground/80 text-foreground transition-colors"
            >
              Governance
            </Link>
            <Link
              href="/profile"
              className="hover:text-foreground/80 text-foreground transition-colors"
            >
              Profile
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
              <Link href="/browse" className="hover:text-foreground/80">
                Browse
              </Link>
              <Link href="/sell" className="hover:text-foreground/80">
                Sell
              </Link>
              <Link href="/governance" className="hover:text-foreground/80">
                Governance
              </Link>
              <Link href="/profile" className="hover:text-foreground/80">
                Profile
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="relative">
              <Search className="text-muted-foreground absolute top-2.5 left-2 h-4 w-4" />
              <Input
                placeholder="Search prompts..."
                className="pl-8 md:w-[300px] lg:w-[400px]"
              />
            </div>
          </div>
          <Link href={"/authentication"}>
            <Button>Login</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
