import { About } from '../About'
import { AppRoute } from './AppRoute'
import Home from 'Home'

export const appRoutes: AppRoute[] = [
    {
        name: 'Home',
        path: '/',
        element: <Home />,
        index: true,
    },
    {
        name: 'Contact info',
        path: '/about',
        element: <About />,
    },
    {
        name: 'About this page',
        path: '/about',
        element: <About />,
    },
]
