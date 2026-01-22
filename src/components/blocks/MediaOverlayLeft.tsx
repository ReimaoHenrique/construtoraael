export function MediaOverlayLeft() {
  return (
    <section>
      <div className="relative w-screen h-64 overflow-hidden  shadow-md">
        <video
          src="/videos/construcao.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay escuro leve pra legibilidade */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Conteúdo */}
        <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex flex-col justify-center text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <h2 className="text-3xl md:text-4xl font-bold">Engenharia que constrói o futuro</h2>
            <p className="text-base md:text-lg text-gray-200">
              Soluções industriais completas com foco em eficiência, segurança e excelência
              operacional.
            </p>
          </div>

          <div className="mt-6">
            <button className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition">
              Fale conosco
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
