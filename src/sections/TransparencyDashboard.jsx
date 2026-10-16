import SectionShell from '../components/SectionShell.jsx';
import { fundStats } from '../data/fundData.js';

export default function TransparencyDashboard() {
  return (
    <SectionShell
      id="dashboard"
      eyebrow="Dashboard"
      title="A clear view of the fund, loans issued, and capital kept ready."
      className="bg-white"
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {fundStats.map((stat, index) => (
          <article className="stat-card" data-reveal style={{ transitionDelay: `${index * 70}ms` }} key={stat.label}>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal/60">{stat.label}</p>
            <strong className="mt-6 block text-4xl font-semibold tracking-[0.01em] text-teal sm:text-5xl">{stat.value}</strong>
            <p className="mt-5 text-sm leading-6 text-ink/65">{stat.detail}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
