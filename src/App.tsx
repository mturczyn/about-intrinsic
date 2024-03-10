import { createContext, useEffect, useRef, useState } from 'react'
import { Navbar } from './Navbar'
import { Outlet } from 'react-router'

export const PwaInstallerContext = createContext(null)

function App() {
    const [installEventRef, setInstallEvent] = useState<any>(null)

    useEffect(() => {
        window.addEventListener('beforeinstallprompt', setInstallEvent)
        //  window.addEventListener('appinstalled', appInstalledHandler)
        return () => {
            window.removeEventListener('beforeinstallprompt', setInstallEvent)
            //  window.removeEventListener('appinstalled', appInstalledHandler)
        }
    }, [])

    return (
        <PwaInstallerContext.Provider value={installEventRef}>
            <Navbar />
            <Outlet />
        </PwaInstallerContext.Provider>
    )
}

export default App
