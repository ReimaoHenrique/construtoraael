'use client';

import { motion } from 'framer-motion';

export function ContactHero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-blue-900">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/blue.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Fale com a Andrade e Lima
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-base md:text-xl mb-6 max-w-xl"
        >
          Orçamento rápido. Atendimento direto. Sem enrolação.
        </motion.p>

        <div className="flex gap-4 flex-col sm:flex-row">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/5599999999999"
            className="px-8 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold"
          >
            Falar no WhatsApp
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#form"
            className="px-8 py-3 bg-white text-black hover:bg-gray-200 rounded-lg font-semibold"
          >
            Solicitar orçamento
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
