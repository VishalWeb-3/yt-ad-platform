export function Arrow({ size = 18 }: { size?: number }) {
  return (
    <svg className="arrow" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M13.75 6.75 19.25 12l-5.5 5.25" />
      <path d="M19 12H4.75" />
    </svg>
  );
}
