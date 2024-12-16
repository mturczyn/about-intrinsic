import { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import { PwaInstallerContext } from '../PwaInstallerContext'

export function App() {
    const [installEvent, setInstallEvent] = useState<BeforeInstallPromptEvent>()

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
            <Outlet />
        </PwaInstallerContext.Provider>
    )
}
