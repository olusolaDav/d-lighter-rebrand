'use client'

import { Button } from '@/components/ui/button'
import { Users, Award, Target, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface AboutData {
  title: string
  description: string
  ctaText: string
  ctaLink: string
}

interface AboutProps {
  data: AboutData
}

export default function About({ data }: AboutProps) {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Visual */}
          <div className="relative mb-12 lg:mb-0">
            <div className="aspect-square bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl flex items-center justify-center relative overflow-hidden">
              {/* Central illustration */}
              <div className="relative z-10 bg-white rounded-2xl p-8 shadow-xl">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                  <Users className="h-16 w-16 text-white" />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-1/4 left-1/4 bg-white rounded-full p-3 shadow-lg animate-float">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              
              <div className="absolute bottom-1/4 right-1/4 bg-white rounded-full p-3 shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                <Target className="h-6 w-6 text-indigo-600" />
              </div>
              
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400 via-transparent to-indigo-400"></div>
              </div>
            </div>
            
            {/* Statistics cards */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl border">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
            
            <div className="absolute -top-8 -left-8 bg-white rounded-2xl p-6 shadow-xl border">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                {data.title}
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {data.description}
              </p>
            </div>

            {/* Key features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="font-medium text-gray-900">Qualified Tutors</span>
                </div>
                <p className="text-sm text-gray-600 ml-4">Expert educators with proven track records</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="font-medium text-gray-900">Personalized Matching</span>
                </div>
                <p className="text-sm text-gray-600 ml-4">AI-powered tutor selection based on your needs</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="font-medium text-gray-900">Secure Platform</span>
                </div>
                <p className="text-sm text-gray-600 ml-4">Safe and secure learning environment</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="font-medium text-gray-900">Flexible Scheduling</span>
                </div>
                <p className="text-sm text-gray-600 ml-4">Learn at your own pace and convenience</p>
              </div>
            </div>

            <Button size="lg" asChild className="group">
              <Link href={data.ctaLink}>
                {data.ctaText}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}