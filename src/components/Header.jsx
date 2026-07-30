import LogoMark from "./LogoMark.jsx";

const navItems = [
  { label: "Transparency", href: "#transparency" },
  { label: "Allocation", href: "#allocation" },
  { label: "Process", href: "#process" },
  { label: "Impact", href: "#impact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#1E4B4A]/10 bg-[#FBFAF6]/88 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
        aria-label="Primary navigation"
      >
        <a href="#top" className="rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E4B4A]">
          <LogoMark showWordmark className="h-11 w-11" wordmarkClassName="hidden sm:inline" />
        </a>
        <div className="hidden items-center gap-1 rounded-full border border-[#1E4B4A]/10 bg-white/70 p-1 text-sm font-medium text-[#1E4B4A] shadow-sm md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 transition hover:bg-[#A8C3A0]/22 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E4B4A]"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#donate"
          className="rounded-full bg-[#1E4B4A] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E4B4A]"
        >
          Donate
        </a>
      </nav>
    </header>
  );
}
