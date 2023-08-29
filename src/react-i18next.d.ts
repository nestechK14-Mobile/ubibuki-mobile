import 'react-i18next';
import en from './i18n/locales/en.json';
import vi from './i18n/locales/vi.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'vi';
    resources: {
      en: typeof en;
      vi: typeof vi;
    };
  }
}
