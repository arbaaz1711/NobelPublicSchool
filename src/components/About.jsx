import React from 'react'
import { FiTarget, FiHeart, FiTrendingUp, FiGlobe } from 'react-icons/fi'
import classImage from '../assets/images/class.jpeg'
import assemblyImage1 from '../assets/images/assembly-front-1.jpeg'
import assemblyImage2 from '../assets/images/assembly-back-1.jpeg'
import fullImage from '../assets/images/full-2.jpeg'

const About = () => {
  const values = [
    {
      icon: FiTarget,
      title: 'Excellence',
      description: 'We strive for the highest standards in education and personal development.',
    },
    {
      icon: FiHeart,
      title: 'Integrity',
      description: 'We build character through honesty, respect, and ethical behavior.',
    },
    {
      icon: FiTrendingUp,
      title: 'Innovation',
      description: 'We embrace creativity and forward-thinking approaches to learning.',
    },
    {
      icon: FiGlobe,
      title: 'Global Citizenship',
      description: 'We prepare students to make a positive impact on the world.',
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-gradient">Nobel Public School</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For over 50 years, we've been nurturing young minds and fostering a love for learning that lasts a lifetime.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Nobel Public School is committed to providing a transformative educational experience that develops the intellectual, creative, and emotional capacities of every student.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We believe in fostering a community where diversity is celebrated, critical thinking is encouraged, and every student is empowered to reach their full potential.
            </p>
            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600">50+</div>
                <div className="text-gray-600">Years Legacy</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600">95%</div>
                <div className="text-gray-600">College Acceptance</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600">15:1</div>
                <div className="text-gray-600">Student Ratio</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl h-96 overflow-hidden shadow-xl">
              <img 
                src={classImage} 
                alt="Nobel Public School Classroom" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Campus Gallery */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Campus
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <img 
                src={assemblyImage1} 
                alt="School Assembly" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <img 
                src={assemblyImage2} 
                alt="School Assembly" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <img 
                src={fullImage} 
                alt="School Building" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

