import GraduationIcon from '../assets/graduation_icon.svg?react'
import CheckBoxIcon from '../assets/check_box_icon.svg?react'
import type { HoveredSection } from '../App'

const Education = ({hoveredSection}: { hoveredSection: HoveredSection }) => {
  if (hoveredSection !== 'education') {
    return (
      <span id="education" style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'center', justifyContent: 'center' }}>
        <GraduationIcon style={{ width: '100px', height: '100px', color: 'var(--color-faded-light-text)' }} />
        <span style={{ fontSize: 'var(--text-size-header)', textAlign: 'center', letterSpacing: '5px', color: 'var(--color-faded-light-text)' }}>
          EDUCATION
        </span>
      </span>
    )
  } else {
    return (
      <span id="education" style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'flex-start', justifyContent: 'center', padding: '10px'}}>
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
    )
  }
}

export default Education