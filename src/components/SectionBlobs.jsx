export default function SectionBlobs({ className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="blob absolute -top-10 -left-16 h-64 w-64 bg-terracotta-light/40" />
      <div className="blob-slow absolute top-1/3 -right-24 h-80 w-80 bg-sage-light/50" />
      <div className="blob absolute bottom-0 left-1/4 h-56 w-56 bg-gold-light/40" />
    </div>
  )
}
