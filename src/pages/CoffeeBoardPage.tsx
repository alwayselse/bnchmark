import React, { useEffect, useState } from 'react'
import { MapPin, Check, ArrowLeft, Home } from 'lucide-react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

// Import Coffee Board property images
import coffee1 from '../assets/coffee/IMG-20251024-WA0028.jpg'
import coffee2 from '../assets/coffee/IMG-20251024-WA0012.jpg'
import coffee3 from '../assets/coffee/IMG-20251024-WA0013.jpg'
import coffee4 from '../assets/coffee/IMG-20251024-WA0015.jpg'
import coffee5 from '../assets/coffee/IMG-20251024-WA0017.jpg'
import coffee6 from '../assets/coffee/IMG-20251024-WA0018.jpg'
import coffee7 from '../assets/coffee/IMG-20251024-WA0019.jpg'
import coffee8 from '../assets/coffee/IMG-20251024-WA0020.jpg'
import coffee9 from '../assets/coffee/IMG-20251024-WA0021.jpg'
import coffee10 from '../assets/coffee/IMG-20251024-WA0022.jpg'
import coffee11 from '../assets/coffee/IMG-20251024-WA0027.jpg'
import coffee12 from '../assets/coffee/IMG-20251024-WA0011.jpg'

const CoffeeBoardPage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Coffee Board property images with SEO-friendly alt tags
  const propertyImages = [
    { url: coffee1, alt: '220 Coffee Board 1BHK Bengaluru - Living Room - Premium Apartment Rental' },
    { url: coffee2, alt: '220 Coffee Board Apartment - Bedroom - Fully Furnished 1BHK near Coffee Board' },
    { url: coffee3, alt: '220 Coffee Board - Kitchen - Independent 1BHK Apartment Bengaluru' },
    { url: coffee4, alt: '220 Coffee Board 1BHK - Bathroom - Premium Rental Apartment' },
    { url: coffee5, alt: '220 Coffee Board Bengaluru - Dining Area - Fully Furnished Independent Living' },
    { url: coffee6, alt: '220 Coffee Board - Interior View - Best 1BHK Apartment near Coffee Board' },
    { url: coffee7, alt: '220 Coffee Board Apartment - Balcony - Premium 1BHK Rental Bengaluru' },
    { url: coffee8, alt: '220 Coffee Board - Room View - Furnished Apartment near Coffee Board Area' },
    { url: coffee9, alt: '220 Coffee Board 1BHK - Living Space - Independent Apartment Bengaluru' },
    { url: coffee10, alt: '220 Coffee Board - Modern Amenities - Premium 1BHK near Coffee Board' },
    { url: coffee11, alt: '220 Coffee Board Apartment - Entrance - Fully Furnished 1BHK Bengaluru' },
    { url: coffee12, alt: '220 Coffee Board - Property View - Best Independent Living near Coffee Board' }
  ]
  
  // Update meta tags for SEO
  useEffect(() => {
    document.title = '220 Coffee Board Co-Living - Premium 1BHK Apartment in Bengaluru | bnchmarc'
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Book 220 Coffee Board Co-Living - Premium Single BHK apartment in Hebbal, Bengaluru. Fully furnished independent living space at ₹20,000/month. Best 1BHK rental near Coffee Board area.'
      )
    }

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', '220 Coffee Board Co-Living - Premium 1BHK Apartment in Bengaluru')
    }

    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute('content', 
        'Premium Single BHK apartment in Hebbal, Bengaluru. Fully furnished independent living at ₹20,000/month. Best 1BHK rental property.'
      )
    }

    return () => {
      document.title = 'bnchmarc - Best PG, Hostel & Co-living Spaces in Bengaluru | Starting ₹7000'
      const metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) {
        metaDescription.setAttribute('content', 
          'Find premium PG, hostels, and co-living spaces in Bengaluru near Mathikere, Nagavara, and BEL Road. Fully furnished rooms with AC, Wi-Fi, food, and security. Book your PG accommodation today!'
        )
      }
    }
  }, [])
  
  const keyFeatures = [
    'Single BHK Apartment',
    'Fully Furnished',
    'Prime Location',
    'Independent Living',
    'Modern Amenities',
    'Safe & Secure',
    'Well Maintained',
    'Ready to Move-in'
  ]

  const handleWhatsApp = () => {
    const whatsappNumber = "917411057111"
    const message = "Hi, I'm interested in 220 Coffee Board Co-Living - Single BHK. Can you provide more details?"
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-grey-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <Link 
            to="/"
            className="inline-flex items-center text-yellow-600 hover:text-yellow-700 mb-8 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          {/* Hero Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-4">
              <Home className="w-8 h-8 text-yellow-500 mr-3" />
              <h1 className="text-4xl font-bold text-grey-900">
                220 Coffee Board Co-Living
              </h1>
            </div>
            <p className="text-xl text-grey-600 mb-6">
              Single BHK for Rent in Bengaluru
            </p>
            
            {/* Description */}
            <div className="bg-gradient-to-r from-yellow-50 to-grey-50 border-2 border-yellow-200 rounded-xl p-6 mb-6">
              <p className="text-grey-800 leading-relaxed text-lg">
                <span className="font-bold text-yellow-600">Bnchmarc Living Spaces</span> are designed to become{' '}
                <span className="font-bold text-grey-900">'Your Happy Place'</span>. It's a place where you can be happy and crazy; 
                where you can wake up with the sun's rays smiling upon you, where the{' '}
                <span className="font-semibold text-yellow-600">yellow and grey colour</span> trigger your happy hormones, 
                and where the services and facilities are sure to create a welcoming warmth.
              </p>
            </div>

            {/* Property Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6 text-center">
                <div className="text-4xl mb-3">🏠</div>
                <h4 className="font-bold text-grey-900 mb-2">Single BHK</h4>
                <p className="text-sm text-grey-600">Complete independent apartment with bedroom, hall, and kitchen</p>
              </div>

              <div className="bg-grey-50 border-2 border-grey-300 rounded-lg p-6 text-center">
                <div className="text-4xl mb-3">✨</div>
                <h4 className="font-bold text-grey-900 mb-2">Fully Furnished</h4>
                <p className="text-sm text-grey-600">Move-in ready with all necessary furniture and appliances</p>
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6 text-center">
                <div className="text-4xl mb-3">📍</div>
                <h4 className="font-bold text-grey-900 mb-2">Prime Location</h4>
                <p className="text-sm text-grey-600">Conveniently located in Coffee Board area, Bengaluru</p>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-grey-900 mb-6">Property Gallery</h3>
            
            {/* Main Image */}
            <div className="relative h-[500px] sm:h-[600px] rounded-xl overflow-hidden shadow-lg mb-4 bg-grey-100">
              <img
                src={propertyImages[currentImageIndex].url}
                alt={propertyImages[currentImageIndex].alt}
                className="w-full h-full object-contain"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                width="800"
                height="600"
              />
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-3">
              {propertyImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative h-16 sm:h-20 rounded-lg overflow-hidden transition-all duration-200 ${
                    currentImageIndex === index
                      ? 'ring-2 ring-yellow-500 scale-105'
                      : 'hover:scale-105 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    loading="eager"
                    decoding="async"
                    width="200"
                    height="150"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Location & Pricing Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Location Map */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-grey-900 mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-yellow-500" />
                Location
              </h3>
              
              {/* Embedded Google Map */}
              <div className="w-full h-64 rounded-lg overflow-hidden border border-grey-200 mb-4">
                <iframe
                  src="https://maps.google.com/maps?q=2JX3+W6%20Bengaluru,%20Karnataka,%20India&hl=en&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="220 Coffee Board Location - Bengaluru"
                ></iframe>
              </div>

              {/* Open in Google Maps Button */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=2JX3%2BW6%20Bengaluru%2C%20Karnataka%2C%20India"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg mb-4"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Open in Google Maps
              </a>

              {/* Address */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-bold text-grey-900 mb-2">Address</h4>
                <p className="text-grey-700">
                  220, Coffee Board Layout<br />
                  Kempapura, Hebbal<br />
                  Bengaluru, Karnataka 560024
                </p>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-grey-900 mb-6">
                Available Accommodation
              </h3>

              {/* Women's Pricing */}
              <div className="mb-6">
                <div className="bg-pink-100 px-4 py-2 rounded-lg mb-4 inline-block">
                  <h4 className="font-bold text-pink-700">WOMEN</h4>
                </div>
                
                <div className="border-2 border-pink-200 rounded-lg p-6 bg-pink-50/30">
                  <div className="flex items-center mb-3">
                    <Home className="w-5 h-5 text-pink-500 mr-2" />
                    <h5 className="font-bold text-grey-900 text-lg">Single BHK</h5>
                  </div>
                  <p className="text-sm text-grey-600 mb-3">Complete independent 1BHK apartment</p>
                  <p className="text-3xl font-bold text-pink-600 mb-2">₹20,000</p>
                  <p className="text-sm text-grey-600">starts @ per month</p>
                  <div className="mt-4">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                      Available Now
                    </span>
                  </div>
                </div>
              </div>

              {/* Men's Pricing */}
              <div className="mb-6">
                <div className="bg-blue-100 px-4 py-2 rounded-lg mb-4 inline-block">
                  <h4 className="font-bold text-blue-700">MEN</h4>
                </div>
                
                <div className="border-2 border-blue-200 rounded-lg p-6 bg-blue-50/30">
                  <div className="flex items-center mb-3">
                    <Home className="w-5 h-5 text-blue-500 mr-2" />
                    <h5 className="font-bold text-grey-900 text-lg">Single BHK</h5>
                  </div>
                  <p className="text-sm text-grey-600 mb-3">Complete independent 1BHK apartment</p>
                  <p className="text-3xl font-bold text-blue-600 mb-2">₹20,000</p>
                  <p className="text-sm text-grey-600">starts @ per month</p>
                  <div className="mt-4">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                      Available Now
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-6">
                <button
                  onClick={handleWhatsApp}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-grey-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Book a Visit or Inquire Now
                  <svg className="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-grey-900 mb-6 text-center">
              Key Features & Highlights
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-center text-grey-700">
                  <Check className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CoffeeBoardPage
