import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { AppRouter } from './components/AppRouter'
import './utils/i18n'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import { App } from 'components/App'
import { createPortal } from 'react-dom'
import { Navbar } from 'components/Navbar'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const navbarContainer = document.getElementById(
    'navbar-container'
) as HTMLElement

root.render(
    <React.StrictMode>
        <AppRouter>
            {createPortal(<Navbar />, navbarContainer)}
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
