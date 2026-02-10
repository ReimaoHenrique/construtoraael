'use client';
import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Tenta play automático + workaround para Safari/iOS
    const playVideo = () => {
      video.play().catch((err) => {
        console.log('Autoplay bloqueado:', err);
        // Pode adicionar lógica aqui se quiser mostrar botão ou fallback
      });
    };

    // Tenta play imediato
    playVideo();

    // Se não tocar, tenta novamente após load ou interação (Safari às vezes precisa)
    video.addEventListener('loadedmetadata', playVideo);
    video.addEventListener('canplay', playVideo);

    return () => {
      video.removeEventListener('loadedmetadata', playVideo);
      video.removeEventListener('canplay', playVideo);
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-blue-900">
      {/* Background Video */}
      <video
        ref={videoRef}
        playsInline // Primeiro! Safari iOS exige isso antes de autoplay
        autoPlay
        muted
        loop
        preload="metadata" // Carrega rápido, só metadata
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        {/* Opcional: adicione WebM se você otimizou */}
        {/* <source src="/videos/hero.webm" type="video/webm" /> */}
        Seu navegador não suporta vídeo.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Conteúdo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 sm:px-6"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight"
        >
          Construtora Andrade e Lima
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl"
        >
          Construindo sonhos com excelência e confiança.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 sm:px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-base sm:text-lg transition-colors"
        >
          Saiba Mais
        </motion.button>
      </motion.div>
    </section>
  );
}
