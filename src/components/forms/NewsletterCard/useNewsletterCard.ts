'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

type NewsletterPayload = {
  name: string;
  email: string;
  linkedin: string;
  services: string[];
  allAreasSelected: boolean;
};

type UseNewsletterCardOptions = {
  onClose: () => void;
  endpoint?: string;
};

export function useNewsletterCard({ onClose, endpoint }: UseNewsletterCardOptions) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [services, setServices] = useState<string[]>([]);
  const [allAreasSelected, setAllAreasSelected] = useState(false);
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
      linkedin,
      services,
      allAreasSelected,
    }),
    [name, email, linkedin, services, allAreasSelected]
  );

  const submit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (isSubmitting) return;

      setIsSubmitting(true);

      const url =
        endpoint ??
        process.env.NEXT_PUBLIC_NEWSLETTER_BFF_URL ??
        '/api/newsletter';

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
    linkedin,
    setLinkedin,
    services,
    setServices,
    allAreasSelected,
    setAllAreasSelected,
    isSubmitting,
    showSuccess,
    payload,
    submit,
  };
}
