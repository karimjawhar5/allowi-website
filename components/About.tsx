import WaitlistForm from '@/components/WaitlistForm';
import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 pt-20 pb-40">

        <div className="mt-12 grid gap-20 md:grid-cols-2 items-center">
          
          {/* Left column – text content */}
          <div className="md:col-span-1">
            <h2 className="text-5xl mt-4 mb-6 font-medium leading-snug text-brand-900">
              Our Story
            </h2>
            <p className="text-lg text-gray-700">
              Allowi is a family-founded startup reimagining how kids spend in a cashless world. 
              With tap-to-pay wearables, parental controls, and vendor integration, we’re building a safe, connected way for families to manage youth payments.
              <br /><br />
              Our journey began at the Lebanese American University, where Jad—an alumnus—launched Allowi with support from <strong>LAU Spark</strong>.
              <br /><br />
              We’re just getting started, and we’d love for early supporters, families, and institutions to help shape what’s next.
            </p>
            <div className="items-center gap-6 flex mt-12">
              <Link
                href="#waitlist"
                className="rounded-lg bg-brand-500 px-4 py-2 font-medium text-white shadow transition hover:bg-brand-600 focus-visible:outline"
              >
                Join&nbsp;Wait-List
              </Link>
              <Link
                href="mailto:hello@allowi.co"
                className="font-medium text-brand-900 transition hover:text-brand-600"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Right column – image */}
          <div className="relative w-full overflow-hidden rounded-2xl md:col-span-1">
            <img
              src="/images/about.jpg"
              alt="Child happy with parent"
              className="h-auto w-full"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
