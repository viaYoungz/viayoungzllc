import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollToHash from './components/ScrollToHash'
import Home from './pages/Home'
import Work from './pages/Work'
import ThreeDVisualization from './pages/3DVisualization'

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#f5f4f0] min-h-screen">
        {/* Skip navigation — first focusable element on the page (WCAG 2.4.1) */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <Navbar />

        {/* Handles hash-based scrolling across page navigations */}
        <ScrollToHash />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/3d-product-gallery" element={<ThreeDVisualization />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
