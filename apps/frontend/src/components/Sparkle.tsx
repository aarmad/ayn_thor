// Four-point star used across the DA.
export default function Sparkle({ className, fill = '#fff', style }: { className?: string; fill?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={className} style={style}>
      <path d="M20 0 C21 15 25 19 40 20 C25 21 21 25 20 40 C19 25 15 21 0 20 C15 19 19 15 20 0Z" fill={fill} />
    </svg>
  );
}
