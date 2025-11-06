import headshot from '../assets/portfolio_headshot.jpg'

const About = () => {
  return (
    <span id="about" style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'center' }}>
      <div style={{ width: '150px', height: '150px', overflow: 'hidden', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '5px solid var(--color-faded-light-text)' }}>
        <img src={headshot} alt="Cole Flournoy headshot" style={{ width: '235px', height: '235px', transform: 'translateY(-5px)' }} />
      </div>
      <span style={{ fontSize: 'var(--text-size-header' }}>
        Cole Flournoy
      </span>
      <span style={{ fontSize: 'var(--text-size-subheader)' }}>
        Atlanta, GA
      </span>
    </span>
  );
}

export default About;