import SectionShell from '../components/SectionShell.jsx';

const pillars = [
  { icon: 'M12 3v18M4 11h16', title: 'Dignified capital', text: 'Affordable loans for urgent cash-flow needs without extractive terms.' },
  { icon: 'M5 12c4-6 10-6 14 0M5 12c4 6 10 6 14 0', title: 'Mutual trust', text: 'A community review model that values context, character, and repayment support.' },
  { icon: 'M6 17l4-4 3 3 5-7', title: 'Transparent stewardship', text: 'Plain reporting so donors can see how every dollar circulates.' },
];

export default function VisionMission() {
  return (
    <SectionShell
      id="mission"
      eyebrow="Our vision & mission"
      title="A local fund that treats temporary hardship as solvable, not defining."
      className="bg-white"
    >
      <div className="mission-content">
        <p className="max-w-2xl text-xl leading-9 text-ink/72" data-reveal>
          Microan exists to make community-backed credit for small businesses simple, humane, and accountable. Long term, the fund aims to become a durable source of first-response capital for local entrepreneurs and small business owners facing short liquidity gaps.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <article className="pillar-card" data-reveal style={{ transitionDelay: `${index * 70}ms` }} key={pillar.title}>
              <svg className="mb-7 h-8 w-8 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d={pillar.icon} />
              </svg>
              <h3 className="text-lg font-semibold text-teal">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink/65">{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
