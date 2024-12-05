import { RefObject, useEffect } from 'react'

export const useDocumentMouseDown = (
    exceptRefs: RefObject<HTMLElement>[],
    clicked: () => void
) => {
    useEffect(() => {
        function handleClickOutside(event) {
            let clickedInside = false
            for (let ref of exceptRefs) {
                if (ref.current && ref.current.contains(event.target)) {
                    clickedInside = true
                    break
                }
            }

            if (!clickedInside) clicked()
        }
        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])
}
