import { createContext, useEffect, useState } from 'react'
import { Navbar } from './Navbar'
import { Outlet } from 'react-router'

export const PwaInstallerContext = createContext<any>(null)

function App() {
    const [installEvent, setInstallEvent] = useState<any>(null)

    useEffect(() => {
        window.addEventListener('beforeinstallprompt', setInstallEvent)
        //  window.addEventListener('appinstalled', appInstalledHandler)
        return () => {
            window.removeEventListener('beforeinstallprompt', setInstallEvent)
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
