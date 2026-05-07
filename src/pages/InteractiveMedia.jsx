import { Link } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'

const items = [
  {
    id: 1,
    src: '/e-Publish/epublish_page_1.png',
    alt: 'Interactive e-publication page 1',
    title: 'Page 1',
    tags: ['InDesign', 'Interactive PDF', 'Section 508'],
  },
  {
    id: 2,
    src: '/e-Publish/epublish_page_2.png',
    alt: 'Interactive e-publication page 2',
    title: 'Page 2',
    tags: ['InDesign', 'Interactive PDF', 'WCAG 2.2'],
  },
  {
    id: 3,
    src: '/e-Publish/epublish_page_3.png',
    alt: 'Interactive e-publication page 3',
    title: 'Page 3',
    tags: ['InDesign', 'Interactive PDF', 'Section 508'],
  },
  {
    id: 4,
    src: '/e-Publish/epublish_page_4.png',
    alt: 'Interactive e-publication page 4',
    title: 'Page 4',
    tags: ['InDesign', 'Interactive PDF', 'WCAG 2.2'],
  },
  {
    id: 5,
    src: '/e-Publish/epublish_page_5.png',
    alt: 'Interactive e-publication page 5',
    title: 'Page 5',
    tags: ['InDesign', 'Interactive PDF', 'Section 508'],
  },
  {
    id: 6,
    src: '/e-Publish/epublish_page_6.png',
    alt: 'Interactive e-publication page 6',
    title: 'Page 6',
    tags: ['InDesign', 'Interactive PDF', 'WCAG 2.2'],
  },
]

function Lightbox({ item, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        aria-label="Previous image"
        className="absolute left-4 md:left-8 text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
        </svg>
      </button>

      {/* Image container */}
      <div
        className="relative max-w-5xl max-h-[90vh] flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.src}
          alt={item.alt}
          className="max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-xl shadow-2xl"
        />
        <div className="text-center">
          <p className="text-white font-medium text-base">{item.title}</p>
          <ul role="list" className="flex flex-wrap justify-center gap-1.5 mt-2">
            {item.tags.map((tag) => (
              <li key={tag} className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/80">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext() }}
        aria-label="Next image"
        className="absolute right-4 md:right-8 text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
        </svg>
      </button>

      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Close lightbox"
        className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  )
}

export default function InteractiveMedia() {
  const [activeIndex, setActiveIndex] = useState(null)

  const closeLightbox = useCallback(() => setActiveIndex(null), [])
  const prevImage = useCallback(() => setActiveIndex((i) => (i - 1 + items.length) % items.length), [])
  const nextImage = useCallback(() => setActiveIndex((i) => (i + 1) % items.length), [])

  return (
    <div className="bg-[#f5f4f0] min-h-screen">
      <main
        id="main-content"
        tabIndex="-1"
        className="focus-target max-w-5xl mx-auto px-6 pt-28 pb-24"
      >
        {/* Back navigation */}
        <div className="mb-6 mt-6">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm text-[#595959] hover:text-[#1a1a1a] transition-colors"
            aria-label="Back to work"
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
            Back to Work
          </Link>
        </div>

        {/* Header */}
        <header className="py-12 border-b border-[#e0ddd5] mb-12">
          <p className="text-sm md:text-xs uppercase tracking-widest text-[#595959] mb-4">
            Interactive Media
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-[#1a1a1a] leading-tight">
            Interactive e-Publication
          </h1>
          <p className="mt-4 text-lg md:text-base text-[#595959] font-light max-w-xl leading-relaxed">
            Designed and developed an interactive e-publication for legislative communications,
            incorporating maps, embedded video, and scrolling frames for an engaging reading experience.
          </p>
        </header>

        {/* Gallery grid */}
        <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <li key={item.id} className="group">
              <button
                onClick={() => setActiveIndex(index)}
                className="w-full text-left focus-visible:outline-2 focus-visible:outline-[#1a1a1a] rounded-2xl"
                aria-label={`View ${item.title} in full size`}
              >
                <figure className="flex flex-col rounded-2xl overflow-hidden border border-[#e0ddd5] bg-white group-hover:border-[#1a1a1a] group-hover:shadow-md transition-all duration-300">
                  {/* Image */}
                  <div className="overflow-hidden aspect-[3/4]">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                  </div>

                  {/* Card body */}
                  <figcaption className="px-5 py-4 flex flex-col gap-3">
                    <p className="text-base md:text-sm font-medium text-[#1a1a1a] leading-snug">
                      {item.title}
                    </p>
                    <ul role="list" className="flex flex-wrap gap-1.5" aria-label="Categories">
                      {item.tags.map((tag) => (
                        <li
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full border border-[#e0ddd5] text-[#595959] bg-[#f5f4f0]"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </figcaption>
                </figure>
              </button>
            </li>
          ))}
        </ul>

        {/* Footer note */}
        <div className="mt-16 pt-12 border-t border-[#e0ddd5] text-center">
          <p className="text-sm text-[#595959] font-light">
            Designed in{' '}
            <span className="font-medium text-[#1a1a1a]">Adobe InDesign</span>{' '}
            with Section 508 and WCAG 2.2 compliance for legislative communications.
          </p>
        </div>
      </main>

      {/* Lightbox */}
      {activeIndex !== null && (
        <Lightbox
          item={items[activeIndex]}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </div>
  )
}
