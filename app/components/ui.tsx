export function Arrow({ size = 24, stroke = 2 }: { size?: number; stroke?: number }) {
  return (
    <svg
      className="arrow"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M13.75 6.75 19.25 12l-5.5 5.25" />
      <path d="M19 12H4.75" />
    </svg>
  );
}

/** Splits text into masked words so GSAP can slide each one up. */
export function Words({ text }: { text: string }) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <span key={i}>
          <span className="w">
            <span className="wi">{w}</span>
          </span>{" "}
        </span>
      ))}
    </>
  );
}

export function Check() {
  return (
    <span className="check" aria-hidden>
      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5.75 12.87l2.59 3.55c.81 1.11 2.48 1.09 3.26-.04L18.25 6.75" />
      </svg>
    </span>
  );
}
