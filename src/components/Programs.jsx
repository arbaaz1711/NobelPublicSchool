import React from 'react'
import { FiCode, FiBookOpen, FiTrendingUp, FiGlobe, FiMusic, FiActivity } from 'react-icons/fi'

const Programs = () => {
  const programs = [
    {
      icon: FiBookOpen,
      title: 'Advanced Academics',
      description: 'Rigorous curriculum with AP and honors courses designed to challenge and inspire.',
      features: ['AP Courses', 'Honors Program', 'Advanced Mathematics'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: FiCode,
      title: 'STEM Excellence',
      description: 'Cutting-edge science, technology, engineering, and mathematics programs.',
      features: ['Robotics Lab', 'Computer Science', 'Innovation Center'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: FiMusic,
      title: 'Arts & Culture',
      description: 'Comprehensive arts program fostering creativity and cultural appreciation.',
      features: ['Visual Arts', 'Music & Drama', 'Cultural Studies'],
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: FiActivity,
      title: 'Athletics',
      description: 'Competitive sports programs promoting health, teamwork, and leadership.',
      features: ['Team Sports', 'Individual Training', 'Wellness Programs'],
      color: 'from-green-500 to-green-600',
    },
    {
      icon: FiGlobe,
      title: 'Global Studies',
      description: 'International curriculum preparing students for a connected world.',
      features: ['Language Programs', 'Exchange Programs', 'Global Issues'],
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: FiTrendingUp,
      title: 'Leadership Development',
      description: 'Programs focused on developing future leaders and change-makers.',
      features: ['Student Council', 'Debate Club', 'Social Impact'],
      color: 'from-indigo-500 to-indigo-600',
    },
  ]

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-gradient">Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover a wide range of exceptional programs designed to unlock every student's potential.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2"
            >
              {/* Icon Header */}
              <div className={`bg-gradient-to-r ${program.color} p-6`}>
                <program.icon className="w-12 h-12 text-white" />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {program.description}
                </p>
                
                {/* Features */}
                <div className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="text-primary-600 font-semibold hover:text-primary-700 flex items-center group-hover:gap-2 transition-all">
                  Learn More
                  <span className="ml-1 group-hover:ml-0 transition-all">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Want to learn more about our programs?
          </p>
          <button className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl">
            Download Program Guide
          </button>
        </div>
      </div>
    </section>
  )
}

export default Programs

