import { Link } from 'react-router-dom'

const projects = [
  {
    id: 1,
    title: 'Interactive e-Publication',
    category: 'Interactive Media',
    description:
      'Designed and developed an interactive e-publication for legislative communications, incorporating maps, embedded video, and scrolling frames for an engaging reading experience.',
    tags: ['InDesign', 'Interactive PDF', 'Section 508', 'WCAG 2.2'],
    year: '2026',
    sortYear: 2026,
  },
  {
    id: 2,
    title: 'Accessible Web UI — ViaYoungz',
    category: 'Web Development',
    description:
      'Built a responsive portfolio site from the ground up using React and Tailwind CSS, with full WCAG 2.2 and Section 508 compliance verified through JAWS/NVDA screen reader testing.',
    tags: ['React', 'Tailwind CSS', 'Accessibility', 'ARIA'],
    year: '2026',
    sortYear: 2026,
  },
  {
    id: 3,
    title: 'RFA CMS Modernization',
    category: 'Web Engineering',
    description:
      "Modernized legacy CMS components for Radio Free Asia's international news platforms, improving accessibility, performance, and cross-browser compatibility across multiple language editions.",
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Accessibility'],
    year: '2016–2025',
    sortYear: 2025,
  },
  {
    id: 4,
    title: '3D Product Visualization',
    category: '3D & Visualization',
    description:
      'Developed high-fidelity 3D product models and virtual proofs using Blender, enabling clients to preview print and physical products before final production.',
    tags: ['Blender', 'Virtual Proofs', 'Isometric Design', '3D Rendering'],
    year: '2010–2022',
    sortYear: 2022,
  },
  {
    id: 5,
    title: 'Brand Identity & Print Design',
    category: 'Branding',
    description:
      'Created comprehensive branding packages — logos, business cards, banners, menus, and posters — for diverse clients across Seoul, Seattle, and San Diego.',
    tags: ['Illustrator', 'Photoshop', 'InDesign', 'Branding'],
    year: '2010–2022',
    sortYear: 2022,
  },
  {
    id: 6,
    title: 'Equitable — Executive Presentations',
    category: 'Communication Design',
    description:
      'Produced high-impact presentations and weekly professional newsletters for a financial advisory team, ensuring visual clarity, brand alignment, and regulatory compliance.',
    tags: ['PowerPoint', 'InDesign', 'Brand Alignment', 'HIPAA'],
    year: '2026',
    sortYear: 2026,
  },
].sort((a, b) => b.sortYear - a.sortYear)

export default function Work() {
  return (
    <div className="bg-[#f5f4f0] min-h-screen">
      <main id="main-content" tabIndex="-1" className="focus-target max-w-4xl mx-auto px-6 pt-28 pb-24">
        {/* Back navigation */}
        <div className="mb-6 mt-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-[#595959] hover:text-[#1a1a1a] transition-colors"
            aria-label="Back to home"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back
          </Link>
        </div>

        {/* Header */}
        <header className="py-12 border-b border-[#e0ddd5] mb-12">
          <p className="text-xs uppercase tracking-widest text-[#595959] mb-4">Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-light text-[#1a1a1a] leading-tight">
            Selected Work
          </h1>
          <p className="mt-4 text-base text-[#595959] font-light max-w-xl leading-relaxed">
            A cross-disciplinary collection spanning accessible web development,
            interactive media, 3D visualization, and brand design.
          </p>
        </header>

        {/* Project grid */}
        <ul role="list" className="grid sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <li key={project.id}>
              <article
                className="group h-full flex flex-col border border-[#e0ddd5] rounded-xl p-6 hover:border-[#1a1a1a] transition-colors"
                aria-label={project.title}
              >
                {/* Meta */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-widest text-[#595959]">
                    {project.category}
                  </span>
                  <span className="text-xs text-[#595959]">{project.year}</span>
                </div>

                {/* Title & description */}
                <h2 className="text-base font-medium text-[#1a1a1a] mb-2 group-hover:opacity-70 transition-opacity">
                  {project.title}
                </h2>
                <p className="text-sm text-[#595959] font-light leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <ul
                  role="list"
                  aria-label="Technologies used"
                  className="flex flex-wrap gap-2 mt-5"
                >
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full border border-[#e0ddd5] text-[#595959]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-16 pt-12 border-t border-[#e0ddd5] text-center">
          <p className="text-sm text-[#595959] mb-4">Want to see more or request case studies?</p>
          <a
            href="mailto:viayoungz@gmail.com"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#1a1a1a] text-white text-sm font-medium rounded-full hover:bg-[#333] transition-colors"
          >
            Get in touch
          </a>
        </div>

      </main>
    </div>
  )
}
