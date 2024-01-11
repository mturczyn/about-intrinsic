import './Navbar.css'
import { appRoutes } from 'AppRouter/routesDefinition'
import plFlag from 'images/flags/pl.svg'
import gbFlag from 'images/flags/gb.svg'
import { useTranslation } from 'react-i18next'

export const Navbar = () => {
    const { i18n } = useTranslation()

    return (
        <nav>
            {appRoutes.map((i) => (
                <a key={i.path + i.name} href={i.path}>
                    {i.name}
                </a>
            ))}
            <button
                onClick={() => i18n.changeLanguage('pl')}
                style={{
                    backgroundImage: 'url(' + plFlag + ')',
                    backgroundPosition: '0px 0px',
                }}
                className="langButton"
            >
                <span>PL</span>
            </button>
            <button
                onClick={() => i18n.changeLanguage('en')}
                className="langButton"
                style={{ backgroundImage: 'url(' + gbFlag + ')' }}
            >
                <span>ENG</span>
            </button>
        </nav>
    )
}
