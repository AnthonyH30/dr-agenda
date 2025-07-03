import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative" id={"inicio"}>
      <div className="from-primary-100 absolute inset-0 bg-gradient-to-br to-indigo-100 dark:from-purple-950 dark:to-indigo-950" />
      <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Gerencie sua clínica de forma inteligente e eficiente
          </h1>
          <p className="text-muted-foreground mt-6 text-lg leading-8">
            Simplifique o agendamento, reduza faltas e aumente a satisfação dos
            seus pacientes com nossa plataforma completa de gestão para clínicas
            médicas.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="#planos">
              <Button size="lg" className="rounded-full">
                Consulte Planos
              </Button>
            </Link>
            <Link href="/authentication">
              <Button size="lg" variant="outline" className="rounded-full">
                Entrar
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
