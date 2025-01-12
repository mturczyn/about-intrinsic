import { AppRoute } from 'components/AppRouter/AppRoute'
import { Loader } from 'components/Loader'
import Home from 'pages/Home'
import { Suspense, lazy } from 'react'

const ContactInfo = lazy(() => import('pages/ContactInfo'))
const TechStack = lazy(() => import('pages/TechStack'))
const Chat = lazy(() => import('pages/Chat'))

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
    {
        name: 'Chat with AI bot',
        path: '/chat',
        element: (
            <Suspense fallback={<Loader />}>
                <Chat />
            </Suspense>
        ),
    },
]
