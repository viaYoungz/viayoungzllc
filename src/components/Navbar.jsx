import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    /* aria-label distinguishes this from any other <nav> landmarks (WCAG 1.3.6) */
    <nav
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-50 bg-[#f5f4f0]/90 backdrop-blur-sm"
    >
      <div className="max-w-4xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
        <Link
          to="/"
          aria-label="Young Hong — home"
          className="flex items-center gap-4 hover:opacity-60 transition-opacity py-2"
        >
          <img
            src="/viayoungz_logo_icon.svg"
            alt=""
            aria-hidden="true"
            className="h-16 w-auto"
          />
          <span className="text-sm font-medium text-[#1a1a1a]">Young Hong</span>
        </Link>

        {/* Padding ensures minimum 44×44px touch target (WCAG 2.5.5 / 2.5.8) */}
        <ul role="list" className="flex items-center gap-1">
          <li>
            <Link
              to="/#about"
              className="text-sm text-[#1a1a1a] hover:opacity-60 transition-opacity px-3 py-2 rounded"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/#experience"
              className="text-sm text-[#1a1a1a] hover:opacity-60 transition-opacity px-3 py-2 rounded"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="/#skills"
              className="text-sm text-[#1a1a1a] hover:opacity-60 transition-opacity px-3 py-2 rounded"
            >
              Expertise
            </Link>
          </li>
          <li>
            <Link
              to="/work"
              className="text-sm text-[#1a1a1a] hover:opacity-60 transition-opacity px-3 py-2 rounded"
            >
              Work
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
