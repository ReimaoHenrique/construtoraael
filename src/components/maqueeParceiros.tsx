import { cn } from '@/lib/utils';
import { Marquee } from '@/components/ui/marquee';

const parceiros = [
  {
    img: '/parceiros/itau.jpg',
    name: 'Itaú',
  },
  {
    img: '/parceiros/lima.png',
    name: 'Lima',
  },
  {
    img: '/parceiros/guariroba.jpg',
    name: 'Guariroba',
  },
  {
    img: '/parceiros/dorothy.png',
    name: 'Dorothy',
  },
  {
    img: '/parceiros/berimbau.png',
    name: 'Berimbau',
  },
  {
    img: '/parceiros/loungecar.jpeg',
    name: 'LoungeCar',
  },
];

const firstRow = parceiros.length > 0 ? parceiros.slice(0, Math.ceil(parceiros.length / 2)) : [];

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username?: string;
  body?: string;
}) => {
  return (
    <figure
      className={cn(
        ' relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
        // light styles
        'border-gray-950/10 bg-gray-950/1 hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
      )}
    >
      <div className="flex flex-col items-center gap-2">
        <img className="rounded-full" width="150" height="150" alt="" src={img} />
        <div className="flex flex-col items-center">
          <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MaqueeLogos() {
  return (
    <div className="relative w-full overflow-hidden bg-white dark:bg-black">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.img} {...review} />
        ))}
      </Marquee>

      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  );
}
