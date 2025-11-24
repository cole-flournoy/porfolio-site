import ReactGA from 'react-ga4'
import type { GridSection } from '../App'

export default function sendSectionHoverEvent(sectionName: GridSection) {
  ReactGA.event({
    category: 'Grid Section',
    action: 'Hover',
    label: sectionName
  })  
}