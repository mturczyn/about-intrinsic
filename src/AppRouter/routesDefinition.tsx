import { AppRoute } from 'AppRouter/AppRoute'
import ContactInfo from 'ContactInfo'
import Home from 'Home'
import TechStack from 'TechStack'

export const appRoutes: AppRoute[] = [
    {
        name: 'Home',
        path: '/',
        element: <Home />,
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
