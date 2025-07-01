'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
        {/* ————————————————— Left block: logo + primary nav ————————————————— */}
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logos/logo-hr-tb.svg"
              alt="Allowi logo"
              width={180}
              height={32}
              priority
            />
          </Link>

          {/* desktop nav */}
          <div className="hidden items-center gap-6 md:flex">
            <Link href="#how" className="hover:text-brand-600">
              How&nbsp;It&nbsp;Works
            </Link>
            <Link href="#about" className="hover:text-brand-600">
              Our&nbsp;Story
            </Link>
            <Link href="#features" className="hover:text-brand-600">
              Benefits
            </Link>
          </div>
        </div>

        {/* ————————————————— Right block: contact + CTA ————————————————— */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="mailto:hello@allowi.co"
            className="font-medium text-brand-900 transition hover:text-brand-600"
          >
            Get in Touch
          </Link>
          <Link
            href="#waitlist"
            className="rounded-lg bg-brand-500 px-4 py-2 font-medium text-white shadow transition hover:bg-brand-600 focus-visible:outline"
          >
            Join&nbsp;Wait-List
          </Link>
        </div>

        {/* mobile burger */}
        <button
          className="md:hidden"
          onClick={() => setOpen((p) => !p)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* mobile panel */}
      {open && (
        <div className="md:hidden bg-white/90 backdrop-blur-sm">
          {[
            { href: '#how', label: 'How It Works' },
            { href: '#features', label: 'Features' },
            { href: '#waitlist', label: 'Join Wait-List' },
            { href: 'mailto:hello@allowi.co', label: 'Get in Touch' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block border-t px-4 py-3 text-sm hover:bg-gray-50"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
