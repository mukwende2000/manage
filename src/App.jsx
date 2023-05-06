import Nav from "./components/Nav"
import Hero from './components/Hero'
import About from './components/About'
import Testimonials from "./components/Testimonials"
import Cta from "./components/Cta"
import Footer from "./components/Footer"

function App() {
  return (
    <>
    <header>
       <Nav />
      <Hero />
    </header>
    <main>
      <div className="container">
        <About />
      </div>
      <Testimonials />
      <Cta />
    </main>
    <Footer />
    </>
  )
}

export default App
