'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

type PortfolioFormProps = {
  portfolioRoute: string;
  portfolioTitle: string;
  onSuccess?: () => void;
};

export function PortfolioForm({ portfolioRoute, portfolioTitle, onSuccess }: PortfolioFormProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    cargo: '',
    linkPortfolio: '',
    contatoEmail: false,
    contatoWhatsapp: false,
    termos: 'nao',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria o envio real (API, email, etc)
    const payload = {
      nome: formData.nome,
      telefone: formData.telefone,
      email: formData.email,
      cargo: formData.cargo,
      linkPortfolio: formData.linkPortfolio,
      portfolio: {
        title: portfolioTitle,
        route: portfolioRoute,
      },
      contato: {
        email: formData.contatoEmail,
        whatsapp: formData.contatoWhatsapp,
      },
      termos: formData.termos,
    };

    console.log('Estado do formulário:', payload);
    setIsSuccess(true);
    onSuccess?.();

    // Limpar formulário após envio (opcional)
    setFormData({
      nome: '',
      telefone: '',
      email: '',
      cargo: '',
      linkPortfolio: '',
      contatoEmail: false,
      contatoWhatsapp: false,
      termos: 'nao',
    });
  };

  const isSubmitDisabled = formData.termos !== 'aceito';

  return (
    <div className="max-w-md mx-auto p-6 border rounded-lg shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-5">
        {isSuccess && (
          <div className="rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            Enviado com sucesso.
          </div>
        )}
        <div className="rounded-md border border-muted bg-muted/30 px-4 py-3 text-sm">
          Portfólio selecionado: <span className="font-semibold">{portfolioTitle}</span>
        </div>
        {/* Nome */}
        <div className="space-y-2">
          <Label htmlFor="nome">Nome *</Label>
          <Input
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            placeholder="Seu nome completo"
          />
        </div>

        {/* Telefone */}
        <div className="space-y-2">
          <Label htmlFor="telefone">Telefone</Label>
          <Input
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            placeholder="(XX) XXXXX-XXXX"
            type="tel"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="seu.email@exemplo.com"
          />
        </div>

        {/* Cargo */}
        <div className="space-y-2">
          <Label htmlFor="cargo">Cargo *</Label>
          <Input
            id="cargo"
            name="cargo"
            value={formData.cargo}
            onChange={handleChange}
            required
            placeholder="gerente, engenheiro, etc."
          />
        </div>

        {/* Link do portfólio (opcional) */}
        <div className="space-y-2">
          <Label htmlFor="linkPortfolio">Linkdin (opcional)</Label>
          <Input
            id="linkPortfolio"
            name="linkPortfolio"
            type="url"
            value={formData.linkPortfolio}
            onChange={handleChange}
            placeholder="https://..."
          />
          <p className="text-sm text-muted-foreground">
            Se quiser, cole um link para facilitar o download.
          </p>
        </div>

        {/* Preferência de contato */}
        <div className="space-y-2">
          <Label>Como prefere que entremos em contato?</Label>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center space-x-2">
              <Input
                id="contatoEmail"
                name="contatoEmail"
                type="checkbox"
                checked={formData.contatoEmail}
                onChange={handleCheckboxChange}
                className="h-4 w-4"
              />
              <Label htmlFor="contatoEmail">Email</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Input
                id="contatoWhatsapp"
                name="contatoWhatsapp"
                type="checkbox"
                checked={formData.contatoWhatsapp}
                onChange={handleCheckboxChange}
                className="h-4 w-4"
              />
              <Label htmlFor="contatoWhatsapp">WhatsApp</Label>
            </div>
          </div>
        </div>

        {/* Termos de uso */}
        <div className="space-y-2">
          <Label>Termos de uso *</Label>
          <p className="text-sm text-muted-foreground">
            Ao enviar, você concorda com nossos{' '}
            <Link href="/termos" className="underline">
              termos de dados
            </Link>
            .
          </p>
          <RadioGroup
            value={formData.termos}
            onValueChange={(value) => setFormData((prev) => ({ ...prev, termos: value }))}
            className="flex gap-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="aceito" id="termos-aceito" />
              <Label htmlFor="termos-aceito">Aceito</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="nao" id="termos-nao" />
              <Label htmlFor="termos-nao">Não aceito</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Button type="submit" className="flex-1" disabled={isSubmitDisabled}>
            Enviar
          </Button>
        </div>
      </form>
    </div>
  );
}
