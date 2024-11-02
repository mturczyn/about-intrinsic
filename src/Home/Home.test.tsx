import { render } from '@testing-library/react'
import Home, { PAGE_TITLE } from './index'
import { expect, test, vi } from 'vitest'

test('Sets correct title of the page', () => {
    render(<Home />)
    expect(global.window.document.title).toBe(PAGE_TITLE)
})
