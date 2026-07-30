import LogoMark from "./LogoMark.jsx";

const footerLinks = [
  { label: "Email", href: "mailto:hello@microan.org" },
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/" },
];

export default function Footer() {
  return (
    <footer className="px-5 pb-8 pt-16 sm:px-8">
      <div className="mx-auto max-w-7xl rounded-[32px] border border-[#1E4B4A]/10 bg-white p-6 soft-shadow sm:p-8 lg:p-10">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <LogoMark showWordmark className="h-12 w-12" wordmarkClassName="text-2xl sm:text-3xl" />
            <p className="mt-6 max-w-xl text-base leading-7 text-[#1E4B4A]/72">
              Microan is a grassroots microlending fund converting community donations into small,
              low-interest loans for local continuity and resilience.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full border border-[#1E4B4A]/12 px-5 py-3 text-sm font-semibold text-[#1E4B4A] transition hover:bg-[#A8C3A0]/18 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E4B4A]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-[#1E4B4A]/10 pt-6 text-sm text-[#1E4B4A]/58 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Microan. Community capital, carefully stewarded.</p>
          <p>Placeholder transparency data for design preview.</p>
        </div>
      </div>
    </footer>
  );
}
