import { useState } from 'react'
import './styles/App.scss'
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
import { useMediaQuery } from 'react-responsive'
import * as bp from './constants/breakpoints'

type HoveredSection = 'socials' | 'education' | 'skills' | 'build' | 'testimonials' | 'experience' | null
export type GridSection = Exclude<HoveredSection, null> | 'about' | 'contact'

initializeAnalytics()

function App() {
  const [hoveredSection, setHoveredSection] = useState<HoveredSection>(null)

  const handleMouseEnter = (sectionName: HoveredSection) => {
    setHoveredSection(sectionName)
    sendSectionHoverEvent(sectionName!)
  }

  const isSmallScreen = useMediaQuery({ query: `(max-width: ${bp.SMALL}px)` })
  const isMediumCompactScreen = useMediaQuery({ query: `(min-width: ${bp.SMALL + 1}px) and (max-width: ${bp.MEDIUM_1}px)` })
  const isLargeScreen = useMediaQuery({ query: `(min-width: ${bp.MEDIUM_1 + 1}px)` })


  return (
    <>
      {isSmallScreen ? 

      // SMALL SCREEN VIEW
      <div /* className='summary-grid-container' */ style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div className='grid-top-row' style={{ gap: '10px', width: '100%' }}>
          <div className='grid-section' style={{ width: '85%' }}>
            <About />
          </div>

          <div className='grid-section' style={{ width: '15%' }}>
            <Socials isHovered={true}/>
          </div>
        </div>
      
        <div className='grid-section experience-section' style={{ }}>
          <Experience isHovered={false} />
        </div>

        <div className='grid-section contact-section' style={{ }}>
          <Contact />
        </div>
        
        <div className='grid-top-row' style={{ gap: '10px', width: '100%' }}>
          <div className='grid-section' style={{ width: '40%' }}>
            <Skills isHovered={true} />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '60%' }}>
            <div className='grid-section' style={{ }}>
              <Education isHovered={true} />
            </div>

            <div className='grid-section' style={{ height: '100%' }}>
              <Build isHovered={true} />
            </div>
          </div>
        </div>
        
        <div className='grid-section' style={{ padding: '15px 10px'}}>
          <Testmonials />
        </div>
      </div>
       
       :
      
      // LARGE SCREEN VIEW 
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
      </div> }
    </>
  )
}

export default App
