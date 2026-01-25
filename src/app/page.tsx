import Hero from '@/components/hero';
import { MaqueeLogos } from '@/components/maqueeParceiros';
import { CardImage } from '@/components/blocks/CardProject';
import { DotPattern } from '@/components/ui/dot-pattern';
import { cn } from '@/lib/utils';
import { MediaOverlay } from '@/components/blocks/MediaOverlay';

import cards from '@/data/cardcomponente.json';

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center my-20">Nossos Parceiros</h1>

      <MaqueeLogos />

      {/* Cards */}
      <main className="mx-auto my-10 flex flex-wrap justify-center gap-6 px-6">
        {cards.map((card) => (
          <CardImage
            key={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
            cta={card.cta}
          />
        ))}
      </main>

      {/* Seção decorativa */}
      <section className="relative w-full overflow-hidden py-24">
        <DotPattern
          className={cn(
            'absolute inset-0 mask-image:radial-gradient(300px_circle_at_center,white,transparent)',
          )}
        />

        <div className="relative z-10 flex flex-col gap-24">
          <MediaOverlay
            variant="right"
            title="Engenharia que constrói o futuro"
            description="Soluções industriais completas com foco em eficiência, segurança e excelência operacional."
            buttonText="Fale conosco"
            videoSrc="/videos/construcao.mp4"
            link="/contact"
          />

          <MediaOverlay
            variant="section"
            title="Engenharia que constrói o futuro"
            description="Soluções industriais completas com foco em eficiência, segurança e excelência operacional."
            buttonText="Fale conosco"
            videoSrc="/videos/obra.mp4"
            link="/contact"
          />

          <MediaOverlay
            variant="right"
            title="Engenharia que constrói o futuro"
            description="Soluções industriais completas com foco em eficiência, segurança e excelência operacional."
            buttonText="Fale conosco"
            videoSrc="/videos/construcao.mp4"
            link="/contact"
          />
        </div>
      </section>
    </>
  );
}
