import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <main id="main-content" tabIndex="-1" className="focus-target">
        <Hero />
        <About />
        <Experience />
        <Skills />
      </main>
      <Footer />
    </>
  )
}
