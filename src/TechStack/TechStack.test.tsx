import { render } from '@testing-library/react'
import TechStack, { PAGE_TITLE } from './index'

global.window.matchMedia =
    global.window.matchMedia ||
    function () {
        return {
            matches: false,
            addListener: function () {},
            removeListener: function () {},
        }
    }

test('Sets correct title of the page', () => {
    render(<TechStack />)
    expect(global.window.document.title).toBe(PAGE_TITLE)
})
