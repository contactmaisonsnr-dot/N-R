const PALETTES = {
  terracotta: [
    'radial-gradient(at 20% 20%, rgba(158,45,49,0.9) 0px, transparent 55%)',
    'radial-gradient(at 80% 30%, rgba(237,230,212,0.85) 0px, transparent 50%)',
    'radial-gradient(at 60% 85%, rgba(44,37,32,0.55) 0px, transparent 60%)',
    'linear-gradient(135deg, #c2696d, #7a2228)',
  ],
  sage: [
    'radial-gradient(at 25% 25%, rgba(122,112,104,0.9) 0px, transparent 55%)',
    'radial-gradient(at 80% 20%, rgba(250,248,243,0.7) 0px, transparent 50%)',
    'radial-gradient(at 70% 85%, rgba(44,37,32,0.5) 0px, transparent 60%)',
    'linear-gradient(135deg, #ede6d4, #7a7068)',
  ],
  gold: [
    'radial-gradient(at 25% 20%, rgba(134,123,24,0.9) 0px, transparent 55%)',
    'radial-gradient(at 80% 30%, rgba(217,205,184,0.8) 0px, transparent 50%)',
    'radial-gradient(at 65% 85%, rgba(44,37,32,0.5) 0px, transparent 60%)',
    'linear-gradient(135deg, #b8ad6a, #867b18)',
  ],
  plum: [
    'radial-gradient(at 25% 25%, rgba(168,154,126,0.9) 0px, transparent 55%)',
    'radial-gradient(at 80% 20%, rgba(201,191,174,0.7) 0px, transparent 50%)',
    'radial-gradient(at 65% 85%, rgba(44,37,32,0.5) 0px, transparent 60%)',
    'linear-gradient(135deg, #d9cdb8, #7a7068)',
  ],
  clay: [
    'radial-gradient(at 25% 25%, rgba(44,37,32,0.85) 0px, transparent 55%)',
    'radial-gradient(at 80% 25%, rgba(158,45,49,0.7) 0px, transparent 50%)',
    'radial-gradient(at 65% 85%, rgba(134,123,24,0.5) 0px, transparent 60%)',
    'linear-gradient(135deg, #7a7068, #2c2520)',
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
