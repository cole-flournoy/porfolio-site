import LinkedInLogo from '../assets/linkedin_icon.svg?react'
import GitHubLogo from '../assets/github_icon.svg?react'
import CodeIcon from '../assets/source_code_icon.svg?react'

import type { HoveredSection } from '../App'

const Socials = ({hoveredSection}: { hoveredSection: HoveredSection }  ) => {
  
  if (hoveredSection === 'socials') {
    return ( 
      <span id='socials' style={{ display: 'flex', flexDirection: 'row', gap: '30px', alignItems: 'center', justifyContent: 'center'  }}>
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
    );
  } else {
    return (
      <span id='socials' style={{ color: 'var(--color-faded-light-text)', fontSize: 'var(--text-size-header)', textAlign: 'center', letterSpacing: '5px' }}>
        SOCIALS
      </span>
    )
  }
}

export default Socials;