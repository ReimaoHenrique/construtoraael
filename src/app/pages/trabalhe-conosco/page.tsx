'use client';
import { Hero } from '@/components/heroImage';
import { useState } from 'react';

const areas = [
  'Engenharia Civil',
  'Arquitetura',
  'Planejamento e Orçamentos',
  'Gestão de Obras',
  'Segurança do Trabalho',
  'Suprimentos',
  'Administrativo',
  'Comercial',
  'Outros',
];

export default function Page() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    cidade: '',
    area: '',
    linkedin: '',
    mensagem: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [feedbackType, setFeedbackType] = useState<'success' | 'error' | null>(null);

  function update(field: string, value: string) {
    setForm((p) => ({ ...p, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setFeedback(null);
    setFeedbackType(null);

    try {
      const response = await fetch('/api/parceiros', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error('Falha ao enviar candidatura');
      }

      setFeedback('Obrigado! Recebemos seu interesse.');
      setFeedbackType('success');
      setForm({
        nome: '',
        email: '',
        telefone: '',
        cidade: '',
        area: '',
        linkedin: '',
        mensagem: '',
      });
    } catch {
      setFeedback(
        'Nao foi possivel enviar sua candidatura agora. Tente novamente em alguns minutos.',
      );
      setFeedbackType('error');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Hero title="Trabalhe Conosco" image="/Projetos.jpg" />

      <section className="min-h-screen bg-neutral-50 px-4 py-12 sm:px-6 sm:py-16">
        <div className="max-w-5xl mx-auto">
          {/* Grid principal: 1 coluna no mobile, 2 colunas a partir de md */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Coluna esquerda - texto */}
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-1 text-xs uppercase tracking-[0.2em] text-neutral-500">
                Carreiras
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-neutral-900">
                Trabalhe Conosco
              </h1>
              <p className="text-neutral-700 leading-relaxed">
                Quer fazer parte da AEL? Envie seus dados e conte um pouco sobre sua experiência.
                Nosso time de recrutamento avalia todos os perfis e entra em contato quando houver
                oportunidades compatíveis.
              </p>
              <div className="rounded-xl border bg-white p-6 shadow-sm space-y-3">
                <p className="text-sm font-semibold text-neutral-900">Banco de talentos</p>
                <p className="text-sm text-neutral-600">
                  Mesmo sem vagas abertas no momento, seu cadastro fica disponível para futuras
                  oportunidades.
                </p>
              </div>
            </div>

            {/* Coluna direita - formulário */}
            <form
              onSubmit={handleSubmit}
              className="grid gap-4 rounded-xl border bg-white p-6 shadow-sm 
                         overflow-x-hidden break-words"
            >
              <div className="grid gap-2">
                <label className="text-sm font-medium text-neutral-900" htmlFor="nome">
                  Nome completo
                </label>
                <input
                  id="nome"
                  required
                  placeholder="Seu nome"
                  className="border rounded-md px-3 py-2 w-full"
                  value={form.nome}
                  onChange={(e) => update('nome', e.target.value)}
                />
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium text-neutral-900" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="voce@email.com"
                  className="border rounded-md px-3 py-2 w-full"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                />
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium text-neutral-900" htmlFor="telefone">
                  Telefone / WhatsApp
                </label>
                <input
                  id="telefone"
                  required
                  placeholder="(00) 00000-0000"
                  className="border rounded-md px-3 py-2 w-full"
                  value={form.telefone}
                  onChange={(e) => update('telefone', e.target.value)}
                />
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium text-neutral-900" htmlFor="cidade">
                  Cidade / Estado
                </label>
                <input
                  id="cidade"
                  placeholder="Ex: Salvador - BA"
                  className="border rounded-md px-3 py-2 w-full"
                  value={form.cidade}
                  onChange={(e) => update('cidade', e.target.value)}
                />
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium text-neutral-900" htmlFor="area">
                  Área de interesse
                </label>
                <select
                  id="area"
                  required
                  className="border rounded-md px-3 py-2 bg-white w-full"
                  value={form.area}
                  onChange={(e) => update('area', e.target.value)}
                >
                  <option value="" disabled>
                    Selecione uma área
                  </option>
                  {areas.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium text-neutral-900" htmlFor="linkedin">
                  LinkedIn (opcional)
                </label>
                <input
                  id="linkedin"
                  placeholder="https://linkedin.com/in/seu-perfil"
                  className="border rounded-md px-3 py-2 w-full"
                  value={form.linkedin}
                  onChange={(e) => update('linkedin', e.target.value)}
                />
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium text-neutral-900" htmlFor="mensagem">
                  Conte sobre sua experiência (opcional)
                </label>
                <textarea
                  id="mensagem"
                  rows={4}
                  placeholder="Fale sobre sua trajetória, projetos e certificações."
                  className="border rounded-md px-3 py-2 resize-none w-full break-words"
                  value={form.mensagem}
                  onChange={(e) => update('mensagem', e.target.value)}
                />
              </div>

              {/* Upload de currículo temporariamente desabilitado por falta de bucket/storage
              <div className="grid gap-2">
                <label className="text-sm font-medium text-neutral-900" htmlFor="curriculo">
                  Currículo (PDF)
                </label>
                <input
                  id="curriculo"
                  type="file"
                  accept=".pdf"
                  className="border rounded-md px-3 py-2 bg-white w-full"
                />
                <p className="text-xs text-neutral-500">
                  No momento, o envio é apenas para cadastro interno.
                </p>
              </div>
              */}

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-black text-white rounded-md py-3 font-medium hover:opacity-90 transition mt-2"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar candidatura'}
              </button>
              {feedback ? (
                <p
                  className={`text-sm ${feedbackType === 'success' ? 'text-green-700' : 'text-red-700'}`}
                >
                  {feedback}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
