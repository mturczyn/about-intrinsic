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
    return (
        <>
            <div>
                <header className="Home-header">
                    <img
                        style={{ float: 'left', marginRight: '2ch' }}
                        src={authorImage}
                        className="Sized-image"
                        alt="me"
                    />
                    <h1>Hello, I am Michał</h1>
                    <p>
                        My name is Michał Turczyn. I work as as software
                        engineer, I develop websites (such as this one) and I
                        enjoy what I do. I generally like to deeply understand
                        whatever I do and drive things to completion.
                    </p>
                    <div
                        className="programming-languages"
                        style={{ float: 'right', marginLeft: '2ch' }}
                    >
                        <img src={cSharpLogo} alt="C#" className="csharp" />
                        <img src={jsLogo} alt="JavaScript" className="js" />
                        <img src={reactLogo} alt="React" className="react" />
                    </div>
                    <p>
                        I am Maths graduate, which helped me a lot gaining
                        programming skills.
                    </p>
                    <p>
                        My first programming language which I leanred was C#
                        with WinForms framework. Over the years I could
                        experience many .NET frameworks, such as ASP.NET, WPF,
                        Blazor. I also leanred JS along the way (HTML, CSS, JS)
                        and React framework.
                    </p>
                </header>

                <h1>Past employers</h1>
                <p>
                    I have worked for following companies throughout my career.
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
