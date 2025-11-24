import ReactGA from 'react-ga4'

export default function sendSectionHoverEvent(sectionName: string) {
  ReactGA.event({
    category: 'Grid Section',
    action: 'Hover',
    label: sectionName
  })  
}