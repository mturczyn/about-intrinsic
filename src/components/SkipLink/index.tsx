import { PropsWithChildren } from 'react'
import styles from './SkipLink.module.css'
import clsx from 'clsx'

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
            className={clsx(className, styles.skipLink)}
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
