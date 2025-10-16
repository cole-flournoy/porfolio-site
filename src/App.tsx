import linkedInLogo from './assets/linkedin_icon.svg'
import gitHubLogo from './assets/github_icon.svg'
import './App.css'

function App() {

  return (
    <>
      <h1>Cole Flournoy</h1>
      <p>Portfolio site coming soon!</p>
      <div>
        <a href="https://www.linkedin.com/in/cole-e-flournoy/" target="_blank">
          <img src={linkedInLogo} className="logo" alt="LinkedIn logo" />
        </a>
        <a href="https://github.com/cole-flournoy" target="_blank">
          <img src={gitHubLogo} className="logo" alt="GitHub logo" />
        </a>
      </div>
    </>
  )
}

export default App
