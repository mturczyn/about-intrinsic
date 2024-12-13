import { render } from '@testing-library/react'
import TechStack, { PAGE_TITLE } from './index'
import { expect, test, vi } from 'vitest'

test('Sets correct title of the page', () => {
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: vi.fn().mockImplementation((query) => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: vi.fn(), // Deprecated
            removeListener: vi.fn(), // Deprecated
            addEventListener: vi.fn(),
            removeEventListener: vi.fn(),
            dispatchEvent: vi.fn(),
        })),
    })
    render(<TechStack />)
    expect(global.window.document.title).toBe(PAGE_TITLE)
})
