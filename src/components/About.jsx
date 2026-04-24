const interests = [
  { emoji: '🎨', ariaLabel: 'Art', label: 'Art' },
  { emoji: '🧁', ariaLabel: 'Cupcake', label: 'Sweats' },
  { emoji: '🐶', ariaLabel: 'Dog Face', label: 'My pets, Teddy and Max' },
  { emoji: '👟', ariaLabel: 'Running Shoes', label: 'Walking and running in outdoor' },
]

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="max-w-4xl mx-auto px-6 py-20 border-t border-[#e0ddd5] scroll-mt-20"
    >
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2
            id="about-heading"
            className="text-sm md:text-xs uppercase tracking-widest text-[#595959] mb-6"
          >
            About
          </h2>
          <p className="text-xl md:text-lg text-[#1a1a1a] font-light leading-relaxed mb-6">
            I believe great design comes from transforming complexity into
            clarity — making the invisible, visible, and the complicated,
            simple.
          </p>

          <h2
            id="philosophy-heading"
            className="text-sm md:text-xs uppercase tracking-widest text-[#595959] mb-6"
          >
            Philosophy
          </h2>

          <p className="text-lg md:text-base text-[#595959] font-light leading-relaxed">
            I approach every project as both an architect and an artisan. To me,
            a digital experience isn't just a series of screens; it's a
            conversation between a brand and a human. By combining the emotional
            intelligence of Product Design with the rigorous logic of UX
            Development, I ensure that every pixel serves a purpose and every
            interaction is accessible to all.
          </p>
        </div>

        <div>
          <h2
            id="interests-heading"
            className="text-sm md:text-xs uppercase tracking-widest text-[#595959] mb-6"
          >
            Things I love
          </h2>

          <ul role="list" aria-labelledby="interests-heading" className="space-y-3">
            {interests.map(({ emoji, ariaLabel, label }) => (
              <li key={label} className="flex items-center gap-3 text-base md:text-sm text-[#4a4a4a]">
                <span role="img" aria-label={ariaLabel} className="text-lg md:text-base">
                  {emoji}
                </span>
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
