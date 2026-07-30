import AnimatedSection from "./AnimatedSection.jsx";

// TODO: replace placeholder stories and partners with approved borrower anecdotes, press, and reviewer quotes.
const credibilityMarkers = ["Community advisory board", "Monthly allocation report", "Borrower-first terms"];

const stories = [
  {
    quote:
      "The most meaningful support was the timing. A small loan kept payroll stable while two invoices cleared.",
    source: "Local services borrower",
  },
  {
    quote:
      "Microan makes community giving more disciplined: donors can see capital recycled, reserved, and reported.",
    source: "Founding donor",
  },
];

export default function ImpactCredibility() {
  return (
    <AnimatedSection id="impact" className="px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-[#1E4B4A]/60 uppercase">
              Impact and credibility
            </p>
            <h2 className="mt-4 text-4xl leading-tight font-semibold tracking-[-0.055em] text-[#1E4B4A] sm:text-6xl">
              Built to be taken seriously by neighbors and institutions.
            </h2>
            <p className="mt-5 text-base leading-8 text-[#1E4B4A]/72">
              Microan is grassroots, but the operating standard is professional: documented approvals,
              clear terms, transparent fund allocation, and public-facing accountability.
            </p>
          </div>

          <div className="grid gap-4">
            {stories.map((story) => (
              <blockquote
                key={story.source}
                className="rounded-[28px] border border-[#1E4B4A]/10 bg-white p-6 soft-shadow sm:p-8"
              >
                <p className="text-xl leading-8 font-medium tracking-[-0.025em] text-[#1E4B4A]">"{story.quote}"</p>
                <footer className="mt-5 text-sm font-semibold tracking-[0.14em] text-[#1E4B4A]/58 uppercase">
                  {story.source}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-[32px] border border-[#1E4B4A]/10 bg-[#A8C3A0]/18 p-5 sm:p-6">
          <p className="mb-4 text-sm font-semibold tracking-[0.18em] text-[#1E4B4A]/62 uppercase">
            Review-ready credibility markers
          </p>
          <div className="grid gap-3 md:grid-cols-3">
            {credibilityMarkers.map((marker) => (
              <div
                key={marker}
                className="rounded-full border border-[#1E4B4A]/10 bg-white px-5 py-4 text-center font-semibold text-[#1E4B4A] shadow-sm"
              >
                {marker}
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
