import { useState } from "react"
import CaretRightIcon from '../assets/caret_right_icon.svg?react'
import type { HoveredSection } from '../App'

interface Testimonial {
  name: string;
  relationship: string;
  quote: string;
  highlight?: string;
}

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

const Testmonials = ({hoveredSection}: { hoveredSection: HoveredSection }) => {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0)
  const textColor = (hoveredSection === 'testimonials') ? 'var(--color-light-text)' : 'var(--color-slightly-faded-light-text)'

  const handleNextTestimonial = () => {
    setActiveTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonialsArray.length);
  }

  const handlePrevTestimonial = () => {
    setActiveTestimonialIndex((prevIndex) => (prevIndex - 1 + testimonialsArray.length) % testimonialsArray.length);
  }
  
  return (
    <span id='testimonials' style={{ display: 'grid', gridTemplateRows: '4fr 0fr', color: textColor }}>
      <span style={{ display: 'grid', gridTemplateColumns: '0fr 1fr 0fr', gap: '20px', alignItems: 'center', justifyContent: 'center' }}>
        <CaretRightIcon className='icon' style={{ cursor: 'pointer', transform: 'rotate(180deg)' }} onClick={handlePrevTestimonial} />
        <span style={{ textAlign: 'center', lineHeight: '25px', fontSize: 'var(--text-size-subheader)' }}>"{testimonialsArray[activeTestimonialIndex].quote}"</span>
        <CaretRightIcon className='icon' style={{ cursor: 'pointer' }} onClick={handleNextTestimonial} />
      </span>
      <span style={{ display: 'flex', flexDirection: 'column', textAlign: 'right', paddingRight: '40px', paddingTop: '10px' }}>
        <span style={{ fontSize: 'var(--text-size-medium)' }}>- {testimonialsArray[activeTestimonialIndex].name}</span>
        <span style={{ fontSize: 'var(--text-size-small)' }}>{testimonialsArray[activeTestimonialIndex].relationship}</span>
      </span>
    </span>
  )
}

export default Testmonials