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

// Only actual properties - 89 Xquisit uses Properties component, not this data
export const properties: Property[] = []

export const getPropertyBySlug = (slug: string): Property | undefined => {
  return properties.find(property => property.slug === slug)
}