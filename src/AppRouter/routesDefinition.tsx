import { ContactInfo } from 'ContactInfo'
import { TechStack } from 'TechStack'
import { AppRoute } from 'AppRouter/AppRoute'
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
        path: '/contact-info',
        element: <ContactInfo />,
    },
    {
        name: 'Technology stack',
        path: '/technology-stack',
        element: <TechStack />,
    },
]
