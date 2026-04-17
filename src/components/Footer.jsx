export default function Footer() {
  return (
    <footer className="max-w-4xl mx-auto px-6 py-16 border-t border-[#e0ddd5]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          {/* h2 gives the footer CTA a proper place in the document outline */}
          <h2 className="text-2xl md:text-3xl font-light text-[#1a1a1a] mb-2">
            Let's work together.
          </h2>
          {/* #595959 on #f5f4f0 = ~6.4:1 (was #6b6b6b = 4.2:1, WCAG AA fail) */}
          <p className="text-sm text-[#595959]">
            Transforming complexity into clarity.
          </p>
        </div>

        <div>
          <a
            href="mailto:viayoungz@gmail.com"
            aria-label="Send Young an email"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1a1a1a] text-white text-sm font-medium rounded-full hover:bg-[#333] transition-colors"
          >
            Say hello
            {/* aria-hidden keeps decorative emoji out of AT (WCAG 1.1.1) */}
            <span aria-hidden="true">✉️</span>
          </a>
        </div>
      </div>

      <div className="mt-16 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        {/* #595959 on #f5f4f0 = ~6.4:1 (was #999 = 2.4:1, WCAG AA fail) */}
        <p className="text-xs text-[#595959]">
          <small>© {new Date().getFullYear()} Young Hong</small>
        </p>

        {/*
         * aria-label distinguishes this from the main <nav> (WCAG 1.3.6)
         * role="list" restores VoiceOver list semantics (Tailwind Preflight)
         */}
        <nav aria-label="Social media links">
          <ul role="list" className="flex items-center gap-5">
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#595959] hover:text-[#1a1a1a] transition-colors"
              >
                Instagram
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#595959] hover:text-[#1a1a1a] transition-colors"
              >
                LinkedIn
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
