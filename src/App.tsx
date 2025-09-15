import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header.tsx'
import Hero from './components/Hero.tsx'
import Properties from './components/Properties.tsx'
import Amenities from './components/Amenities.tsx'
import Team from './components/Team.tsx'
import Testimonials from './components/Testimonials.tsx'
import Contact from './components/Contact.tsx'
import Footer from './components/Footer.tsx'
import WhatsAppButton from './components/WhatsAppButton.tsx'
import PropertyPage from './pages/PropertyPage.tsx'

// Home page component
const HomePage = () => (
  <>
    <Header />
    <main>
      <Hero />
      <Properties />
      <Amenities />
      <Team />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
  </>
)

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/properties/:slug" element={<PropertyPage />} />
        </Routes>
        {/* WhatsApp button appears on all pages */}
        <WhatsAppButton />
      </div>
    </Router>
  )
}

export default App
