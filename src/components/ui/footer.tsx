import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background/95 supports-[backdrop-filter]:bg-background/60 border-t px-4 backdrop-blur">
      <div className="container py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Sobre</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href=""
                  className="text-muted-foreground hover:text-foreground text-sm"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="text-muted-foreground hover:text-foreground text-sm"
                >
                  Nossa Equipe
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="text-muted-foreground hover:text-foreground text-sm"
                >
                  Carreiras
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href=""
                  className="text-muted-foreground hover:text-foreground text-sm"
                >
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="text-muted-foreground hover:text-foreground text-sm"
                >
                  Tutoriais
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="text-muted-foreground hover:text-foreground text-sm"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href=""
                  className="text-muted-foreground hover:text-foreground text-sm"
                >
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="text-muted-foreground hover:text-foreground text-sm"
                >
                  Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="text-muted-foreground hover:text-foreground text-sm"
                >
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contato</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href=""
                  className="text-muted-foreground hover:text-foreground text-sm"
                >
                  Suporte
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="text-muted-foreground hover:text-foreground text-sm"
                >
                  Vendas
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="text-muted-foreground hover:text-foreground text-sm"
                >
                  Parcerias
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
