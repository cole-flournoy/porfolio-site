import headshot from '../assets/portfolio_headshot.jpg'
import './styles/About.css'

const About = () => {
  return (
    <span className='about'>
      <div className='headshot'>
        <img src={headshot} alt="Cole Flournoy headshot" style={{  }} />
      </div>
      <span style={{ fontSize: 'var(--text-size-header)', textWrap: 'nowrap' }}>
        Cole Flournoy
      </span>
      <span style={{ fontSize: 'var(--text-size-subheader)', color: 'var(--color-slightly-faded-light-text)' }}>
        Atlanta, GA
      </span>
    </span>
  );
}

export default About;