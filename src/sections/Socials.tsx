import LinkedInLogo from '../assets/linkedin_icon.svg?react'
import GitHubLogo from '../assets/github_icon.svg?react'
import CodeIcon from '../assets/source_code_icon.svg?react'

const Socials = () => {
  return (
    <span id='socials' style={{ display: 'flex', flexDirection: 'row', gap: '25px', alignItems: 'center', justifyContent: 'center'  }}>
      <a href='https://www.linkedin.com/in/cole-e-flournoy/' target='_blank'>
        <LinkedInLogo className='icon-button' />
      </a>
      <a href='https://github.com/cole-flournoy' target='_blank'>
        <GitHubLogo className='icon-button' />
      </a>
      <a href='https://github.com/cole-flournoy/portfolio-site' target='_blank'>
        <CodeIcon className='icon-button' />
      </a>
    </span>
  );
}

export default Socials;