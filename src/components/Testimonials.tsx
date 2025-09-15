import React from 'react'

interface Testimonial {
  id: string
  name: string
  property: string
  quote: string
  image: string
  rating: number
  duration: string
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Jane D.',
      property: 'bnchmark Community House',
      quote: "I've never felt more at home. The facilities are top-notch and the community is amazing. The co-living experience has been life-changing!",
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      rating: 5,
      duration: '8 months'
    },
    {
      id: '2',
      name: 'Priya S.',
      property: 'bnchmark Luxury Living',
      quote: "The girls PG is perfect for working women. Clean, safe, and the food is absolutely delicious. The staff is very caring and responsive.",
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      rating: 5,
      duration: '1 year'
    },
    {
      id: '3',
      name: 'Rahul M.',
      property: 'bnchmark Executive Suites',
      quote: "As a software engineer, I needed a place that supports my work-life balance. The amenities and environment here are perfect for professionals.",
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      rating: 5,
      duration: '6 months'
    },
    {
      id: '4',
      name: 'Sneha K.',
      property: 'bnchmark Community House',
      quote: "The community events and shared spaces helped me make lifelong friends. It's more than just accommodation - it's a lifestyle!",
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      rating: 5,
      duration: '10 months'
    }
  ]

  const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-4 h-4 ${
              index < rating ? 'text-yellow-500' : 'text-grey-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    )
  }

  return (
    <section id="testimonials" className="py-20 bg-grey-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-grey-900 mb-4">
            What Our Residents Say
          </h2>
          <p className="text-xl text-grey-600 max-w-3xl mx-auto">
            Hear from our happy residents about their experience living with bnchmark.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg border border-grey-200 p-8 hover:shadow-xl hover:border-yellow-300 transition-all duration-300"
            >
              {/* Quote */}
              <div className="mb-6">
                <svg
                  className="w-8 h-8 text-yellow-200 mb-4"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M13.333 8.667C13.333 4.085 9.915 0.667 5.333 0.667S-2.667 4.085-2.667 8.667c0 4.581 3.419 8 8 8h2.667v10.667c0 1.472 1.194 2.667 2.667 2.667h8c1.472 0 2.667-1.194 2.667-2.667V16c0-4.044-3.289-7.333-7.333-7.333zM32 8.667C32 4.085 28.581 0.667 24 0.667s-8 3.419-8 8c0 4.581 3.419 8 8 8h2.667v10.667c0 1.472 1.194 2.667 2.667 2.667h8c1.472 0 2.667-1.194 2.667-2.667V16c0-4.044-3.289-7.333-7.333-7.333z" />
                </svg>
                <p className="text-grey-700 text-lg leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Rating */}
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Resident Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-grey-200"
                />
                <div>
                  <h4 className="font-semibold text-grey-900">{testimonial.name}</h4>
                  <p className="text-sm text-grey-600">{testimonial.property}</p>
                  <p className="text-xs text-grey-500">Resident for {testimonial.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Residents</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">4.8</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">3</div>
              <div className="text-gray-600">Premium Locations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Join our community of satisfied residents
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Start Your Journey
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials