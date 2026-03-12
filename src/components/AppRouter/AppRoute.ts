import { ReactElement } from 'react'

export interface AppRoute {
    name: string
    path: string
    element: ReactElement
}
