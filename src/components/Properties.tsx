import React, { useState } from 'react'
import { MapPin, Users, Check } from 'lucide-react'

// Import 89 Xquisit property images (different from hero)
import bathroom from '../assets/89/Sanjay\'s 89 Xquisit BEL Road_2851 [BATHROOM].jpg'
import bathroom2 from '../assets/89/Sanjay\'s 89 Xquisit BEL Road_2852 [BATHROOM].jpg'
import bathroom3 from '../assets/89/Sanjay\'s 89 Xquisit BEL Road_2887 [BATHROOM].jpg'
import passage1 from '../assets/89/Sanjay\'s 89 Xquisit BEL Road_2856 [PASSAGE].jpg'
import passage2 from '../assets/89/Sanjay\'s 89 Xquisit BEL Road_2889 [PASSAGE].jpg'
import passage3 from '../assets/89/Sanjay\'s 89 Xquisit BEL Road_2858 [PASSAGE].jpg'
import passage4 from '../assets/89/Sanjay\'s 89 Xquisit BEL Road_2864 [PASSAGE].jpg'
import doubleRoom3 from '../assets/89/Sanjay\'s 89 Xquisit BEL Road_2879 [DOUBLE SHARING ROOM].jpg'
import doubleRoom4 from '../assets/89/Sanjay\'s 89 Xquisit BEL Road_2877 [DOUBLE SHARING ROOM].jpg'
import tripleRoom3 from '../assets/89/Sanjay\'s 89 Xquisit BEL Road_2846 [TRIPLE SHARING ROOM].jpg'
import tripleRoom4 from '../assets/89/Sanjay\'s 89 Xquisit BEL Road_2838 [TRIPLE SHARING ROOM].jpg'
import dining3 from '../assets/89/Sanjay\'s 89 Xquisit BEL Road_2973 [DINING].jpg'
import dining4 from '../assets/89/Sanjay\'s 89 Xquisit BEL Road_2975 [DINING].jpg'
import dining5 from '../assets/89/Sanjay\'s 89 Xquisit BEL Road_2978 [DINING].jpg'
import lobby3 from '../assets/89/Sanjay\'s 89 Xquisit BEL Road_2932 [LOBBY].jpg'
import lobby4 from '../assets/89/Sanjay\'s 89 Xquisit BEL Road_2929 [LOBBY].jpg'
import lobby5 from '../assets/89/Sanjay\'s 89 Xquisit BEL Road_2940 [LOBBY].jpg'
import terrace2 from '../assets/89/Sanjay\'s 89 Xquisit BEL Road_2914 [TERRACE].jpg'
import terrace3 from '../assets/89/Sanjay\'s 89 Xquisit BEL Road_2916 [TERRACE].jpg'
import terrace4 from '../assets/89/Sanjay\'s 89 Xquisit BEL Road_2923 [TERRACE].jpg'
import library2 from '../assets/89/Sanjay\'s 89 Xquisit BEL Road_2867 [PASSAGE,LIBRARY].jpg'
import library3 from '../assets/89/Sanjay\'s 89 Xquisit BEL Road_2869 [PASSAGE, LIBRARY].jpg'

