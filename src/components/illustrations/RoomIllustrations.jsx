/* Flat, organic-style SVG room illustrations used as decorative
   "real interior" elements throughout the site. */

const COLORS = {
  terracotta: '#E0764F',
  terracottaLight: '#F4A98A',
  terracottaDark: '#C4583A',
  sage: '#8A9B6E',
  sageLight: '#C4D2AC',
  gold: '#E8A33D',
  goldLight: '#F8D9A6',
  blush: '#F4A6A0',
  lilac: '#C9A6F4',
  sky: '#8EC9E6',
  clay: '#2E2A26',
  cream: '#FBF5EC',
}

export function HeroLivingRoom({ className = '' }) {
  return (
    <svg
      viewBox="0 0 480 380"
      className={className}
      role="img"
      aria-label="Illustration d'un salon coloré avec canapé, plantes et luminaire"
    >
      {/* Window */}
      <rect x="280" y="20" width="160" height="180" rx="24" fill={COLORS.sky} opacity="0.35" />
      <rect x="280" y="20" width="160" height="180" rx="24" fill="none" stroke={COLORS.cream} strokeWidth="6" />
      <line x1="360" y1="20" x2="360" y2="200" stroke={COLORS.cream} strokeWidth="6" />
      <line x1="280" y1="110" x2="440" y2="110" stroke={COLORS.cream} strokeWidth="6" />

      {/* Rug */}
      <ellipse cx="220" cy="320" rx="190" ry="40" fill={COLORS.goldLight} opacity="0.6" />

      {/* Sofa back */}
      <rect x="40" y="170" width="240" height="90" rx="36" fill={COLORS.terracotta} />
      {/* Sofa seat */}
      <rect x="30" y="230" width="260" height="70" rx="28" fill={COLORS.terracottaDark} />
      {/* Cushions */}
      <rect x="60" y="190" width="60" height="55" rx="18" fill={COLORS.blush} />
      <rect x="135" y="195" width="60" height="50" rx="18" fill={COLORS.goldLight} />
      <rect x="205" y="190" width="60" height="55" rx="18" fill={COLORS.sageLight} />
      {/* Legs */}
      <rect x="45" y="296" width="10" height="22" rx="4" fill={COLORS.clay} />
      <rect x="265" y="296" width="10" height="22" rx="4" fill={COLORS.clay} />

      {/* Coffee table */}
      <ellipse cx="330" cy="300" rx="70" ry="14" fill={COLORS.clay} opacity="0.15" />
      <rect x="290" y="255" width="90" height="14" rx="7" fill={COLORS.gold} />
      <rect x="300" y="269" width="8" height="28" fill={COLORS.clay} opacity="0.6" />
      <rect x="362" y="269" width="8" height="28" fill={COLORS.clay} opacity="0.6" />
      <circle cx="320" cy="248" r="14" fill={COLORS.cream} />
      <circle cx="320" cy="248" r="14" fill="none" stroke={COLORS.terracotta} strokeWidth="3" />

      {/* Floor lamp */}
      <rect x="20" y="60" width="6" height="120" fill={COLORS.clay} opacity="0.5" />
      <path d="M-4 60 L56 60 L40 20 L12 20 Z" fill={COLORS.gold} />
      <circle cx="23" cy="184" r="10" fill={COLORS.clay} opacity="0.3" />

      {/* Plant */}
      <ellipse cx="430" cy="300" rx="30" ry="12" fill={COLORS.clay} opacity="0.15" />
      <path d="M410 300 L450 300 L444 250 L416 250 Z" fill={COLORS.terracottaLight} />
      <path d="M430 250 C 400 230, 400 180, 425 160 C 415 200, 425 230, 430 250 Z" fill={COLORS.sage} />
      <path d="M430 250 C 460 220, 470 180, 450 150 C 445 195, 435 225, 430 250 Z" fill={COLORS.sageLight} />
      <path d="M430 250 C 425 210, 440 175, 470 165 C 455 200, 440 230, 430 250 Z" fill={COLORS.sage} />

      {/* Wall art */}
      <rect x="60" y="40" width="70" height="90" rx="14" fill={COLORS.lilac} opacity="0.7" />
      <circle cx="95" cy="85" r="22" fill={COLORS.cream} opacity="0.9" />
    </svg>
  )
}

