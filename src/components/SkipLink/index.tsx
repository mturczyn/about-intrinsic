import { PropsWithChildren } from 'react'
import './SkipLink.css'

export const SkipLink = ({
    scrollTo,
    children,
    className,
}: PropsWithChildren & {
    scrollTo: HTMLElement | null
    className?: string
}) => {
    return (
        <a
            className={className}
            onClick={() => {
                scrollTo?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                })

                scrollTo?.focus({ preventScroll: true })
            }}
        >
            {children}
        </a>
    )
}
