import React from 'react'

interface Amenity {
  id: string
  name: string
  description: string
  icon: string
  category: 'mandatory' | 'luxury'
}

const Amenities: React.FC = () => {
  const amenities: Amenity[] = [
    // Mandatory Amenities
    {
      id: 'food',
      name: 'Optional Meals',
      description: 'Flexible meal plans with nutritious home-cooked food',
      icon: '🍽️',
      category: 'mandatory'
    },
    {
      id: 'water-electricity',
      name: '24/7 Water & Power',
      description: 'Uninterrupted utilities with backup systems',
      icon: '⚡',
      category: 'mandatory'
    },
    {
      id: 'wifi',
      name: 'High-Speed Wi-Fi',
      description: 'Reliable internet connectivity throughout',
      icon: '📶',
      category: 'mandatory'
    },
    {
      id: 'laundry',
      name: 'Washing Machines',
      description: 'Self-service laundry facilities available',
      icon: '👕',
      category: 'mandatory'
    },
    {
      id: 'ac',
      name: 'Air Conditioning',
      description: 'AC equipped rooms for comfort',
      icon: '❄️',
      category: 'mandatory'
    },
    {
      id: 'housekeeping',
      name: 'Housekeeping',
      description: 'Regular cleaning and maintenance',
      icon: '🧹',
      category: 'mandatory'
    },
    {
      id: 'security',
      name: 'CCTV & Biometric',
      description: 'Advanced security monitoring system',
      icon: '🛡️',
      category: 'mandatory'
    },
    {
      id: 'furniture',
      name: 'Fully Furnished',
      description: 'Beds, study tables, and wardrobes provided',
      icon: '�️',
      category: 'mandatory'
    },
    // Luxury Amenities
    {
      id: 'kitchen',
      name: 'Self-Cooking Counter',
      description: 'Dedicated space for cooking your own meals',
      icon: '👨‍�',
      category: 'luxury'
    },
    {
      id: 'study',
      name: 'Study Areas',
      description: 'Quiet spaces with study tables for focused work',
      icon: '📚',
      category: 'luxury'
    }
  ]

  const mandatoryAmenities = amenities.filter(amenity => amenity.category === 'mandatory')
  const luxuryAmenities = amenities.filter(amenity => amenity.category === 'luxury')

  const AmenityCard: React.FC<{ amenity: Amenity }> = ({ amenity }) => (
    <div className="bg-white p-6 rounded-xl shadow-md border border-grey-200 hover:shadow-lg hover:border-yellow-300 transition-all duration-300 text-center">
      <div className="text-4xl mb-4">{amenity.icon}</div>
      <h3 className="text-lg font-semibold text-grey-900 mb-2">{amenity.name}</h3>
      <p className="text-grey-600 text-sm leading-relaxed">{amenity.description}</p>
    </div>
  )

  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-grey-900 mb-6">
            89 Xquisit - Premium Living Redefined
          </h2>
          
          {/* Updated Description */}
          <div className="max-w-5xl mx-auto bg-yellow-50 border-2 border-yellow-200 rounded-xl p-8 mb-12">
            <p className="text-lg text-grey-800 leading-relaxed">
              <span className="font-bold text-yellow-600">89 Xquisit</span> offers premium PG, hostel, and coliving spaces near{' '}
              <span className="font-semibold">M S Ramaiah College, MSRIT, IISc, RUAS</span>, and major offices like{' '}
              <span className="font-semibold">Amazon, Deloitte, World Trade Center, BEL, ISRO</span>, and{' '}
              <span className="font-semibold">CPRI</span>.
            </p>
            <p className="text-lg text-grey-800 leading-relaxed mt-4">
              Ideal for <span className="font-semibold">students, doctors,</span> and <span className="font-semibold">professionals</span>, 
              our fully furnished rooms include <span className="font-semibold">beds, AC, Wi-Fi, study tables, washing machines</span>, and{' '}
              <span className="font-semibold">housekeeping</span>.
            </p>
            <p className="text-lg text-grey-800 leading-relaxed mt-4">
              Enjoy optional food, a <span className="font-semibold">self-cooking counter, CCTV</span>, and{' '}
              <span className="font-semibold">biometric security</span>. Located near{' '}
              <span className="font-semibold">New BEL Road, Mathikere, Hebbal</span>, and{' '}
              <span className="font-semibold">Sanjaynagar</span>, 89 Xquisit combines{' '}
              <span className="font-semibold text-yellow-600">comfort, safety</span>, and{' '}
              <span className="font-semibold text-yellow-600">style</span> for boys and girls PGs in Bangalore.
            </p>
          </div>
        </div>

        {/* Mandatory Amenities */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-grey-900 mb-8 text-center">
            Premium Amenities at 89 Xquisit
            <span className="block text-sm font-normal text-grey-600 mt-1">
              Everything you need for comfortable living
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mandatoryAmenities.map((amenity) => (
              <AmenityCard key={amenity.id} amenity={amenity} />
            ))}
          </div>
        </div>

        {/* Luxury Amenities */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-grey-900 mb-8 text-center">
            Additional Facilities
            <span className="block text-sm font-normal text-grey-600 mt-1">
              Making your stay even more convenient
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {luxuryAmenities.map((amenity) => (
              <AmenityCard key={amenity.id} amenity={amenity} />
            ))}
          </div>
        </div>

        {/* Features Highlight */}
        <div className="bg-grey-50 border border-grey-200 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-grey-900 mb-4">
            Why Choose bnchmarc?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="font-semibold text-grey-900 mb-2">Quality Assured</h4>
              <p className="text-grey-600 text-sm">All amenities maintained to the highest standards</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-grey-900 mb-2">24/7 Support</h4>
              <p className="text-grey-600 text-sm">Round-the-clock assistance for all your needs</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-grey-900 mb-2">Community Focus</h4>
              <p className="text-grey-600 text-sm">Building connections and lasting friendships</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Amenities