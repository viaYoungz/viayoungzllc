const experiences = [
  {
    company: 'ViaYoungz',
    location: 'Rockville, MD',
    period: 'Jan 2026 – Present',
    role: 'Product Designer & UX Developer',
    bullets: [
      'Design and develop interactive e-publications incorporating interactive maps, video, and scrolling frames to enhance legislative and corporate communications.',
      'Lead digital accessibility initiatives, ensuring all assets meet WCAG 2.2 and Section 508 standards through rigorous testing with screen readers (JAWS/NVDA).',
      'Develop responsive UI/UX for web and mobile document services using React and Tailwind CSS.',
      'Manage end-to-end production of digital media projects, including social media ads and accessible email designs.',
    ],
  },
  {
    company: 'Equitable',
    location: 'Los Angeles, CA (Remote)',
    period: 'Jan 2026 – Present',
    role: 'Assistant to Financial Advisor (Part-Time)',
    bullets: [
      'Administrative Support: Manage the creation and distribution of high-impact presentations and weekly professional newsletters, ensuring visual clarity and brand alignment.',
      'Compliance: Support ERISA testing and document management to ensure strict adherence to federal regulatory standards and data integrity.',
      'Patient/Client Liaison: Assist clients with the management of health insurance plans and retirement accounts, maintaining the highest levels of confidentiality and HIPAA-standard professionalism.',
      'Digital Management: Oversee website maintenance and digital scheduling systems to optimize advisory team workflows.',
    ],
  },
  {
    company: 'Radio Free Asia (RFA)',
    location: 'Washington, D.C.',
    period: 'Oct 2016 – Mar 2025',
    role: 'Web Engineer / Tech Ops',
    bullets: [
      'Modernized legacy CMS components to improve user experience and technical accessibility across international news platforms.',
      'Collaborated with design teams to translate complex requirements into polished digital solutions while meeting strict production deadlines.',
      'Developed and maintained reusable UI components using HTML/CSS/JS with a focus on inclusive design and responsive layouts.',
    ],
  },
  {
    company: 'Jmtek / Primary Project / Color Print & Signs / San Diego Radio Seoul',
    location: 'Global (Seoul, Seattle, San Diego)',
    period: 'July 2010 – Oct 2022',
    role: 'Freelance Designer',
    bullets: [
      '3D Visualization: Utilized Blender to develop 3D product models and high-fidelity virtual proofs, streamlining the transition from digital concept to final production.',
      'Branding: Created comprehensive branding materials, including logos, business cards, and websites, for diverse global clients.',
      'Print & Digital Production: Designed high-quality media such as banners, digital menus, posters, and pamphlets for local businesses.',
      'Project Management: Managed end-to-end design workflows, ensuring high-quality results across diverse print and digital formats.',
    ],
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="max-w-4xl mx-auto px-6 py-20 border-t border-[#e0ddd5] scroll-mt-20"
    >
      <h2
        id="experience-heading"
        className="text-xs uppercase tracking-widest text-[#595959] mb-12"
      >
        Professional Experience
      </h2>

      <div className="space-y-0">
        {experiences.map((exp) => (
          <article
            key={exp.company}
            aria-label={`${exp.company}, ${exp.period}`}
            className="grid md:grid-cols-3 gap-4 md:gap-8 py-8 border-b border-[#e0ddd5] last:border-b-0"
          >
            <div>
              <h3 className="text-sm font-medium text-[#1a1a1a]">{exp.company}</h3>
              <p className="text-xs text-[#595959] mt-1">{exp.location}</p>
              <p className="text-xs text-[#595959] mt-0.5">
                <time>{exp.period}</time>
              </p>
            </div>
            <div className="md:col-span-2">
              <p className="text-sm font-medium text-[#4a4a4a] mb-3">{exp.role}</p>
              <ul role="list" className="space-y-2">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-2 text-sm text-[#595959] font-light leading-relaxed">
                    <span aria-hidden="true" className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[#595959]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
