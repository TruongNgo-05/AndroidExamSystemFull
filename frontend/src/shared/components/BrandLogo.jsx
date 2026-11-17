export default function BrandLogo() {
  return (
    <span className="jler-logo" aria-hidden="true">
      <svg
        className="jler-symbol"
        width="44"
        height="44"
        viewBox="0 0 48 48"
        fill="none"
      >
        <path
          d="M9 11h10M9 11v10M39 27v10H29"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity=".45"
        />
        <path
          d="M18 15h13v14a8 8 0 0 1-16 0"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m24 28 4 4 9-10"
          stroke="var(--text)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="jler-wordmark">
        <strong>
          JLer<span> /</span>
        </strong>
        <small>LEARN · PRACTICE · GROW</small>
      </span>
    </span>
  );
}
