import { PropsWithChildren, RefObject } from 'react'
import styles from './SkipLink.module.css'
import clsx from 'clsx'

export const SkipLink = ({
    scrollTo,
    children,
    className,
}: PropsWithChildren & {
    scrollTo: RefObject<HTMLElement>
    className?: string
}) => {
    return (
        <a
            className={clsx(className, styles.skipLink)}
            onClick={() => {
                if (!scrollTo.current) return

                scrollTo.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                })

                scrollTo.current.focus({ preventScroll: true })
            }}
        >
            {children}
        </a>
    )
}
