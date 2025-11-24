import ReactGA from 'react-ga4'

export default function sendClickInteractionEvent(sectionName: string, interaction: string) {
  ReactGA.event({
    category: sectionName,
    action: 'Click',
    label: interaction
  }) 
}