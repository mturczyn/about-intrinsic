import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { AppRouter } from './AppRouter'
import './i18n'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

const registerServiceWorker = async () => {
    // Register the service worker
    if (!('serviceWorker' in navigator)) {
        return
    }
    // Wait for the 'load' event to not block other work
    // Try to register the service worker.
    try {
        // Capture the registration for later use, if needed
        let reg

        // This may be specific to Vite, from where this code is imported.
        // if (import.meta.env.DEV) {
        //     reg = await navigator.serviceWorker.register(
        //         '/service-worker.js',
        //         {
        //             type: 'module',
        //         }
        //     )
        // } else {

        // In production, we use the normal service worker registration
        // reg = await navigator.serviceWorker.register('/service-worker.js', {
        reg = await navigator.serviceWorker.register(
            `${process.env.PUBLIC_URL}/service-worker.js`,
            {
                type: 'module',
            }
        )
        // }

        console.log('Service worker registered! 😎', reg)
    } catch (err) {
        console.log('😥 Service worker registration failed: ', err)
    }
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <AppRouter>
            <App />
        </AppRouter>
    </React.StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.unregister()
serviceWorkerRegistration.register()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
