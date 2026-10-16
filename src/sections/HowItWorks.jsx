import SectionShell from '../components/SectionShell.jsx';
import { interestRateLabel } from '../data/fundData.js';

const steps = [
  { title: 'Apply', text: 'Borrowers share the cash-flow need, timeline, and intended use of funds.' },
  { title: 'Review', text: 'A local review circle evaluates fit, affordability, and repayment support.' },
  { title: 'Fund', text: `Approved loans are issued at ${interestRateLabel} and reported in aggregate fund updates.` },
];

export default function HowItWorks() {
  return (
    <SectionShell id="process" eyebrow="How it works" title="Three careful steps, built for speed and accountability.">
      <div className="stepper" data-reveal>
        {steps.map((step, index) => (
          <article className="step-card" key={step.title}>
            <div className="step-dot" aria-hidden="true">0{index + 1}</div>
            <h3 className="text-2xl font-semibold text-teal">{step.title}</h3>
            <p className="mt-4 text-base leading-7 text-ink/68">{step.text}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
