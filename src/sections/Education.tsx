import GraduationIcon from '../assets/graduation_icon.svg?react'
import CheckBoxIcon from '../assets/check_box_icon.svg?react'
import './styles/Education.css'

const Education = ({isHovered}: { isHovered: boolean }) => {
  return (
    <span className={`education ${isHovered ? 'hovered' : ''}`} style={{ }}>
      {/* Starting view - label */}
      <span className='education-label' aria-hidden={isHovered ? 'true' : 'false'}>
        <GraduationIcon style={{ width: '100px', height: '100px', color: 'var(--color-faded-light-text)' }} />
        <span style={{ fontSize: 'var(--text-size-header)', textAlign: 'center', letterSpacing: '5px', color: 'var(--color-faded-light-text)' }}>
          EDUCATION
        </span>
      </span>

      {/* Hovered view - checklist */}
      <span className='education-checklist' aria-hidden={isHovered ? 'false' : 'true'}>
        <span style={{ display: 'flex', flexDirection: 'row', fontSize: 'var(--text-size-subheader)', color: 'var(--color-light-text)', gap: '15px' }}>
          <CheckBoxIcon style={{ width: '25px', height: '25px', color: 'var(--color-light-text)', flexShrink: '0'}} />
          <span>
            B.S in Computer Science
          </span>
        </span>
        <span style={{ display: 'flex', flexDirection: 'row', fontSize: 'var(--text-size-subheader)', color: 'var(--color-light-text)', gap: '15px' }}>
          <CheckBoxIcon style={{ width: '25px', height: '25px', color: 'var(--color-light-text)', flexShrink: '0' }} />
          <span>
            Bootcamp Grad
          </span>
        </span>
      </span>
    </span>
  )
}

export default Education