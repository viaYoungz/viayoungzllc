import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    /*
     * scroll-mt-20 offsets the fixed navbar so focused/anchor-targeted
     * content is never obscured (WCAG 2.4.11 / 2.4.12)
     */
    <section
      id="hero"
      aria-label="Introduction"
      className="min-h-screen flex flex-col justify-center max-w-4xl mx-auto px-6 pt-24 pb-16 scroll-mt-20"
    >
      <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-[#1C1C1C] mb-6 max-w-3xl">
        Designing with empathy. Developing with precision.
      </h1>

      <p className="text-xl md:text-xl text-[#4A5568] font-light leading-relaxed max-w-2xl mb-10">
        Hi, I am Young. I build creative, inclusive digital solutions that
        balance technical craft with accessible, user-focused storytelling.
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          to="/work"
          className="inline-flex items-center justify-center px-6 py-3 bg-[#1C1C1C] text-white text-base font-medium rounded-full hover:bg-[#2D2D2D] transition-colors"
        >
          View my work
        </Link>
        <a
          href="mailto:viayoungz@gmail.com"
          className="inline-flex items-center justify-center px-6 py-3 border border-[#1C1C1C] text-[#1C1C1C] text-base font-medium rounded-full hover:bg-[#1C1C1C] hover:text-white transition-colors"
        >
          Request work samples
        </a>
        <a
          href="/resume.pdf"
          download="Young_Hong_Resume.pdf"
          aria-label="Download my resume as a PDF"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#1C1C1C] text-[#1C1C1C] text-base font-medium rounded-full hover:bg-[#1C1C1C] hover:text-white transition-colors"
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
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download my resume
        </a>
      </div>
    </section>
  );
}
