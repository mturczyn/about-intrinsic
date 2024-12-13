import { render } from '@testing-library/react'
import { appRoutes } from 'components/AppRouter/routesDefinition'
import { Navbar } from 'components/Navbar'
import { expect, test, vi } from 'vitest'

const linkMock = vi.fn()

vi.mock('react-router-dom', () => ({
    Link: (props) => linkMock(props),
    useLocation: () => ({
        pathname: 'home',
    }),
}))

test('Renders Link element for in-browser navigation', () => {
    // Mock the CSS.escape function
    Object.defineProperty(global, 'CSS', {
        value: {
            escape: vi.fn((str: string) => str),
        },
        writable: true,
    })

    render(<Navbar />)

    appRoutes.forEach((route) => {
        expect(linkMock).toHaveBeenCalledWith(
            expect.objectContaining({ to: route.path })
        )
    })
})
