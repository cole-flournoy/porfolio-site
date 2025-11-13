import LinkedInLogo from '../assets/linkedin_icon.svg?react'
import GitHubLogo from '../assets/github_icon.svg?react'
import CodeIcon from '../assets/source_code_icon.svg?react'

import type { HoveredSection } from '../App'
import './styles/Socials.css'

const Socials = ({hoveredSection}: { hoveredSection: HoveredSection }  ) => {
  const isHovered = hoveredSection === 'socials'

  return (
    <span className={`socials ${isHovered ? 'hovered' : ''}`} style={{  }}>
      {/* Starting view - label */}
      <span className='socials-label' aria-hidden={isHovered ? 'true' : 'false'} style={{ }}>
        SOCIALS
      </span> 
      
      {/* Hovered view - links */}
      <span className='socials-links' aria-hidden={isHovered ? 'false' : 'true'} style={{ }}>
        <a href='https://www.linkedin.com/in/cole-e-flournoy/' target='_blank' style={{ display: 'flex' }}>
          <LinkedInLogo className='icon-button' />
        </a>
        <a href='https://github.com/cole-flournoy' target='_blank' style={{ display: 'flex' }}>
          <GitHubLogo className='icon-button' />
        </a>
        <a href='https://github.com/cole-flournoy/portfolio-site' target='_blank' style={{ display: 'flex' }}>
          <CodeIcon className='icon-button' />
        </a>
      </span>
    </span>

  )
}

export default Socials;