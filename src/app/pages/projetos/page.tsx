import { CardImage } from '@/components/blocks/CardProject';
import { Hero } from '@/components/heroImage';
import cards from '@/data/cardcomponente.json';

export default function Page() {
  return (
    <>
      <Hero title="Projetos" image="/Projetos.jpg" />

      <h1 className="text-4xl font-bold text-center mb-12">Obras que Transformam Realidades</h1>
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
    </>
  );
}
