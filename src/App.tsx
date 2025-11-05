import './App.css'

function App() {
  return (
    <div className='summary-grid-container'>
      <div className='grid-top-row'>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)', width: '25%' }}>
          <div className='grid-section' style={{ height: '80%' }}>
            ABOUT
          </div>
          <div className='grid-section' style={{ height: '20%' }}>
            SOCIALS
          </div>
        </div>
        
        <div className='grid-section' style={{ width: '50%' }}>
          EXPERIENCE
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)', width: '25%' }}>
          <div className='grid-section' style={{ height: '60%' }}>
            EDUCATION
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
