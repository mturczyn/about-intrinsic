import reactLogo from 'react-logo.svg'
import './TechStack.css'
import { useTranslation, Trans } from 'react-i18next'
import { AnchorWithNewPage } from 'CoreComponents/AnchorWithNewPage'
import { useEffect } from 'react'

export const PAGE_TITLE =
    'Intrinsic | Web Development and Programming | Technology stack'

const TechStack = () => {
    const { t } = useTranslation()

    useEffect(() => {
        document.title = t(PAGE_TITLE)
    }, [t])

    return (
        <>
            <div
                style={{
                    overflow: 'hidden',
                    maxWidth: '15rem',
                    width: '40%',
                    float: 'right',
                    margin: '2ch 2ch 0 2ch',
                    maxHeight: '15rem',
                    boxShadow: 'inset 5px 5px 20px 5px #000',
                    placeItems: 'center',
                    display: 'grid',
                }}
            >
                <img
                    src={reactLogo}
                    className="Spin-image"
                    style={{
                        width: '120%',
                    }}
                    alt="React logo"
                />
            </div>

            <h1>{t('Theming')}</h1>
            <p>{t('themingDescription')}</p>

            <h1>{t('frameworkAndLibraries')}</h1>
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

            <h1>Docker</h1>
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

            <h1>{t('Hosting')}</h1>

            <p>
                {t(
                    'This website is, as of time of writing, hosted in Azure as Web App Service. It is hosted as docker image instance.'
                )}
            </p>

            <h1>
                {t('CICD')} {t('and')} {t('repository')}
            </h1>
            <p>
                {t('Code for the website is stored in')}{' '}
                <AnchorWithNewPage
                    description={t('GitHub repository')}
                    url="https://github.com/mturczyn/about-intrinsic"
                />
            </p>
            <Trans>
                <p>
                    In Azure, in Web App deployment center, I have truned on
                    automatic deployment, which takes place on any merge to main
                    branch of the repository for this website (on GitHub, GitHub
                    actions take care of that, pipeline generated by Azure).
                </p>
            </Trans>
        </>
    )
}

export default TechStack
