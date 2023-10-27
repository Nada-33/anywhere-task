import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import engTranslations from '../public/loclization/en.json';
import arTranslations from '../public/loclization/ar.json';

i18n.use(initReactI18next).init({
    resourses: {
        en: { translation: engTranslations },
        ar: { translation: arTranslations }
    },
    //default
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    }
})
export default i18n;