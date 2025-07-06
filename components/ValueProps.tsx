import Image from 'next/image';

const benefits = [
  {
    title: 'For Children',
    image: '/images/benefits/kids.jpg',
    bullets: [
      'Personalised wristbands',
      'No more lost lunch money',
      'Early budgeting skills',
    ],
  },
  {
    title: 'For Parents',
    image: '/images/benefits/parents.jpg',
    bullets: [
      'Daily & weekly spend limits',
      'Instant transaction alerts',
      'Full spend history',
    ],
  },
  {
    title: 'For Schools & Vendors',
    image: '/images/benefits/school.jpg',
    bullets: [
      'Faster queues',
      'No cash handling',
      'Live sales reports',
    ],
  },
];

export default function ValueProps() {
  return (
    <section id="features" className="bg-brand-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-24 sm:py-32">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold text-brand-900 mb-12">
          Benefits for Everyone
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 mt-12">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm hover:shadow-lg transition"
            >
              <div className="relative mb-4 h-56 w-full rounded-xl overflow-hidden">
                <Image
                  src={b.image}
                  alt={`${b.title} illustration`}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mb-4 text-lg sm:text-xl font-semibold text-brand-600">
                {b.title}
              </h3>
              <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                {b.bullets.map((txt) => (
                  <li key={txt} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-500" />
                    {txt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
