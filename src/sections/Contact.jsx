import SectionShell from '../components/SectionShell.jsx';

const contactOptions = [
  {
    label: 'Phone',
    value: '762-699-52-54',
    href: 'tel:7626995254',
    icon: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.63a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.45-1.2a2 2 0 0 1 2.11-.45c.85.3 1.73.51 2.63.63A2 2 0 0 1 22 16.92Z',
  },
  {
    label: 'Email',
    value: 'gunawanconnor@gmail.com',
    href: 'mailto:gunawanconnor@gmail.com',
    icon: 'M4 4h16v16H4z M4 7l8 6 8-6',
  },
];

export default function Contact() {
  return (
    <SectionShell
      id="contact"
      eyebrow="Contact us"
      title="Have a question about donating, borrowing, or local partnerships?"
      className="relative overflow-hidden"
    >
      <div className="grid gap-4 md:grid-cols-2" data-reveal>
        {contactOptions.map((option) => (
          <a className="contact-card" href={option.href} key={option.label}>
            <span className="contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d={option.icon} />
              </svg>
            </span>
            <span>
              <span className="block text-sm font-semibold uppercase tracking-[0.2em] text-teal/60">{option.label}</span>
              <span className="mt-3 block text-2xl font-semibold tracking-[0.01em] text-teal sm:text-3xl">{option.value}</span>
            </span>
          </a>
        ))}
      </div>
    </SectionShell>
  );
}
