import WebpagesIcon from '../assets/tech_icons/webpages_icon.svg?react'
import './styles/Build.css'


const Build = ({isHovered}: { isHovered: boolean }) => {
  return (
    <span className={`build ${isHovered ? 'hovered' : ''}`} onClick={() => isHovered ? window.open('https://github.com/cole-flournoy/portfolio-site?tab=readme-ov-file#portfolio-website', '_blank') : undefined}>
      <span className='build-label' aria-hidden={isHovered ? 'true' : 'false'}>
        <WebpagesIcon style={{ width: 'var(--icon-size-large)', height: 'var(--icon-size-large)' }} />
        SITE BUILD
      </span>

      <span className='build-detail' aria-hidden={isHovered ? 'false' : 'true'}>
        READ THE BUILD DOC
      </span>
    </span>
  )
}

export default Build