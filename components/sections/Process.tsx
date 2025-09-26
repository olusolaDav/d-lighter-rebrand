'use client'

import { Button } from '@/components/ui/button'
import { Search, Bell, Calendar, FileText, Shield, Rocket } from 'lucide-react'
import Link from 'next/link'

interface Step {
  id: number
  title: string
  description: string
  icon: string
}

interface ProcessData {
  title: string
  subtitle: string
  ctaText: string
  steps: Step[]
}

interface ProcessProps {
  data: ProcessData
}

const iconMap = {
  Search,
  Bell,
  Calendar,
  FileText,
  Shield,
  Rocket
}

export default function Process({ data }: ProcessProps) {
  return (
    <section id="process" className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              {data.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {data.subtitle}
            </p>
            <Button size="lg" asChild>
              <Link href="/find-tutor">
                {data.ctaText}
              </Link>
            </Button>
          </div>
          
          {/* Decorative illustration */}
          <div className="hidden lg:block relative">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
              <div className="w-32 h-32 bg-white rounded-full shadow-xl flex items-center justify-center">
                <Search className="h-16 w-16 text-blue-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {data.steps.map((step, index) => {
            const IconComponent = iconMap[step.icon as keyof typeof iconMap]
            const isEven = index % 2 === 1
            
            return (
              <div
                key={step.id}
                className={`lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Content */}
                <div className={`space-y-4 ${isEven ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                      {IconComponent && <IconComponent className="h-6 w-6 text-white" />}
                    </div>
                    <div className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      Step {step.id}
                    </div>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Visual element */}
                <div className={`mt-6 lg:mt-0 ${isEven ? 'lg:order-1' : ''}`}>
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                      <div className="text-center space-y-2">
                        {IconComponent && (
                          <IconComponent className="h-12 w-12 text-gray-400 mx-auto" />
                        )}
                        <div className="text-sm font-medium text-gray-500">
                          Step {step.id} Visualization
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Connection line */}
                  {index < data.steps.length - 1 && (
                    <div className="hidden lg:block absolute left-1/2 w-px h-16 bg-gradient-to-b from-blue-200 to-transparent transform -translate-x-1/2 mt-8"></div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}