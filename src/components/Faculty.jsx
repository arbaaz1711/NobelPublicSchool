import React from 'react'
import { FiMail, FiPhone } from 'react-icons/fi'
import principalImage from '../assets/images/Principal-with-whiteBG.jpeg'

const Faculty = () => {
  const principal = {
    name: 'Dr. SOURABH DUBEY',
    role: 'Principal',
    image: principalImage,
    phone: '8109843847',
    email: 'principal@Nobelpublicschool.edu',
  }

  return (
    <section id="leadership" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-gradient">Leadership</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the visionary leader guiding Nobel Public School towards excellence in education.
          </p>
        </div>

        {/* Principal Card - Centered */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center p-8">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={principal.image} 
                    alt={principal.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Content Side */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    {principal.role}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {principal.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Leading Nobel Public School with dedication and commitment to excellence in education, 
                    shaping young minds for a brighter future.
                  </p>
                </div>
                
                {/* Contact Information */}
                <div className="space-y-4">
                  <a
                    href={`tel:${principal.phone}`}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-primary-50 transition-all group"
                  >
                    <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FiPhone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Contact Number</div>
                      <div className="font-semibold text-gray-900">{principal.phone}</div>
                    </div>
                  </a>
                  
                  <a
                    href={`mailto:${principal.email}`}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-primary-50 transition-all group"
                  >
                    <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FiMail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Email Address</div>
                      <div className="font-semibold text-gray-900">{principal.email}</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Message from Principal */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Message from the Principal</h3>
            <p className="text-lg text-primary-100 leading-relaxed">
              "At Nobel Public School, we believe that diligence truly earns eminence. Our commitment is to provide 
              an environment where every student can thrive, grow, and achieve their fullest potential. Together, 
              we build not just successful students, but responsible citizens of tomorrow."
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-1 w-20 bg-primary-300"></div>
              <p className="font-semibold">{principal.name}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faculty

