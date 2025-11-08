import WebpagesIcon from '../assets/tech_icons/webpages_icon.svg?react'
import type { HoveredSection } from '../App'


const Build = ({hoveredSection}: { hoveredSection: HoveredSection }) => {
  const isHovered = hoveredSection === 'build';
  const textColor = isHovered ? 'var(--color-light-text)' : 'var(--color-faded-light-text)'
  
  return (
    <span id='build' style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center', justifyContent: 'center', color: textColor, cursor: isHovered ? 'pointer' : 'default' }}>
      {!isHovered && <WebpagesIcon style={{ width: '100px', height: '100px' }} />}
      <span style={{ fontSize: 'var(--text-size-header)', textAlign: 'center', letterSpacing: '5px', lineHeight: '34px' }}>
        {isHovered ? <a href='https://github.com/cole-flournoy/portfolio-site?tab=readme-ov-file#portfolio-website' target='_blank' style={{ textDecoration: 'none', color: textColor }}>CURIOUS ABOUT THIS SITE?</a> : 'SITE BUILD'}
      </span>
    </span>
  )
}

export default Build