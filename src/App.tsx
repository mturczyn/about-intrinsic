import { createContext, useCallback, useEffect, useRef } from 'react'
import { Navbar } from './Navbar'
import { Outlet } from 'react-router'

export const PwaInstallerContext = createContext<any>(null)

function App() {
    const installEventRef = useRef<any>(null)

    const setInstallEvent = useCallback(
        (e) => (installEventRef.current = e),
        []
    )

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
