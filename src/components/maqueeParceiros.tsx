import { cn } from '@/lib/utils';
import { Marquee } from '@/components/ui/marquee';

const parceiros = [
  { img: '/parceiros/itau.jpg', name: 'Itaú' },
  { img: '/parceiros/larco.jpg', name: 'Larco' },

  { img: '/parceiros/Mercedes-Benz.svg', name: '' },
  { img: '/parceiros/petrobras.png', name: 'Petrobras' },
  { img: '/parceiros/shell.svg', name: 'Shell' },
  //  { img: '/parceiros/Yamaha.svg', name: 'Yamaha' },
  { img: '/parceiros/guariroba.jpg', name: 'Guariroba' },
  { img: '/parceiros/LIMA-VEICULOS.svg', name: 'Lima Veículos' },
];
const parceirosHorizontais = [
  { img: '/parceiros/yamaha.png', name: 'Yamaha' },
  { img: '/parceiros/parqueshopping.png', name: 'Parque Shopping' },
  { img: '/parceiros/dorothy.png', name: 'Dorothy' },
  { img: '/parceiros/transpetro.png', name: 'transpetro' },
  { img: '/parceiros/cetrel.png', name: 'Cetrel' },
  { img: '/parceiros/loungecar.jpeg', name: 'LoungeCar' },
  { img: '/parceiros/berimbau.png', name: 'Berimbau' },
  { img: '/parceiros/timacagro.png', name: 'Timac Agro' },
  { img: '/parceiros/hospital-de-brotas.webp', name: 'Hospital de Brotas' },
];

const firstRow = parceiros;
const secondRow = parceirosHorizontais;

const ReviewCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <figure
      className={cn(
        'relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
        'border-gray-950/10 bg-gray-950/1 hover:bg-gray-950/[.05]',
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
      )}
    >
      <div className="flex flex-col items-center gap-2">
        <img className="rounded-full" width="150" height="150" alt={name} src={img} />
        <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
      </div>
    </figure>
  );
};

const ReviewCardHorizontal = ({ img, name }: { img: string; name: string }) => {
  return (
    <figure
      className={cn(
        'relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
        'border-gray-950/10 bg-gray-950/1 hover:bg-gray-950/[.05]',
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
      )}
    >
      <div className="flex items-center">
        <img className="h-24 w-full object-contain" alt={name} src={img} />
      </div>
    </figure>
  );
};

export function MarqueeLogos() {
  return (
    <div className="relative w-full overflow-hidden bg-white dark:bg-black space-y-4">
      {/* Linha 1 → esquerda */}
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((item, i) => (
          <ReviewCard key={i} {...item} />
        ))}
      </Marquee>

      {/* Linha 2 → direita */}
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((item, i) => (
          <ReviewCardHorizontal key={i} {...item} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
    </div>
  );
}
