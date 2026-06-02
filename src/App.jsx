import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Portfolio from './components/Portfolio'
import SaasProducts from './components/SaasProducts'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0d0d1a]">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <SaasProducts />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  )
}
