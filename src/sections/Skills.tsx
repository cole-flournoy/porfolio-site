import TypescriptLogo from '../assets/tech_icons/typescript_logo.svg?react'
import ReactLogo from '../assets/tech_icons/react_logo.svg?react'
import NodeLogo from '../assets/tech_icons/nodejs_logo.svg?react'
import PostgresLogo from '../assets/tech_icons/postgres_logo.svg?react'
import GitLogo from '../assets/tech_icons/git_logo.svg?react'
import JiraLogo from '../assets/tech_icons/jira_logo.svg?react'
import FigmaLogo from '../assets/tech_icons/figma_logo.svg?react'
import VSCodeLogo from '../assets/tech_icons/vscode_logo.svg?react'
import { useState } from 'react'
import './styles/Skills.scss'
import { useMediaQuery } from 'react-responsive'
import * as bp from '../constants/breakpoints'

type SkillName = 'TypeScript' | 'React.js' | 'Node.js' | 'PostgreSQL' | 'Git' | 'Jira' | 'Figma' | 'VSCode' | null

const Skills = ({isHovered}: { isHovered: boolean }) => {
  const [hoveredSkill, setHoveredSkill] = useState<SkillName>(null)

  const showDivider = useMediaQuery({ query: '(min-width: 1111px)' })
  const showSkillLabels = useMediaQuery({ query: `(min-width: ${bp.MEDIUM_2}px)`})


  const SkillIcon = ({ techName, iconComponent }: { techName: SkillName, iconComponent: React.JSX.Element }) => (
    <span style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }} onMouseEnter={() => setHoveredSkill(techName)} onMouseLeave={() => setHoveredSkill(null)}>
      {iconComponent}
      {(hoveredSkill === techName && isHovered && showSkillLabels) && <span style={{ fontSize: 'var(--text-size-small)', position: 'absolute', bottom: '-18px', color: 'var(--color-light-text)' }}>{techName}</span>}
    </span>
  )

  return (
    <span className={`skills ${isHovered ? 'hovered' : ''}`} style={{ }}>
      {/* Column 1 */}
      <SkillIcon techName='TypeScript' iconComponent={<TypescriptLogo className='icon' />} />
      <SkillIcon techName='React.js' iconComponent={<ReactLogo className='icon' />} />
      <SkillIcon techName='Node.js' iconComponent={<NodeLogo className='icon' />} />
      <SkillIcon techName='PostgreSQL' iconComponent={<PostgresLogo className='icon' />} />

      {showDivider && 
        <span className='divider'>
          <span className='outer-dot'></span> 
          <span className='inner-dot'></span> 
        </span>
      }     

      {/* Column 2 */}
      <SkillIcon techName='Git' iconComponent={<GitLogo className='icon' />} />
      <SkillIcon techName='Jira' iconComponent={<JiraLogo className='icon' />} />
      <SkillIcon techName='Figma' iconComponent={<FigmaLogo className='icon' />} />
      <SkillIcon techName='VSCode' iconComponent={<VSCodeLogo className='icon' />} />
    </span>
  )
}

export default Skills