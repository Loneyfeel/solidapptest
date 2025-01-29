import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './locales/en.ts';
import { ru } from './locales/ru.ts';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: en,
            ru: ru
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;