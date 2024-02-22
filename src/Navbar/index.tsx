import './Navbar.css'
import { appRoutes } from 'AppRouter/routesDefinition'
import plFlag from 'images/flags/pl.svg'
import gbFlag from 'images/flags/gb.svg'
import { useTranslation } from 'react-i18next'
import { SUPPORTED_LANGUAGES } from 'i18n'
import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom'

export const Navbar = () => {
    const { i18n, t } = useTranslation()
    const changeLanguage = (languageCode: string) => {
        i18n.changeLanguage(languageCode)
        document.documentElement.setAttribute('lang', languageCode)
    }

    const location = useLocation()

    return (
        <nav>
            {appRoutes.map((i) => (
                <Link
                    key={i.path + i.name}
                    to={i.path}
                    className={clsx({
                        'current-location': location.pathname === i.path,
                    })}
                >
                    {t(i.name)}
                </Link>
            ))}
            <button
                onClick={() => changeLanguage(SUPPORTED_LANGUAGES.pl)}
                style={{
                    backgroundImage: 'url(' + plFlag + ')',
                    backgroundPosition: '0px 0px',
                }}
                className="langButton"
            >
                <span>PL</span>
            </button>
            <button
                onClick={() => changeLanguage(SUPPORTED_LANGUAGES.en)}
                className="langButton"
                style={{ backgroundImage: 'url(' + gbFlag + ')' }}
            >
                <span>ENG</span>
            </button>
        </nav>
    )
}
