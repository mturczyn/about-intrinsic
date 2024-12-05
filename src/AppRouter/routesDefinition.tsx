import { AppRoute } from 'AppRouter/AppRoute'
import { Loader } from 'CoreComponents/Loader'
import Home from 'Home'
import { Suspense, lazy } from 'react'

const ContactInfo = lazy(() => import('ContactInfo'))
const TechStack = lazy(() => import('TechStack'))
const Chat = lazy(() => import('Chat'))

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