export function ApartmentScene({ className = '' }) {
  return (
    <svg viewBox="0 0 400 280" className={className} role="img" aria-label="Salon haussmannien terracotta et doré">
      <rect width="400" height="280" fill={COLORS.cream} />
      <rect x="240" y="10" width="150" height="160" rx="20" fill={COLORS.sky} opacity="0.3" />
      <line x1="315" y1="10" x2="315" y2="170" stroke={COLORS.cream} strokeWidth="6" />
      <ellipse cx="180" cy="250" rx="170" ry="28" fill={COLORS.goldLight} opacity="0.6" />
      <rect x="20" y="140" width="210" height="80" rx="32" fill={COLORS.terracotta} />
      <rect x="40" y="160" width="50" height="48" rx="14" fill={COLORS.blush} />
      <rect x="100" y="160" width="50" height="48" rx="14" fill={COLORS.goldLight} />
      <rect x="160" y="160" width="50" height="48" rx="14" fill={COLORS.terracottaLight} />
      <circle cx="320" cy="220" r="26" fill={COLORS.gold} />
      <rect x="305" y="244" width="6" height="24" fill={COLORS.clay} opacity="0.5" />
      <rect x="335" y="244" width="6" height="24" fill={COLORS.clay} opacity="0.5" />
    </svg>
  )
}

export function HouseScene({ className = '' }) {
  return (
    <svg viewBox="0 0 400 280" className={className} role="img" aria-label="Maison familiale aux tons sauge">
      <rect width="400" height="280" fill={COLORS.cream} />
      <ellipse cx="200" cy="250" rx="180" ry="26" fill={COLORS.sageLight} opacity="0.7" />
      {/* dining table */}
      <ellipse cx="200" cy="190" rx="120" ry="40" fill={COLORS.terracottaLight} />
      <ellipse cx="200" cy="178" rx="120" ry="32" fill={COLORS.terracotta} />
      {/* chairs */}
      <rect x="70" y="150" width="30" height="60" rx="10" fill={COLORS.sage} />
      <rect x="300" y="150" width="30" height="60" rx="10" fill={COLORS.sage} />
      {/* pendant lights */}
      <line x1="160" y1="0" x2="160" y2="90" stroke={COLORS.clay} strokeWidth="3" opacity="0.4" />
      <circle cx="160" cy="100" r="18" fill={COLORS.gold} />
      <line x1="240" y1="0" x2="240" y2="70" stroke={COLORS.clay} strokeWidth="3" opacity="0.4" />
      <circle cx="240" cy="80" r="14" fill={COLORS.blush} />
      {/* plant */}
      <path d="M40 230 C 20 210, 25 170, 50 155 C 45 190, 50 215, 40 230 Z" fill={COLORS.sage} />
      <path d="M40 230 C 65 215, 70 175, 50 155 C 55 190, 50 215, 40 230 Z" fill={COLORS.sageLight} />
      <rect x="25" y="228" width="32" height="24" rx="6" fill={COLORS.terracotta} />
    </svg>
  )
}

