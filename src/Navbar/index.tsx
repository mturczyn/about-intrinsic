import './Navbar.css'
import { appRoutes } from 'AppRouter/routesDefinition'
import plFlag from 'images/flags/pl.svg'
import gbFlag from 'images/flags/gb.svg'
import { useTranslation } from 'react-i18next'

export const Navbar = () => {
    const { i18n, t } = useTranslation()

    const changeLanguage = (languageCode: string) => {
        i18n.changeLanguage(languageCode)
        document.documentElement.setAttribute('lang', languageCode)
    }

    return (
        <nav>
            {appRoutes.map((i) => (
                <a key={i.path + i.name} href={i.path}>
                    {t(i.name)}
                </a>
            ))}
            <button
                onClick={() => changeLanguage('pl-PL')}
                style={{
                    backgroundImage: 'url(' + plFlag + ')',
                    backgroundPosition: '0px 0px',
                }}
                className="langButton"
            >
                <span>PL</span>
            </button>
            <button
                onClick={() => changeLanguage('en-US')}
                className="langButton"
                style={{ backgroundImage: 'url(' + gbFlag + ')' }}
            >
                <span>ENG</span>
            </button>
        </nav>
    )
}
