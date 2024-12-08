import './Navbar.css'
import { appRoutes } from 'AppRouter/routesDefinition'
import plFlag from 'images/flags/pl.svg'
import gbFlag from 'images/flags/gb.svg'
import { useTranslation } from 'react-i18next'
import { SUPPORTED_LANGUAGES } from 'i18n'
import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import { ForwardedRef, forwardRef, useRef, useState } from 'react'
import { useDocumentMouseDown } from 'hooks/useClickOutside'

export const Navbar = () => {
    const { i18n, t } = useTranslation()
    const [navigationMenuOpen, setNavigationMenuOpen] = useState(false)
    const changeLanguage = (languageCode: string) => {
        i18n.changeLanguage(languageCode)
        document.documentElement.setAttribute('lang', languageCode)
    }
    const menuButtonRef = useRef<HTMLDivElement>(null)

    useDocumentMouseDown([menuButtonRef], () => setNavigationMenuOpen(false))

    return (
        <>
            <div className="navbar">
                <div>
                    <div ref={menuButtonRef}>
                        <Hamburger
                            toggled={navigationMenuOpen}
                            toggle={(value) => setNavigationMenuOpen(value)}
                        />
                    </div>
                    <NavigationMenu isOpen={navigationMenuOpen} />
                </div>
                <button
                    onClick={() => changeLanguage(SUPPORTED_LANGUAGES.pl)}
                    style={{
                        backgroundImage: 'url(' + CSS.escape(plFlag) + ')',
                        backgroundPosition: '0px 0px',
                    }}
                    className="langButton"
                >
                    <span>PL</span>
                </button>
                <button
                    onClick={() => changeLanguage(SUPPORTED_LANGUAGES.en)}
                    className="langButton"
                    style={{
                        backgroundImage: 'url(' + CSS.escape(gbFlag) + ')',
                    }}
                >
                    <span>ENG</span>
                </button>
            </div>
        </>
    )
}

const NavigationMenu = forwardRef(
    (
        { isOpen }: { isOpen: boolean },
        ref: ForwardedRef<HTMLElement | null>
    ) => {
        const location = useLocation()
        const { t } = useTranslation()
        return (
            <nav ref={ref} className={clsx({ isOpen: isOpen })}>
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
            </nav>
        )
    }
)
