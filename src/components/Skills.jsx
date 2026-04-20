const skills = [
  {
    title: 'Design & Layout',
    tools: [
      'Adobe InDesign',
      'Adobe Illustrator',
      'Adobe Photoshop',
      'Adobe XD',
      'Figma',
      'Acrobat Pro (Section 508 Tagging)',
      'Adobe Creative Suite',
    ],
  },
  {
    title: '3D & Visualization',
    tools: [
      'Blender (Modeling & Rendering)',
      'Virtual Proofs',
      'Isometric Design',
      'Spatial Visualization',
    ],
  },
  {
    title: 'Web Development',
    tools: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'React',
      'Tailwind CSS',
      'Adobe Dreamweaver',
      'ARIA',
      'Visual Studio Code',
    ],
  },
  {
    title: 'Accessibility & Compliance',
    tools: [
      'WCAG 2.2',
      'Section 508',
      'ERISA Testing',
      'HIPAA / Confidentiality',
    ],
  },
  {
    title: 'Interactive Media',
    tools: [
      'Interactive PDFs',
      'e-Publications',
      'Animated GIFs',
      'Fillable Forms',
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="max-w-4xl mx-auto px-6 py-20 border-t border-[#e0ddd5] scroll-mt-20"
    >
      <h2
        id="skills-heading"
        className="text-sm md:text-xs uppercase tracking-widest text-[#595959] mb-12"
      >
        Core Competencies
      </h2>

      {/*
       * Using <dl> (description list) is semantically ideal for
       * term + definition pairs (WCAG 1.3.1)
       */}
      <dl className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <div key={skill.title}>
            <dt className="text-base md:text-sm font-medium text-[#1a1a1a] mb-3">
              {skill.title}
            </dt>
            <dd>
              <ul role="list" className="space-y-1">
                {skill.tools.map((tool) => (
                  <li
                    key={tool}
                    className="flex items-start gap-2 text-base md:text-sm text-[#595959] font-light leading-relaxed"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[#595959]"
                    />
                    <span>{tool}</span>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
