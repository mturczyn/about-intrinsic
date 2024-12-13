import { PwaInstallerContext } from 'components/PwaInstallerContext'
import { useContext } from 'react'

export const usePwaInstallerContext = () => {
    return useContext<BeforeInstallPromptEvent | undefined>(PwaInstallerContext)
}
