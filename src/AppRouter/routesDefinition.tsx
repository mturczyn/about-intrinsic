import { AppRoute } from 'AppRouter/AppRoute'
import { Loader } from 'CoreComponents/Loader'
// import ContactInfo from 'ContactInfo'
import Home from 'Home'
import { Suspense, lazy } from 'react'

const ContactInfo = lazy(() => import('ContactInfo'))
const TechStack = lazy(() => import('TechStack'))

export const appRoutes: AppRoute[] = [
    {
        name: 'Home',
        path: '/',
        element: <Home />,
    },
    {
        name: 'Contact info',
        path: '/contact-info',
        element: (
            <Suspense fallback={<Loader />}>
                <ContactInfo />
            </Suspense>
        ),
    },
    {
        name: 'Technology stack',
        path: '/technology-stack',
        element: (
            <Suspense fallback={<Loader />}>
                <TechStack />
            </Suspense>
        ),
    },
]
