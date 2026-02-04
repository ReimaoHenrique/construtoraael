'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

type NewsletterPayload = {
  name: string;
  email: string;
  services: string[];
};

type UseNewsletterCardOptions = {
  onClose: () => void;
  endpoint?: string;
};

export function useNewsletterCard({ onClose, endpoint }: UseNewsletterCardOptions) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [services, setServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [onClose]);

  const payload = useMemo<NewsletterPayload>(
    () => ({
      name,
      email,
      services,
    }),
    [name, email, services]
  );

  const submit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (isSubmitting) return;

      setIsSubmitting(true);

      const url =
        endpoint ??
        process.env.NEXT_PUBLIC_NEWSLETTER_BFF_URL ??
        'https://nestjs-gamma-five.vercel.app/';

      try {
        await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        setShowSuccess(true);
      } finally {
        setIsSubmitting(false);
        onClose();
        window.setTimeout(() => setShowSuccess(false), 1400);
      }
    },
    [endpoint, isSubmitting, onClose, payload]
  );

  return {
    name,
    setName,
    email,
    setEmail,
    services,
    setServices,
    isSubmitting,
    showSuccess,
    payload,
    submit,
  };
}
