'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Plus, Minus, CircleHelp as HelpCircle } from 'lucide-react'
import Link from 'next/link'

interface FAQItem {
  id: number
  question: string
  answer: string
}

interface FAQData {
  title: string
  subtitle: string
  items: FAQItem[]
  ctaText?: string
  ctaLink?: string
}

interface FAQProps {
  data: FAQData
}

export default function FAQ({ data }: FAQProps) {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <section className="py-16 sm:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
        <div className="relative w-full h-full">
          {/* Question mark illustration */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-orange-400 rounded-full flex items-center justify-center">
            <HelpCircle className="h-16 w-16 text-white" />
          </div>
          <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-blue-400 rounded-lg transform rotate-12"></div>
          <div className="absolute top-1/3 right-1/2 w-16 h-16 bg-green-400 rounded-full"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="mb-12 lg:mb-0">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                {data.title}
              </h2>
              <Button variant="outline" asChild className="hidden sm:flex">
                <Link href="/faq">View All</Link>
              </Button>
            </div>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {data.subtitle}
            </p>

            {/* FAQ Items */}
            <div className="space-y-4">
              {data.items.map((item, index) => {
                const isOpen = openItems.includes(item.id)
                
                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-gray-900 pr-4">
                        {item.question}
                      </span>
                      <div className="flex-shrink-0">
                        {isOpen ? (
                          <Minus className="h-5 w-5 text-blue-600" />
                        ) : (
                          <Plus className="h-5 w-5 text-gray-400" />
                        )}
                      </div>
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Mobile View All Button */}
            <div className="mt-8 sm:hidden">
              <Button variant="outline" asChild className="w-full">
                <Link href="/faq">View All FAQs</Link>
              </Button>
            </div>
          </div>

          {/* Illustration */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
                <div className="w-48 h-48 bg-white rounded-full shadow-xl flex items-center justify-center">
                  <HelpCircle className="h-24 w-24 text-blue-600" />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center animate-bounce">
                <span className="text-white font-bold text-xl">?</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-white font-bold">!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}