import { render } from '@testing-library/react'
import App from './App'
import { expect, test, vi } from 'vitest'

const outletMock = vi.fn()
const navbarMock = vi.fn()

vi.mock('react-router', () => ({
    Outlet: () => outletMock(),
}))

vi.mock('Navbar', () => ({
    Navbar: () => navbarMock(),
}))

test('Renders outlet to host sub pages and navigation bar', () => {
    render(<App />)
    expect(outletMock).toBeCalled()
    expect(navbarMock).toBeCalled()
})
