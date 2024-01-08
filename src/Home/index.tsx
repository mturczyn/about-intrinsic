import authorImage from 'images/author-image.jpg'
import arcelorMittal from 'images/employees-logos/arcelormittal-logo.jpg'
import flightScope from 'images/employees-logos/flightscope-logo.png'
import exadel from 'images/employees-logos/exadel-logo.png'
import rite from 'images/employees-logos/rite-nrg-logo.png'
import rac from 'images/employees-logos/rac-logo.png'
import './Home.css'

const EmployersLogos = () => (
    <div className="logos-slide">
        <img src={arcelorMittal} alt="ArcelorMittal" />
        <img src={flightScope} alt="FlightScope" />
        <img src={exadel} alt="Exadel" />
        <img src={rite} alt="RiteNRG" />
        <img src={rac} alt="RAC" />
    </div>
)

const Home = () => {
    return (
        <>
            <div>
                <header className="Home-header">
                    <img src={authorImage} className="Sized-image" alt="me" />
                    <h1>Hello</h1>
                    <p className="no-indent">
                        I am Michał, I work with various technologies, such as
                        C# or JS to create variety of apps - desktop,
                        microservices, websites.
                    </p>
                </header>

                <h2>Past employers</h2>
                <p>
                    I have worked for following companies throughout my career.
                </p>
                <div className="logos">
                    <EmployersLogos />
                    <EmployersLogos />
                </div>

                <h2>Lorem ipsum</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas quis tortor eleifend, gravida ante congue, rhoncus
                    nisl. Sed semper turpis imperdiet, sodales tellus ac,
                    gravida orci. Cras lacinia posuere porta. Nulla condimentum
                    sem ornare, egestas massa vestibulum, auctor metus. Nulla id
                    eros non massa lobortis imperdiet. Nullam vehicula elit sit
                    amet magna finibus imperdiet. Nulla commodo ex sed nunc
                    consequat vehicula. Cras quam est, elementum in mi sit amet,
                    vestibulum accumsan erat. Phasellus blandit massa sed porta
                    dictum. Nunc libero sapien, varius nec massa at, suscipit
                    malesuada augue. Duis rutrum dui ante, quis tempus urna
                    suscipit at. Mauris eget dapibus enim. Nullam consequat nisi
                    sed turpis viverra aliquet. Sed vel faucibus eros. Interdum
                    et malesuada fames ac ante ipsum primis in faucibus. Ut in
                    odio aliquam, suscipit mauris ac, auctor mi. Aenean aliquam
                    tortor nec felis vestibulum, vitae tempus odio egestas.
                    Morbi aliquet odio eu enim venenatis, non maximus ligula
                    rutrum. Maecenas et ex cursus, bibendum odio a, vulputate
                    ante. Aliquam lobortis eleifend massa. Etiam fermentum arcu
                    nisl, vitae pretium libero semper at. Nam placerat
                    vestibulum dolor id scelerisque. Fusce id rhoncus eros.
                    Pellentesque lectus magna, feugiat ut magna vel, malesuada
                    vestibulum tortor. Vivamus vestibulum laoreet nulla. Etiam
                    quis risus odio. Mauris ornare, est quis tempus venenatis,
                    ipsum dolor molestie neque, eget ultricies metus orci sit
                    amet dolor. In tempor rutrum ipsum vitae aliquam. Vivamus
                    mauris risus, varius at placerat at, pharetra at diam.
                    Vestibulum vestibulum sollicitudin nisi hendrerit pulvinar.
                    Fusce interdum erat vel massa condimentum, a sollicitudin
                    ante sodales. Morbi rutrum sapien id metus laoreet euismod.
                    Etiam ut malesuada ex, ut tempor lectus. Praesent at est
                    fermentum tellus sodales tincidunt. Vivamus varius pretium
                    orci, ac semper leo tincidunt et. Aenean faucibus
                    condimentum libero, quis fringilla lacus accumsan non. Proin
                    pharetra ultricies libero, a pellentesque quam elementum at.
                    Donec semper viverra ipsum. Curabitur a imperdiet nibh, non
                    vestibulum nisi. Sed vel enim venenatis, posuere turpis
                    blandit, consequat lacus. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus. Sed
                    consequat leo sit amet arcu fringilla lobortis. Duis ac eros
                    est. Maecenas ultrices pellentesque arcu, a facilisis sapien
                    lacinia sit amet. In luctus vulputate eros, eu scelerisque
                    lacus. Pellentesque posuere maximus ultricies. Sed aliquet
                    nulla vitae efficitur vestibulum. Curabitur semper metus vel
                    finibus rutrum. Ut tellus tellus, malesuada vel suscipit at,
                    rutrum consectetur dolor. Aenean in augue commodo, aliquet
                    libero et, maximus tortor. Sed et convallis nulla. Integer
                    maximus velit nec lacus molestie faucibus. Nunc lorem quam,
                    vestibulum non tortor a, bibendum rhoncus turpis. Nulla
                    dictum diam eu laoreet ultricies. Duis rutrum, erat non
                    convallis pretium, mauris magna egestas massa, non maximus
                    risus tellus vel sem. Aenean dictum interdum venenatis.
                    Proin porttitor magna in odio pellentesque, nec vestibulum
                    dui tincidunt. Aliquam nec cursus magna, nec pharetra diam.
                    Aliquam sollicitudin bibendum sagittis. Praesent ac aliquam
                    tellus.
                </p>
            </div>
        </>
    )
}

export default Home