export function LoftScene({ className = '' }) {
  return (
    <svg viewBox="0 0 400 280" className={className} role="img" aria-label="Loft industriel coloré">
      <rect width="400" height="280" fill={COLORS.cream} />
      {/* brick wall hint */}
      <rect x="0" y="0" width="400" height="120" fill={COLORS.blush} opacity="0.25" />
      {/* shelf */}
      <rect x="40" y="30" width="180" height="10" rx="4" fill={COLORS.clay} opacity="0.7" />
      <rect x="40" y="80" width="180" height="10" rx="4" fill={COLORS.clay} opacity="0.7" />
      <rect x="55" y="42" width="22" height="36" rx="4" fill={COLORS.terracotta} />
      <rect x="85" y="50" width="18" height="28" rx="4" fill={COLORS.gold} />
      <rect x="115" y="38" width="26" height="40" rx="4" fill={COLORS.sage} />
      {/* pendant */}
      <line x1="320" y1="0" x2="320" y2="60" stroke={COLORS.clay} strokeWidth="3" opacity="0.5" />
      <path d="M295 60 L345 60 L335 95 L305 95 Z" fill={COLORS.gold} />
      {/* sofa */}
      <ellipse cx="220" cy="250" rx="190" ry="26" fill={COLORS.terracottaLight} opacity="0.5" />
      <rect x="60" y="170" width="230" height="80" rx="34" fill={COLORS.terracottaDark} />
      <rect x="85" y="190" width="55" height="48" rx="16" fill={COLORS.blush} />
      <rect x="150" y="195" width="55" height="44" rx="16" fill={COLORS.goldLight} />
      <rect x="215" y="190" width="55" height="48" rx="16" fill={COLORS.sageLight} />
    </svg>
  )
}

export function OfficeScene({ className = '' }) {
  return (
    <svg viewBox="0 0 400 280" className={className} role="img" aria-label="Bureau créatif et coloré">
      <rect width="400" height="280" fill={COLORS.cream} />
      <ellipse cx="200" cy="250" rx="170" ry="26" fill={COLORS.goldLight} opacity="0.6" />
      {/* desk */}
      <rect x="60" y="170" width="280" height="16" rx="8" fill={COLORS.terracotta} />
      <rect x="80" y="186" width="12" height="50" fill={COLORS.clay} opacity="0.5" />
      <rect x="308" y="186" width="12" height="50" fill={COLORS.clay} opacity="0.5" />
      {/* chair */}
      <rect x="170" y="190" width="60" height="14" rx="6" fill={COLORS.sage} />
      <rect x="180" y="150" width="40" height="44" rx="14" fill={COLORS.sageLight} />
      {/* monitor */}
      <rect x="150" y="110" width="100" height="60" rx="10" fill={COLORS.clay} opacity="0.8" />
      <rect x="190" y="170" width="20" height="14" fill={COLORS.clay} opacity="0.5" />
      {/* shelving */}
      <rect x="320" y="40" width="14" height="140" rx="4" fill={COLORS.gold} />
      <circle cx="313" cy="60" r="16" fill={COLORS.blush} />
      <rect x="300" y="100" width="40" height="16" rx="6" fill={COLORS.sage} />
      {/* plant */}
      <path d="M50 230 C 30 210, 35 170, 60 155 C 55 190, 60 215, 50 230 Z" fill={COLORS.sage} />
      <path d="M50 230 C 75 215, 80 175, 60 155 C 65 190, 60 215, 50 230 Z" fill={COLORS.sageLight} />
      <rect x="35" y="228" width="32" height="24" rx="6" fill={COLORS.terracottaDark} />
    </svg>
  )
}

