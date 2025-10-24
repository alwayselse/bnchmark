import React, { useEffect, useRef } from 'react'
import { Star, Quote } from 'lucide-react'

interface Review {
  name: string
  rating: number
  text: string
  date: string
}

const Testimonials: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const reviews: Review[] = [
    {
      name: "Krishnendu Dey",
      rating: 5,
      text: "I've had such a pleasant experience at 89xquisit PG. It truly feels like a second home. The rooms are cozy, clean, and well-kept. The food tastes just like homemade meals, and the staff are always kind and ready to help. The environment is peaceful and safe, which makes it perfect for both students and working professionals.",
      date: "2 months ago"
    },
    {
      name: "Prasanna Siva",
      rating: 5,
      text: "My stay at 89xquisit PG has been excellent. The rooms are spacious, neat, and regularly cleaned. The management is professional and always attentive to residents comfort. The food served is delicious and feels homemade. With good security, Wi-Fi, and all basic amenities, this PG truly offers great value for money. I would gladly recommend it to anyone looking for a comfortable and reliable place to stay.",
      date: "20 days ago"
    },
    {
      name: "Bhaskar hansda",
      rating: 5,
      text: "The PG offers excellent accommodation with all necessary amenities. The hygiene, maintenance, and services are well-managed. The staff is cooperative and ensures a pleasant stay for all residents. Great value for money.",
      date: "5 months ago"
    },
    {
      name: "Vignesh Gamer",
      rating: 5,
      text: "Fantastic place to stay! 89xquisit PG has clean rooms, great food, and very supportive management. The environment is safe, peaceful, and ideal for both students and professionals. Highly recommended",
      date: "3 months ago"
    },
    {
      name: "Satvik S",
      rating: 5,
      text: "I had an amazing experience at 89 Xquisit! The staff were incredibly warm and accommodating, the rooms were pretty cozy and the location made it so easy to get around and explore the city. The terrace also is a good space to get away from the noise around and relax!",
      date: "2 weeks ago"
    },
    {
      name: "Rajeshwari",
      rating: 5,
      text: "Absolutely love my time at 89 xquisit The amenities are fantastic, from the reliable high-speed Wi-Fi to the clean and modern kitchen. Everything is well-maintained, and the hassle-free all-inclusive rent is a game-changer. It is a great value for the quality of living.",
      date: "3 weeks ago"
    },
    {
      name: "Abid Iqbal Keen",
      rating: 5,
      text: "My Son lives in this hostel from last one year it is one of the Best PG hostels in Banglore. It has clean rooms with Tv, Ac, Wardrobe Study table clean bed and calm atmosphere and all other facilities like RO water purifier in every floor, Common Fridge in every floor, House keeping staff is good and maintains the room changes between sheets and sanitized washrooms every weekend. Food is Awesome And on security is also satisfactory. Terrace is also well maintained where students can relax and chill. I Would recommend to parents to send there children to the hostal.",
      date: "3 months ago"
    },
    {
      name: "Tanya K",
      rating: 5,
      text: "I had a pleasant stay and the hospitality was top notch. I can feel the Antique design of the premises at every single step. All the basic necessities are available. The staff is helpful. Has spacious and clean Room. The food provided is hygienic and nutritious. Terrace view will definitely be the best in my stay.",
      date: "2 years ago"
    },
    {
      name: "Daivik Banerjee",
      rating: 5,
      text: "Had a Very Nice Stay Here, The place is clean and food served is also good. Water supply and electricity is also proper. Would recommend anyone who wants to stay for a short or a long period in Bangalore to definitely consider this place, from students to working professionals.",
      date: "2 years ago"
    },
    {
      name: "RISHIKA MAHAJAN",
      rating: 5,
      text: "Feels like home! The best stay in that area for all the students and working people. All the basic necessities are easy available. The staff is really helpful. The rooms are spacious, clean and beautiful. The furniture provided is amazing! The food provided is made in house which is fresh, hygienic, tasty and nutritious. Cleaning is done on alternate days. Washing machines are available in the common area. Parking space is available. Refrigerators are available on each floor. Common kitchen is there in the dining area to cook food. Microwave facility is also there. Terrace is as beautiful as it is shown in the pictures. In short, everything a person requires to live properly is available and the place radiates positive energy.",
      date: "3 years ago"
    },
    {
      name: "Sud",
      rating: 5,
      text: "I'll never ever find a better place than this one. Trust me, I've been to many PG's (ZOLO, GREXTER, HELLOWORLD, etc.) and flats in Bangalore (including HSR Layout where it's too much costly), but the services they give, the security, the vibes and environment, the places around, all top restaurants (from cheap-affordable to fancy-costly), gym, etc. everything is available. They don't charge for move-in or move-out (but if you damage the property then it's chargeable). They don't have any hidden charges. I moved-in and moved-out smoothly. I really miss this place. Everything is well organized which I love the most. The owner and the staff are so polite and they always try their best to help you.",
      date: "3 years ago"
    },
    {
      name: "Sharanya Mukherjee",
      rating: 5,
      text: "I have been staying here for one year and it is the best pg I could have wanted. The property is really good and clean. And the food here is recommendable. Really a good place to stay and enjoy.",
      date: "3 years ago"
    },
    {
      name: "Prerna Baksh",
      rating: 5,
      text: "After scanning most of the nearby PGs, finally landed at 89 Xquisit whereby the topography of it had given me a solace that something of my choice was finally met. Yes indeed when walked in myself and my parents were really satisfied looking at the facilities provided here as it gave me a real feeling of my home though faraway. This cosy haven has indeed made my stay a happy and relaxing one. Thus, looking forward to a blessed and beautiful experience here.",
      date: "4 years ago"
    }
  ]

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    let scrollInterval: ReturnType<typeof setInterval> | null = null

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0
        } else {
          scrollContainer.scrollLeft += 1
        }
      }, 30) // Adjust speed here (lower = faster)
    }

    const stopScrolling = () => {
      if (scrollInterval !== null) {
        clearInterval(scrollInterval)
        scrollInterval = null
      }
    }

    startScrolling()

    // Pause on hover
    scrollContainer.addEventListener('mouseenter', stopScrolling)
    scrollContainer.addEventListener('mouseleave', startScrolling)

    return () => {
      if (scrollInterval !== null) {
        clearInterval(scrollInterval)
      }
      scrollContainer.removeEventListener('mouseenter', stopScrolling)
      scrollContainer.removeEventListener('mouseleave', startScrolling)
    }
  }, [])

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1 mb-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= rating
                ? 'fill-yellow-500 text-yellow-500'
                : 'fill-grey-300 text-grey-300'
            }`}
          />
        ))}
      </div>
    )
  }

  // Duplicate reviews for seamless loop
  const duplicatedReviews = [...reviews, ...reviews]

  return (
    <section id="testimonials" className="py-20 bg-grey-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-grey-900 mb-4">
            What Our <span className="text-yellow-500">Residents Say</span>
          </h2>
          <p className="text-xl text-grey-600 max-w-3xl mx-auto">
            Real reviews from our Google Business listing
          </p>
        </div>

        {/* Auto-scrolling container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-hidden mb-12"
          style={{ scrollBehavior: 'auto' }}
        >
          {duplicatedReviews.map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 sm:w-96 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-grey-200 relative"
            >
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-12 h-12 text-yellow-500" />
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-grey-900">{review.name}</h4>
                  <p className="text-sm text-grey-500">{review.date} on Google</p>
                </div>
              </div>

              {renderStars(review.rating)}

              <p className="text-grey-700 leading-relaxed line-clamp-6">{review.text}</p>

              <div className="mt-4 pt-4 border-t border-grey-100">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="text-xs text-grey-600 font-medium">Google Review</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.google.com/travel/search?q=89%20xquisit&g2lb=4965990%2C72317059%2C72414906%2C72471280%2C72472051%2C72485658%2C72560029%2C72573224%2C72616120%2C72647020%2C72686036%2C72803964%2C72882230%2C72958624%2C72959983%2C73010541%2C73053698%2C73059275%2C73064764%2C73107089%2C73127086%2C73148424&hl=en-IN&gl=in&cs=1&ssta=1&ts=CAEaKgooEiYyJDB4M2JhZTE3ZmJhNzg4MGVhNToweGQ4YzJjNjlmYzk0MzI4ZQ&qs=CAEyE0Nnb0lqdVhRNUotTmk4WU5FQUU4Ag&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwiokfPFhLuQAxUAAAAAHQAAAAAQBw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-grey-900 font-semibold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Leave a Review on Google
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
