export interface Property {
  id: string
  slug: string
  name: string
  type: string
  tagline: string
  description: string
  price: string
  images: string[]
  heroImage: string
  amenities: {
    icon: string
    name: string
    description: string
  }[]
  location: {
    address: string
    coordinates: {
      lat: number
      lng: number
    }
    nearbyAttractions: {
      name: string
      distance: string
      type: 'college' | 'tech-park' | 'shopping' | 'metro' | 'cafe' | 'hospital' | 'other'
    }[]
  }
  highlights: string[]
  rooms: {
    type: string
    price: string
    availability: number
  }[]
}

export const properties: Property[] = [
  {
    id: '1',
    slug: 'luxury-living',
    name: 'bnchmark Luxury Living',
    type: 'Girls PG',
    tagline: 'Luxury redefined for modern women',
    description: 'Experience the pinnacle of comfort in our luxury girls PG. Designed with attention to every detail, our spaces offer a perfect blend of elegance and functionality. Each room is thoughtfully furnished with premium amenities, ensuring you feel at home from day one. Our community-focused environment promotes both personal growth and lasting friendships.',
    price: '₹15,000 - ₹25,000',
    heroImage: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    amenities: [
      { icon: '🛏️', name: 'Fully Furnished Rooms', description: 'Premium furniture with study desk, wardrobe, and comfortable bed' },
      { icon: '📶', name: 'High-Speed Wi-Fi', description: '100 Mbps fiber internet with 24/7 connectivity' },
      { icon: '⚡', name: '24/7 Power Backup', description: 'Uninterrupted power supply with generator backup' },
      { icon: '🔧', name: 'On-site Maintenance', description: 'Dedicated maintenance team for immediate assistance' },
      { icon: '🧼', name: 'Regular Sanitization', description: 'Daily cleaning and weekly deep sanitization' },
      { icon: '👕', name: 'In-house Laundry', description: 'Professional laundry service included in rent' },
      { icon: '🚿', name: 'Hot Water 24/7', description: 'Geyser in every room with constant hot water supply' },
      { icon: '❄️', name: 'AC in All Rooms', description: 'Individual AC units with personal temperature control' },
      { icon: '🍽️', name: 'Premium Meals', description: 'Nutritious breakfast, lunch & dinner with varied menu' },
      { icon: '🏋️‍♀️', name: 'Fitness Center', description: 'Well-equipped gym with modern equipment' },
      { icon: '📚', name: 'Study Lounge', description: 'Quiet study areas with comfortable seating' },
      { icon: '🔒', name: 'Biometric Security', description: 'Advanced security with CCTV and biometric access' }
    ],
    location: {
      address: 'HSR Layout, Koramangala, Bengaluru, Karnataka 560034',
      coordinates: { lat: 12.9172, lng: 77.6167 },
      nearbyAttractions: [
        { name: 'Christ University', distance: '2.5 km', type: 'college' },
        { name: 'Mindtree Campus', distance: '1.8 km', type: 'tech-park' },
        { name: 'Forum Mall', distance: '3.2 km', type: 'shopping' },
        { name: 'Koramangala Metro', distance: '1.5 km', type: 'metro' },
        { name: 'Third Wave Coffee', distance: '800m', type: 'cafe' },
        { name: 'Manipal Hospital', distance: '2.1 km', type: 'hospital' },
        { name: 'HSR Club', distance: '1.2 km', type: 'other' }
      ]
    },
    highlights: [
      'Women-only accommodation with 24/7 security',
      'Premium furnishings and modern amenities',
      'Nutritious meals prepared by professional chefs',
      'High-speed internet perfect for remote work',
      'Community events and networking opportunities'
    ],
    rooms: [
      { type: 'Sharing (3-bed)', price: '₹15,000', availability: 8 },
      { type: 'Sharing (2-bed)', price: '₹20,000', availability: 4 },
      { type: 'Private Room', price: '₹25,000', availability: 2 }
    ]
  },
  {
    id: '2',
    slug: 'executive-suites',
    name: 'bnchmark Executive Suites',
    type: 'Boys PG',
    tagline: 'Professional living for ambitious men',
    description: 'Tailored for the modern professional, our executive suites offer a sophisticated living experience. With a focus on productivity and comfort, each space is designed to support your career ambitions while providing a relaxing environment to unwind. Join a community of like-minded professionals in the heart of Bengaluru.',
    price: '₹12,000 - ₹22,000',
    heroImage: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1574691250077-03a929faece5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    amenities: [
      { icon: '🛏️', name: 'Executive Furniture', description: 'Professional workspace with ergonomic chair and premium bed' },
      { icon: '📶', name: 'Business-grade Wi-Fi', description: '200 Mbps dedicated internet for professionals' },
      { icon: '⚡', name: 'UPS Power Backup', description: 'Uninterrupted power with advanced UPS systems' },
      { icon: '🔧', name: 'Priority Maintenance', description: 'Express maintenance service for working professionals' },
      { icon: '🧼', name: 'Daily Housekeeping', description: 'Professional cleaning service every day' },
      { icon: '👔', name: 'Laundry & Dry Clean', description: 'Professional laundry with dry cleaning facility' },
      { icon: '🚿', name: 'Premium Bathrooms', description: 'Modern bathrooms with 24/7 hot water supply' },
      { icon: '❄️', name: 'Climate Controlled', description: 'Central AC with individual room controls' },
      { icon: '🍽️', name: 'Executive Dining', description: 'Restaurant-quality meals with flexible timings' },
      { icon: '💼', name: 'Business Center', description: 'Meeting rooms and printing facilities available' },
      { icon: '🏊‍♂️', name: 'Recreation Area', description: 'Gaming zone, pool table, and entertainment room' },
      { icon: '🚗', name: 'Parking Available', description: 'Covered parking for bikes and cars' }
    ],
    location: {
      address: 'BTM Layout, Koramangala, Bengaluru, Karnataka 560076',
      coordinates: { lat: 12.9165, lng: 77.6101 },
      nearbyAttractions: [
        { name: 'Wipro Campus', distance: '2.2 km', type: 'tech-park' },
        { name: 'IISC Bangalore', distance: '4.5 km', type: 'college' },
        { name: 'Mantri Square Mall', distance: '2.8 km', type: 'shopping' },
        { name: 'BTM Metro Station', distance: '1.2 km', type: 'metro' },
        { name: 'Cafe Coffee Day', distance: '600m', type: 'cafe' },
        { name: 'Fortis Hospital', distance: '1.8 km', type: 'hospital' },
        { name: 'Lalbagh Gardens', distance: '3.5 km', type: 'other' }
      ]
    },
    highlights: [
      'Professional community of working men',
      'Business-friendly amenities and facilities',
      'Flexible meal timings for busy schedules',
      'High-speed internet optimized for remote work',
      'Networking events and professional meetups'
    ],
    rooms: [
      { type: 'Sharing (4-bed)', price: '₹12,000', availability: 12 },
      { type: 'Sharing (2-bed)', price: '₹18,000', availability: 6 },
      { type: 'Executive Suite', price: '₹22,000', availability: 3 }
    ]
  },
  {
    id: '3',
    slug: 'community-house',
    name: 'bnchmark Community House',
    type: 'Co-living',
    tagline: 'Where connections flourish and memories are made',
    description: 'Our vibrant co-living space brings together individuals from diverse backgrounds in a harmonious community setting. With shared spaces designed to foster interaction and private areas for personal retreat, this is where lifelong friendships begin. Experience the perfect balance of social living and personal space.',
    price: '₹10,000 - ₹20,000',
    heroImage: 'https://images.unsplash.com/photo-1574691250077-03a929faece5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    images: [
      'https://images.unsplash.com/photo-1574691250077-03a929faece5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1631049552240-59bf8e8b8caa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    amenities: [
      { icon: '🛏️', name: 'Comfortable Furnishing', description: 'Modern furniture designed for comfort and functionality' },
      { icon: '📶', name: 'Community Wi-Fi', description: '150 Mbps shared internet with excellent coverage' },
      { icon: '⚡', name: 'Reliable Power', description: 'Backup power systems ensuring constant electricity' },
      { icon: '🔧', name: 'Community Maintenance', description: 'Shared maintenance costs with quick resolution' },
      { icon: '🧼', name: 'Shared Cleaning', description: 'Common area cleaning with room cleaning available' },
      { icon: '👕', name: 'Shared Laundry', description: 'Community laundry facility with modern machines' },
      { icon: '🚿', name: 'Shared Bathrooms', description: 'Clean, well-maintained bathrooms with hot water' },
      { icon: '❄️', name: 'Common AC Areas', description: 'Air-conditioned common spaces and select rooms' },
      { icon: '🍽️', name: 'Community Kitchen', description: 'Fully equipped kitchen for cooking and meal sharing' },
      { icon: '🎮', name: 'Entertainment Zone', description: 'Gaming area, TV lounge, and recreational facilities' },
      { icon: '🌿', name: 'Garden Terrace', description: 'Beautiful terrace garden for relaxation and events' },
      { icon: '🤝', name: 'Community Events', description: 'Regular social events and community activities' }
    ],
    location: {
      address: 'Indiranagar, Bengaluru, Karnataka 560038',
      coordinates: { lat: 12.9719, lng: 77.6412 },
      nearbyAttractions: [
        { name: 'NMIMS Bangalore', distance: '3.1 km', type: 'college' },
        { name: 'Embassy Tech Village', distance: '4.2 km', type: 'tech-park' },
        { name: 'Phoenix MarketCity', distance: '3.8 km', type: 'shopping' },
        { name: 'Indiranagar Metro', distance: '800m', type: 'metro' },
        { name: 'Toit Brewpub', distance: '1.2 km', type: 'cafe' },
        { name: 'Sakra Hospital', distance: '2.5 km', type: 'hospital' },
        { name: 'Cubbon Park', distance: '4.8 km', type: 'other' }
      ]
    },
    highlights: [
      'Mixed-gender co-living community',
      'Shared spaces designed for interaction',
      'Affordable pricing with flexible terms',
      'Community kitchen for cooking enthusiasts',
      'Regular social events and activities'
    ],
    rooms: [
      { type: 'Shared Dorm (6-bed)', price: '₹10,000', availability: 18 },
      { type: 'Shared Room (3-bed)', price: '₹14,000', availability: 9 },
      { type: 'Semi-Private', price: '₹20,000', availability: 4 }
    ]
  }
]

export const getPropertyBySlug = (slug: string): Property | undefined => {
  return properties.find(property => property.slug === slug)
}