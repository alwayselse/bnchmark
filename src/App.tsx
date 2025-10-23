import { useEffect, lazy, Suspense } from 'react'
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
import { 
  organizationSchema, 
  propertySchemas, 
  breadcrumbSchema, 
  faqSchema,
  reviewSchema 
} from './utils/structuredData'

// Lazy load property pages for better performance
const PropertyPage = lazy(() => import('./pages/PropertyPage.tsx'))
const AtlantisPage = lazy(() => import('./pages/AtlantisPage.tsx'))
const CoffeeBoardPage = lazy(() => import('./pages/CoffeeBoardPage.tsx'))

// Loading component for lazy-loaded routes
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-grey-50">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-yellow-500 border-t-transparent"></div>
      <p className="mt-4 text-grey-600">Loading...</p>
    </div>
  </div>
)

// Home page component
const HomePage = () => {
  useEffect(() => {
    // Add structured data to page
    const structuredDataScripts = [
      organizationSchema,
      ...propertySchemas,
      breadcrumbSchema,
      faqSchema,
      reviewSchema
    ]

    structuredDataScripts.forEach((schema, index) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.text = JSON.stringify(schema)
      script.id = `structured-data-${index}`
      document.head.appendChild(script)
    })

    // Cleanup
    return () => {
      structuredDataScripts.forEach((_, index) => {
        const script = document.getElementById(`structured-data-${index}`)
        if (script) {
          document.head.removeChild(script)
        }
      })
    }
  }, [])

  return (
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
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/properties/:slug" element={<PropertyPage />} />
            <Route path="/atlantis" element={<AtlantisPage />} />
            <Route path="/coffee-board" element={<CoffeeBoardPage />} />
          </Routes>
        </Suspense>
        {/* WhatsApp button appears on all pages */}
        <WhatsAppButton />
      </div>
    </Router>
  )
}

export default App
