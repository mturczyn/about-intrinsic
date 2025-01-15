import styles from './Navbar.module.css'
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
    const plButtonRef = useRef<HTMLButtonElement>(null)
    const engButtonRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        if (!navMenuRef.current) {
            return
        }

        navMenuRef.current.style.height = navigationMenuOpen
            ? navMenuRef.current.scrollHeight + 'px'
            : '0'

        requestAnimationFrame(() => {
            if (navigationMenuOpen) {
                navMenuRef.current?.classList.add('isOpen')
            } else {
                navMenuRef.current?.classList.remove('isOpen')
            }
        })
    }, [navigationMenuOpen])

    useDocumentMouseDown([menuButtonRef, plButtonRef, engButtonRef], () =>
        setNavigationMenuOpen(false)
    )

    return (
        <>
            <div className={styles['navbar']}>
                <div>
                    <div
                        className={styles['hamburger-container']}
                        ref={menuButtonRef}
                    >
                        <Hamburger
                            toggled={navigationMenuOpen}
                            toggle={(value) => setNavigationMenuOpen(value)}
                        />
                    </div>
                    <NavigationMenu ref={navMenuRef} />
                </div>
                <button
                    ref={plButtonRef}
                    onClick={() => changeLanguage(SUPPORTED_LANGUAGES.pl)}
                    style={{
                        backgroundImage: 'url(' + CSS.escape(plFlag) + ')',
                        backgroundPosition: '0px 0px',
                    }}
                    className={styles['langButton']}
                >
                    <span>PL</span>
                </button>
                <button
                    ref={engButtonRef}
                    onClick={() => changeLanguage(SUPPORTED_LANGUAGES.en)}
                    className={styles['langButton']}
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
                        [styles['current-location']]:
                            location.pathname === i.path,
                    })}
                >
                    {t(i.name)}
                </Link>
            ))}
        </nav>
    )
})
