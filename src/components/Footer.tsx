import React from 'react'

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const quickLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'Properties', id: 'properties' },
    { label: 'Amenities', id: 'amenities' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' }
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-grey-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-2xl font-bold text-white hover:text-yellow-400 transition-colors"
              >
                bnchmarc
              </button>
            </div>
            <p className="text-grey-300 mb-6 max-w-md leading-relaxed">
              Premium co-living spaces designed for comfort, community, and convenience in Bengaluru.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:+917411057111" className="flex items-center text-grey-300 hover:text-yellow-400 transition-colors">
                <svg className="w-5 h-5 mr-3 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 7411057111
              </a>
              <a href="mailto:booking@bnchmarc.com" className="flex items-center text-grey-300 hover:text-yellow-400 transition-colors">
                <svg className="w-5 h-5 mr-3 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                booking@bnchmarc.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-grey-300 hover:text-yellow-400 transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Properties */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Properties</h3>
            <ul className="space-y-3">
              <li><span className="text-grey-300">89 Xquisit - Mathikere</span></li>
              <li><span className="text-grey-300">Atlantis - Nagavara</span></li>
              <li><span className="text-grey-300">220 Coffee Board</span></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-grey-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-grey-400 text-sm">
                © {currentYear} bnchmark. All rights reserved.
              </p>
            </div>

            {/* Back to Top */}
            <button
              onClick={() => scrollToSection('hero')}
              className="inline-flex items-center px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-grey-900 rounded-lg transition-colors duration-200 text-sm font-semibold"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer