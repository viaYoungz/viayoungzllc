export default function Footer() {
  return (
    <footer className="max-w-4xl mx-auto px-6 py-16 border-t border-[#E2DDD5]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <h2 className="font-serif text-2xl md:text-3xl font-light text-[#1C1C1C] mb-2">
            Let's work together.
          </h2>
          <p className="text-base md:text-sm text-[#6B7280]">
            Transforming complexity into clarity.
          </p>
        </div>

        <div>
          <a
            href="mailto:viayoungz@gmail.com"
            aria-label="Send Young an email"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1C1C1C] text-white text-base md:text-sm font-medium rounded-full hover:bg-[#2D2D2D] transition-colors"
          >
            Say hello
            <span aria-hidden="true">✉️</span>
          </a>
        </div>
      </div>

      <div className="mt-16 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <p className="text-sm md:text-xs text-[#6B7280]">
          <small>© {new Date().getFullYear()} Young Hong</small>
        </p>

        <nav aria-label="Social media links">
          <ul role="list" className="flex items-center gap-5">
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-xs text-[#6B7280] hover:text-[#1C1C1C] transition-colors"
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
                className="text-sm md:text-xs text-[#6B7280] hover:text-[#1C1C1C] transition-colors"
              >
                LinkedIn
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
