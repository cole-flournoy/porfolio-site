import Timeline from '../assets/timeline.svg?react'

const Experience = () => {
  return (
    <span id='experience' style={{ display: 'flex', flexDirection: 'column', gap: '35px', alignItems: 'center', justifyContent: 'center' }}>
      <span style={{ fontSize: 'var(--text-size-header)', letterSpacing: '5px', position: 'relative' }}>
        FULL STACK DEVELOPER
        <span style={{ position: 'absolute', bottom: '-8px', left: '50%', transform: 'translate(-50.5%, -50%)', height: '1px', width: '88%', backgroundColor: 'var(--color-slightly-faded-light-text)' }}>
          <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', height: '7px', width: '7px', backgroundColor: 'var(--color-grid-background)', borderRadius: '50%', zIndex: 5 }}></span> 
          <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', height: '3px', width: '3px', backgroundColor: 'inherit', borderRadius: '50%', zIndex: 10 }}></span> 
        </span> 
      </span>
      <Timeline style={{ width: '100%', height: '100%' }} />
    </span>
  )
}

export default Experience