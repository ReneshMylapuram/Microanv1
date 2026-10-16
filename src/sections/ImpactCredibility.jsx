import SectionShell from '../components/SectionShell.jsx';
import TestimonialCarousel from '../components/TestimonialCarousel.jsx';
import { credibilityMarkers, formatCurrency, fundMetrics, interestSavings } from '../data/fundData.js';

export default function ImpactCredibility() {
  return (
    <SectionShell
      id="impact"
      title="Built to be understandable to donors, borrowers, and external reviewers."
      className="bg-white"
    >
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <TestimonialCarousel />
        <div className="cred-panel" data-reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal/60">Review-ready signals</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {credibilityMarkers.map((marker) => (
              <span className="cred-pill" key={marker}>{marker}</span>
            ))}
          </div>
          <div className="mt-8 grid gap-3">
            <div className="impact-metric">
              <strong>{interestSavings.percentagePoints}</strong>
              <span>percentage points lower interest</span>
            </div>
            <div className="impact-metric">
              <strong>≈{formatCurrency(interestSavings.estimatedSavings)}</strong>
              <span>Estimated interest savings</span>
              <p className="mt-3 text-sm leading-6 text-ink/70">Across supported businesses in this illustrative comparison.</p>
            </div>
          </div>
          <p className="mt-6 text-sm leading-6 text-ink/70">
            Illustration assumes {formatCurrency(fundMetrics.cumulativeLending)} in cumulative loan principal,
            a {interestSavings.microanRate}% average Microan rate, and a {interestSavings.alternativeRate}% alternative rate
            over {interestSavings.termYears} year using simple interest: {formatCurrency(fundMetrics.cumulativeLending)} × {interestSavings.percentagePoints}% = {formatCurrency(interestSavings.estimatedSavings, 2)}.
            The alternative rate is an assumption, not an established market average; these are modeled savings, not verified borrower results.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
