import { MediaOverlayLeft } from '@/components/blocks/MediaOverlayLeft';
import { MediaOverlaySection } from '@/components/blocks/MediaOverlaySection';
import Hero from '@/components/hero';
import { MaqueeLogos } from '@/components/maqueeParceiros';

export default function Home() {
  return (
    <>
      <Hero />
      <h1 className="text-4xl font-bold text-center my-20">Nossos Parceiros</h1>
      <MaqueeLogos />
      <MediaOverlaySection />
      <MediaOverlayLeft />
    </>
  );
}
