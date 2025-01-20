import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { pl } from './pl'
import { en } from './en'

export const SUPPORTED_LANGUAGES = { pl: 'pl-PL', en: 'en-US' }

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    [SUPPORTED_LANGUAGES.pl]: {
        translation: pl,
    },
    [SUPPORTED_LANGUAGES.en]: {
        translation: en,
    },
}

// const detectionOptions: InitOptions<unknown> = {
//     // order and from where user language should be detected
//     order: [
//         'querystring',
//         'cookie',
//         'localStorage',
//         'sessionStorage',
//         'navigator',
//         'htmlTag',
//         'path',
//         'subdomain',
//     ],

//     // keys or params to lookup language from
//     lookupQuerystring: 'lng',
//     lookupCookie: 'i18next',
//     lookupLocalStorage: 'i18nextLng',
//     lookupSessionStorage: 'i18nextLng',
//     lookupFromPathIndex: 0,
//     lookupFromSubdomainIndex: 0,

//     // cache user language on
//     caches: ['localStorage', 'cookie'],
//     excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

//     // optional expire and domain for set cookie
//     cookieMinutes: 10,
//     cookieDomain: 'myDomain',

//     // optional htmlTag with lang attribute, the default is:
//     htmlTag: document.documentElement,

//     // optional set cookie options, reference:[MDN Set-Cookie docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
//     cookieOptions: { path: '/', sameSite: 'strict' },

//     // optional conversion function to use to modify the detected language code
//     convertDetectedLanguage: 'Iso15897',
//     convertDetectedLanguage: (lng) => lng.replace('-', '_'),
// }

i18next
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .init({
        resources,
        fallbackLng: SUPPORTED_LANGUAGES.pl,
        // lng: SUPPORTED_LANGUAGES.pl, // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    })

export default i18next
