import { render } from '@testing-library/react'
import App from './App'

const reactRouter = require('react-router')
const navbar = require('Navbar')

jest.mock('react-router', () => ({
    Outlet: () => jest.fn(),
}))

jest.mock('Navbar', () => ({
    Navbar: () => jest.fn(),
}))

const outletMock = jest.spyOn(reactRouter, 'Outlet')
const NavbarMock = jest.spyOn(navbar, 'Navbar')

test('Renders outlet to host sub pages and navigation bar', () => {
    render(<App />)
    expect(outletMock).toBeCalled()
    expect(NavbarMock).toBeCalled()
})
