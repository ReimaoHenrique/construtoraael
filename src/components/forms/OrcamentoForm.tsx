'use client';

import { useState } from 'react';
import { ComboboxMulti } from '@/components/ComboboxMulti';

const tiposServico = [
  'Obras Industriais',
  'Obras Comerciais',
  'Obras Hospitalares',
  'Hotelaria',
  'Infraestrutura',
  'Projetos de Engenharia',
  'Incorporação Imobiliária',
];

export default function OrcamentoForm() {
  const [servicos, setServicos] = useState<string[]>([]);
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    cidade: '',
    mensagem: '',
  });

  function update(field: string, value: string) {
    setForm((p) => ({ ...p, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log({ ...form, servicos });
    alert('Solicitação enviada');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto grid gap-6 bg-white p-8 rounded-xl border shadow-sm"
    >
      <h2 className="text-2xl font-bold">Solicitação de Orçamento</h2>

      <div className="grid gap-2">
        <span className="text-sm font-medium">Serviços desejados</span>
        <ComboboxMulti
          items={tiposServico}
          value={servicos}
          onChange={setServicos}
          placeholder="Selecione um ou mais serviços"
        />
      </div>

      <input
        required
        placeholder="Nome"
        className="border rounded-md px-3 py-2"
        value={form.nome}
        onChange={(e) => update('nome', e.target.value)}
      />

      <input
        type="email"
        required
        placeholder="Email"
        className="border rounded-md px-3 py-2"
        value={form.email}
        onChange={(e) => update('email', e.target.value)}
      />

      <input
        required
        placeholder="Telefone / WhatsApp"
        className="border rounded-md px-3 py-2"
        value={form.telefone}
        onChange={(e) => update('telefone', e.target.value)}
      />

      <input
        placeholder="Empresa (opcional)"
        className="border rounded-md px-3 py-2"
        value={form.empresa}
        onChange={(e) => update('empresa', e.target.value)}
      />

      <input
        placeholder="Cidade / Estado"
        className="border rounded-md px-3 py-2"
        value={form.cidade}
        onChange={(e) => update('cidade', e.target.value)}
      />

      <textarea
        rows={4}
        placeholder="Descreva seu projeto"
        className="border rounded-md px-3 py-2 resize-none"
        value={form.mensagem}
        onChange={(e) => update('mensagem', e.target.value)}
      />

      <button
        type="submit"
        className="bg-black text-white rounded-md py-3 font-medium hover:opacity-90 transition"
      >
        Solicitar Orçamento
      </button>
    </form>
  );
}
