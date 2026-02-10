export default function Page() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-16 bg-neutral-50">
      <div className="max-w-2xl text-center space-y-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-1 text-xs uppercase tracking-[0.2em] text-neutral-500">
          Blog
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900">Em construção</h1>
        <p className="text-neutral-700 leading-relaxed">
          Estamos preparando conteúdos com dicas técnicas, bastidores de obras e novidades da AEL.
        </p>
        <p className="text-sm text-neutral-500">Volte em breve para acompanhar.</p>
      </div>
    </section>
  );
}
