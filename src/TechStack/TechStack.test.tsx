import { render } from '@testing-library/react'
import TechStack, { PAGE_TITLE } from './index'

test('Sets correct title of the page', () => {
    render(<TechStack />)
    expect(global.window.document.title).toBe(PAGE_TITLE)
})
