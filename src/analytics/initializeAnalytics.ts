import ReactGA from 'react-ga4'

export default function initializeAnalytics() {
  try {
    ReactGA.initialize('G-2VS13K0V9S')
  } catch (error) {
    console.error('Error initializing Google Analytics:', error)
  }
}
