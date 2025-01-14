import { PropsWithChildren } from 'react'
import './SkipLink.css'

export const SkipLink = ({
    scrollTo,
    children,
}: PropsWithChildren & { scrollTo: HTMLElement | null }) => {
    return (
        <a
            onClick={() => {
                scrollTo?.scrollIntoView({ behavior: 'smooth' })
            }}
        >
            {children}
        </a>
    )
}
