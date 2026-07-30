export default function LogoMark({ className = "h-10 w-10", showWordmark = false }) {
  return (
    <span className="inline-flex items-center gap-3" aria-label="Microan">
      <svg
        className={className}
        viewBox="0 0 64 64"
        role="img"
        aria-hidden={showWordmark ? "true" : undefined}
        focusable="false"
      >
        <path
          d="M34.8 10.5c8.9 1.3 15.8 8.5 16.8 17.5.9 8.6-3.9 17-11.7 20.6-4.7 2.2-10.4.2-12.8-4.4l-7.6-14.8c-1.1-2.1-.4-4.7 1.6-5.9l13.7-8.2c2.5-1.5 2-4.4 0-4.8Z"
          fill="#A8C3A0"
        />
        <path
          d="M29.2 53.5c-8.9-1.3-15.8-8.5-16.8-17.5-.9-8.6 3.9-17 11.7-20.6 4.7-2.2 10.4-.2 12.8 4.4l7.6 14.8c1.1 2.1.4 4.7-1.6 5.9l-13.7 8.2c-2.5 1.5-2 4.4 0 4.8Z"
          fill="#1E4B4A"
        />
        <circle cx="32" cy="32" r="8.2" fill="#FBFAF6" opacity="0.94" />
      </svg>
      {showWordmark ? (
        <span className="text-lg font-semibold tracking-[0.22em] text-[#1E4B4A] uppercase">Microan</span>
      ) : null}
    </span>
  );
}
