import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ValueProps from '@/components/ValueProps';
import WaitlistForm from '@/components/WaitlistForm';
import Footer from '@/components/Footer';
import About from '@/components/About';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        
        {/* About section */}
        <About />
        <ValueProps />

        {/* Wait-list CTA */}
        <section id="waitlist" className="bg-white py-24">
          <div className="mx-auto max-w-6xl px-4 text-center flex flex-col items-center">
            <h2 className="mb-6 text-5xl font-medium text-brand-900">
              Be First in Line
            </h2>
            <p className="mx-auto mb-10 max-w-prose text-gray-600">
              Sign up and we’ll email you launch news, early-access invites, and the occasional survey to help shape Allowi.
            </p>
            <div className="w-full max-w-md"><WaitlistForm /></div>
            
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
