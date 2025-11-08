import WebpagesIcon from '../assets/tech_icons/webpages_icon.svg?react'

const Build = () => {
  return (
    <span id='build' style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center', justifyContent: 'center' }}>
      <WebpagesIcon style={{ width: '100px', height: '100px', color: 'var(--color-faded-light-text)' }} />
      <span style={{ fontSize: 'var(--text-size-header)', textAlign: 'center', letterSpacing: '5px', color: 'var(--color-faded-light-text)' }}>
        SITE BUILD
      </span>
    </span>
  )
}

export default Build