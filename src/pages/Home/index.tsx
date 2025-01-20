import authorImage from 'images/author-image.jpg'
import arcelorMittal from 'images/employers-logos/arcelormittal.png'
import flightScope from 'images/employers-logos/Flightscope.webp'
import exadel from 'images/employers-logos/exadel.png'
import rite from 'images/employers-logos/rite-nrg.png'
import rac from 'images/employers-logos/rac.png'
import rsm from 'images/employers-logos/rsm.png'
import ocuco from 'images/employers-logos/ocuco-logo.png'
import cSharpLogoHash from 'images/programming-languages-logo/c-sharp-hash.png'
import cSharpLogoWithoutHash from 'images/programming-languages-logo/c-sharp-without-hash.png'
import jsLogo from 'images/programming-languages-logo/js-logo.webp'
import reactLogo from 'images/react-logo.svg'
import styles from './Home.module.css'
import { Trans, useTranslation } from 'react-i18next'
import { usePageTitle } from 'hooks/usePageTitle'

export const PAGE_TITLE = 'Intrinsic | Web Development and Programming | Zabrze'

const Home = () => {
    const { t } = useTranslation()

    usePageTitle(t(PAGE_TITLE))

    return (
        <>
            <div>
                <header className={styles['home-header']}>
                    <img src={authorImage} alt="me" />
                    <h1>{t('helloWithIntro')}</h1>
                    <p>{t('homePageIntroduction.firstPara')}</p>
                    <p>{t('homePageIntroduction.secondPara')}</p>
                    <div className={styles['programming-languages']}>
                        <div className={styles['csharp']}>
                            <img src={cSharpLogoWithoutHash} alt="C#" />
                            <img
                                src={cSharpLogoHash}
                                className={styles['c-sharp-hash']}
                            />
                        </div>
                        <img
                            src={jsLogo}
                            alt="JavaScript"
                            className={styles['js']}
                        />
                        <div>
                            <img
                                src={reactLogo}
                                alt="React"
                                className={styles['react']}
                            />
                        </div>
                    </div>
                    <p>{t('homePageIntroduction.thirdPara')}</p>
                    <Trans i18nKey="homePageIntroduction.fourthPara">
                        <p>
                            <a
                                href="https://about-intrinsic-nextjs.vercel.app"
                                rel="noopener"
                                target="_blank"
                            ></a>
                        </p>
                    </Trans>
                </header>

                <h1>{t('pastEmployers')}</h1>
                <p>
                    {t(
                        'I have worked for following companies throughout my career:'
                    )}
                </p>
                <div className={styles['logos']}>
                    <EmployersLogos />
                    <EmployersLogos />
                </div>
            </div>
        </>
    )
}

const EmployersLogos = () => (
    <ul role="list" className={styles['logos-slide']}>
        <li>
            <img src={ocuco} alt="Ocuco" />
        </li>
        <li>
            <img src={arcelorMittal} alt="ArcelorMittal" />
        </li>
        <li>
            <img src={flightScope} alt="FlightScope" />
        </li>
        <li>
            <img src={exadel} alt="Exadel" />
        </li>
        <li>
            <img src={rite} alt="RiteNRG" />
        </li>
        <li>
            <img src={rsm} alt="RSM" />
        </li>
        <li>
            <img src={rac} alt="RAC" />
        </li>
    </ul>
)

export default Home
