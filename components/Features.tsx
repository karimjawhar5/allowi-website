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
      <div className="mx-auto max-w-6xl px-4 py-20">

        {/* Two‑column layout with narrower left side */}
        <div className="mt-12 grid gap-20 md:grid-cols-2">
          {/* Left column – square image (smaller width) */}
          <div className="relative w-full overflow-hidden rounded-2xl md:col-span-1">
            {/* Replace src with your own asset */}
            <img
              src="/images/features.png"
              alt="Child happy with parent"
              className="h-auto w-full"
            />
          </div>

          {/* Right column – steps list */}
          <ul className="space-y-6 self-center md:col-span-1">
            <span className="text-sm font-medium text-white px-4 py-1 bg-brand-500 rounded-full">
              Features
            </span>
            <h2 className="text-5xl mt-4 mb-12 font-medium text-brand-900">
              How Allowi Works
            </h2>
            {items.map(({ icon: Icon, title, body }) => (
              <li key={title} className="flex items-start">
                <Icon size={30} className="shrink-0 text-brand-500" />
                <div className="ml-6">
                  <h3 className="text-xl font-medium text-brand-900">
                    {title}
                  </h3>
                  <p className="mt-2 text-gray-600">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
