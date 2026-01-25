'use client';
import Link from 'next/link';

interface MediaOverlayProps {
  variant?: 'left' | 'right' | 'section';
  title?: string;
  description?: string;
  buttonText?: string;
  videoSrc?: string;
  link?: string;
}

export function MediaOverlay({
  variant = 'left',
  title = 'Engenharia que constrói o futuro',
  description = 'Soluções industriais completas com foco em eficiência, segurança e excelência operacional.',
  buttonText = 'Fale conosco',
  videoSrc = '/videos/construcao.mp4',
  link = '/',
}: MediaOverlayProps) {
  // Variante Section
  // Variante Section (corrigida)
  if (variant === 'section') {
    return (
      <section className="bg-[radial-gradient(circle_at_1.5px_1.5px,rgba(0,0,0,0.1)_1px,transparent_0)] bg-[length:20px_20px] py-16 md:py-24 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-0">
          <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-0">
            {/* Texto - lado esquerdo */}
            <div className="ml-10 lg:w-5/12 xl:w-1/2 pr-0 lg:pr-12 xl:pr-16 text-center lg:text-left z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-5 leading-tight">{title}</h2>
              <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0">
                {description}
              </p>
              <Link href={link} className="inline-block">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl text-lg shadow-lg transition">
                  {buttonText}
                </button>
              </Link>
            </div>

            {/* Vídeo - metade direita, colado na borda */}
            <div className="lg:w-7/12 xl:w-1/2 lg:-mr-5 xl:-mr-10 relative mt-8 lg:mt-0">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:h-[520px] xl:h-[620px] rounded-l-3xl lg:rounded-l-3xl lg:rounded-r-none overflow-hidden shadow-2xl bg-black">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  src={videoSrc}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => console.error('Erro ao carregar vídeo:', e)}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent pointer-events-none lg:hidden" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Variante Left
  if (variant === 'left') {
    return (
      <section>
        <div className="relative w-screen h-64 overflow-hidden shadow-md md:h-96 lg:h-[500px]">
          <video
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => console.log('Erro no vídeo:', e)}
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex flex-col justify-center text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">{title}</h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-200">{description}</p>
            </div>

            <div className="mt-6 md:mt-8">
              <Link href={link}>
                <button className="px-6 py-3 md:px-8 md:py-4 rounded-xl bg-white text-black font-semibold text-lg hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl">
                  {buttonText}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Variante Right
  return (
    <section>
      <div className="relative w-screen h-64 overflow-hidden shadow-md md:h-96 lg:h-[500px]">
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => console.log('Erro no vídeo:', e)}
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-end text-white text-right">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
            <div className="hidden md:block" />

            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">{title}</h2>

              <p className="mt-5 text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          <div className="mt-8 md:mt-10">
            <Link href={link}>
              <button className="px-8 py-4 rounded-xl bg-white text-black font-semibold text-lg hover:bg-gray-100 active:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl">
                {buttonText}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
