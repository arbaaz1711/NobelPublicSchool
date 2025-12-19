import React from 'react'
import { FiCalendar, FiMapPin, FiClock, FiArrowRight } from 'react-icons/fi'

const Events = () => {
  const upcomingEvents = [
    {
      title: 'Open House 2024',
      date: 'January 15, 2024',
      time: '10:00 AM - 2:00 PM',
      location: 'Main Campus',
      description: 'Tour our facilities, meet faculty, and learn about our admission process.',
      category: 'Admissions',
      color: 'bg-blue-500',
    },
    {
      title: 'Science Fair',
      date: 'February 5, 2024',
      time: '9:00 AM - 4:00 PM',
      location: 'Innovation Center',
      description: 'Annual showcase of student research and innovation projects.',
      category: 'Academic',
      color: 'bg-purple-500',
    },
    {
      title: 'Spring Concert',
      date: 'March 20, 2024',
      time: '7:00 PM - 9:00 PM',
      location: 'Auditorium',
      description: 'Music and performing arts students present their spring showcase.',
      category: 'Arts',
      color: 'bg-pink-500',
    },
    {
      title: 'Career Day',
      date: 'April 10, 2024',
      time: '9:00 AM - 3:00 PM',
      location: 'Student Center',
      description: 'Industry professionals share insights and career guidance with students.',
      category: 'Career',
      color: 'bg-green-500',
    },
    {
      title: 'Athletics Championship',
      date: 'May 8, 2024',
      time: '1:00 PM - 5:00 PM',
      location: 'Sports Complex',
      description: 'Inter-school athletics competition featuring multiple sports.',
      category: 'Sports',
      color: 'bg-orange-500',
    },
    {
      title: 'Graduation Ceremony',
      date: 'June 15, 2024',
      time: '5:00 PM - 8:00 PM',
      location: 'Main Stadium',
      description: 'Celebrating the achievements of our graduating class.',
      category: 'Special',
      color: 'bg-indigo-500',
    },
  ]

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Upcoming <span className="text-gradient">Events</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for exciting events that bring our community together and celebrate student achievements.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2 group"
            >
              {/* Category Badge */}
              <div className={`${event.color} h-2`}></div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className={`${event.color} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                    {event.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {event.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {event.description}
                </p>
                
                {/* Event Details */}
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <FiCalendar className="w-4 h-4 text-primary-600" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiClock className="w-4 h-4 text-primary-600" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiMapPin className="w-4 h-4 text-primary-600" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                {/* Register Button */}
                <button className="mt-6 w-full bg-gray-50 text-primary-600 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-all flex items-center justify-center gap-2 group-hover:gap-3">
                  Register Now
                  <FiArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Calendar CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Want to see all our events?
          </p>
          <button className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-all">
            View Full Calendar
          </button>
        </div>
      </div>
    </section>
  )
}

export default Events

