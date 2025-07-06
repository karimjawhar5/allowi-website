import WaitlistForm from '@/components/WaitlistForm';
import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-24 sm:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Left column – text content */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-brand-900 mb-6">
              Our Story
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Allowi is a family-founded startup reimagining how kids spend in a cashless world. 
              With tap-to-pay wearables, parental controls, and vendor integration, we’re building a safe, connected way for families to manage youth payments.
              <br /><br />
              Our journey began at the Lebanese American University, where Jad—an alumnus—launched Allowi with support from <strong>LAU Spark</strong>.
              <br /><br />
              We’re just getting started, and we’d love for early supporters, families, and institutions to help shape what’s next.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <Link
                href="#waitlist"
                className="inline-block rounded-lg bg-brand-500 px-5 py-3 text-sm sm:text-base font-medium text-white shadow hover:bg-brand-600 transition focus-visible:outline"
              >
                Join&nbsp;Wait-List
              </Link>
              <Link
                href="mailto:hello@allowi.co"
                className="text-sm sm:text-base font-medium text-brand-900 hover:text-brand-600 transition"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Right column – image */}
          <div className="w-full overflow-hidden rounded-2xl">
            <img
              src="/images/about.jpg"
              alt="Smiling child and parent using Allowi"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
