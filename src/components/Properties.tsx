import React from 'react'
import { Link } from 'react-router-dom'
import { properties } from '../data/properties'
import { ArrowRight, MapPin, Users } from 'lucide-react'

const Properties: React.FC = () => {
  return (
    <section id="properties" className="py-20 bg-grey-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-grey-900 mb-4">
            Our Properties
          </h2>
          <p className="text-xl text-grey-600 max-w-3xl mx-auto">
            Discover our carefully curated living spaces, each designed to meet different lifestyle needs and preferences.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-xl shadow-lg border border-grey-200 overflow-hidden hover:shadow-xl hover:border-yellow-300 transition-all duration-300 group"
            >
              {/* Property Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={property.heroImage}
                  alt={property.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-500 text-grey-900 px-3 py-1 rounded-full text-sm font-medium">
                    {property.type}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-grey-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {property.price}
                  </span>
                </div>
              </div>

              {/* Property Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-grey-900 mb-2">
                  {property.name}
                </h3>
                
                <p className="text-grey-600 mb-4 leading-relaxed">
                  {property.tagline}
                </p>

                {/* Location */}
                <div className="flex items-center text-grey-600 mb-4">
                  <MapPin className="w-4 h-4 mr-2 text-yellow-500" />
                  <span className="text-sm">{property.location.address.split(',')[0]}</span>
                </div>

                {/* Room Types */}
                <div className="mb-6">
                  <h4 className="font-semibold text-grey-800 mb-3">Available Rooms:</h4>
                  <div className="space-y-2">
                    {property.rooms.slice(0, 3).map((room, idx) => (
                      <div key={idx} className="flex items-center justify-between text-sm">
                        <span className="text-grey-600 flex items-center">
                          <Users className="w-3 h-3 mr-1" />
                          {room.type}
                        </span>
                        <span className="font-semibold text-yellow-600">{room.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Amenities Preview */}
                <div className="mb-6">
                  <h4 className="font-semibold text-grey-800 mb-3">Key Amenities:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {property.amenities.slice(0, 6).map((amenity, idx) => (
                      <div key={idx} className="flex items-center text-sm text-grey-600">
                        <svg className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {amenity.name}
                      </div>
                    ))}
                  </div>
                  {property.amenities.length > 6 && (
                    <p className="text-xs text-grey-500 mt-2">
                      +{property.amenities.length - 6} more amenities
                    </p>
                  )}
                </div>

                {/* CTA Button */}
                <Link 
                  to={`/properties/${property.slug}`}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-grey-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center group"
                >
                  View Full Details
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-grey-600 mb-6">
            Ready to find your perfect living space?
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-grey-900 font-semibold rounded-lg transition-colors duration-200"
          >
            Get in Touch
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Properties