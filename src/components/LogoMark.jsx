export default function LogoMark({
  className = "h-10 w-10",
  showWordmark = false,
  wordmarkClassName = "",
}) {
  return (
    <span className="inline-flex items-center gap-4" aria-label="Microan">
      <svg
        className={className}
        viewBox="0 0 96 96"
        role="img"
        aria-hidden={showWordmark ? "true" : undefined}
        focusable="false"
      >
        <path
          d="M24.9 17.5C39.7 4.8 62.2 5 77 18.1c17.4 15.4 18.9 42.2 3.3 59.5-3.1 3.4-6.6 6.2-10.4 8.3 5.5-18.3-3.6-36.1-21-41.8-12.2-4-20.9-12.8-24-26.6Z"
          fill="#1E4B4A"
        />
        <path
          d="M70 85.8C54.7 94 35 90.6 23.1 77.4C7.6 60.1 9.1 33.2 26.5 17.8c3.1-2.8 6.5-5 10.1-6.6-5 18.4 4.1 35.8 21.4 41.3 12.5 4 21.1 14.2 12 33.3Z"
          fill="#A8C3A0"
        />
        <path
          d="M26 19c1.6 8.2 7.2 14.4 16.2 18.1 5.9 2.4 10.3 5.7 12.8 9.9 2.4 4 0.9 9.2-3.3 11.4-4 2.1-9 0.8-11.6-3-2.1-3.1-5.5-5.5-10.3-7.2-8.9-3.1-14.7-8.9-17.2-17.2 3.5-4.8 8-8.8 13.4-12Z"
          fill="#FFFFFF"
        />
        <path
          d="M70.1 77.2c-1.8-7.7-7.2-13.6-15.8-17.1-5.9-2.4-10.3-5.7-12.8-9.9-2.4-4-0.9-9.2 3.3-11.4 4-2.1 9-0.8 11.6 3 2.1 3.1 5.5 5.5 10.3 7.2 8.2 2.9 13.8 8.1 16.5 15.5-3.1 5.2-7.6 9.6-13.1 12.7Z"
          fill="#FFFFFF"
        />
        <circle cx="48" cy="48" r="15.8" fill="#FFFFFF" />
        <path
          d="M17.7 24.4c3.9-3.6 8.3-6.2 13-7.9M20.4 31.9c3.8-4.5 8.8-7.8 14.8-9.6M25.7 38.4c3.1-4.2 7.3-7.3 12.6-9.2M60.1 66.6c6-1.8 10.9-5.1 14.8-9.7M57.4 73.7c6.2-1.6 11.4-4.7 15.6-9.2M63.6 80.1c5.4-1.7 10-4.6 13.7-8.6"
          stroke="#FFFFFF"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
      </svg>
      {showWordmark ? (
        <span
          className={`text-xl font-medium tracking-[0.34em] text-[#1E4B4A] sm:text-2xl ${wordmarkClassName}`}
        >
          Microan
        </span>
      ) : null}
    </span>
  );
}
