'use client';

type CardDescriptionProps = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export default function CardDescription({ title, description, image, href }: CardDescriptionProps) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="group flex-none w-44 sm:w-48 md:w-52 lg:w-56 aspect-[9/16] rounded-2xl overflow-hidden relative shadow-xl transition-all duration-300 hover:scale-[1.04] hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 cursor-pointer"
    >
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Overlay gradiente (mais escuro embaixo) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/85 transition-opacity duration-300 group-hover:opacity-95" />

      {/* Conteúdo textual */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 space-y-2 md:space-y-3 text-white">
        {/* Título com scroll se necessário */}
        <div className="max-h-[5.5rem] overflow-y-auto scrollbar-thin scrollbar-thumb-white/60 scrollbar-track-transparent/40 pr-2">
          <h2 className="text-base sm:text-lg md:text-xl font-semibold leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            {title}
          </h2>
        </div>

        {/* Descrição com scroll se necessário */}
        <div className="max-h-[4.5rem] overflow-y-auto scrollbar-thin scrollbar-thumb-white/60 scrollbar-track-transparent/40 pr-2">
          <p className="text-sm sm:text-base leading-snug text-white/90 drop-shadow-[0_1.5px_4px_rgba(0,0,0,0.85)]">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}
