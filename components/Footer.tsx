import Image from 'next/image';
import Link from 'next/link';

/**
 * Professional footer for Allowi marketing site
 * - Dark brand background (brand-900)
 * - Logo, quick links, and legal line
 * - Fully responsive: column on mobile, row on ≥768 px
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Top row: logo + links */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-0">
          <Link href="/" aria-label="Allowi home">
            <Image
              src="/logos/logo-hr-tw.svg" // ensure this asset exists in public/logos
              alt="Allowi logo"
              width={150}
              height={42}
              priority
            />
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-white/80 md:justify-end">
            <Link href="#how" className="transition hover:text-white">
              How&nbsp;It&nbsp;Works
            </Link>
            <Link href="#features" className="transition hover:text-white">
              Features
            </Link>
            <Link href="mailto:hello@allowi.co" className="transition hover:text-white">
              Contact
            </Link>
          </nav>
        </div>

        {/* Divider line */}
        <div className="mt-10 border-t border-white/10" />

        {/* Legal bottom row */}
        <p className="pt-6 text-center text-xs text-white/60">
          © {year} Allowi. All rights reserved. Lebanese fintech start-up.
        </p>
      </div>
    </footer>
  );
}
