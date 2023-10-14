import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import vi from './vi.json';
import { LANGUAGE_TYPE } from '@/constants';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en,
    vi
  },
  lng: LANGUAGE_TYPE.ENGLISH,
  fallbackLng: LANGUAGE_TYPE.ENGLISH,
  interpolation: {
    escapeValue: false
  },
  react: {
    useSuspense: false
  }
});

export default i18n;
