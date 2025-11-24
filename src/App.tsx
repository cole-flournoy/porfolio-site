import { useState } from 'react'
import './App.css'
import About from './sections/About'
import Socials from './sections/Socials'
import Education from './sections/Education'
import Contact from './sections/Contact'
import Skills from './sections/Skills'
import Build from './sections/Build'
import Testmonials from './sections/Testimonials'
import Experience from './sections/Experience'
import initializeAnalytics from './analytics/initializeAnalytics'
import sendSectionHoverEvent from './analytics/sendSectionHoverEvent'

type HoveredSection = 'socials' | 'education' | 'skills' | 'build' | 'testimonials' | 'experience' | null

initializeAnalytics()

function App() {
  const [hoveredSection, setHoveredSection] = useState<HoveredSection>(null)

  const handleMouseEnter = (sectionName: HoveredSection) => {
    setHoveredSection(sectionName)
    sendSectionHoverEvent(sectionName!)
  }

  return (
    <div className='summary-grid-container'>
      <div className='grid-top-row'>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)', width: '25%' }}>
          <div className='grid-section' style={{ height: '80%' }} onMouseEnter={() => sendSectionHoverEvent('about')}>
            <About />
          </div>
          <div className='grid-section' style={{ height: '60px' }} onMouseEnter={() => handleMouseEnter('socials')} onMouseLeave={() => setHoveredSection(null)}>
            <Socials isHovered={hoveredSection === 'socials'}/>
          </div>
        </div>
        
        <div className='grid-section experience-section' style={{ width: '50%' }} onMouseEnter={() => handleMouseEnter('experience')} onMouseLeave={() => setHoveredSection(null)}>
          <Experience isHovered={hoveredSection === 'experience'} />
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)', width: '25%' }}>
          <div className='grid-section' style={{ height: '60%' }} onMouseEnter={() => handleMouseEnter('education')} onMouseLeave={() => setHoveredSection(null)}>
            <Education isHovered={hoveredSection === 'education'} />
          </div>
          <div className='grid-section contact-section' style={{ height: '40%' }} onMouseEnter={() => sendSectionHoverEvent('contact')}>
            <Contact />
          </div>
        </div>
      </div>
      
      <div className='grid-bottom-row'>
        <div className='grid-section' style={{ width: '15%' }} onMouseEnter={() => handleMouseEnter('skills')} onMouseLeave={() => setHoveredSection(null)}>
          <Skills isHovered={hoveredSection === 'skills'} />
        </div>
        <div className='grid-section' style={{ width: '15%' }} onMouseEnter={() => handleMouseEnter('build')} onMouseLeave={() => setHoveredSection(null)}>
          <Build isHovered={hoveredSection === 'build'} />
        </div>
        <div className='grid-section' style={{ width: '70%' }} onMouseEnter={() => handleMouseEnter('testimonials')} onMouseLeave={() => setHoveredSection(null)}>
          <Testmonials />
        </div>
      </div>
    </div>
  )
}

export default App
