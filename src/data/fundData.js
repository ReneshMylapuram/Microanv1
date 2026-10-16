// User-supplied reporting figures; no audited loan ledger is connected.
// Fund capital and historical cumulative lending are independent measures.
export const fundMetrics = {
  communityFund: 9250,
  cumulativeLending: 8250,
  loansIssued: 11,
  interestRateMin: 2,
  interestRateMax: 3,
  deployedPercent: 47,
};

export const formatCurrency = (value, fractionDigits = 0) => new Intl.NumberFormat('en-US', {
  style: 'currency', currency: 'USD',
  minimumFractionDigits: fractionDigits, maximumFractionDigits: fractionDigits,
}).format(value);

export const interestRateLabel = `${fundMetrics.interestRateMin}–${fundMetrics.interestRateMax}%`;
export const deployedCapital = fundMetrics.communityFund * fundMetrics.deployedPercent / 100;

// Illustrative one-year simple-interest comparison, not measured borrower savings
// or an evidenced market average. Replace with actual records when available.
const microanRate = (fundMetrics.interestRateMin + fundMetrics.interestRateMax) / 2;
const alternativeRate = 32.8;
const percentagePoints = Number((alternativeRate - microanRate).toFixed(1));
export const interestSavings = {
  microanRate,
  alternativeRate,
  termYears: 1,
  percentagePoints,
  estimatedSavings: fundMetrics.cumulativeLending * percentagePoints / 100,
};

export const fundStats = [
  { label: 'Current fund value', value: formatCurrency(fundMetrics.communityFund), detail: 'Community-raised capital available for lending and reserves.' },
  { label: 'Loans issued', value: String(fundMetrics.loansIssued), detail: `${formatCurrency(fundMetrics.cumulativeLending)} in cumulative lending through our community fund.` },
  { label: 'Average loan size', value: formatCurrency(fundMetrics.cumulativeLending / fundMetrics.loansIssued), detail: `Based on ${formatCurrency(fundMetrics.cumulativeLending)} in cumulative lending across ${fundMetrics.loansIssued} loans.` },
  { label: 'Funds deployed', value: `${fundMetrics.deployedPercent}%`, detail: `${formatCurrency(deployedCapital, 2)} currently outstanding in active loans, distinct from cumulative lending.` },
];

export const allocationData = [
  { label: 'Loans deployed', value: fundMetrics.deployedPercent, color: '#171e19' },
  { label: 'Reserve', value: 50, color: '#b7c6c2' },
  { label: 'Operating costs', value: 2, color: '#ffe17c' },
  { label: 'Borrower support', value: 1, color: '#ffffff' },
];

export const credibilityMarkers = ['Community-funded', `${interestRateLabel} simple interest`, 'Transparent reporting', 'Local review circle'];