export function DuplexScene({ className = '' }) {
  return (
    <svg viewBox="0 0 400 280" className={className} role="img" aria-label="Duplex lumineux vue mer">
      <rect width="400" height="280" fill={COLORS.cream} />
      <rect x="0" y="0" width="400" height="150" fill={COLORS.sky} opacity="0.35" />
      <path d="M0 150 C 100 130, 300 170, 400 150 L400 200 L0 200 Z" fill={COLORS.sky} opacity="0.25" />
      <ellipse cx="200" cy="250" rx="170" ry="26" fill={COLORS.terracottaLight} opacity="0.4" />
      {/* armchair */}
      <rect x="120" y="170" width="100" height="70" rx="30" fill={COLORS.terracotta} />
      <rect x="100" y="190" width="24" height="60" rx="12" fill={COLORS.terracottaDark} />
      <rect x="216" y="190" width="24" height="60" rx="12" fill={COLORS.terracottaDark} />
      <rect x="140" y="190" width="60" height="40" rx="14" fill={COLORS.blush} />
      {/* round table */}
      <ellipse cx="290" cy="235" rx="40" ry="10" fill={COLORS.gold} />
      <rect x="282" y="200" width="6" height="35" fill={COLORS.clay} opacity="0.5" />
      <rect x="298" y="200" width="6" height="35" fill={COLORS.clay} opacity="0.5" />
      {/* sun */}
      <circle cx="330" cy="50" r="26" fill={COLORS.gold} opacity="0.8" />
    </svg>
  )
}

export function CountryScene({ className = '' }) {
  return (
    <svg viewBox="0 0 400 280" className={className} role="img" aria-label="Maison de campagne provençale">
      <rect width="400" height="280" fill={COLORS.cream} />
      <ellipse cx="200" cy="250" rx="170" ry="26" fill={COLORS.terracottaLight} opacity="0.4" />
      {/* table */}
      <rect x="80" y="180" width="240" height="14" rx="6" fill={COLORS.gold} />
      <rect x="95" y="194" width="10" height="44" fill={COLORS.clay} opacity="0.4" />
      <rect x="295" y="194" width="10" height="44" fill={COLORS.clay} opacity="0.4" />
      {/* vase with flowers */}
      <rect x="180" y="140" width="40" height="44" rx="10" fill={COLORS.terracotta} />
      <circle cx="190" cy="120" r="14" fill={COLORS.blush} />
      <circle cx="205" cy="110" r="16" fill={COLORS.gold} />
      <circle cx="218" cy="125" r="12" fill={COLORS.sageLight} />
      <line x1="190" y1="140" x2="190" y2="125" stroke={COLORS.sage} strokeWidth="3" />
      <line x1="205" y1="140" x2="205" y2="115" stroke={COLORS.sage} strokeWidth="3" />
      <line x1="218" y1="140" x2="218" y2="128" stroke={COLORS.sage} strokeWidth="3" />
      {/* chairs */}
      <rect x="60" y="160" width="28" height="60" rx="10" fill={COLORS.sage} />
      <rect x="312" y="160" width="28" height="60" rx="10" fill={COLORS.sage} />
      {/* window */}
      <rect x="300" y="30" width="80" height="100" rx="16" fill={COLORS.sky} opacity="0.3" />
      <rect x="300" y="30" width="80" height="100" rx="16" fill="none" stroke={COLORS.cream} strokeWidth="5" />
    </svg>
  )
}

export function PlantIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 60 60" className={className} aria-hidden="true">
      <path d="M30 55 C 15 45, 18 25, 32 18 C 28 32, 30 45, 30 55 Z" fill={COLORS.sage} />
      <path d="M30 55 C 45 47, 48 28, 35 18 C 38 32, 32 45, 30 55 Z" fill={COLORS.sageLight} />
      <rect x="18" y="52" width="24" height="6" rx="3" fill={COLORS.terracotta} />
    </svg>
  )
}

export function LampIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 60 60" className={className} aria-hidden="true">
      <rect x="28" y="20" width="4" height="32" fill={COLORS.clay} opacity="0.5" />
      <path d="M10 20 L50 20 L40 4 L20 4 Z" fill={COLORS.gold} />
      <circle cx="30" cy="55" r="6" fill={COLORS.clay} opacity="0.3" />
    </svg>
  )
}

export function FrameIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 60 60" className={className} aria-hidden="true">
      <rect x="6" y="6" width="48" height="48" rx="8" fill={COLORS.lilac} opacity="0.7" />
      <circle cx="30" cy="30" r="14" fill={COLORS.cream} />
    </svg>
  )
}
