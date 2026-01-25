import { Hero } from '@/components/heroImage';

export default function Page() {
  return (
    <>
      <Hero title="Nossa História" image="/valores.jpg" />

      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-start">
        {/* Texto principal */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold tracking-tight text-neutral-900">
            Construindo com propósito desde Salvador
          </h2>

          <p className="text-lg leading-relaxed text-neutral-700">
            A Construtora Andrade e Lima (AEL) nasceu em Salvador com uma paixão simples e poderosa:
            <strong className="text-neutral-900"> construir bem</strong>.
          </p>

          <p className="text-neutral-700 leading-relaxed">
            Iniciamos com construções e reformas e rapidamente conquistamos espaço no mercado baiano
            com uma metodologia objetiva:{' '}
            <strong>prazo curto, execução limpa e engenharia real</strong>.
          </p>

          <p className="text-neutral-700 leading-relaxed">
            Em 2016, entramos no ramo de incorporações imobiliárias, ampliando nosso portfólio.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6">
          <div className="p-6 rounded-xl border bg-white shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Execução que entrega</h3>
            <p className="text-neutral-600 text-sm">
              Obras organizadas, limpas e seguras, com garantia de 5 anos.
            </p>
          </div>

          <div className="p-6 rounded-xl border bg-white shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Equipe de verdade</h3>
            <p className="text-neutral-600 text-sm">Profissionais próprios.</p>
          </div>

          <div className="p-6 rounded-xl border bg-white shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Sustentabilidade prática</h3>
            <p className="text-neutral-600 text-sm">
              Redução de desperdício e respeito às normas ambientais.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
