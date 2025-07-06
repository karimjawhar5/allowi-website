'use client';

import { useState, useTransition } from 'react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [pending, startTransition] = useTransition();
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!email.trim() || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    startTransition(async () => {
      try {
        const res = await fetch('/api/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });

        const data = await res.json();

        if (!res.ok) {
          setStatus('error');
          setMessage(data?.error || 'Something went wrong. Please try again.');
        } else {
          setStatus('success');
          setMessage('Thanks! Check your inbox for confirmation.');
          setEmail('');
        }
      } catch (err) {
        console.error('Client-side error:', err);
        setStatus('error');
        setMessage('Unexpected error. Please try again.');
      }
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
        disabled={pending}
        className="rounded-lg bg-brand-500 px-6 py-3 font-medium text-white shadow hover:bg-brand-600 disabled:opacity-60"
      >
        {pending ? 'Sending…' : 'Join Wait-List'}
      </button>

      {message && (
        <p
          aria-live="polite"
          className={`pt-2 text-sm ${
            status === 'success' ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
