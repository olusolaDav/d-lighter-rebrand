'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { BookOpen, Award, Target, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface ExamPrepItem {
  id: number
  title: string
  description: string
  color: string
  bgColor: string
  icon: string
}

interface ExamPrepData {
  title: string
  subtitle?: string
  items: ExamPrepItem[]
  ctaText?: string
  ctaLink?: string
}

interface ExamPrepProps {
  data: ExamPrepData
}

const iconMap = {
  BookOpen,
  Award,
  Target
}

export default function ExamPrep({ data }: ExamPrepProps) {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {data.title}
            </h2>
            {data.subtitle && (
              <p className="text-lg text-gray-600">
                {data.subtitle}
              </p>
            )}
          </div>
          
          <Button variant="outline" asChild className="hidden sm:flex">
            <Link href="/exams">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Exam Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {data.items.map((item, index) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap]
            
            return (
              <Card 
                key={item.id}
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div 
                    className="h-32 flex items-center justify-center relative overflow-hidden"
                    style={{ backgroundColor: item.bgColor }}
                  >
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-white transform translate-x-8 -translate-y-8"></div>
                      <div className="absolute bottom-0 left-0 w-16 h-16 rounded-full bg-white transform -translate-x-6 translate-y-6"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 text-center">
                      {IconComponent && (
                        <IconComponent className="h-8 w-8 text-white mx-auto mb-2" />
                      )}
                      <div className="text-white font-bold text-lg">
                        {item.title.split(' ')[0]}
                      </div>
                      {item.title.split(' ').length > 1 && (
                        <div className="text-white/90 text-sm">
                          {item.title.split(' ').slice(1).join(' ')}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Mobile View All Button */}
        <div className="text-center sm:hidden">
          <Button variant="outline" asChild>
            <Link href="/exams">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}