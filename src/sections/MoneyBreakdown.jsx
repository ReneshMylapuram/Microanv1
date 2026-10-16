import SectionShell from '../components/SectionShell.jsx';
import { allocationData, deployedCapital, formatCurrency, fundMetrics } from '../data/fundData.js';

export default function MoneyBreakdown() {
  return (
    <SectionShell
      id="allocation"
      eyebrow="Where the money goes"
      title="Fund capital supports active loans, with a deliberate reserve."
    >
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="donut-wrap" data-reveal>
          <div className="donut-chart">
            <svg viewBox="0 0 120 120" aria-hidden="true">
              {allocationData.map((item, index) => <circle key={item.label} cx="60" cy="60" r="45" fill="none" stroke={item.color} strokeWidth="26" pathLength="100" strokeDasharray={`${item.value} ${100 - item.value}`} strokeDashoffset={-allocationData.slice(0, index).reduce((sum, segment) => sum + segment.value, 0)} transform="rotate(-90 60 60)" />)}
            </svg>
            <div className="donut-hole">
              <strong>{fundMetrics.deployedPercent}%</strong>
              <span>deployed</span>
            </div>
          </div>
        </div>

        <div className="space-y-4" data-reveal>
          {allocationData.map((item) => (
            <div className="allocation-row" key={item.label}>
              <span className="flex items-center gap-3">
                <span className="h-3.5 w-3.5 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="font-medium text-teal">{item.label}</span>
              </span>
              <span className="font-semibold text-ink">{item.value}%</span>
            </div>
          ))}
          <p className="pt-3 text-sm leading-6 text-ink/65">
            Currently deployed capital is {formatCurrency(deployedCapital, 2)} of the {formatCurrency(fundMetrics.communityFund)} fund. Cumulative lending totals {formatCurrency(fundMetrics.cumulativeLending)} across all {fundMetrics.loansIssued} loans; it is not the current outstanding balance.{' '}
            Operating costs are intentionally narrow and reviewed alongside each public fund update.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
