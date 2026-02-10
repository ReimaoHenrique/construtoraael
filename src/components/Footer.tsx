import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-gray-400">
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs uppercase tracking-[0.2em] text-white/50 text-center md:text-left">
            Acesso rápido
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-5 gap-y-2 text-sm text-white/80">
            <Link className="hover:text-white transition" href="/sobre">
              Sobre
            </Link>
            <Link className="hover:text-white transition" href="/servicos">
              Serviços
            </Link>
            <Link className="hover:text-white transition" href="/reformas">
              Reformas
            </Link>
            <Link className="hover:text-white transition" href="/portfolio">
              Portfólio
            </Link>
            <Link className="hover:text-white transition" href="/blog">
              Blog
            </Link>
            <Link className="hover:text-white transition" href="/portal-de-denuncias">
              Portal de Denúncias
            </Link>
            <Link className="hover:text-white transition" href="/termos">
              Termos
            </Link>
            <Link className="hover:text-white transition" href="/trabalhe-conosco">
              Trabalhe Conosco
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-10 grid gap-8 md:grid-cols-[1.2fr_1fr_auto] md:items-center">
        <div className="space-y-3 text-center md:text-left">
          <p className="text-sm">
            © {new Date().getFullYear()} Construtora Andrade & Lima. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/50">
            Engenharia, construção e reformas com foco em qualidade e segurança.
          </p>
        </div>

        <Link
          href="https://datasink.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center md:justify-end gap-2 text-sm text-white/70 hover:text-white transition"
        >
          <span>Desenvolvido por</span>
          <Image
            src="/parceiros/datasynk.svg"
            alt="Data Synk"
            width={55}
            height={14}
            className="object-contain"
          />
        </Link>
      </div>
    </footer>
  );
}
