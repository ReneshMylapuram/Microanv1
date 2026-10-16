export default function Logo({ className = '' }) {
  return (
    <a href="#top" className={`brand-logo inline-flex items-center gap-3 ${className}`} aria-label="Microan home">
      <img className="brand-logo-image" src="/microan-logo-transparent.png" width="40" height="40" alt="Microan interlocking hands logo" />
      <span className="text-lg font-semibold tracking-[0.08em] text-teal">MICROAN</span>
    </a>
  );
}
