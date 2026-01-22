import Link from 'next/link';

export function MediaOverlaySection() {
  return (
    <section>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-10 px-5">
        <div>
          <h2 className="text-center text-3xl font-semibold mt-6 mb-3">
            Extraordinary Teams Building Inspiring Projects
          </h2>
          <p className="max-w-3xl text-center text-lg mb-5">
            Na Andrade & Lima Construtora, estamos comprometidos em transformar seus sonhos em
            realidade. Com anos de experiência no setor de construção, oferecemos serviços de alta
            qualidade, inovação e sustentabilidade. Nossa equipe dedicada trabalha incansavelmente
            para garantir que cada projeto seja concluído com excelência, dentro do prazo e do
            orçamento. Escolha-nos para construir o futuro que você merece.
          </p>
          <Link href="/contato" className="block text-center mt-5">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Entre em Contato
            </button>
          </Link>
        </div>
        <div className="ml-2 relative w-full max-w-5xl h-128 bg-gray-100 rounded-2xl overflow-hidden shadow-md">
          <video
            autoPlay
            muted
            loop
            playsInline
            src="/videos/obra.mp4"
            className="absolute inset-0 w-full h-full object-cover  "
          />
        </div>
      </div>
      ;
    </section>
  );
}
