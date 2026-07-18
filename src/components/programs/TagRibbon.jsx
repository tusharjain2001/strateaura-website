// Tapered ribbon/flag shape behind the small eyebrow labels ("Our Programs",
// "FEATURED"). Path data is the exact Figma vector, parameterized with
// currentColor so the same shape can be reused in navy and gold, the way the
// icons in ui/Icons.jsx do.
export default function TagRibbon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 204.087 39"
      className={className}
      preserveAspectRatio="none"
      fill="none"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.82194 0C8.97247 14.144 2.92004 18.72 0 19.24C2.92004 19.76 8.97247 24.856 9.82194 39H194C194.442 32.5866 197.079 19.24 204.087 19.24C197.079 19.24 194.442 6.41335 194 0L9.82194 0Z"
        fill="currentColor"
      />
    </svg>
  );
}
