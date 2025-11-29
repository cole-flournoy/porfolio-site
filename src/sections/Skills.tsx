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

type SkillName = 'TypeScript' | 'React.js' | 'Node.js' | 'PostgreSQL' | 'Git' | 'Jira' | 'Figma' | 'VSCode' | null

const Skills = ({isHovered}: { isHovered: boolean }) => {
  const [hoveredSkill, setHoveredSkill] = useState<SkillName>(null)

  const isConstrainedScreen = useMediaQuery({ query: '(max-width: 1111px, min-width: 850px)' })

  const SkillIcon = ({ techName, iconComponent }: { techName: SkillName, iconComponent: React.JSX.Element }) => (
    <span style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }} onMouseEnter={() => setHoveredSkill(techName)} onMouseLeave={() => setHoveredSkill(null)}>
      {iconComponent}
      {(hoveredSkill === techName && isHovered && isConstrainedScreen) && <span style={{ fontSize: 'var(--text-size-small)', position: 'absolute', bottom: '-18px', color: 'var(--color-light-text)' }}>{techName}</span>}
    </span>
  )

  return (
    <span className={`skills ${isHovered ? 'hovered' : ''}`} style={{ }}>
      {/* Column 1 */}
      <SkillIcon techName='TypeScript' iconComponent={<TypescriptLogo className='icon' />} />
      <SkillIcon techName='React.js' iconComponent={<ReactLogo className='icon' />} />
      <SkillIcon techName='Node.js' iconComponent={<NodeLogo className='icon' />} />
      <SkillIcon techName='PostgreSQL' iconComponent={<PostgresLogo className='icon' />} />

    {!isConstrainedScreen && 
      <span className='divider' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', height: '75px', width: '1px' }}>
        <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', height: '7px', width: '7px', backgroundColor: 'var(--color-grid-background)', borderRadius: '50%', zIndex: 5 }}></span> 
        <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', height: '3px', width: '3px', backgroundColor: 'inherit', borderRadius: '50%', zIndex: 10 }}></span> 
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