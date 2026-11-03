// Slow, ambient hero background: soft accent glows that drift, plus a few
// motes rising through them. Purely decorative; static under reduced motion.
const motes = [
  { left: '12%', size: 4, duration: 19, delay: -3 },
  { left: '27%', size: 3, duration: 24, delay: -14 },
  { left: '44%', size: 5, duration: 21, delay: -8 },
  { left: '61%', size: 3, duration: 26, delay: -19 },
  { left: '74%', size: 4, duration: 18, delay: -11 },
  { left: '88%', size: 3, duration: 23, delay: -5 },
]

export default function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="hero-backdrop pointer-events-none absolute inset-0 overflow-hidden">
      <span className="hero-glow hero-glow-a" />
      <span className="hero-glow hero-glow-b" />
      <span className="hero-glow hero-glow-c" />
      {motes.map((mote) => (
        <span
          key={mote.left}
          className="hero-mote"
          style={{
            left: mote.left,
            width: mote.size,
            height: mote.size,
            animationDuration: `${mote.duration}s`,
            animationDelay: `${mote.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
