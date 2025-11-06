import { useState } from 'react';
import './App.css'
import About from './sections/about'
import Socials from './sections/Socials'
import Education from './sections/Education';

export type HoveredSection = 'socials' | null;

function App() {
  const [hoveredSection, setHoveredSection] = useState<'socials' | null>(null);

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
          <div className='grid-section' style={{ height: '60%' }}>
            <Education />
          </div>
          <div className='grid-section' style={{ height: '40%' }}>
            CONTACT
          </div>
        </div>
      </div>
      
      <div className='grid-bottom-row'>
        <div className='grid-section' style={{ width: '15%', height: '100%' }}>
          SKILLS
        </div>
        <div className='grid-section' style={{ width: '15%', height: '100%' }}>
          BUILD
        </div>
        <div className='grid-section' style={{ width: '70%', height: '100%' }}>
          TESTIMONIALS
        </div>
      </div>
    </div>
  )
}

export default App
