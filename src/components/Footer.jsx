import React from 'react'
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiYoutube, FiMail } from 'react-icons/fi'
import logo from '../assets/images/logo.jpg'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    about: [
      { name: 'Our Story', href: '#' },
      { name: 'Mission & Values', href: '#' },
      { name: 'Leadership', href: '#' },
      { name: 'Accreditation', href: '#' },
      { name: 'Careers', href: '#' },
    ],
    academics: [
      { name: 'Programs', href: '#programs' },
      { name: 'Curriculum', href: '#' },
      { name: 'Leadership', href: '#leadership' },
      { name: 'Student Life', href: '#' },
      { name: 'Academic Calendar', href: '#' },
    ],
    admissions: [
      { name: 'Apply Now', href: '#' },
      { name: 'Tuition & Aid', href: '#' },
      { name: 'Visit Campus', href: '#' },
      { name: 'Requirements', href: '#' },
      { name: 'FAQ', href: '#' },
    ],
    resources: [
      { name: 'Parent Portal', href: '#' },
      { name: 'Student Portal', href: '#' },
      { name: 'Library', href: '#' },
      { name: 'Alumni Network', href: '#' },
      { name: 'Leadership', href: '#leadership' },
    ],
  }

  const socialLinks = [
    { icon: FiFacebook, href: '#', label: 'Facebook' },
    { icon: FiTwitter, href: '#', label: 'Twitter' },
    { icon: FiInstagram, href: '#', label: 'Instagram' },
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FiYoutube, href: '#', label: 'YouTube' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Stay Connected
              </h3>
              <p className="text-gray-400">
                Subscribe to our newsletter for updates, news, and events.
              </p>
            </div>
            <div>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 outline-none transition-all text-white"
                />
                <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center gap-2">
                  <FiMail />
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <a href="#home" className="flex items-center space-x-2 mb-4">
              <img 
                src={logo} 
                alt="Nobel Public School Logo" 
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div>
                <span className="font-bold text-lg text-white block">
                  Nobel Public School
                </span>
                <span className="text-xs text-gray-400 block">
                  Diligence Earns Eminence
                </span>
              </div>
            </a>
            <p className="text-gray-400 text-sm mb-6">
              Shaping tomorrow's leaders through excellence in education.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold text-white mb-4">About</h4>
            <ul className="space-y-2">
              {footerLinks.about.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Academics</h4>
            <ul className="space-y-2">
              {footerLinks.academics.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Admissions</h4>
            <ul className="space-y-2">
              {footerLinks.admissions.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Nobel Public School. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

