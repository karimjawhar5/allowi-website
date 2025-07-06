import { ShieldCheck, Watch, Store } from "lucide-react";
import WaitlistForm from '@/components/WaitlistForm';

const items = [
  {
    icon: Watch,
    title: "Tap to pay",
    body: "Kids use a fun, tamper-resistant RFID bracelet—no cash, no cards.",
  },
  {
    icon: ShieldCheck,
    title: "Parents stay in control",
    body: "Set limits, block junk food, and get real-time spend alerts.",
  },
  {
    icon: Store,
    title: "Vendors gain speed",
    body: "Cashless check-out shortens lines and auto-syncs sales data.",
  },
];

export default function Features() {
  return (
    <section id="how" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-24 sm:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left column – Image */}
          <div className="order-last md:order-none">
            <div className="w-full overflow-hidden rounded-2xl">
              <img
                src="/images/features.png"
                alt="Illustration showing Allowi in action"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right column – Feature list */}
          <div>
            <span className="inline-block text-sm font-medium text-white px-4 py-1 bg-brand-500 rounded-full mb-4">
              Features
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-brand-900 leading-tight mb-10">
              How Allowi Works
            </h2>
            <ul className="space-y-8">
              {items.map(({ icon: Icon, title, body }) => (
                <li key={title} className="flex items-start">
                  <Icon size={28} className="mt-1 shrink-0 text-brand-500" />
                  <div className="ml-5">
                    <h3 className="text-lg sm:text-xl font-medium text-brand-900">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-gray-700 leading-relaxed">
                      {body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
