import ReactGA from 'react-ga4'

export default function sendWarningEvent(sectionName: string, warningMessage: string) {
  ReactGA.event({
    category: sectionName,
    action: 'Warning',
    label: warningMessage
  })
}