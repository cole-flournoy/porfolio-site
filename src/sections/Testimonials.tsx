import { useState } from "react"
import CaretRightIcon from '../assets/caret_right_icon.svg?react'
import CaretLeftIcon from '../assets/caret_left_icon.svg?react'
import './styles/Testimonials.css'
import { flushSync } from "react-dom"

interface Testimonial {
  name: string
  relationship: string
  quote: string
  highlight?: string
}

type CarouselDirection = 'next' | 'prev'

const testimonialsArray: Testimonial[] = [
  {
    name: 'Jacob Reid',
    relationship: 'Manager at Conductor Solar',
    quote: 'Cole has a great eye for UX and a strong sense of responsibility, making him someone who not only delivers high-quality work but also elevates the entire team. I highly recommend him for front-end and full-stack development roles.',
    highlight: 'Most recent manager'
  },
  {
    name: 'Jerry Dixon',
    relationship: 'Manager at Conductor Solar',
    quote: 'What stood out most was how quickly he learned new technologies and took ownership of his work. Cole consistently impressed me with his initiative, attention to detail, and drive to get better every week.\n He\'s one of those people you can trust to take something on and make it happen'
  },
  {
    name: 'Cassie Lewis',
    relationship: 'Coworker at Conductor Solar',
    quote: 'Cole is an excellent problem solver, thoroughly examining and implementing dev work with detail and precision. This thoughtful and methodical nature allows [him] to excel at teamwork and communication: he was often my go-to for discussing coding problems.'
  },
  {
    name: 'James O\'Connor',
    relationship: 'CEO of Innovation Within',
    quote: 'If you\'re seeking a developer who is proficient, fast-learning, and a team player, I wholeheartedly recommend Cole for the position. I am confident he will be an invaluable asset to your team.'
  },
  {
    name: 'Marc Palmer',
    relationship: 'CEO of Conductor Solar',
    quote: 'Anyone who has Cole on their team is grateful for it. Cole has an incredibly high ceiling and levels up everyone around him through intelligent questions, thoughtful recommendations, and efficient work.'
  }
]


const Testmonials = () => {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0)

  // TODO: Add auto-scroll?
  // TODO: Add arrow key navigation

  const runViewTransition = (direction: CarouselDirection, update: () => void) => {
    const startViewTransition = (document as any).startViewTransition?.bind(document)
    
    // Fallback for browsers that don't support View Transitions API
    const quoteEl = document.querySelector('.quote') as HTMLElement | null
    if (!startViewTransition) {
      quoteEl?.classList.add('fallback-fade-out')

      const handleEnd = () => {
        quoteEl?.removeEventListener('transitionend', handleEnd)
        update()
        quoteEl?.classList.remove('fallback-fade-out')
        quoteEl?.classList.add('fallback-fade-in')

        quoteEl?.addEventListener('transitionend', () => {
          quoteEl.classList.remove('fallback-fade-in')
        }, { once: true })
      }

      quoteEl?.addEventListener('transitionend', handleEnd, { once: true })
      return
    }

    document.documentElement.classList.add(direction)

    const transition = startViewTransition(() => {
      flushSync(update)
    })

    transition.finished.finally(() => {
      document.documentElement.classList.remove(direction)
    })
  }
  
  const handleNextTestimonial = () => {
    runViewTransition('next', () => {
      setActiveTestimonialIndex(prev => (prev + 1) % testimonialsArray.length)
    })
  }

  const handlePrevTestimonial = () => {
    runViewTransition('prev', () => {
      setActiveTestimonialIndex(prev => (prev - 1 + testimonialsArray.length) % testimonialsArray.length)
    })
  }

  const handleDotNavigation = (index: number) => {
    if (index === activeTestimonialIndex) return

    const direction: CarouselDirection = index > activeTestimonialIndex ? 'next' : 'prev'
    
    runViewTransition(direction, () => {
      setActiveTestimonialIndex(index)
    })
  }

  return (
    <span className='testimonials'>
      <span className='carousel-wrapper'>
        <span className='dots-wrapper'>
          {testimonialsArray.map((_, index) => (
            <span key={index} className={`dot ${index === activeTestimonialIndex ? 'active' : ''}`} onClick={() => handleDotNavigation(index)} />
          ))}
        </span>
        <CaretLeftIcon className='icon-button' onClick={handlePrevTestimonial} style={{ }}/>
        <span className='quote'>
          <span className='content'>"{testimonialsArray[activeTestimonialIndex].quote}"</span>
          <span className='attribution-wrapper'>
            <span style={{ fontSize: 'var(--text-size-medium)' }}>- {testimonialsArray[activeTestimonialIndex].name}</span>
            <span style={{ fontSize: 'var(--text-size-small)' }}>{testimonialsArray[activeTestimonialIndex].relationship}</span>
          </span>
        </span>
        <CaretRightIcon className='icon-button' onClick={handleNextTestimonial} style={{ }}/>
      </span>
    </span>
  )
}

export default Testmonials