interface HeroProps {
  title: string;
  image: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export function Hero({ title, image, buttonText, onButtonClick }: HeroProps) {
  return (
    <section
      className="relative flex h-[70vh] w-full items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex flex-col items-center gap-6 text-center text-white">
        <h1 className="text-4xl font-bold md:text-6xl">{title}</h1>

        {buttonText && (
          <button
            onClick={onButtonClick}
            className="rounded-xl bg-white px-6 py-3 text-black font-semibold hover:scale-105 transition"
          >
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
}
