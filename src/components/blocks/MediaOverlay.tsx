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
  if (variant === 'section') {
    return (
      <section className="bg-[radial-gradient(circle_at_1.5px_1.5px,rgba(0,0,0,0.1)_1px,transparent_0)] bg-size-[20px_20px]">
        <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-10 px-5">
          <div>
            <h2 className="text-center text-3xl font-semibold mt-6 mb-3">{title}</h2>
            <p className="max-w-3xl text-center text-lg mb-5">{description}</p>
            <Link href={link} className="block text-center mt-5">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {buttonText}
              </button>
            </Link>
          </div>
          <div className="ml-2 relative w-full max-w-5xl h-128 bg-gray-100 rounded-2xl overflow-hidden shadow-md">
            <video
              autoPlay
              muted
              loop
              playsInline
              src={videoSrc}
              className="absolute inset-0 w-full h-full object-cover"
            />
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


