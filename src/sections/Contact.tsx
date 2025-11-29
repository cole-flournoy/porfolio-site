import sendLinkClickEvent from '../analytics/sendLinkClickEvent'
import PaperPlaneIcon from '../assets/paperplane_icon.svg?react'
import './styles/Contact.scss'
import { useMediaQuery } from 'react-responsive'

const Contact = () => {
  const isButtonTooSmall = useMediaQuery({ query: '(min-width: 850px) and (max-width: 1111px), (min-width: 450px) and (max-width: 500px)' })
  
  return (
    <a href='mailto:contact@coleflournoy.dev' className='contact' onClick={() => sendLinkClickEvent('contact', 'contact email')}>
      {isButtonTooSmall ? 'Contact' : 'Contact Me'}
      <PaperPlaneIcon style={{ width: '30px', height: '30px' }} />
      
      {/* Dots */}
      <span style={{ position: 'absolute', top: '50%', left: '-0.5px', transform: 'translate(-50%, -50%)', height: '7px', width: '7px', backgroundColor: 'var(--color-grid-background)', borderRadius: '50%', zIndex: 5 }}></span> 
      <span style={{ position: 'absolute', top: '50%', left: '-0.5px', transform: 'translate(-50%, -50%)', height: '3px', width: '3px', backgroundColor: 'currentColor', borderRadius: '50%', zIndex: 10 }}></span> 
      
      <span style={{ position: 'absolute', top: '50%', right: '-7.5px', transform: 'translate(-50%, -50%)', height: '7px', width: '7px', backgroundColor: 'var(--color-grid-background)', borderRadius: '50%', zIndex: 5 }}></span> 
      <span style={{ position: 'absolute', top: '50%', right: '-3.5px', transform: 'translate(-50%, -50%)', height: '3px', width: '3px', backgroundColor: 'currentColor', borderRadius: '50%', zIndex: 10 }}></span> 
    </a>
  )
}

export default Contact