import { render } from '@testing-library/react'
import { appRoutes } from 'AppRouter/routesDefinition'
import { Navbar } from 'Navbar'

const reactRouterDom = require('react-router-dom')

jest.mock('react-router-dom', () => ({
    Link: jest.fn(),
    useLocation: () => ({
        pathname: 'home',
    }),
}))

const linkMock = jest.spyOn(reactRouterDom, 'Link')

test('Renders Link element for in-browser navigation', () => {
    // Mock the CSS.escape function
    Object.defineProperty(global, 'CSS', {
        value: {
            escape: jest.fn((str: string) => str),
        },
        writable: true,
    })

    render(<Navbar />)

    appRoutes.forEach((route) => {
        expect(linkMock).toHaveBeenCalledWith(
            expect.objectContaining({ to: route.path }),
            {}
        )
    })
})
