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

  function update(field: string, value: string) {
    setForm((p) => ({ ...p, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(form);
    alert('Obrigado! Recebemos seu interesse.');
  }

  return (
    <>
      <Hero title="Trabalhe Conosco" image="/Projetos.jpg" />

      <section className="min-h-screen bg-neutral-50 px-6 py-16">
        <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-[1.1fr_1fr] items-start">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-1 text-xs uppercase tracking-[0.2em] text-neutral-500">
              Carreiras
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900">Trabalhe Conosco</h1>
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

          <form
            onSubmit={handleSubmit}
            className="grid gap-4 rounded-xl border bg-white p-6 shadow-sm"
          >
            <div className="grid gap-2">
              <label className="text-sm font-medium text-neutral-900" htmlFor="nome">
                Nome completo
              </label>
              <input
                id="nome"
                required
                placeholder="Seu nome"
                className="border rounded-md px-3 py-2"
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
                className="border rounded-md px-3 py-2"
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
                className="border rounded-md px-3 py-2"
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
                className="border rounded-md px-3 py-2"
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
                className="border rounded-md px-3 py-2 bg-white"
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
                className="border rounded-md px-3 py-2"
                value={form.linkedin}
                onChange={(e) => update('linkedin', e.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium text-neutral-900" htmlFor="mensagem">
                Conte sobre sua experiência
              </label>
              <textarea
                id="mensagem"
                rows={4}
                placeholder="Fale sobre sua trajetória, projetos e certificações."
                className="border rounded-md px-3 py-2 resize-none"
                value={form.mensagem}
                onChange={(e) => update('mensagem', e.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium text-neutral-900" htmlFor="curriculo">
                Currículo (PDF)
              </label>
              <input
                id="curriculo"
                type="file"
                accept=".pdf"
                className="border rounded-md px-3 py-2 bg-white"
              />
              <p className="text-xs text-neutral-500">
                No momento, o envio é apenas para cadastro interno.
              </p>
            </div>

            <button
              type="submit"
              className="bg-black text-white rounded-md py-3 font-medium hover:opacity-90 transition"
            >
              Enviar candidatura
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