const Properties: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const propertyImages = [
    { url: doubleRoom3, alt: '89 Xquisit PG Bengaluru - Double Sharing Room - Best Hostel near BEL Road' },
    { url: tripleRoom3, alt: '89 Xquisit PG Bengaluru - Triple Sharing Room - Affordable PG near Mathikere' },
    { url: lobby3, alt: '89 Xquisit PG Bengaluru - Lobby Area - Premium Hostel near MS Ramaiah' },
    { url: dining3, alt: '89 Xquisit PG Bengaluru - Dining Hall - Best PG with Food near BEL Road' },
    { url: terrace2, alt: '89 Xquisit PG Bengaluru - Terrace View - Co-living Space near Mathikere' },
    { url: passage1, alt: '89 Xquisit PG Bengaluru - Passage Corridor - Modern PG Hostel near BEL Road' },
    { url: bathroom, alt: '89 Xquisit PG Bengaluru - Modern Bathroom - Best Hostel Amenities near Mathikere' },
    { url: passage2, alt: '89 Xquisit PG Bengaluru - Library Passage - Student PG near MSRIT and IISc' },
    { url: doubleRoom4, alt: '89 Xquisit PG - Spacious Double Room - Premium Hostel Accommodation Bengaluru' },
    { url: tripleRoom4, alt: '89 Xquisit PG - Comfortable Triple Sharing - Affordable PG near BEL Road' },
    { url: dining4, alt: '89 Xquisit PG - Dining Area - Best PG with Food Facilities Mathikere' },
    { url: lobby4, alt: '89 Xquisit PG - Reception Lobby - Modern Hostel near MS Ramaiah College' },
    { url: terrace3, alt: '89 Xquisit PG - Rooftop Terrace - Premium Co-living Space Bengaluru' },
    { url: bathroom2, alt: '89 Xquisit PG - Clean Bathrooms - Best Hostel Hygiene Standards Bengaluru' },
    { url: passage3, alt: '89 Xquisit PG - Well-lit Corridor - Safe PG for Boys and Girls Bengaluru' },
    { url: dining5, alt: '89 Xquisit PG - Modern Dining Hall - Nutritious Meals PG near BEL Road' },
    { url: library2, alt: '89 Xquisit PG - Study Library - Student Hostel near MSRIT Bengaluru' },
    { url: lobby5, alt: '89 Xquisit PG - Welcoming Entrance - Best PG in Mathikere Bengaluru' },
    { url: terrace4, alt: '89 Xquisit PG - Terrace Sitting Area - Co-living Amenities Bengaluru' },
    { url: bathroom3, alt: '89 Xquisit PG - Attached Bathrooms - Premium Hostel Facilities Mathikere' },
    { url: passage4, alt: '89 Xquisit PG - Spacious Hallways - Modern PG Infrastructure Bengaluru' },
    { url: library3, alt: '89 Xquisit PG - Reading Area - Best Study Environment near IISc Bengaluru' }
  ]

  const keyFeatures = [
    'Fully Furnished Rooms',
    'AC & Wi-Fi',
    'Study Tables & Beds',
    'Washing Machines',
    'Housekeeping',
    'Optional Food Service',
    'Self-Cooking Counter',
    'CCTV Security',
    'Biometric Access',
    '24/7 Power Backup'
  ]

  const handleWhatsApp = () => {
    const whatsappNumber = "917411057111"
    const message = "Hi, I'm interested in 89 Xquisit property. Can you provide more details?"
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="properties" className="py-20 bg-grey-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-grey-900 mb-4">
            89 Xquisit - Premium PG in Bengaluru
          </h2>
          <p className="text-xl text-grey-600 max-w-3xl mx-auto">
            Best paying guest accommodation near MS Ramaiah College, MSRIT, IISc, and BEL Road. Fully furnished hostel rooms with AC, Wi-Fi, food, and 24/7 security for boys and girls
          </p>
        </div>

        {/* Main Property Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left: Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              <img
                src={propertyImages[currentImageIndex].url}
                alt={propertyImages[currentImageIndex].alt}
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                width="800"
                height="600"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-sm font-medium text-grey-900">
                  {propertyImages[currentImageIndex].alt}
                </span>
              </div>
            </div>

            {/* Thumbnail Grid - Show all images */}
            <div className="grid grid-cols-6 gap-2">
              {propertyImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative h-20 rounded-lg overflow-hidden transition-all duration-200 ${
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

          {/* Right: Location Map */}
          <div className="space-y-6">
            {/* Map Container */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-grey-900 mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-yellow-500" />
                Prime Location
              </h3>
              
              {/* Embedded Google Map */}
              <div className="w-full h-72 rounded-lg overflow-hidden border border-grey-200 mb-4">
                <iframe
                  src="https://maps.google.com/maps?q=2HHF+C3%20Bengaluru,%20Karnataka,%20India&hl=en&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="89 Xquisit Location - New BEL Road, Mathikere, Bengaluru"
                ></iframe>
              </div>

              {/* Open in Google Maps Button */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=2HHF%2BC3%20Bengaluru%2C%20Karnataka%2C%20India"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Open in Google Maps
              </a>
            </div>

            {/* Address Card */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <h4 className="font-bold text-grey-900 mb-2">Address</h4>
              <p className="text-grey-700 mb-4">
                89 Xquisit, New BEL Road, Mathikere<br />
                Bengaluru, Karnataka 560091
              </p>
              
              <div className="space-y-2">
                <h4 className="font-bold text-grey-900 mb-2">Nearby Landmarks</h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-grey-700">
                  <div>• M S Ramaiah College</div>
                  <div>• MSRIT</div>
                  <div>• IISc Bangalore</div>
                  <div>• RUAS</div>
                  <div>• Amazon Office</div>
                  <div>• Deloitte</div>
                  <div>• BEL</div>
                  <div>• ISRO</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Room Types & Pricing */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-grey-900 mb-8 text-center">
            Available Accommodations
          </h3>
          
          {/* Women's Section */}
          <div className="mb-10">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-pink-100 px-6 py-2 rounded-full">
                <h4 className="text-xl font-bold text-pink-700">WOMEN</h4>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-pink-200 rounded-lg p-6 hover:border-pink-400 hover:shadow-md transition-all duration-200 bg-pink-50/30">
                <div className="flex items-center mb-3">
                  <Users className="w-5 h-5 text-pink-500 mr-2" />
                  <h5 className="font-bold text-grey-900">Triple Sharing</h5>
                </div>
                <p className="text-sm text-grey-600 mb-2">Shared Room Triple Occupancy</p>
                <p className="text-3xl font-bold text-pink-600 mb-2">₹10,000</p>
                <p className="text-sm text-grey-600 mb-4">starts @ per month</p>
                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                  Available
                </span>
              </div>

              <div className="border-2 border-pink-200 rounded-lg p-6 hover:border-pink-400 hover:shadow-md transition-all duration-200 bg-pink-50/30">
                <div className="flex items-center mb-3">
                  <Users className="w-5 h-5 text-pink-500 mr-2" />
                  <h5 className="font-bold text-grey-900">Double Sharing</h5>
                </div>
                <p className="text-sm text-grey-600 mb-2">Shared Room Double Occupancy</p>
                <p className="text-3xl font-bold text-pink-600 mb-2">₹12,000</p>
                <p className="text-sm text-grey-600 mb-4">starts @ per month</p>
                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                  Available
                </span>
              </div>

              <div className="border-2 border-pink-200 rounded-lg p-6 hover:border-pink-400 hover:shadow-md transition-all duration-200 bg-pink-50/30">
                <div className="flex items-center mb-3">
                  <Users className="w-5 h-5 text-pink-500 mr-2" />
                  <h5 className="font-bold text-grey-900">Single Occupancy</h5>
                </div>
                <p className="text-sm text-grey-600 mb-2">Full Room Single Occupancy</p>
                <p className="text-3xl font-bold text-pink-600 mb-2">₹24,000</p>
                <p className="text-sm text-grey-600 mb-4">starts @ per month</p>
                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                  Available
                </span>
              </div>
            </div>
          </div>

          {/* Men's Section */}
          <div className="mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-blue-100 px-6 py-2 rounded-full">
                <h4 className="text-xl font-bold text-blue-700">MEN</h4>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-blue-200 rounded-lg p-6 hover:border-blue-400 hover:shadow-md transition-all duration-200 bg-blue-50/30">
                <div className="flex items-center mb-3">
                  <Users className="w-5 h-5 text-blue-500 mr-2" />
                  <h5 className="font-bold text-grey-900">Triple Sharing</h5>
                </div>
                <p className="text-sm text-grey-600 mb-2">Shared Room Triple Occupancy</p>
                <p className="text-3xl font-bold text-blue-600 mb-2">₹10,000</p>
                <p className="text-sm text-grey-600 mb-4">starts @ per month</p>
                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                  Available
                </span>
              </div>

              <div className="border-2 border-blue-200 rounded-lg p-6 hover:border-blue-400 hover:shadow-md transition-all duration-200 bg-blue-50/30">
                <div className="flex items-center mb-3">
                  <Users className="w-5 h-5 text-blue-500 mr-2" />
                  <h5 className="font-bold text-grey-900">Double Sharing</h5>
                </div>
                <p className="text-sm text-grey-600 mb-2">Shared Room Double Occupancy</p>
                <p className="text-3xl font-bold text-blue-600 mb-2">₹12,000</p>
                <p className="text-sm text-grey-600 mb-4">starts @ per month</p>
                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                  Available
                </span>
              </div>

              <div className="border-2 border-blue-200 rounded-lg p-6 hover:border-blue-400 hover:shadow-md transition-all duration-200 bg-blue-50/30">
                <div className="flex items-center mb-3">
                  <Users className="w-5 h-5 text-blue-500 mr-2" />
                  <h5 className="font-bold text-grey-900">Single Occupancy</h5>
                </div>
                <p className="text-sm text-grey-600 mb-2">Full Room Single Occupancy</p>
                <p className="text-3xl font-bold text-blue-600 mb-2">₹24,000</p>
                <p className="text-sm text-grey-600 mb-4">starts @ per month</p>
                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                  Available
                </span>
              </div>
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="border-t border-grey-200 pt-8">
            <h4 className="font-bold text-grey-900 mb-4 text-center">Key Features & Amenities</h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-center text-sm text-grey-700">
                  <Check className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-8">
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-grey-900 font-semibold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Book a Visit or Inquire Now
              <svg className="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Properties
