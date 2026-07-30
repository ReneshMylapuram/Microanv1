import AnimatedSection from "./AnimatedSection.jsx";

const steps = [
  {
    label: "Apply",
    copy: "A borrower submits a short request describing the liquidity gap, repayment plan, and community context.",
  },
  {
    label: "Review",
    copy: "A small committee reviews need, viability, and fit against Microan's low-interest lending principles.",
  },
  {
    label: "Fund",
    copy: "Approved loans are disbursed with clear terms, regular check-ins, and public aggregate reporting.",
  },
];

export default function HowItWorks() {
  return (
    <AnimatedSection id="process" className="px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-[32px] bg-[#1E4B4A] p-6 text-white sm:p-10 lg:p-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-white/62 uppercase">How it works</p>
            <h2 className="mt-4 max-w-3xl text-4xl leading-tight font-semibold tracking-[-0.055em] sm:text-6xl">
              Three calm steps from request to repayment.
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-white/72">
            The process is lightweight by design, but each loan still passes through review and transparent
            tracking.
          </p>
        </div>

        <div className="relative mt-14">
          <svg
            className="absolute left-[12px] top-8 hidden h-[72px] w-[calc(100%-24px)] md:block"
            viewBox="0 0 900 72"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M20 39C145 6 205 6 330 39C455 72 515 72 640 39C765 6 805 6 880 31"
              stroke="#A8C3A0"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="1 13"
            />
          </svg>

          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.label}
                className="relative rounded-[28px] border border-white/12 bg-white/[0.06] p-6 backdrop-blur-sm"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-[#A8C3A0] text-[#1E4B4A] shadow-lg shadow-[#1E4B4A]/16">
                  <span className="h-6 w-6 rounded-full bg-current" />
                </div>
                <h3 className="text-3xl font-semibold tracking-[-0.05em]">{step.label}</h3>
                <p className="mt-4 leading-7 text-white/72">{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
