import ReactGA from 'react-ga4'
import type { GridSection } from '../App'

export default function sendWarningEvent(sectionName: GridSection, warningMessage: string) {
  ReactGA.event({
    category: sectionName,
    action: 'Warning',
    label: warningMessage
  })
}