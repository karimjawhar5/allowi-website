'use client';

import { useState, useTransition } from 'react';
import { subscribe } from '@/lib/subscribe';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [pending, startTransition] = useTransition();
  const [status, setStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    startTransition(async () => {
      const ok = await subscribe(email);
      setStatus(ok ? 'success' : 'error');
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-md flex-col gap-4 md:flex-row"
    >
      <input
        required
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="flex-1 rounded-lg border px-4 py-3 shadow-sm focus:ring-brand-500"
      />
      <button
        type="submit"
        className="rounded-lg bg-brand-500 px-6 py-3 font-medium text-white shadow hover:bg-brand-600 disabled:opacity-60"
        disabled={pending}
      >
        {pending ? 'Sending…' : 'Join Wait-List'}
      </button>

      {status === 'success' && (
        <p className="pt-2 text-sm text-green-600">
          Thanks! Check your inbox for confirmation.
        </p>
      )}
      {status === 'error' && (
        <p className="pt-2 text-sm text-red-600">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
