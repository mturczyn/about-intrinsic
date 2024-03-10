import { render } from '@testing-library/react'
import TechStack, { PAGE_TITLE } from './index'

test('Sets correct title of the page', () => {
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation((query) => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(), // Deprecated
            removeListener: jest.fn(), // Deprecated
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        })),
    })
    render(<TechStack />)
    expect(global.window.document.title).toBe(PAGE_TITLE)
})
