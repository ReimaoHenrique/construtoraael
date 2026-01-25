import { CardImage } from '@/components/blocks/CardProject';
import { Hero } from '@/components/heroImage';

export default function Page() {
  return (
    <>
      <Hero title="Projetos" image="/Projetos.jpg" />

      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Projetos</h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <CardImage
            title="Projeto Exemplo"
            description="Descrição do projeto exemplo."
            image="/Projetos.jpg"
            cta="Ver detalhes"
          />
          <CardImage
            title="Projeto Exemplo"
            description="Descrição do projeto exemplo."
            image="/Projetos.jpg"
            cta="Ver detalhes"
          />
          <CardImage
            title="Projeto Exemplo"
            description="Descrição do projeto exemplo."
            image="/Projetos.jpg"
            cta="Ver detalhes"
          />
        </div>
      </main>
    </>
  );
}
