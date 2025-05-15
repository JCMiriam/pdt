import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import es from './locales/es.json'

i18n.use(initReactI18next).init({
  lng: 'es',
  fallbackLng: 'en',
  debug: import.meta.env.DEV,

  resources: {
    es: { translation: es }
  },

  interpolation: {
    escapeValue: false,
  },
})

export default i18n
