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
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-center text-5xl font-medium mb-12 text-brand-900">
          Benefits for everyone
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-lg"
            >
              <div className="relative mb-4 h-60 w-full rounded-xl overflow-hidden">
                <Image
                  src={b.image}
                  alt={b.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-brand-600">
                {b.title}
              </h3>
              <ul className="space-y-2 text-gray-700">
                {b.bullets.map((txt) => (
                  <li key={txt} className="flex gap-2">
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
