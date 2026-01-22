import { MediaOverlayLeft } from '@/components/blocks/MediaOverlayLeft';
import { MediaOverlaySection } from '@/components/blocks/MediaOverlaySection';
import Hero from '@/components/hero';
import { MaqueeLogos } from '@/components/maqueeParceiros';
import { CardImage } from '@/components/blocks/CardProject';
import { DotPattern } from '@/components/ui/dot-pattern';
import { cn } from '@/lib/utils';
import { MediaOverlayRight } from '@/components/blocks/MediaOverlayRight';

import right from '@/data/index-content.json';
import cards from '@/data/cardcomponente.json';

export default function Home() {
  return (
    <>
      <Hero />
      <h1 className=" text-4xl font-bold text-center my-20">Nossos Parceiros</h1>
      <MaqueeLogos />
      <MediaOverlaySection />
      <MediaOverlayLeft />
      <div className="bg-background relative flex h-500px w-full flex-col items-center justify-center overflow-hidden rounded-lg border">
        <DotPattern
          className={cn('mask-image:radial-gradient(300px_circle_at_center,white,transparent)')}
        />
        <main className="mx-auto flex m-10 ml-5 mr-5 flex-wrap justify-center gap-6 p-6">
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
        <MediaOverlayRight />
      </div>
    </>
  );
}
