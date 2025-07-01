import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import WaitlistForm from '@/components/WaitlistForm';

export default function Hero() {
  return (
    <section className="relative isolate flex items-center overflow-hidden bg-gradient-to-br from-white via-brand-50 to-brand-100 min-h-screen">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-12">
        {/* Left column */}
        <div className="flex flex-col justify-center lg:col-span-5 xl:col-span-6">
          <h1 className="mb-6 text-5xl font-semibold leading-tight text-brand-900 sm:text-6xl">
            Smart Cashless Payment&nbsp;System for Children
          </h1>
          <p className="mb-8 max-w-prose text-lg text-brand-900/80 lg:text-xl">
            Allowi pairs an RFID wristband with powerful parental controls so children can pay safely while learning healthy money habits.
          </p>

          {/* Embedded form */}
          <div className="mb-8">
            <WaitlistForm />
          </div>

          {/* Sponsors */}
          <div className="mt-14">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-500">
              Supported by
            </p>
            <div className="flex flex-wrap items-center gap-8">
              <Image
                src="/images/sponsors/LAU.png"
                alt="Lebanese American University logo"
                width={180}
                height={60}
                className="h-20 w-auto"
              />
              <Image
                src="/images/sponsors/LAU-Spark.png"
                alt="LAU Spark logo"
                width={200}
                height={60}
                className="h-20 w-auto"
              />
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="lg:col-span-7 xl:col-span-6 flex justify-start">
          <div className="relative w-[140%] -mr-[40%] aspect-[2002/1778] rounded-2xl overflow-hidden">
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
        className="group absolute bottom-20 right-60 flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-600 text-brand-600 transition hover:border-brand-500 hover:text-brand-500 focus-visible:outline"
      >
        <ChevronDown size={24} className="transition" />
      </Link>
    </section>
  );
}
