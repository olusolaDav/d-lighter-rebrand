import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import ExamPrep from '@/components/sections/ExamPrep'
import Process from '@/components/sections/Process'
import About from '@/components/sections/About'
import CallToAction from '@/components/sections/CallToAction'
import FAQ from '@/components/sections/FAQ'
import Newsletter from '@/components/sections/Newsletter'
import Footer from '@/components/layout/Footer'
import { Toaster } from '@/components/ui/sonner'

const heroData = {
  title: "Discover your perfect tutoring match",
  subtitle: "Enjoy personalized learning that can accommodate students in all subjects, topics and skills.",
  ctaText: "Find a Tutor",
  ctaLink: "#process"
}

const featuresData = {
  title: "Why choose us?",
  features: [
    {
      id: 1,
      title: "Extensive Subject & Skill Coverage",
      description: "Explore a diverse range of subjects and skill development opportunities. From general subjects to practical skills, we've got you covered for a well-rounded learning experience.",
      icon: "BookOpen"
    },
    {
      id: 2,
      title: "Interactive Learning Resources",
      description: "Access interactive learning resources such as quizzes, exercises, games, and multimedia content to boost engagement and enrich the learning process for students.",
      icon: "Monitor"
    },
    {
      id: 3,
      title: "Personalized Tutor Matching",
      description: "Our tutors adapt teaching to each student's needs and learning style, providing personalized instruction for maximum potential.",
      icon: "Lightbulb"
    }
  ]
}

const examPrepData = {
  title: "Prepare for Exams",
  subtitle: "Get ready for your important exams with our specialized tutoring programs",
  items: [
    {
      id: 1,
      title: "Scholastic Aptitude Test",
      description: "Comprehensive SAT preparation with practice tests, strategies, and personalized coaching to achieve your target score.",
      color: "#2563EB",
      bgColor: "#2563EB",
      icon: "BookOpen"
    },
    {
      id: 2,
      title: "Cambridge Primary Checkpoint",
      description: "Expert guidance for Cambridge Primary Checkpoint exams with curriculum-aligned content and assessment preparation.",
      color: "#FFFFFF",
      bgColor: "#14B8A6",
      icon: "Award"
    },
    {
      id: 3,
      title: "Cambridge Lower Secondary Checkpoint",
      description: "Specialized tutoring for Cambridge Lower Secondary Checkpoint with focus on key subjects and exam techniques.",
      color: "#FFFFFF",
      bgColor: "#84CC16",
      icon: "Target"
    }
  ]
}

const processData = {
  title: "Steps to finding your perfect tutor",
  subtitle: "We're committed to simplifying your learning journey. Get started today by finding your perfect tutor and light the way to your success!",
  ctaText: "Find a Tutor",
  steps: [
    {
      id: 1,
      title: "Discover Your Ideal Match",
      description: "Click on 'Find a Tutor' to complete the Tutor request Form and share your preferences and desired subject or skill. Our platform's intelligent algorithm will select tutors tailored to your specific needs.",
      icon: "Search"
    },
    {
      id: 2,
      title: "Get Notified of Your Match",
      description: "Upon review of your application, you'll receive an email notification. We'll then communicate the suitable tutor match based on your preferences, allowing you to proceed with booking a trial class.",
      icon: "Bell"
    },
    {
      id: 3,
      title: "Book a Trial Class",
      description: "Take the first step in your learning journey by booking a Trial Class with the matched tutor. Explore their teaching style, interact with them, and see if it's a perfect fit for you.",
      icon: "Calendar"
    },
    {
      id: 4,
      title: "Seamless Class Contract and Enrollment",
      description: "After a successful Trial Class, enroll confidently and complete the Agreement Form. For any concerns, use the Dissatisfaction Form, and we'll prioritize matching you with a more suitable tutor based on your preferences.",
      icon: "FileText"
    },
    {
      id: 5,
      title: "Secure Payment Process",
      description: "Make hassle-free payments for the class you've enrolled in through our secure payment system. Rest assured that your financial transactions are handled with professionalism and ease.",
      icon: "Shield"
    },
    {
      id: 6,
      title: "Embark on Your Learning Journey",
      description: "Embark on your learning journey! Access class resources, engage interactively, foster a supportive environment, and communicate directly with your tutor via our user-friendly platform.",
      icon: "Rocket"
    }
  ]
}

const aboutData = {
  title: "About Us",
  description: "D-lighter Tutor connects parents and students with qualified tutors through personalized matching, sample classes, secure transactions, and a user-friendly interface, streamlining the tutor-finding process for successful learning experiences.",
  ctaText: "Learn More",
  ctaLink: "/about"
}

const ctaData = {
  title: "Join us to empower learners in academic subjects and skills development!",
  subtitle: "Ready to join our team of qualified and passionate tutors?",
  ctaText: "Become a Tutor",
  ctaLink: "/become-tutor"
}

const faqData = {
  title: "FAQs",
  subtitle: "If you still have questions or you're unsure about your readiness to find your perfect tutoring match, you can check out our full faq section or send us an email.",
  items: [
    {
      id: 1,
      question: "What is D-lighter Tutor's platform all about?",
      answer: "D-lighter Tutor is an online platform that connects students and parents with qualified tutors for personalized learning experiences across various subjects and skills."
    },
    {
      id: 2,
      question: "How is the D-lighter Tutor Matching process like?",
      answer: "Our intelligent matching system analyzes your learning preferences, subject requirements, and schedule to connect you with the most suitable tutors from our verified network."
    },
    {
      id: 3,
      question: "Can I schedule classes at my convenience?",
      answer: "Yes, our platform offers flexible scheduling options. You can book classes at times that work best for you, with many tutors available across different time zones."
    },
    {
      id: 4,
      question: "Can I reschedule a class if I won't be available for a particular session?",
      answer: "Absolutely! You can reschedule classes up to 24 hours in advance through our platform. We understand that schedules can change and we're here to accommodate your needs."
    },
    {
      id: 5,
      question: "Are the tutoring sessions personalized for each student?",
      answer: "Yes, every tutoring session is tailored to the individual student's learning style, pace, and specific needs. Our tutors create customized lesson plans for optimal learning outcomes."
    }
  ]
}

const newsletterData = {
  title: "Join our newsletter to stay up to date.",
  subtitle: "Get the latest updates on new tutors, subjects, and educational resources delivered to your inbox.",
  placeholder: "Enter your Email",
  buttonText: "Subscribe",
  privacyText: "By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company."
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero data={heroData} />
      <Features data={featuresData} />
      <ExamPrep data={examPrepData} />
      <Process data={processData} />
      <About data={aboutData} />
      <CallToAction data={ctaData} />
      <FAQ data={faqData} />
      <Newsletter data={newsletterData} />
      <Footer />
      <Toaster />
    </main>
  )
}