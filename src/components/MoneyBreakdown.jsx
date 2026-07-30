import AnimatedSection from "./AnimatedSection.jsx";

// TODO: connect these allocation categories to verified monthly accounting exports.
const allocations = [
  { label: "Loans disbursed", value: 62, color: "#1E4B4A" },
  { label: "Reserve for new borrowers", value: 23, color: "#A8C3A0" },
  { label: "Operating costs", value: 12, color: "rgba(30, 75, 74, 0.24)" },
  { label: "Education and borrower support", value: 3, color: "rgba(168, 195, 160, 0.42)" },
];

export default function MoneyBreakdown() {
  return (
    <AnimatedSection id="allocation" className="px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[32px] border border-[#1E4B4A]/10 bg-white p-6 soft-shadow sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] text-[#1E4B4A]/60 uppercase">Where the money goes</p>
          <h2 className="mt-4 text-4xl leading-tight font-semibold tracking-[-0.055em] text-[#1E4B4A] sm:text-5xl">
            Designed to be legible before it is impressive.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-[#1E4B4A]/72">
            Every donated dollar is assigned a job: fund a borrower, maintain a healthy reserve, or keep
            the fund accountable enough to last.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[280px_1fr] md:items-center">
          <figure className="mx-auto">
            <div
              className="relative grid h-64 w-64 place-items-center rounded-full"
              style={{
                background:
                  "conic-gradient(#1E4B4A 0% 62%, #A8C3A0 62% 85%, rgba(30, 75, 74, 0.24) 85% 97%, rgba(168, 195, 160, 0.42) 97% 100%)",
              }}
              role="img"
              aria-label="Fund allocation: 62 percent loans disbursed, 23 percent reserve, 12 percent operating costs, 3 percent education and borrower support."
            >
              <div className="grid h-36 w-36 place-items-center rounded-full bg-white text-center shadow-inner">
                <div>
                  <p className="text-5xl font-semibold tracking-[-0.08em] text-[#1E4B4A]">62%</p>
                  <p className="mt-1 text-xs font-semibold tracking-[0.18em] text-[#1E4B4A]/58 uppercase">
                    In loans
                  </p>
                </div>
              </div>
            </div>
            <figcaption className="mt-4 text-center text-sm text-[#1E4B4A]/62">
              Placeholder monthly allocation
            </figcaption>
          </figure>

          <div className="space-y-3">
            {allocations.map((item) => (
              <div key={item.label} className="rounded-[20px] border border-[#1E4B4A]/10 bg-[#FBFAF6] p-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                      aria-hidden="true"
                    />
                    <p className="font-semibold text-[#1E4B4A]">{item.label}</p>
                  </div>
                  <p className="text-xl font-semibold tracking-[-0.04em] text-[#1E4B4A]">{item.value}%</p>
                </div>
                <div className="mt-3 h-2 rounded-full bg-white">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${item.value}%`, backgroundColor: item.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
