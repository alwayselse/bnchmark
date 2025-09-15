import React, { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight, Linkedin, Mail } from 'lucide-react'

interface TeamMember {
  id: string
  name: string
  jobTitle: string
  image: string
  bio: string
  email: string
  linkedin?: string
}

const Team: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Sanjay Mehta',
      jobTitle: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b77c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Visionary leader with 10+ years in hospitality and real estate',
      email: 'sanjay@bnchmark.com',
      linkedin: 'https://linkedin.com/in/priyasharma'
    },
    {
      id: '2',
      name: 'Arjun Patel',
      jobTitle: 'Property Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Expert in property management and resident satisfaction',
      email: 'arjun@bnchmark.com',
      linkedin: 'https://linkedin.com/in/arjunpatel'
    },
    {
      id: '3',
      name: 'Sneha Reddy',
      jobTitle: 'Community Coordinator',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Passionate about building vibrant communities and organizing events',
      email: 'sneha@bnchmark.com'
    },
    {
      id: '4',
      name: 'Rahul Kumar',
      jobTitle: 'Head chef',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Technology enthusiast ensuring seamless digital experiences',
      email: 'rahul@bnchmark.com',
      linkedin: 'https://linkedin.com/in/rahulkumar'
    },
    {
      id: '5',
      name: 'Cleaning staff',
      jobTitle: 'Guest Relations Manager',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Dedicated to providing exceptional resident experiences',
      email: 'kavya@bnchmark.com'
    },
    {
      id: '6',
      name: 'Help cook',
      jobTitle: 'Operations Head',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Operations expert ensuring smooth day-to-day management',
      email: 'vikram@bnchmark.com',
      linkedin: 'https://linkedin.com/in/vikramsingh'
    },
    {
      id: '7',
      name: 'Meera Joshi',
      jobTitle: 'Security staff',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Creative marketer building the bnchmark brand story',
      email: 'meera@bnchmark.com'
    },
    {
      id: '8',
      name: 'Aditya Gupta',
      jobTitle: 'Reception manager',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Financial strategist ensuring sustainable growth',
      email: 'aditya@bnchmark.com',
      linkedin: 'https://linkedin.com/in/adityagupta'
    }
  ]

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' })
      setTimeout(checkScrollButtons, 300)
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' })
      setTimeout(checkScrollButtons, 300)
    }
  }

  React.useEffect(() => {
    checkScrollButtons()
    const handleResize = () => checkScrollButtons()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-grey-900 mb-4">
            Meet the Team
          </h2>
          <p className="text-xl text-grey-600 max-w-3xl mx-auto">
            Our passionate team of professionals is dedicated to creating exceptional living experiences 
            and building vibrant communities across Bengaluru.
          </p>
        </div>

        {/* Team Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-grey-200 flex items-center justify-center transition-all duration-200 ${
              canScrollLeft 
                ? 'text-yellow-600 hover:bg-yellow-50 hover:border-yellow-300 cursor-pointer' 
                : 'text-grey-300 cursor-not-allowed'
            }`}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={scrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-grey-200 flex items-center justify-center transition-all duration-200 ${
              canScrollRight 
                ? 'text-yellow-600 hover:bg-yellow-50 hover:border-yellow-300 cursor-pointer' 
                : 'text-grey-300 cursor-not-allowed'
            }`}
            disabled={!canScrollRight}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto team-carousel px-12 py-4"
            onScroll={checkScrollButtons}
          >
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="flex-shrink-0 w-80 bg-grey-50 rounded-xl p-6 hover:shadow-lg hover:bg-white transition-all duration-300 border border-grey-200 hover:border-yellow-300 group"
              >
                {/* Member Image */}
                <div className="flex flex-col items-center mb-4">
                  <div className="relative mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md group-hover:border-yellow-200 transition-all duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Member Info */}
                  <h3 className="text-xl font-bold text-grey-900 mb-1 text-center">
                    {member.name}
                  </h3>
                  <p className="text-yellow-600 font-semibold mb-3 text-center">
                    {member.jobTitle}
                  </p>
                </div>

                {/* Bio */}
                <p className="text-grey-600 text-sm leading-relaxed mb-6 text-center">
                  {member.bio}
                </p>

                {/* Contact Links */}
                <div className="flex justify-center space-x-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 bg-grey-200 hover:bg-yellow-100 rounded-lg flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Mail className="w-5 h-5 text-grey-600 group-hover:text-yellow-600" />
                  </a>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-grey-200 hover:bg-yellow-100 rounded-lg flex items-center justify-center transition-colors duration-200 group"
                    >
                      <Linkedin className="w-5 h-5 text-grey-600 group-hover:text-yellow-600" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">20+</div>
            <div className="text-grey-600">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">10+</div>
            <div className="text-grey-600">Years Combined Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">24/7</div>
            <div className="text-grey-600">Dedicated Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team