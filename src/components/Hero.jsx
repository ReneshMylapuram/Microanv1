import LogoMark from "./LogoMark.jsx";

export default function Hero() {
  return (
    <section className="grain relative isolate px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:pb-36">
      <div className="absolute left-1/2 top-20 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-[#A8C3A0]/35 opacity-70 sm:h-[720px] sm:w-[720px]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="max-w-4xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1E4B4A]/12 bg-white/78 px-4 py-2 text-sm font-semibold tracking-[0.16em] text-[#1E4B4A] uppercase shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#A8C3A0]" />
            Community-funded liquidity
          </p>
          <h1 className="max-w-5xl text-5xl leading-[0.94] font-semibold tracking-[-0.07em] text-[#1E4B4A] sm:text-7xl lg:text-8xl">
            Small loans that keep local lives moving.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#1E4B4A]/78 sm:text-xl">
            Microan turns community donations into low-interest 2-3% loans for neighbors and small
            businesses navigating short-term liquidity gaps.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              id="donate"
              href="mailto:hello@microan.org?subject=Donate%20to%20Microan"
              className="inline-flex items-center justify-center rounded-full bg-[#1E4B4A] px-7 py-4 text-base font-semibold text-white shadow-lg shadow-[#1E4B4A]/12 transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E4B4A]"
            >
              Donate
            </a>
            <a
              href="#impact"
              className="inline-flex items-center justify-center rounded-full border border-[#1E4B4A]/14 bg-white px-7 py-4 text-base font-semibold text-[#1E4B4A] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#A8C3A0]/16 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E4B4A]"
            >
              See our impact
            </a>
          </div>
        </div>

        <div className="relative mx-auto h-[420px] w-full max-w-[520px] sm:h-[540px]" aria-hidden="true">
          <div className="absolute inset-x-6 top-8 h-[360px] rounded-[44px] border border-[#1E4B4A]/10 bg-white/76 soft-shadow sm:inset-x-2 sm:h-[470px]" />
          <div className="absolute left-1/2 top-20 h-64 w-64 -translate-x-1/2 rounded-full border border-[#A8C3A0]/38 sm:top-24 sm:h-80 sm:w-80" />
          <div className="absolute left-1/2 top-28 h-52 w-52 -translate-x-1/2 rounded-full bg-[#A8C3A0]/14 blur-3xl sm:top-32 sm:h-72 sm:w-72" />
          <div className="absolute left-1/2 top-24 -translate-x-1/2 sm:top-28">
            <LogoMark className="h-56 w-56 drop-shadow-2xl sm:h-72 sm:w-72" />
          </div>
          <div className="absolute left-3 top-16 rounded-[28px] bg-white px-5 py-4 soft-shadow sm:left-0">
            <LogoMark showWordmark className="h-11 w-11" wordmarkClassName="text-lg sm:text-xl" />
          </div>
          <div className="absolute right-3 bottom-16 max-w-[240px] rounded-[28px] border border-[#1E4B4A]/10 bg-white p-5 soft-shadow sm:right-0">
            <p className="text-sm font-semibold tracking-[0.18em] text-[#1E4B4A]/60 uppercase">Current rate</p>
            <p className="mt-2 text-4xl font-semibold tracking-[-0.06em] text-[#1E4B4A]">2-3%</p>
            <p className="mt-2 text-sm leading-6 text-[#1E4B4A]/70">
              Low-interest loans designed for continuity, not extraction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
