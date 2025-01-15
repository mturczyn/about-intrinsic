import { PropsWithChildren } from 'react'
import styles from './SkipLink.module.css'

export const SkipLink = ({
    getScrollTo,
    children,
    className,
}: PropsWithChildren & {
    getScrollTo: () => HTMLElement | null
    className?: string
}) => {
    return (
        <a
            className={className}
            onClick={() => {
                const scrollTo = getScrollTo()

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
