import AnimatedSection from "./AnimatedSection.jsx";

const pillars = [
  {
    title: "Mutual support",
    copy: "Donors and borrowers are part of the same local system, with capital moving where it is most useful.",
    icon: (
      <path
        d="M14 33c8-12 25-12 34 0M20 23c3-5 8-8 14-8s11 3 14 8M24 43c5 4 15 4 20 0"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    ),
  },
  {
    title: "Transparent capital",
    copy: "Simple reporting makes the fund understandable to donors, borrowers, reviewers, and community partners.",
    icon: (
      <path
        d="M17 18h30M17 31h22M17 44h15M45 39l5 5 9-12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Responsible relief",
    copy: "Low-interest loans address liquidity problems without replacing grants, banks, or long-term financial planning.",
    icon: (
      <path
        d="M32 12v40M18 25c0-7 6-13 14-13s14 6 14 13-6 12-14 12-14 4-14 10"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    ),
  },
];

export default function VisionMission() {
  return (
    <AnimatedSection className="px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-[#1E4B4A]/60 uppercase">Our vision and mission</p>
            <h2 className="mt-4 text-4xl leading-tight font-semibold tracking-[-0.055em] text-[#1E4B4A] sm:text-6xl">
              A durable neighborhood fund, not a one-time campaign.
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#1E4B4A]/74">
            Microan exists to make small, timely capital available when traditional options are too slow,
            too expensive, or too impersonal. Our long-term goal is a community-controlled fund that
            proves trust, transparency, and financial discipline can coexist.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className={`rounded-[28px] border border-[#1E4B4A]/10 p-6 ${
                index === 0 ? "bg-[#1E4B4A] text-white md:translate-y-6" : "bg-white text-[#1E4B4A]"
              } soft-shadow`}
            >
              <svg className="h-16 w-16" viewBox="0 0 64 64" fill="none" aria-hidden="true">
                {pillar.icon}
              </svg>
              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.04em]">{pillar.title}</h3>
              <p className={`mt-4 leading-7 ${index === 0 ? "text-white/78" : "text-[#1E4B4A]/70"}`}>{pillar.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
