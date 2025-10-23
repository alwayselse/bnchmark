import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getPropertyBySlug } from '../data/properties'
import { ArrowLeft, MapPin, Star, Send, Phone, Mail } from 'lucide-react'

interface ContactForm {
  name: string
  email: string
  phone: string
  checkIn: string
  roomType: string
  message: string
}

const PropertyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const property = slug ? getPropertyBySlug(slug) : null
  
  const [selectedImage, setSelectedImage] = useState(0)
  const [showAllImages, setShowAllImages] = useState(false)
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    roomType: '',
    message: ''
  })

  // Update meta tags for SEO
  useEffect(() => {
    if (property) {
      document.title = `${property.name} - Best PG in ${property.location.address} Bengaluru | bnchmark`
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) {
        metaDescription.setAttribute('content', 
          `Book ${property.name} PG in ${property.location.address} Bengaluru. ${property.type} accommodation with premium amenities. ${property.tagline}. ${property.price}.`
        )
      }

      // Update Open Graph tags
      const ogTitle = document.querySelector('meta[property="og:title"]')
      if (ogTitle) {
        ogTitle.setAttribute('content', `${property.name} - Best PG in ${property.location.address} Bengaluru`)
      }

      const ogDescription = document.querySelector('meta[property="og:description"]')
      if (ogDescription) {
        ogDescription.setAttribute('content', 
          `${property.type} accommodation in ${property.location.address}. ${property.tagline}. ${property.price}.`
        )
      }
    }

    // Cleanup - restore original meta tags on unmount
    return () => {
      document.title = 'bnchmark - Best PG, Hostel & Co-living Spaces in Bengaluru | Starting ₹7000'
      const metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) {
        metaDescription.setAttribute('content', 
          'Find premium PG, hostels, and co-living spaces in Bengaluru near Mathikere, Nagavara, and BEL Road. Fully furnished rooms with AC, Wi-Fi, food, and security. Book your PG accommodation today!'
        )
      }
    }
  }, [property])

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-grey-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-grey-900 mb-4">Property Not Found</h1>
          <p className="text-grey-600 mb-8">The property you're looking for doesn't exist.</p>
          <Link 
            to="/" 
            className="bg-yellow-500 text-grey-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors inline-flex items-center"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Property inquiry submitted:', formData)
    alert('Thank you for your inquiry! We will contact you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      checkIn: '',
      roomType: '',
      message: ''
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm border-b border-grey-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center text-grey-900 hover:text-yellow-600 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="font-semibold">Back to Home</span>
            </Link>
            <div className="text-2xl font-bold text-yellow-600">bnchmarc</div>
          </div>
        </div>
      </nav>

      {/* Property Header */}
      <section className="bg-gradient-to-r from-yellow-50 to-grey-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
              {property.type}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-grey-900 mb-4">
              {property.name}
            </h1>
            <p className="text-xl text-grey-600 mb-6 max-w-2xl mx-auto">
              {property.tagline}
            </p>
            <div className="flex items-center justify-center text-grey-700 mb-4">
              <MapPin className="w-5 h-5 mr-2 text-yellow-600" />
              <span>{property.location.address}</span>
            </div>
            <div className="text-2xl font-bold text-grey-900">
              {property.price}
              <span className="text-lg font-normal text-grey-600"> per month</span>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-grey-900 mb-8 text-center">Photo Gallery</h2>
          
          {/* Main Image */}
          <div className="mb-6">
            <img
              src={property.images[selectedImage]}
              alt={`${property.name} - Image ${selectedImage + 1}`}
              className="w-full h-96 md:h-[500px] object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {property.images.slice(0, showAllImages ? property.images.length : 6).map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                  selectedImage === index 
                    ? 'ring-4 ring-yellow-500 transform scale-105' 
                    : 'hover:transform hover:scale-105 hover:shadow-lg'
                }`}
              >
                <img
                  src={image}
                  alt={`${property.name} thumbnail ${index + 1}`}
                  className="w-full h-20 md:h-24 object-cover transition-all duration-300 hover:brightness-110"
                />
              </button>
            ))}
          </div>

          {property.images.length > 6 && (
            <div className="text-center mt-6">
              <button
                onClick={() => setShowAllImages(!showAllImages)}
                className="bg-yellow-500 text-grey-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
              >
                {showAllImages ? 'Show Less' : `View All ${property.images.length} Photos`}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Property Details */}
      <section className="py-12 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Description */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-grey-900 mb-6">About This Property</h2>
              <p className="text-grey-700 text-lg leading-relaxed mb-8">
                {property.description}
              </p>

              {/* Highlights */}
              <h3 className="text-2xl font-bold text-grey-900 mb-4">Why Choose This Property?</h3>
              <ul className="space-y-3 mb-8">
                {property.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-grey-700">{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Room Types & Pricing */}
              <h3 className="text-2xl font-bold text-grey-900 mb-4">Room Types & Availability</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {property.rooms.map((room, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 border border-grey-200 hover:border-yellow-300 transition-colors">
                    <h4 className="font-semibold text-grey-900 mb-2">{room.type}</h4>
                    <p className="text-2xl font-bold text-yellow-600 mb-2">{room.price}</p>
                    <p className="text-sm text-grey-600">
                      {room.availability > 0 
                        ? `${room.availability} rooms available` 
                        : 'Fully booked'
                      }
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-grey-900 mb-4">Quick Contact</h3>
                <div className="space-y-4 mb-6">
                  <a href="tel:+919876543210" className="flex items-center text-grey-700 hover:text-yellow-600 transition-colors">
                    <Phone className="w-5 h-5 mr-3 text-yellow-600" />
                    +91 98765 43210
                  </a>
                  <a href="mailto:bookings@bnchmarc.com" className="flex items-center text-grey-700 hover:text-yellow-600 transition-colors">
                    <Mail className="w-5 h-5 mr-3 text-yellow-600" />
                    bookings@bnchmarc.com
                  </a>
                </div>
                <button className="w-full bg-yellow-500 text-grey-900 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
                  Schedule a Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-grey-900 mb-8 text-center">Premium Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {property.amenities.map((amenity, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-grey-200 hover:border-yellow-300 hover:shadow-md transition-all duration-300">
                <div className="text-3xl mb-3">{amenity.icon}</div>
                <h3 className="font-semibold text-grey-900 mb-2">{amenity.name}</h3>
                <p className="text-grey-600 text-sm">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Nearby Attractions */}
      <section className="py-12 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-grey-900 mb-8 text-center">Location & Nearby Attractions</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map Placeholder */}
            <div className="bg-grey-200 rounded-xl h-64 lg:h-80 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-grey-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-grey-700 mb-2">Interactive Map</h3>
                <p className="text-grey-500">{property.location.address}</p>
                <p className="text-sm text-grey-400 mt-2">Map integration coming soon</p>
              </div>
            </div>

            {/* Nearby Attractions */}
            <div>
              <h3 className="text-2xl font-bold text-grey-900 mb-6">What's Nearby</h3>
              <div className="space-y-4">
                {property.location.nearbyAttractions.map((attraction, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border border-grey-200">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 ${
                        attraction.type === 'college' ? 'bg-blue-100 text-blue-600' :
                        attraction.type === 'tech-park' ? 'bg-purple-100 text-purple-600' :
                        attraction.type === 'shopping' ? 'bg-pink-100 text-pink-600' :
                        attraction.type === 'metro' ? 'bg-green-100 text-green-600' :
                        attraction.type === 'cafe' ? 'bg-orange-100 text-orange-600' :
                        attraction.type === 'hospital' ? 'bg-red-100 text-red-600' :
                        'bg-grey-100 text-grey-600'
                      }`}>
                        {attraction.type === 'college' ? '🎓' :
                         attraction.type === 'tech-park' ? '💼' :
                         attraction.type === 'shopping' ? '🛍️' :
                         attraction.type === 'metro' ? '🚇' :
                         attraction.type === 'cafe' ? '☕' :
                         attraction.type === 'hospital' ? '🏥' :
                         '📍'}
                      </div>
                      <div>
                        <h4 className="font-semibold text-grey-900">{attraction.name}</h4>
                        <p className="text-sm text-grey-600 capitalize">{attraction.type.replace('-', ' ')}</p>
                      </div>
                    </div>
                    <span className="text-yellow-600 font-semibold">{attraction.distance}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-grey-900 mb-8 text-center">Interested? Get in Touch!</h2>
          
          <form onSubmit={handleSubmit} className="bg-grey-50 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-grey-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-grey-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-grey-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-grey-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-grey-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-grey-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label htmlFor="checkIn" className="block text-sm font-medium text-grey-700 mb-2">
                  Preferred Check-in Date
                </label>
                <input
                  type="date"
                  id="checkIn"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-grey-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="roomType" className="block text-sm font-medium text-grey-700 mb-2">
                  Preferred Room Type
                </label>
                <select
                  id="roomType"
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-grey-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select a room type</option>
                  {property.rooms.map((room, index) => (
                    <option key={index} value={room.type}>
                      {room.type} - {room.price}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-grey-700 mb-2">
                Additional Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-grey-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors resize-none"
                placeholder="Tell us about your requirements, questions, or any specific needs..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-grey-900 font-semibold py-3 px-6 rounded-lg hover:bg-yellow-600 transition-colors duration-200 flex items-center justify-center"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Inquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default PropertyPage