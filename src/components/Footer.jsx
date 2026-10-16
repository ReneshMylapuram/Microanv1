import Logo from './Logo.jsx';

export default function Footer() {
  return (
    <footer className="border-t border-teal/10 bg-white px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-md">
          <Logo />
          <p className="mt-5 text-base leading-7 text-ink/70">
            Microan turns community donations into small, transparent loans that help small businesses stay solvent, independent, and moving.
          </p>
        </div>
        <nav className="flex flex-wrap gap-3 text-sm font-medium" aria-label="Footer navigation">
          <a className="pill-link" href="mailto:gunawanconnor@gmail.com">gunawanconnor@gmail.com</a>
          <a className="pill-link" href="tel:7626995254">762-699-52-54</a>
          <a className="pill-link" href="#dashboard">Transparency</a>
          <a className="pill-link" href="#impact">Impact</a>
          <a className="pill-link" href="#top">Back to top</a>
        </nav>
      </div>
    </footer>
  );
}
