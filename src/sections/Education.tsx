import GraduationIcon from '../assets/graduation_icon.svg?react'
import CheckBoxIcon from '../assets/check_box_icon.svg?react'
import './styles/Education.scss'

const Education = ({isHovered}: { isHovered: boolean }) => {
  return (
    <span className={`education ${isHovered ? 'hovered' : ''}`} style={{ }}>
      {/* Starting view - label */}
      <span className='education-label' aria-hidden={isHovered ? 'true' : 'false'}>
        <GraduationIcon style={{ width: 'var(--icon-size-large)', height: 'var(--icon-size-large)', color: 'var(--color-faded-light-text)' }} />
        <span className='section-label'>
          EDUCATION
        </span>
      </span>

      {/* Hovered view - checklist */}
      <span className='education-checklist' aria-hidden={isHovered ? 'false' : 'true'}>
        <span className='checkbox-wrapper'>
          <CheckBoxIcon className='checkbox-icon' />
          <span>
            B.S in Computer Science
          </span>
        </span>
        <span className='checkbox-wrapper'>
          <CheckBoxIcon className='checkbox-icon' />
          <span>
            Bootcamp Grad
          </span>
        </span>
      </span>
    </span>
  )
}

export default Education