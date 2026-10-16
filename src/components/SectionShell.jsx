export default function SectionShell({ id, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={`px-5 py-20 sm:px-8 lg:py-28 ${className}`}>
      <div className="mx-auto max-w-[1180px]">
        {(eyebrow || title) && (
          <div className="mb-10 max-w-3xl" data-reveal>
            {eyebrow && <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-teal/70">{eyebrow}</p>}
            {title && <h2 className="text-3xl font-semibold leading-tight tracking-[0.02em] text-teal sm:text-5xl">{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
