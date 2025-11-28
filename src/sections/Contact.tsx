import sendLinkClickEvent from '../analytics/sendLinkClickEvent'
import PaperPlaneIcon from '../assets/paperplane_icon.svg?react'
import './styles/Contact.css'
import { useMediaQuery } from 'react-responsive'

const Contact = () => {
  const isConstrainedScreen = useMediaQuery({ query: '(max-width: 1111px, min-width: 850px)' })

  return (
    <a href='mailto:contact@coleflournoy.dev' className='contact' onClick={() => sendLinkClickEvent('contact', 'contact email')}>
      {isConstrainedScreen ? 'Contact' : 'Contact Me'}
      <PaperPlaneIcon style={{ width: '30px', height: '30px' }} />
      {/* Dots */}
      {/* <span style={{ position: 'absolute', top: '-0.5px', left: '50%', transform: 'translate(-50%, -50%)', height: '7px', width: '7px', backgroundColor: 'var(--color-grid-background)', borderRadius: '50%', zIndex: 5 }}></span> 
      <span style={{ position: 'absolute', top: '-0.5px', left: '50%', transform: 'translate(-50%, -50%)', height: '3px', width: '3px', backgroundColor: 'currentColor', borderRadius: '50%', zIndex: 10 }}></span> 
      
      <span style={{ position: 'absolute', bottom: '-7.5px', left: '50%', transform: 'translate(-50%, -50%)', height: '7px', width: '7px', backgroundColor: 'var(--color-grid-background)', borderRadius: '50%', zIndex: 5 }}></span> 
      <span style={{ position: 'absolute', bottom: '-3.5px', left: '50%', transform: 'translate(-50%, -50%)', height: '3px', width: '3px', backgroundColor: 'currentColor', borderRadius: '50%', zIndex: 10 }}></span> 
       */}
      <span style={{ position: 'absolute', top: '50%', left: '-0.5px', transform: 'translate(-50%, -50%)', height: '7px', width: '7px', backgroundColor: 'var(--color-grid-background)', borderRadius: '50%', zIndex: 5 }}></span> 
      <span style={{ position: 'absolute', top: '50%', left: '-0.5px', transform: 'translate(-50%, -50%)', height: '3px', width: '3px', backgroundColor: 'currentColor', borderRadius: '50%', zIndex: 10 }}></span> 
      
      <span style={{ position: 'absolute', top: '50%', right: '-7.5px', transform: 'translate(-50%, -50%)', height: '7px', width: '7px', backgroundColor: 'var(--color-grid-background)', borderRadius: '50%', zIndex: 5 }}></span> 
      <span style={{ position: 'absolute', top: '50%', right: '-3.5px', transform: 'translate(-50%, -50%)', height: '3px', width: '3px', backgroundColor: 'currentColor', borderRadius: '50%', zIndex: 10 }}></span> 
    </a>
  )
}

export default Contact