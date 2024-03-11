import { createContext, useEffect, useState } from 'react'
import { Navbar } from './Navbar'
import { Outlet } from 'react-router'

export const PwaInstallerContext = createContext<any>(null)

function App() {
    const [installEvent, setInstallEvent] = useState<any>(null)

    useEffect(() => {
        const captureInstallEvent = (e: any) => {
            setInstallEvent(e)
            e.preventDefault()
        }

        window.addEventListener('beforeinstallprompt', captureInstallEvent)
        //  window.addEventListener('appinstalled', appInstalledHandler)
        return () => {
            window.removeEventListener(
                'beforeinstallprompt',
                captureInstallEvent
            )
            //  window.removeEventListener('appinstalled', appInstalledHandler)
        }
    }, [setInstallEvent])

    return (
        <PwaInstallerContext.Provider value={installEvent}>
            <Navbar />
            <Outlet />
        </PwaInstallerContext.Provider>
    )
}

export default App
