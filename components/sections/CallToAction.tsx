'use client'

import { Button } from '@/components/ui/button'
import { GraduationCap, Users, Star, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface CtaData {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
}

interface CallToActionProps {
  data: CtaData
}

export default function CallToAction({ data }: CallToActionProps) {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-white blur-3xl"></div>
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {data.title}
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                {data.subtitle}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" variant="secondary" asChild className="group">
                <Link href={data.ctaLink}>
                  {data.ctaText}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
                Learn More
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-blue-400/30">
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full mx-auto mb-2">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
                <div className="text-lg font-semibold text-white">Expert</div>
                <div className="text-sm text-blue-200">Tutors</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full mx-auto mb-2">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div className="text-lg font-semibold text-white">1000+</div>
                <div className="text-sm text-blue-200">Students</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full mx-auto mb-2">
                  <Star className="h-5 w-5 text-white" />
                </div>
                <div className="text-lg font-semibold text-white">4.9/5</div>
                <div className="text-sm text-blue-200">Rating</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="mt-12 lg:mt-0 relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="aspect-square bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Main illustration */}
                <div className="relative z-10">
                  <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center shadow-xl">
                    <GraduationCap className="h-16 w-16 text-blue-600" />
                  </div>
                </div>
                
                {/* Animated elements */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                  <Star className="h-6 w-6 text-white" />
                </div>
                
                <div className="absolute bottom-4 left-4 w-10 h-10 bg-green-400 rounded-full flex items-center justify-center animate-pulse">
                  <Users className="h-5 w-5 text-white" />
                </div>
                
                {/* Background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
              </div>
            </div>
            
            {/* Floating testimonial */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl border max-w-xs animate-float">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-blue-600">5★</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">"Amazing tutoring!"</div>
                  <div className="text-xs text-gray-500">- Sarah M.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}