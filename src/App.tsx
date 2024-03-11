import { createContext, useCallback, useEffect, useState } from 'react'
import { Navbar } from './Navbar'
import { Outlet } from 'react-router'

export const PwaInstallerContext = createContext<any>(null)

function App() {
    const [installEvent, setInstallEvent] = useState<any>(null)

    const captureInstallEvent = useCallback(
        (e: any) => {
            e.preventDefault()
            setInstallEvent(e)
        },
        [setInstallEvent]
    )

    useEffect(() => {
        window.addEventListener('beforeinstallprompt', captureInstallEvent)
        //  window.addEventListener('appinstalled', appInstalledHandler)
        return () => {
            window.removeEventListener(
                'beforeinstallprompt',
                captureInstallEvent
            )
            //  window.removeEventListener('appinstalled', appInstalledHandler)
        }
    }, [captureInstallEvent])

    return (
        <PwaInstallerContext.Provider value={installEvent}>
            <Navbar />
            <Outlet />
        </PwaInstallerContext.Provider>
    )
}

export default App
