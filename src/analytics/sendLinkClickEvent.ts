import ReactGA from 'react-ga4'

export default function sendLinkClickEvent(sectionName: string, linkDestination: string) {
  ReactGA.event({
    category: sectionName,
    action: 'Click',
    label: 'Link - ' + linkDestination
  }) 
}