import { CardImage } from '@/components/blocks/CardProject';
import PortfolioPage from '@/components/forms/PortfolioCard/PortifolioCard';
import { Hero } from '@/components/heroImage';

export default function Page() {
  return (
    <>
      <Hero title="Projetos" image="/Projetos.jpg" />

      <h1 className="text-4xl font-bold text-center my-20">Nossos Projetos realizados </h1>

      <PortfolioPage />
    </>
  );
}
