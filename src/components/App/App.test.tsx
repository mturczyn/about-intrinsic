import { render } from '@testing-library/react'
import { expect, test, vi } from 'vitest'
import { App } from '.'

const outletMock = vi.fn()
const navbarMock = vi.fn()

vi.mock('react-router', () => ({
    Outlet: () => outletMock(),
}))

vi.mock('components/Navbar', () => ({
    Navbar: () => navbarMock(),
}))

test('Renders outlet to host sub pages and navigation bar', () => {
    render(<App />)
    expect(outletMock).toBeCalled()
    expect(navbarMock).toBeCalled()
})
