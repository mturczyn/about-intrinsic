import { useState } from 'react'
import reactLogo from 'react-logo.svg'
import websiteLogo from 'website-logo.svg'
import './About.css'

export const About = () => {
    const [useWebsiteLogo, setUseWebsiteLogo] = useState<boolean>(false)

    return (
        <>
            <div
                style={{
                    float: 'left',
                    margin: '1rem',
                }}
            >
                <div
                    style={{
                        overflow: 'hidden',
                        width: '15rem',
                        height: '15rem',
                        boxShadow: 'inset 5px 5px 20px 5px #000',
                        placeItems: 'center',
                        display: 'grid',
                    }}
                >
                    {useWebsiteLogo ? (
                        <img
                            src={websiteLogo}
                            className="Spin-image"
                            alt="Intrinsic webstie logo"
                            style={{ width: '70%' }}
                        />
                    ) : (
                        <img
                            src={reactLogo}
                            className="Spin-image"
                            style={{ width: '120%' }}
                            alt="React logo"
                        />
                    )}
                </div>
                <input
                    type="checkbox"
                    id="use-website-logo"
                    onInput={(e) =>
                        setUseWebsiteLogo((e.target as any).checked)
                    }
                />
                <label>Use website logo</label>
            </div>

            <h1>Theming</h1>
            <p>For theming I have used CSS variables.</p>

            <h1>Framework and libraries</h1>
            <p>
                Web site created using <code>create-react-app</code>. For
                routing, react-router libraries are used.
            </p>

            <h1>Docker</h1>
            <p>This site uses docker containerization - to add benefits.</p>

            <h1>Hosting</h1>

            <p>The application is hosted in Azure Web App Service.</p>
            <p>
                It is hosted as docker image instance in Azure Web App Service.
            </p>

            <h2>CI/CD</h2>
            <p>
                This site also uses CI/CD, which allows automatic deployments of
                latest version of the codebase and publish this site.
            </p>
        </>
    )
}
