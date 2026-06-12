const PALETTES = {
  terracotta: [
    'radial-gradient(at 20% 20%, rgba(193,80,46,0.9) 0px, transparent 55%)',
    'radial-gradient(at 80% 30%, rgba(230,205,154,0.85) 0px, transparent 50%)',
    'radial-gradient(at 60% 85%, rgba(42,34,28,0.55) 0px, transparent 60%)',
    'linear-gradient(135deg, #e0a07f, #8f3a1f)',
  ],
  sage: [
    'radial-gradient(at 25% 25%, rgba(95,111,74,0.9) 0px, transparent 55%)',
    'radial-gradient(at 80% 20%, rgba(247,242,234,0.7) 0px, transparent 50%)',
    'radial-gradient(at 70% 85%, rgba(42,34,28,0.5) 0px, transparent 60%)',
    'linear-gradient(135deg, #aebb96, #5f6f4a)',
  ],
  gold: [
    'radial-gradient(at 25% 20%, rgba(201,149,44,0.9) 0px, transparent 55%)',
    'radial-gradient(at 80% 30%, rgba(214,165,154,0.8) 0px, transparent 50%)',
    'radial-gradient(at 65% 85%, rgba(42,34,28,0.5) 0px, transparent 60%)',
    'linear-gradient(135deg, #e6cd9a, #c9952c)',
  ],
  plum: [
    'radial-gradient(at 25% 25%, rgba(156,135,184,0.9) 0px, transparent 55%)',
    'radial-gradient(at 80% 20%, rgba(126,160,173,0.7) 0px, transparent 50%)',
    'radial-gradient(at 65% 85%, rgba(42,34,28,0.5) 0px, transparent 60%)',
    'linear-gradient(135deg, #d6a59a, #5f6f4a)',
  ],
  clay: [
    'radial-gradient(at 25% 25%, rgba(42,34,28,0.85) 0px, transparent 55%)',
    'radial-gradient(at 80% 25%, rgba(193,80,46,0.7) 0px, transparent 50%)',
    'radial-gradient(at 65% 85%, rgba(201,149,44,0.5) 0px, transparent 60%)',
    'linear-gradient(135deg, #5f6f4a, #2a221c)',
  ],
}

export default function ArtPanel({
  palette = 'terracotta',
  label,
  className = '',
}) {
  const layers = PALETTES[palette] ?? PALETTES.terracotta

  return (
    <div
      className={`grain relative flex items-center justify-center overflow-hidden ${className}`}
      style={{ backgroundImage: layers.join(', ') }}
      aria-hidden="true"
    >
      {label && (
        <span className="relative font-heading italic text-white/25 text-[5rem] sm:text-[7rem] leading-none select-none">
          {label}
        </span>
      )}
    </div>
  )
}
