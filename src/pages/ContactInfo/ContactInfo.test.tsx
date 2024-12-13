import { render } from '@testing-library/react'
import ContactInfo, { PAGE_TITLE } from './index'
import { expect, test, vi } from 'vitest'

test('Sets correct title of the page', () => {
    render(<ContactInfo />)
    expect(global.window.document.title).toBe(PAGE_TITLE)
})
