'use client'

import Link from 'next/link'
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ExternalLink } from 'lucide-react'

const footerLinks = {
  company: [
    { name: 'About us', href: '/about' },
    { name: 'Our Mission', href: '/mission' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
  ],
  services: [
    { name: 'Find a Tutor', href: '/find-tutor' },
    { name: 'Become a Tutor', href: '/become-tutor' },
    { name: 'All Classes', href: '/classes' },
    { name: 'Online Learning', href: '/online-learning' },
  ],
  support: [
    { name: 'Help Center', href: '/help' },
    { name: 'FAQs', href: '/faq' },
    { name: 'Contact us', href: '/contact' },
    { name: 'Exams', href: '/exams' },
    { name: 'Blog', href: '/blog' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR', href: '/gdpr' },
  ],
}

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-white"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company info */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                  <GraduationCap className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">D-lighter Tutor</span>
              </Link>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Connecting students with qualified tutors for personalized learning experiences. 
                Transform your academic journey with expert guidance.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">info@dlighter-tutor.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">123 Education St, Learning City, LC 12345</span>
                </div>
              </div>
            </div>

            {/* Footer links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Links</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contacts</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm">+447042297441</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm">info@dlighter-tutor.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm">123 Education St, Learning City</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold mb-3 text-gray-300">Follow us on</h4>
                <div className="flex items-center space-x-3">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon
                    return (
                      <Link
                        key={social.name}
                        href={social.href}
                        className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                        aria-label={social.name}
                      >
                        <IconComponent className="h-4 w-4" />
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          
          {/* Company Description */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="max-w-3xl">
              <p className="text-gray-400 text-sm leading-relaxed">
                D-lighter Tutor is an online-based platform dedicated to connecting parents or students 
                seeking tuition with experienced tutors. Our primary objective is to simplify the process of 
                finding qualified tutors who meet the specific requirements and preferences of parents or 
                students.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 D-lighter Tutor. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-4 text-sm">
              {footerLinks.legal.map((link, index) => (
                <div key={link.name} className="flex items-center">
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                  {index < footerLinks.legal.length - 1 && (
                    <span className="text-gray-600 ml-4">|</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}