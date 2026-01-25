import { Hero } from '@/components/heroImage';

export default function Page() {
  return (
    <>
      <Hero title="Nossos Valores" image="/valores.jpg" />

      <section className="max-w-6xl mx-auto px-6 py-20 grid gap-10 md:grid-cols-3">
        <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-3">Execução sem desculpa</h3>
          <p className="text-neutral-600 leading-relaxed text-sm">
            Prazo é contrato. Planejamento, cronograma realista e cobrança diária no canteiro. A
            obra anda ou alguém explica por quê — com dado, não com desculpa.
          </p>
        </div>

        <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-3">Engenharia antes do improviso</h3>
          <p className="text-neutral-600 leading-relaxed text-sm">
            Nada de gambiarra cara. Projeto bem resolvido, compatibilização séria e decisão técnica
            baseada em custo total, não em atalhos burros.
          </p>
        </div>

        <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-3">Qualidade que sobrevive ao tempo</h3>
          <p className="text-neutral-600 leading-relaxed text-sm">
            Impermeabilização bem feita, estrutura bem dimensionada e acabamento funcional. Obra
            bonita é consequência, não objetivo.
          </p>
        </div>

        <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-3">Segurança não é opcional</h3>
          <p className="text-neutral-600 leading-relaxed text-sm">
            Canteiro limpo, EPI real, procedimento claro. Acidente não é azar — é falha de processo.
          </p>
        </div>

        <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-3">Transparência radical</h3>
          <p className="text-neutral-600 leading-relaxed text-sm">
            Custo aberto, cronograma visível e comunicação direta. Cliente informado decide melhor e
            enche menos o saco — todo mundo ganha.
          </p>
        </div>

        <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold mb-3">Evolução contínua</h3>
          <p className="text-neutral-600 leading-relaxed text-sm">
            Treinamento constante, método revisado e tecnologia aplicada onde dá retorno real — não
            onde fica bonito em slide.
          </p>
        </div>
      </section>
    </>
  );
}
