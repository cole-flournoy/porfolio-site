import TypescriptLogo from '../assets/tech_icons/typescript_logo.svg?react'
import ReactLogo from '../assets/tech_icons/react_logo.svg?react'
import NodeLogo from '../assets/tech_icons/nodejs_logo.svg?react'
import PostgresLogo from '../assets/tech_icons/postgres_logo.svg?react'
import GitLogo from '../assets/tech_icons/git_logo.svg?react'
import JiraLogo from '../assets/tech_icons/jira_logo.svg?react'
import FigmaLogo from '../assets/tech_icons/figma_logo.svg?react'
import VSCodeLogo from '../assets/tech_icons/vscode_logo.svg?react'

const Skills = () => {
  return (
    <span id="skills" style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', gridAutoFlow: 'column', gridTemplateRows: 'repeat(4, auto)', alignItems: 'center', justifyItems: 'center', rowGap: '25px', width: '100%', color: 'var(--color-faded-light-text)' }}>
      {/* Column 1 */}
      <TypescriptLogo className='icon'/>
      <ReactLogo className='icon'/>
      <NodeLogo className='icon'/>
      <PostgresLogo className='icon'/>

      <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', height: '75px', width: '1px', backgroundColor: 'var(--color-faded-light-text)' }}>
        <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', height: '7px', width: '7px', backgroundColor: 'var(--color-grid-background)', borderRadius: '50%', zIndex: 5 }}></span> 
        <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', height: '3px', width: '3px', backgroundColor: 'inherit', borderRadius: '50%', zIndex: 10 }}></span> 
      </span>      

      {/* Column 2 */}
      <GitLogo className='icon'/>
      <JiraLogo className='icon'/>
      <FigmaLogo className='icon'/>
      <VSCodeLogo className='icon' style={{ width: '40px', height: '40px' }}/>
    </span>
  )
}

export default Skills