// src/components/MediaOverlayRight.tsx
'use client';
import Link from 'next/link';

export function MediaOverlayRight({
  title = 'Engenharia que constrói o futuro',
  description = 'Soluções industriais completas com foco em eficiência, segurança e excelência operacional.',
  buttonText = 'Fale conosco',
  videoSrc = '/videos/construcao.mp4', // fallback pro seu vídeo original
  link = '/',
}) {
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
          onError={(e) => console.log('Erro no vídeo:', e)} // ajuda a debugar
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
