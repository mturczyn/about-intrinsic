import reactLogo from 'images/react-logo.svg'
import styles from './TechStack.module.css'
import './TechStack.css'
import { useTranslation, Trans } from 'react-i18next'
import { AnchorWithNewPage } from 'components/AnchorWithNewPage'
import { useEffect, useRef, useState } from 'react'
import { usePwaInstallerContext } from 'hooks/usePwaInstallerContext'
import { usePageTitle } from 'hooks/usePageTitle'
import { Link } from 'react-router-dom'
import { Expander } from 'components/Expander'
import { HeaderWithSkipLink } from 'components/HeaderWithSkipLink'

export const PAGE_TITLE =
    'Intrinsic | Web Development and Programming | Technology stack'

const TechStack = () => {
    const [pwaInstalled, setPwaInstalled] = useState(false)
    const pwaInstaller = usePwaInstallerContext()
    const expanderRef = useRef<HTMLDivElement>(null)
    const tableOfContentsRef = useRef<HTMLUListElement>(null)
    const [tableOfContentsElement, setTableOfContentsElement] =
        useState<HTMLElement | null>(null)
    const { t } = useTranslation()

    usePageTitle(t(PAGE_TITLE))

    useEffect(() => {
        // If we want to check if the app runs as PWA, we must check
        // against display mode defined in manifest file.
        if (window.matchMedia('(display-mode: standalone)').matches) {
            setPwaInstalled(true)
        }
    }, [])

    useEffect(() => {
        setTableOfContentsElement(tableOfContentsRef.current)
    }, [])

    const pwaInstallationSupported = !!pwaInstaller

    const installPwa = () => {
        if (!pwaInstaller) {
            return
        }

        pwaInstaller.prompt()
        // Wait for the user to respond to the prompt
        pwaInstaller.userChoice.then((choiceResult) => {
            console.log(
                choiceResult.outcome === 'accepted'
                    ? 'User accepted installation prompt'
                    : 'User dismissed installation prompt'
            )
        })
    }

    const createHeader = (title: string) => (
        <HeaderWithSkipLink
            title={title}
            scrollTo={expanderRef}
            tableOfContents={tableOfContentsElement}
            renderSkipLink={(skipLink) => <li>{skipLink}</li>}
        />
    )

    return (
        <>
            <Expander
                className={styles['expander']}
                ref={expanderRef}
                expandedText={t('collapseTableOfContents')}
                collapsedText={t('expandTableOfContents')}
            >
                <div className={styles['table-of-contents']}>
                    <ul ref={tableOfContentsRef}></ul>

                    <div className={styles['logo-container']}>
                        <img
                            src={reactLogo}
                            className={styles['spin-image']}
                            alt="React logo"
                        />
                    </div>
                </div>
            </Expander>

            {createHeader(t('Theming'))}

            <p>{t('themingDescription')}</p>

            {createHeader(t('frameworkAndLibraries'))}

            <Trans>
                <p>
                    To create this website, I have used React framework, in
                    order to optimize development process. I did not use any
                    advanced React features, such as hooks, as this page did not
                    require complex logic. I think, I could even find lighter
                    library, with fewer features, that would accomplish the
                    same.
                </p>
                <p>
                    I also used React libraries for features: routing is
                    implemented with react-router package and there is
                    multilanguage (PL and ENG) support, thanks to react-nexti18n
                    package.
                </p>
            </Trans>

            {createHeader(t('PWA and service workers'))}

            <p>
                {t(
                    'By specifying manifest file for the webpage correctly, I have enabled this page to work as PWA (so it is installable as application). Moreover, I have added offline support using service workers (page can be still reachable, when user is offline).'
                )}
            </p>
            <div className={styles['pwa-installation']}>
                {pwaInstalled ? (
                    <strong data-pwa-installed>
                        {t('Already installed as PWA')}
                    </strong>
                ) : pwaInstallationSupported ? (
                    <>
                        <button
                            className={styles['pwa-install-button']}
                            onClick={installPwa}
                        >
                            {t('Install the page as PWA')}
                        </button>
                        <strong className={styles['pwa-browser-support-note']}>
                            {t(
                                '(if link is not working, try different browser, as some browsers, like Opera, do not support PWAs)'
                            )}
                        </strong>
                    </>
                ) : (
                    <strong>
                        {t(
                            'If viewing page in browser, page may be already installed. Another reason may be the lack of browser support for PWAs. Try different browser in order to install this page.'
                        )}
                    </strong>
                )}
            </div>
            <h2>{t('PWA workshop')}</h2>
            <Trans i18nKey={'pwa-workshop-description'}>
                <p>
                    <a
                        rel="noopener"
                        href="https://pwa-workshop-codelab.vercel.app"
                        target="_blank"
                    ></a>
                    <a
                        rel="noopener noreferrer"
                        href="https://web.dev/articles/new-pwa-training"
                        target="_blank"
                    ></a>
                </p>
            </Trans>

            {createHeader('Docker')}

            <Trans>
                <p>
                    Docker allows to package any application (such as this site)
                    together with all its dependencies (operating system
                    together with executables and libraries), and create an
                    image out of it. Running this image (creating container)
                    means that we will be running the application in exact same
                    way as deployed application (if the server/cloud provider
                    supports Docker). This gives better way of testing the app.
                </p>
                <p>
                    Adding Docker was not my main concern here, but since I
                    deploy to Azure (which supports Docker), it made more sense
                    to prepare this (so I have more options when it comes to
                    hosting the website).
                </p>
            </Trans>

            {createHeader(t('Hosting'))}

            <p>
                {t(
                    'This website is, as of time of writing, hosted in Azure as Web App Service. It is hosted as docker image instance.'
                )}
            </p>

            {createHeader(`${t('CICD')} ${t('and')} ${t('repository')}`)}

            <p>
                {t('Code for the website is stored in')}{' '}
                <AnchorWithNewPage
                    description={t('GitHub repository')}
                    url="https://github.com/mturczyn/about-intrinsic"
                />
            </p>
            <Trans>
                <p>
                    In Azure's Web App Deployment Center, I initially enabled
                    automatic deployment, which triggered a deployment whenever
                    a merge was made to the main branch of the GitHub
                    repository. This process was managed by GitHub Actions, with
                    a pipeline automatically generated by Azure.
                </p>
                <p>
                    Later, after gaining more experience with GitHub Actions, I
                    decided to create a custom pipeline from scratch, which now
                    handles the deployment of the website.
                </p>
            </Trans>

            {createHeader(t('aiServerOverviewTitle'))}

            <Trans i18nKey={'aiServerOverview'}>
                <p>
                    <Link to="/chat"></Link>
                </p>
                <p>
                    <a
                        rel="noopener noreferrer"
                        href="https://github.com/mturczyn/ai-cloud-service"
                        target="_blank"
                    ></a>
                </p>
            </Trans>
        </>
    )
}

export default TechStack
