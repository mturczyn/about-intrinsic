import { SkipLink } from 'components/SkipLink'
import {
    forwardRef,
    PropsWithChildren,
    ForwardedRef,
    ReactNode,
    useRef,
} from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'

export const HeaderWithSkipLink = ({
    scrollTo,
    tableOfContentsElement,
    title,
    linkToSelf: linkTo,
}: {
    scrollTo: HTMLElement | null
    tableOfContentsElement: HTMLElement | null
    title: string
    linkToSelf: (children: ReactNode) => ReactNode
}) => {
    const { t } = useTranslation()
    const headingRef = useRef<HTMLHeadingElement>(null)

    return (
        <>
            <h1 ref={headingRef}>{title}</h1>
            {tableOfContentsElement &&
                createPortal(
                    linkTo(
                        <SkipLink scrollTo={headingRef.current}>
                            {title}
                        </SkipLink>
                    ),
                    tableOfContentsElement
                )}
            <SkipLink scrollTo={scrollTo}>{t('backToTop')}</SkipLink>
        </>
    )
}
