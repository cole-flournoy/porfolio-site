import GraduationIcon from '../assets/graduation_icon.svg?react'

const Education = () => {
  return (
    <span id="education" style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'center', justifyContent: 'center' }}>
      <GraduationIcon style={{ width: '100px', height: '100px', color: 'var(--color-faded-light-text)' }} />
      <span style={{ fontSize: 'var(--text-size-header)', textAlign: 'center', letterSpacing: '5px', color: 'var(--color-faded-light-text)' }}>
        EDUCATION
      </span>
    </span>
  )
}

export default Education