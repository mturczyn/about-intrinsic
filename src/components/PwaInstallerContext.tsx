import { createContext } from 'react'

export const PwaInstallerContext = createContext<
    BeforeInstallPromptEvent | undefined
>(undefined)
