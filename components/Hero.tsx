import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import WaitlistForm from '@/components/WaitlistForm';

export default function Hero() {
  return (
    <section className="relative isolate flex items-center overflow-hidden bg-gradient-to-br from-white via-brand-50 to-brand-100 min-h-screen pt-24 sm:pt-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16">
        {/* Left column */}
        <div className="flex flex-col justify-center lg:col-span-6">
          <h1 className="mb-4 text-4xl font-semibold leading-tight text-brand-900 sm:text-5xl md:text-6xl">
            Smart Cashless Payment System for Children
          </h1>
          <p className="mb-6 text-base text-brand-900/80 sm:text-lg lg:text-xl max-w-prose">
            Allowi pairs an RFID wristband with powerful parental controls so children can pay safely while learning healthy money habits.
          </p>

          <div className="mb-6">
            <WaitlistForm />
          </div>

          {/* Sponsors */}
          <div className="mt-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-500">
              Supported by
            </p>
            <div className="flex flex-wrap items-center gap-6 sm:gap-8">
              <Image
                src="/images/sponsors/LAU.png"
                alt="Lebanese American University logo"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
              <Image
                src="/images/sponsors/LAU-Spark.png"
                alt="LAU Spark logo"
                width={160}
                height={50}
                className="h-12 w-auto"
              />
            </div>
          </div>
        </div>

        {/* Right column (hidden on mobile) */}
        <div className="hidden sm:flex lg:col-span-6 justify-center items-center">
          <div className="relative w-full max-w-md sm:max-w-lg aspect-[2002/1778] rounded-2xl overflow-hidden">
            <Image
              src="/images/hero-1.png"
              alt="Child buying lunch with Allowi wristband"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Scroll-down button */}
      <Link
        href="#how"
        aria-label="Scroll to next section"
        className="group absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-600 text-brand-600 transition hover:border-brand-500 hover:text-brand-500 focus-visible:outline"
      >
        <ChevronDown size={24} className="transition" />
      </Link>
    </section>
  );
}
