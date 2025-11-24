import ReactGA from 'react-ga4'
import type { GridSection } from '../App'

export default function sendLinkClickEvent(sectionName: GridSection, linkDestination: string) {
  ReactGA.event({
    category: sectionName,
    action: 'Click',
    label: 'Link - ' + linkDestination
  }) 
}