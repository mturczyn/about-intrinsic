import { render } from '@testing-library/react'
import { expect, test, vi } from 'vitest'
import { App } from '.'

const outletMock = vi.fn()

vi.mock('react-router', () => ({
    Outlet: () => outletMock(),
}))

test('Renders outlet to host sub pages', () => {
    render(<App />)
    expect(outletMock).toBeCalled()
})
