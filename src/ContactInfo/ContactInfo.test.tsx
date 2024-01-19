import { render } from '@testing-library/react'
import ContactInfo, { PAGE_TITLE } from './index'

test('Sets correct title of the page', () => {
    render(<ContactInfo />)
    expect(global.window.document.title).toBe(PAGE_TITLE)
})
