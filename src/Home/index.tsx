import authorImage from 'images/author-image.jpg'
import arcelorMittal from 'images/employees-logos/arcelormittal.png'
import flightScope from 'images/employees-logos/Flightscope.webp'
import exadel from 'images/employees-logos/exadel.png'
import rite from 'images/employees-logos/rite-nrg.png'
import rac from 'images/employees-logos/rac.png'
import rsm from 'images/employees-logos/rsm.png'
import cSharpLogo from 'images/programming-languages-logo/c-sharp.png'
import jsLogo from 'images/programming-languages-logo/js-logo.webp'
import reactLogo from 'react-logo.svg'
import './Home.css'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

const PAGE_TITLE = 'Intrinsic - web development and programming'

const EmployersLogos = () => (
    <div className="logos-slide">
        <img src={arcelorMittal} alt="ArcelorMittal" />
        <img src={flightScope} alt="FlightScope" />
        <img src={exadel} alt="Exadel" />
        <img src={rite} alt="RiteNRG" />
        <img src={rsm} alt="RSM" />
        <img src={rac} alt="RAC" />
    </div>
)

const Home = () => {
    const { t } = useTranslation()

    useEffect(() => {
        document.title = t(PAGE_TITLE)
    }, [t])

    return (
        <>
            <div>
                <header className="Home-header">
                    <img
                        style={{ float: 'left', margin: '2ch' }}
                        src={authorImage}
                        className="Sized-image"
                        alt="me"
                    />
                    <h1>{t('helloWithIntro')}</h1>
                    <p>{t('homePageIntroduction.firstPara')}</p>
                    <div
                        className="programming-languages"
                        style={{ float: 'right', margin: '2ch' }}
                    >
                        <img src={cSharpLogo} alt="C#" className="csharp" />
                        <img src={jsLogo} alt="JavaScript" className="js" />
                        <img src={reactLogo} alt="React" className="react" />
                    </div>
                    <p>{t('homePageIntroduction.secondPara')}</p>
                    <p>{t('homePageIntroduction.thirdPara')}</p>
                </header>

                <h1>{t('pastEmployers')}</h1>
                <p>
                    {t(
                        'I have worked for following companies throughout my career.'
                    )}
                </p>
                <div className="logos">
                    <EmployersLogos />
                    <EmployersLogos />
                </div>
            </div>
        </>
    )
}

export default Home
