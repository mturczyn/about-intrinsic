import { useLayoutEffect } from 'react'

export const usePageTitle = (title: string) => {
    useLayoutEffect(() => {
        document.title = title
    }, [title])
}
