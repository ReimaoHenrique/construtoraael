import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-gray-400">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Construtora Andrade & Lima. Todos os direitos reservados.
        </p>

        <Link
          href="https://datasink.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition"
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
