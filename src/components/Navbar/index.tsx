import './Navbar.css'
import { appRoutes } from 'components/AppRouter/routesDefinition'
import plFlag from 'images/flags/pl.svg'
import gbFlag from 'images/flags/gb.svg'
import { useTranslation } from 'react-i18next'
import { SUPPORTED_LANGUAGES } from 'utils/i18n'
import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import { ForwardedRef, forwardRef, useEffect, useRef, useState } from 'react'
import { useDocumentMouseDown } from 'hooks/useClickOutside'

export const Navbar = () => {
    const { i18n, t } = useTranslation()
    const [navigationMenuOpen, setNavigationMenuOpen] = useState(false)
    const changeLanguage = (languageCode: string) => {
        i18n.changeLanguage(languageCode)
        document.documentElement.setAttribute('lang', languageCode)
    }
    const menuButtonRef = useRef<HTMLDivElement>(null)
    const navMenuRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!navMenuRef.current) {
            return
        }

        const endHeight = navigationMenuOpen
            ? navMenuRef.current.scrollHeight
            : 0

        const getStep = (percentage: number) => {
            return endHeight * percentage + 'px'
        }

        const getEndStep = () => getStep(1)

        if (navigationMenuOpen) {
            navMenuRef.current.animate(
                [
                    { height: 0, offset: 0 },
                    { height: getEndStep(), offset: 0.3 },
                    { height: getStep(0.85), offset: 0.45 },
                    { height: getEndStep(), offset: 0.7 },
                    { height: getStep(0.95), offset: 0.875 },
                    { height: getEndStep(), offset: 1 },
                ],
                {
                    duration: 1000,
                    iterations: 1,
                }
            )
        } else {
            navMenuRef.current.animate(
                [
                    { height: endHeight }, // Start at full height
                    { height: '0' }, // End at zero height
                ],
                {
                    duration: 1000,
                    iterations: 1,
                }
            )
        }
    }, [navigationMenuOpen])

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
                    <NavigationMenu ref={navMenuRef} />
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

const NavigationMenu = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
    const location = useLocation()
    const { t } = useTranslation()

    return (
        <nav ref={ref}>
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
})
