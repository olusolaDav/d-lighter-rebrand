'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail, CircleCheck as CheckCircle } from 'lucide-react'
import { toast } from 'sonner'

interface NewsletterData {
  title: string
  subtitle: string
  placeholder: string
  buttonText: string
  privacyText: string
}

interface NewsletterProps {
  data: NewsletterData
}

export default function Newsletter({ data }: NewsletterProps) {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      toast.error('Please enter your email address')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Please enter a valid email address')
      return
    }

    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubscribed(true)
      toast.success('Successfully subscribed to our newsletter!')
      setEmail('')
    }, 1500)
  }

  if (isSubscribed) {
    return (
      <section className="py-12 bg-teal-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4">
              <CheckCircle className="h-8 w-8 text-teal-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Thank you for subscribing!</h3>
            <p className="text-teal-100">You'll receive our latest updates and educational content.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 bg-teal-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full mb-4">
            <Mail className="h-6 w-6 text-teal-500" />
          </div>
          
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            {data.title}
          </h3>
          
          <p className="text-teal-100 mb-8">
            {data.subtitle}
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder={data.placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white border-0 focus:ring-2 focus:ring-white"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              variant="secondary"
              disabled={isLoading}
              className="bg-white text-teal-600 hover:bg-gray-100 font-semibold"
            >
              {isLoading ? 'Subscribing...' : data.buttonText}
            </Button>
          </form>

          <p className="text-xs text-teal-200 mt-4">
            {data.privacyText}
          </p>
        </div>
      </div>
    </section>
  )
}