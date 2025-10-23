import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header.tsx'
import Hero from './components/Hero.tsx'
import Properties from './components/Properties.tsx'
import Amenities from './components/Amenities.tsx'
import OtherProperties from './components/OtherProperties.tsx'
import Testimonials from './components/Testimonials.tsx'
import Contact from './components/Contact.tsx'
import Footer from './components/Footer.tsx'
import WhatsAppButton from './components/WhatsAppButton.tsx'
import PropertyPage from './pages/PropertyPage.tsx'
import AtlantisPage from './pages/AtlantisPage.tsx'
import CoffeeBoardPage from './pages/CoffeeBoardPage.tsx'

// Home page component
const HomePage = () => (
  <>
    <Header />
    <main>
      <Hero />
      <Properties />
      <Amenities />
      <OtherProperties />
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
          <Route path="/atlantis" element={<AtlantisPage />} />
          <Route path="/coffee-board" element={<CoffeeBoardPage />} />
        </Routes>
        {/* WhatsApp button appears on all pages */}
        <WhatsAppButton />
      </div>
    </Router>
  )
}

export default App
