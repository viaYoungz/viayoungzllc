import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scrolls to the hash anchor after every navigation,
// accounting for the fixed navbar height.
export default function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    // Wait one tick for the page to render before scrolling
    const id = hash.replace('#', '')
    const attempt = (retries = 10) => {
      const el = document.getElementById(id)
      if (el) {
        const navbarHeight = 80
        const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight
        window.scrollTo({ top, behavior: 'smooth' })
      } else if (retries > 0) {
        setTimeout(() => attempt(retries - 1), 50)
      }
    }
    attempt()
  }, [pathname, hash])

  return null
}
