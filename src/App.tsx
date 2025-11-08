import { useState } from 'react';
import './App.css'
import About from './sections/About'
import Socials from './sections/Socials'
import Education from './sections/Education';
import Contact from './sections/Contact';
import Skills from './sections/Skills';
import Build from './sections/Build';
import Testmonials from './sections/Testimonials';

export type HoveredSection = 'socials' | 'education' | 'skills' | 'build' | null;

function App() {
  const [hoveredSection, setHoveredSection] = useState<HoveredSection>(null);

  return (
    <div className='summary-grid-container'>
      <div className='grid-top-row'>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)', width: '25%' }}>
          <div className='grid-section' style={{ height: '80%' }}>
            <About />
          </div>
          <div className='grid-section' style={{ height: '20%' }} onMouseEnter={() => setHoveredSection('socials')} onMouseLeave={() => setHoveredSection(null)}>
            <Socials hoveredSection={hoveredSection}/>
          </div>
        </div>
        
        <div className='grid-section' style={{ width: '50%' }}>
          EXPERIENCE
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)', width: '25%' }}>
          <div className='grid-section' style={{ height: '60%' }} onMouseEnter={() => setHoveredSection('education')} onMouseLeave={() => setHoveredSection(null)}>
            <Education hoveredSection={hoveredSection} />
          </div>
          <div className='grid-section' style={{ height: '40%' }}>
            <Contact />
          </div>
        </div>
      </div>
      
      <div className='grid-bottom-row'>
        <div className='grid-section' style={{ width: '15%' }} onMouseEnter={() => setHoveredSection('skills')} onMouseLeave={() => setHoveredSection(null)}>
          <Skills hoveredSection={hoveredSection} />
        </div>
        <div className='grid-section' style={{ width: '15%' }} onMouseEnter={() => setHoveredSection('build')} onMouseLeave={() => setHoveredSection(null)}>
          <Build hoveredSection={hoveredSection} />
        </div>
        <div className='grid-section' style={{ width: '70%' }}>
          <Testmonials />
        </div>
      </div>
    </div>
  )
}

export default App
