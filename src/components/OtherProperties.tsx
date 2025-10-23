import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Check } from 'lucide-react'

const OtherProperties: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-grey-900 mb-4 text-center">
            Explore Our Other Properties
          </h3>
          <p className="text-grey-600 text-center mb-8">
            Discover more premium co-living spaces across Bengaluru
          </p>
          
          {/* Property Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Atlantis Property Card */}
            <Link 
              to="/atlantis"
              className="bg-white rounded-xl shadow-lg border-2 border-grey-200 overflow-hidden hover:shadow-xl hover:border-yellow-300 transition-all duration-300 group"
            >
              {/* Property Image - Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <h4 className="text-3xl font-bold mb-2">Atlantis</h4>
                  <p className="text-blue-100">Co-Living Space</p>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-500 text-grey-900 px-3 py-1 rounded-full text-sm font-medium">
                    Co-living
                  </span>
                </div>
              </div>

              {/* Property Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-grey-900 mb-2">
                  Atlantis Co-Living Space
                </h3>
                
                <p className="text-grey-600 mb-4 leading-relaxed">
                  Your Happy Place in Bengaluru. Near Manyata Tech Park.
                </p>

                {/* Location */}
                <div className="flex items-center text-grey-600 mb-4">
                  <MapPin className="w-4 h-4 mr-2 text-yellow-500" />
                  <span className="text-sm">Nagavara, Bengaluru</span>
                </div>

                {/* Pricing Preview */}
                <div className="mb-6">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-grey-600">Starting from</span>
                    <span className="font-bold text-blue-600 text-lg">₹7,000/month</span>
                  </div>
                </div>

                {/* Key Features */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  <div className="flex items-center text-sm text-grey-600">
                    <Check className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                    Free Wi-Fi
                  </div>
                  <div className="flex items-center text-sm text-grey-600">
                    <Check className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                    Power Backup
                  </div>
                  <div className="flex items-center text-sm text-grey-600">
                    <Check className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                    Clean Rooms
                  </div>
                  <div className="flex items-center text-sm text-grey-600">
                    <Check className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                    Parking
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between text-blue-600 font-semibold group-hover:text-blue-700">
                  <span>View Full Details</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Coffee Board Property Card */}
            <Link 
              to="/coffee-board"
              className="bg-white rounded-xl shadow-lg border-2 border-grey-200 overflow-hidden hover:shadow-xl hover:border-yellow-300 transition-all duration-300 group"
            >
              {/* Property Image - Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-yellow-400 to-grey-500 flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <h4 className="text-3xl font-bold mb-2">220 Coffee Board</h4>
                  <p className="text-yellow-100">Single BHK</p>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-500 text-grey-900 px-3 py-1 rounded-full text-sm font-medium">
                    1 BHK Apartment
                  </span>
                </div>
              </div>

              {/* Property Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-grey-900 mb-2">
                  220 Coffee Board
                </h3>
                
                <p className="text-grey-600 mb-4 leading-relaxed">
                  Independent Single BHK for Rent. Your Happy Place in Bengaluru.
                </p>

                {/* Location */}
                <div className="flex items-center text-grey-600 mb-4">
                  <MapPin className="w-4 h-4 mr-2 text-yellow-500" />
                  <span className="text-sm">Coffee Board Layout, Bengaluru</span>
                </div>

                {/* Pricing Preview */}
                <div className="mb-6">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-grey-600">Starting from</span>
                    <span className="font-bold text-yellow-600 text-lg">₹17,000/month</span>
                  </div>
                </div>

                {/* Key Features */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  <div className="flex items-center text-sm text-grey-600">
                    <Check className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                    Single BHK
                  </div>
                  <div className="flex items-center text-sm text-grey-600">
                    <Check className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                    Fully Furnished
                  </div>
                  <div className="flex items-center text-sm text-grey-600">
                    <Check className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                    Independent
                  </div>
                  <div className="flex items-center text-sm text-grey-600">
                    <Check className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                    Prime Location
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between text-yellow-600 font-semibold group-hover:text-yellow-700">
                  <span>View Full Details</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OtherProperties
