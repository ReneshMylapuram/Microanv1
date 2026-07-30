import AnimatedSection from "./AnimatedSection.jsx";

// TODO: connect to fund data API when Microan publishes live treasury and loan records.
const transparencyStats = [
  {
    label: "Current fund value",
    value: "$42,800",
    note: "Donations held across deployed loans and operating reserve.",
  },
  {
    label: "Loans given",
    value: "31",
    note: "Small loans issued to local businesses and individuals.",
  },
  {
    label: "Average loan size",
    value: "$1,380",
    note: "Designed to solve urgent liquidity gaps without overburdening borrowers.",
  },
  {
    label: "Funds deployed",
    value: "68%",
    note: "32% remains held in reserve for stability and rapid response.",
  },
];

export default function TransparencyDashboard() {
  return (
    <AnimatedSection id="transparency" className="px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-[#1E4B4A]/60 uppercase">
              Fund transparency dashboard
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl leading-tight font-semibold tracking-[-0.055em] text-[#1E4B4A] sm:text-6xl">
              A live-style view of community capital at work.
            </h2>
          </div>
          <div className="rounded-full border border-[#1E4B4A]/12 bg-white px-4 py-2 text-sm font-semibold text-[#1E4B4A] shadow-sm">
            Placeholder data · Updated monthly
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {transparencyStats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-[24px] border border-[#1E4B4A]/10 bg-white p-6 soft-shadow transition duration-300 hover:-translate-y-1 sm:p-7"
            >
              <p className="text-sm font-semibold tracking-[0.16em] text-[#1E4B4A]/58 uppercase">{stat.label}</p>
              <p className="mt-5 text-5xl font-semibold tracking-[-0.07em] text-[#1E4B4A]">{stat.value}</p>
              <p className="mt-5 text-sm leading-6 text-[#1E4B4A]/70">{stat.note}</p>
            </article>
          ))}
        </div>

        <div className="mt-5 rounded-[24px] border border-[#1E4B4A]/10 bg-[#A8C3A0]/16 p-5 sm:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-[#1E4B4A]">Deployment balance</p>
              <p className="mt-1 text-sm leading-6 text-[#1E4B4A]/72">
                Microan keeps a reserve so donations can support new borrowers while protecting the fund.
              </p>
            </div>
            <div className="h-4 overflow-hidden rounded-full bg-white md:w-[44%]" aria-label="68 percent deployed, 32 percent reserve">
              <div className="h-full w-[68%] rounded-full bg-[#1E4B4A]" />
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
