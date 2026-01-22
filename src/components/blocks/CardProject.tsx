import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface CardImageProps {
  title: string;
  description: string;
  image: string;
  cta: string;
}

export function CardImage({ title, description, image, cta }: CardImageProps) {
  return (
    <Card
      className={`
        group relative overflow-hidden rounded-xl border-0 
        shadow-lg hover:shadow-2xl transition-all duration-500
        w-full sm:w-[460px] lg:w-[520px]   /* ajuste a largura aqui se quiser mais largo/estreito */
        h-[460px] flex-shrink-0
      `}
    >
      {/* Imagem como fundo completo */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className={`
            object-cover transition-transform duration-700
            group-hover:scale-110
          `}
          priority
        />
        {/* Overlay gradiente mais forte na parte de baixo */}
        <div
          className="
          absolute inset-0 
          bg-gradient-to-t from-black/85 via-black/45 to-transparent
          transition-opacity duration-500
          group-hover:via-black/65
        "
        />
      </div>

      {/* Conteúdo sobreposto na parte inferior */}
      <div
        className="
        relative z-10 flex h-full flex-col justify-end
        p-8 pb-10 md:p-10 md:pb-12
      "
      >
        <CardHeader className="space-y-4 p-0">
          <CardTitle
            className="
            text-2xl md:text-3xl font-bold leading-tight tracking-tight
            text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]
          "
          >
            {title}
          </CardTitle>

          <CardDescription
            className="
            text-base md:text-lg text-zinc-200/95 leading-relaxed
            line-clamp-3 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]
          "
          >
            {description}
          </CardDescription>
        </CardHeader>

        <div className="mt-6 md:mt-8">
          <Button
            size="lg"
            className="
              w-full h-12 md:h-14 text-base md:text-lg font-semibold
              bg-white/95 hover:bg-white text-black shadow-xl
              hover:shadow-2xl transition-all duration-300
              border border-white/30
            "
          >
            {cta}
          </Button>
        </div>
      </div>
    </Card>
  );
}
