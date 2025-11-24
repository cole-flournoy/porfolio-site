import ReactGA from 'react-ga4'
import type { GridSection } from '../App'

export default function sendClickInteractionEvent(sectionName: GridSection, interaction: string) {
  ReactGA.event({
    category: sectionName,
    action: 'Click',
    label: interaction
  }) 
}